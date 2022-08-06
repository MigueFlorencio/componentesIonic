import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor( private toastCtrl: ToastController) { }

  ngOnInit() {
  }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'El Migue es bien chido.',
      duration: 2000
    });
    toast.present();
  }


  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'El Migue es bien chido.',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
