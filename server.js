const express   = require("express");
const puppeteer = require('puppeteer');
const Vibrant = require('node-vibrant');
const axios      = require('axios');
const sharp     = require('sharp')
const mongoose   = require("mongoose")
const app        = express();
const path       = require('path'); // Import the path module
const brandModel = require('../ekcs-task/models/brandModel')
const cors       = require('cors');
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.set('trust proxy', true);
app.use(cors());

//app.use(express.static(path.join(__dirname, 'frontEnd')));

mongoose.connect('mongodb://127.0.0.1:27017/ekcs').
  catch(error => handleError(error));



//==========================Request Console=======================//

app.all("*", (req, resp, next) => {
  
  let obj = {
    Host: req.headers.host,
    ContentType: req.headers['content-type'],
    Url: req.originalUrl,
    Method: req.method,
    Query: req.query,
    Body: req.body,
    Parmas: req.params[0]
  }
  console.log("Common Request is===========>", [obj])
  next();
});


app.post('/api/v1/scrape', async (req, res)=> {
         const { url } = req.body;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);


        // Extract Data
          const brandData = await page.evaluate(() => {
            const brandName         = document.querySelector('meta[property="og:site_name"]')?.content.split('|')[0] || '';
            const brandTitle        = document.querySelector('meta[property="og:title"]')?.content || '';
            const brandDescription  = document.querySelector('meta[name="description"]')?.content || '';
            const keyword           = document.querySelector('meta[name="keywords"]')?.content || '';
            
            //Brand logo
            var brandLogo = document.querySelector('img');
            brandLogo     = brandLogo ? brandLogo.src : null;
                    
            // Brand Typography
            const elements = document.querySelectorAll('*');
            const typographyData = [];
      
              elements.forEach(element => {
                        const computedStyle   = window.getComputedStyle(element);
                        const fontSize        = computedStyle.getPropertyValue('font-size');
                        const color           = computedStyle.getPropertyValue('color');
                        typographyData.push({ tagName: element.tagName, fontSize, color });
              });

              // Function to check if two objects have the same properties
              function isEqual(obj1, obj2) {
                return (
                  obj1.tagName === obj2.tagName &&
                  obj1.fontSize === obj2.fontSize &&
                  obj1.color === obj2.color
                );
              }

              const uniquetypographyData = typographyData.filter((item, index, self) => {
                return index === self.findIndex((obj) => isEqual(obj, item));
              });

              return{
                      brandName,
                      brandTitle,
                      brandDescription,
                      keyword,
                      brandLogo,
                      uniquetypographyData
                    }
        
        });

         const brandWebsite = new URL(url).hostname.replace(/^www\./, '');
         const response    = await axios.get(brandData.brandLogo, { responseType: 'arraybuffer' });
         const imageBuffer = Buffer.from(response.data, 'binary');
     
         // Convert WebP image to JPEG
         const convertedBuffer = await sharp(imageBuffer).jpeg().toBuffer();
         const palette         = await Vibrant.from(convertedBuffer).getPalette();

         const colors = {
                         vibrant: palette.Vibrant?.getHex(),
                         muted: palette.Muted?.getHex(),
                         darkVibrant: palette.DarkVibrant?.getHex(),
                         darkMuted: palette.DarkMuted?.getHex(),
                         lightVibrant: palette.LightVibrant?.getHex(),
                         lightMuted: palette.LightMuted?.getHex(),
                        };
        await browser.close();

        var finalData  = {
                            brandName   : brandData.brandName,
                            brandWebsite  : brandWebsite,
                            brandLogo   : brandData.brandLogo,
                            typography  : brandData.uniquetypographyData,
                            description : brandData.brandDescription,
                            keywords    : brandData.keyword
                          }

        const brandsData = new brandModel(finalData)

    let brandDetails = await brandsData.save();
    finalData.color = colors
    return res.send({status:200, message:'save data successfully',data:finalData});
       
} catch (error) {
  console.log(`error is ${error}`)
  return res.send({status:500,message:'error occured'});

}


});


const port = 3400;
app.listen(port, () => {
    console.log(`You pick up listening on port ${port}`);
  })


  


