import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

import { homets } from './homes';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ids:String;
  pass:String;
  user:String;
  img:String;

  getuser:String;
  getid:String;
  getpass:String;
  getimg:String;

    ruser:String;
    rid:String;
    rpass:String;

    list:any;
    lid:String;

    obj:any;


    check:Boolean;

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private homets : homets
   ) { }

   ngOnInit() {
   this.homets.check().subscribe(data => {
    this.list = data.map(e => {
    return {
      id: e.payload.doc.id,
      isEdit: false,
      ids: e.payload.doc.data()['id'.toString()],

      pass: e.payload.doc.data()['pass'.toString()],
      user: e.payload.doc.data()['user'.toString()],
      img: e.payload.doc.data()['img'.toString()],
  };

 });
 console.log(this.list)
});

}

//sign in
async login() {
  let alert = this.alertCtrl.create({
    header: 'Login',
    inputs: [
      {
        name: 'lid',
        placeholder: 'ID',
      },
      {
        name: 'lpass',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
        }
      },
      {
        text: 'Login',
        handler: data => {
          for (let i=0; i< this.list.length; i++){
            if(this.list[i].ids == data.lid && this.list[i].pass == data.lpass ){
                  this.getuser =this.list[i].user
                  // this.getid =this.list[i].ids
                  // this.getpass =this.list[i].pass
                  this.getimg =this.list[i].img

                  this.obj = {
                  user: this.getuser,
                  id:this.getid,
                  pass:this.getpass,
                  img:this.getimg
                  };
                  console.log(this.getuser)
                  const dataString =JSON.stringify(this.obj)
                  this.rounter.navigate(['tabs/firstpage',dataString])
                  // this.rounter.navigate(['tabs/custom',dataString])
              }
          }
    }
  }
    ]
  });
  (await alert).present();
}

async openToast() {
  const toast = await this.toastCtrl.create({
  message: "ID Password Can not use",
  duration: 5000,
  });
  toast.present();
  }

async openToast2() {
  const toast = await this.toastCtrl.create({
  message: "Done",
  duration: 5000,
  });
  toast.present();
  }
// register

async register() {
  let alert = this.alertCtrl.create({
    header: 'Register',
    inputs: [
      {
        name: 'ruser',
        placeholder: 'Username'
      },
      {
        name: 'rid',
        placeholder: 'ID'
      },
      {
        name: 'rpass',
        placeholder: 'Password'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
        }
      },
      {
        text: 'Register',
        handler: data => {
          for (let i=0; i< this.list.length; i++){
            if(this.list[i].ids != data.rid){
              this.check=true
              break
            }
          }
          if(this.check==true){

           let tmpobj =  //db : inputform
        {id: data.rid,
        pass: data.rpass,
        user: data.ruser,
        img :"https://pic.onlinewebfonts.com/svg/img_24787.png",
        // https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png
        Bird: 0,
        DrippingWater:0,
        Forest:0,
        GentleOceanWaves:0,
        HigflowRiver:0,
        MidnightStrom:0,
        Night:0,
        SeaWave:0,
        Surrealforest:0,
        Waterfall:0,
        Happy:0,
        Relaxing:0,
        Hopeful:0,
        Powerful:0,
        Joyful:0,
        Peaceful:0,
        Restless:0,
        Suspense:0,
        Fanciful:0,
        Charming:0,
        Piano:0,
        RnB:0,
        Classic:0,
        Jazz:0,
        Synthpop:0,
        Indie:0,
        Blues:0,
        Electronic:0,
        Hardrock:0,
        Hiphop:0,
        m1:0,
        m2:0,
        m3:0,
        m4:0,
        m5:0,
        m6:0,
        m7:0,
        m8:0,
        m9:0,
        m10:0,
        r1:0,
        r2:0,
        r3:0,
        r4:0,
        r5:0,
        r6:0,
        r7:0,
        r8:0,
        r9:0,
        r10:0,
        s1:0,
        s2:0,
        s3:0,
        s4:0,
        s5:0,
        s6:0,
        s7:0,
        s8:0,
        s9:0,
        s10:0,

        };
        this.homets.add(tmpobj);
        this.openToast2()
      }else{
        this.openToast()
      }


        }//handler
      }//update
    ]
  });
  (await alert).present();
}

}
