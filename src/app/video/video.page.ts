import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import axios from 'axios';

@Component({
  selector: 'app-control',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit{

  endpoint:any = "http://172.20.10.11"
  viewCamera:any = false

  constructor(public httpClient: HttpClient,private streamingMedia: StreamingMedia,private videoPlayer: VideoPlayer,public modalCtrl: ModalController) {
  }
  ngOnInit(){}

  stopVideo(){
    //this.videoPlayer.close();
    this.viewCamera = false;
}

  camera(){

    axios.get(this.endpoint + ":8000/camera").then( result => {
      console.log(result)
      this.viewCamera = true;
    }).catch(err => {
      console.log(err)
    })

    
  }

}