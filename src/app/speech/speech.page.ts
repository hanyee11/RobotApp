import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {S2tModalPage } from '../s2t-modal/s2t-modal.page';
import axios from 'axios';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.page.html',
  styleUrls: ['./speech.page.scss'],
})
export class SpeechPage implements OnInit {

  endpoint:any = "http://172.20.10.11"
  customInput:any
  s2tResult:any

  constructor(public httpClient: HttpClient, public modalController: ModalController) { }

  ngOnInit(){

  }

  t2s1(){

    this.httpClient.get(this.endpoint + ":8000/t2s1")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  t2s2(){

    this.httpClient.get(this.endpoint + ":8000/t2s2")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  t2s3(){

    this.httpClient.get(this.endpoint + ":8000/t2s3")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  t2s4(){

    this.httpClient.get(this.endpoint + ":8000/t2s4")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  t2s5(){

    this.httpClient.get(this.endpoint + ":8000/t2s5")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  t2s6(){

    this.httpClient.get(this.endpoint + ":8000/t2s6")
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  }

  async s2t(){

    const modal = await this.modalController.create({
      component: S2tModalPage,
      cssClass: 's2tmodalclass'
    });
    return await modal.present();



  }

  custom(){

    axios.post('http://172.20.10.11:8000/custom',JSON.stringify({
      "msg": this.customInput
    })).then( result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })

  }

}

      // var headers = new Headers();
      // headers.append("Accept", 'application/json');
      // headers.append('Content-Type', 'application/json' );
      // const requestOptions = new RequestOptions({ headers: headers });
  
      // let postData = {
      //         "name": "Customer004",
      //         "email": "customer004@email.com",
      //         "tel": "0000252525"
      // }
  
      // this.http.post(this.endpoint + ":8000/custom", postData, requestOptions)
      //   .subscribe(data => {
      //     console.log(data['_body']);
      //    }, error => {
      //     console.log(error);
      //   });

      // var data = JSON.stringify({
      //   "msg": "hello world"
      // });
      
      // var config = {
      //   method: 'post',
      //   url: 'http://172.20.10.11:8000/custom',
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   },
      //   data : data
      // };
      
      // axios(config).then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });


