import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit{

  endpoint:any = "http://172.20.10.11"

  constructor(public httpClient: HttpClient) {
  }
  ngOnInit(){}

  auto(){

    this.httpClient.get(this.endpoint + ":8000/auto")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  stopAuto(){

    this.httpClient.get(this.endpoint + ":8000/stopAuto")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  forward(){

    this.httpClient.get(this.endpoint + ":8000/forward")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  backward(){

    this.httpClient.get(this.endpoint + ":8000/backward")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  left(){

    this.httpClient.get(this.endpoint + ":8000/left")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  right(){

    this.httpClient.get(this.endpoint + ":8000/right")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  stop(){

    this.httpClient.get(this.endpoint + ":8000/stop")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

}
