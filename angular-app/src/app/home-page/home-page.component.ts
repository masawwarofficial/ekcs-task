import { Component, OnInit } from '@angular/core';

import { AppProvider } from '../app.provider';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
//import { MatColorPickerModule } from '@angular/material/color-picker';


//import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import {AppService} from "../app.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  formGroup:FormGroup
  formInvalid:any=false
  submitted:any=false
  apistatus = true

  imageSrc: string | ArrayBuffer | null = null;
  selectedColorFst: string = '#494036';
  selectedColorSnd: string = '#b2c5ce';

  brandName:string ='';
  brandWeb:string = ''
  brandLogo:string = '' 
  description:any = ''
  keywords:string=''
  typography:any=[]
 


  constructor(
    private appProvider: AppProvider,
    private route: Router,
    private service: AppService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder, 
  ) {

    this.formGroup = this.fb.group({
       url: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  ngOnInit(): void {
  }





  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

 
  submitForm() {
    this.submitted = true
    console.log(this.formGroup.value)
    console.log(this.formGroup.invalid)

    if (this.formGroup.invalid) {
      this.formInvalid = true
      return
    }else{
     let data = {
                 url: this.formGroup.value.url
                }

      this.service.postApi("scrape", data, 0).subscribe(success => {
        if (success.status == 200) {
      

          this.apistatus    = false;
          this.brandName    = success.data.brandName;
          this.brandWeb     = success.data.brandWebsite;
          this.imageSrc     = success.data.brandLogo;
          this.description  = success.data.description;
          this.keywords     = success.data.keywords,
          this.typography   = success.data.typography
          this.selectedColorFst = success.data.color.lightMuted
          this.selectedColorSnd = success.data.color.lightVibrant

          //this.route.navigate(['/dashboard'])
          this.service.succ(success.message)
        }else{
          //this.apistatus = true;
          this.route.navigate(['/'])
          this.service.err(success.message)
        }
      }, error => {
        console.log({ error })
      })
    }
  }


}
