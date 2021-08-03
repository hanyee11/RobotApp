import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fullName: any
  email: any
  password: any
  emailInput: any
  passwordInput: any

  operation: any = 'signin'

  constructor(private afs: AngularFirestore, private router: Router,public toastController: ToastController) { }

  go(route: string){
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
  }

  submit(){

		switch (this.operation) {

			case "signup":
				
				this.afs.collection('user').add({
					name:this.fullName,
					email:this.email,
					password:this.password
				}).then( () => {
					this.registerAlert();
				})
			break;

			case "signin":
				this.afs.collection('user',ref=>ref.where('email','==',this.emailInput)).valueChanges({idField:'userId'}).subscribe((value:any)=>{
					
					if(value){
						if(value[0].password == this.passwordInput){
							
							this.presentToast();
						}
					}
				})
		
			break;
		}
	}

	async presentToast(){
		const toast = await this.toastController.create({
			message:'Login Successfully!',
			duration: 2000, 
			color: "success"
		});
		toast.present();
		
		this.emailInput = ""
		this.passwordInput = ""

		this.router.navigate(['./home'])
	}

	async registerAlert(){
		const toast = await this.toastController.create({
			message:'Register Successfully!',
			duration: 2000, 
			color: "success"
		});
		toast.present();
	}
}
