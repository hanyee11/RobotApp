import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-s2t-modal',
  templateUrl: './s2t-modal.page.html',
  styleUrls: ['./s2t-modal.page.scss'],
})
export class S2tModalPage implements OnInit {

  s2tResult:any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.s2t();
  }

  s2t(){

    this.s2tResult = false

    axios.get('http://172.20.10.11:8000/s2t').then( result => {
      if(result){
        this.s2tResult = result.data;
      }
    }).catch(err => {
      console.log(err)
    })
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
