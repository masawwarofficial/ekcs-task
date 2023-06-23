import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
// import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
// import Swal from 'sweetalert2'
import { AppProvider } from './app.provider'
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  error(response_message: any): any {
    throw new Error("Method not implemented.");
  }

  httpOptions:any;
  baseUrl = "http://localhost:3400/api/v1/";// devlopmnet
   // baseUrl = "http://18.220.205.59:3015/api/v1/";// devlopmnet

  //baseUrldemo = "http://52.14.175.45:3051/api/v1/";// devlopmnet
  baseUrldemo = "http://18.220.205.59:3015/api/v1/";// devlopmnet

  websiteurl = 'http://3.6.100.194/usertestingweb/#/'
  evnvor = 'prod'
  constructor(
    public http: HttpClient,
    private toastr: ToastrService,
    private _location: Location,
    private appProvider: AppProvider,
  ) {

    // if (this.evnvor == 'prod') {
    //   this.baseUrl = "http://3.20.114.64:3010/"; // live
    //   this.baseUrlCrop = 'http://3.20.114.64:3014/'
    //   this.websiteurl = 'http://3.20.114.64/onlineusertesting/#/'
    // }

    if (window.location.protocol == 'http:') { 
      
      this.baseUrl = "http://localhost:3400/api/v1/"; // live
      //this.baseUrl = "http://18.220.205.59:3015/api/v1/"; // live
   
   
      this.websiteurl = 'http://3.20.114.64/onlineusertesting/#/'
  }  
  else
        this.baseUrl = "https://cordato.com:3035/api/v1/"; // live
     
        this.websiteurl = 'https://cordato.com'
  }

  getApi(url:any): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    }
    return this.http.get(this.baseUrl + url, this.httpOptions);
  }

  getApiWithAuth(url:any): Observable<any> {
    // let token=this.appProvider.current.loginData && this.appProvider.current.loginData.jwtToken?this.appProvider.current.loginData.jwtToken:''
    let token = localStorage.getItem('jwtToken');
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Authorization':token?token:''
      }),
    }
    return this.http.get(this.baseUrl + url, this.httpOptions);
  }

  formdataApi(url:string, data:any): Observable<any> {
   // let token=this.appProvider.current.loginData && this.appProvider.current.loginData.jwtToken?this.appProvider.current.loginData.jwtToken:''
   let token = localStorage.getItem('jwtToken');
   var httpOptions;
    httpOptions = {
      headers: new HttpHeaders({ 'Authorization': token?token:'' }),

    }
    return this.http.post((this.baseUrl + url), data, httpOptions)
  }



  succ(msg:any) {
    this.toastr.success(msg);
  }

  sweetAlert(msg:any) {
    // Swal.fire(msg);
  }
  err(msg:any) {
    this.toastr.error(msg);
  }
  showSpinner() {
    //  this.loader=true
  }
  hideSpinner() {
    // this.spinner.hide()
  }
  backClicked() {
    this._location.back();
  }


  postApi(url:any, data:any, isHeader:any): Observable<any> {

   //console.log('comming====>>>>',url);
    if (!isHeader) {
      this.httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
      return this.http.post(this.baseUrl + url, data);
    }
    else {
      let token=this.appProvider.current.loginData && this.appProvider.current.loginData.jwtToken?this.appProvider.current.loginData.jwtToken:''
      this.httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json", 'Authorization': token?token:'' }),
      }
      return this.http.post(this.baseUrl + url, data, this.httpOptions);
    }
  }

  uploadFile(file:any) {
    // const contentType = file.type;
    // const bucket = new S3(
    //       {
    //           accessKeyId: 'AKIAV65DEK7Y7MW6N3R6',
    //           secretAccessKey: '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',
    //           region: 'us-east-2'
    //       }
    //   );
    //   const params = {
    //       Bucket: 'youpick',
    //       Key: file.name,
    //       Body: file,
    //       ACL: 'public-read',
    //       ContentType: contentType
    //   };
    //   bucket.upload(params, function (err:any, data:any) {
    //       if (err) {
    //           console.log('There was an error uploading your file: ', err);
    //           return false;
    //       }
    //       console.log('Successfully uploaded file.', data);
    //       return true;
    //   });
}


  postApiWithAuth(url:any, data:any, isHeader:any): Observable<any> {
    if (!isHeader) {
      this.httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
      }
    } else {
      // let token=this.appProvider.current.loginData && this.appProvider.current.loginData.jwtToken?this.appProvider.current.loginData.jwtToken:''
    let token = localStorage.getItem('jwtToken');
      this.httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          'Authorization': token?token:''
        })
      }
    }
    return this.http.post(this.baseUrl + url, data, this.httpOptions);
  }

  exportFileData(url:any) {
    window.open(this.baseUrl + 'web/exportFile?fileName=' + url)
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }


  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }


}
