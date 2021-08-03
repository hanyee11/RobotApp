import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public toastController: ToastController) {}

  go(route: string){
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
  }

    async powerOnAlert(){
      const toast = await this.toastController.create({
        message:'Delbot is powered on!',
        duration: 2000, 
        color: "success",
      });
      toast.present();
    }
  
 
}


