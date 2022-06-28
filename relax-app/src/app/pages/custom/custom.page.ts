// import { FirstpagePage } from './../firstpage/firstpage.page';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { homets } from './homes';

import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.page.html',
  styleUrls: ['./custom.page.scss'],
})
export class CustomPage implements OnInit {
  getuser:String;
getid:String;
getpass:String;
getimg:String;
ids:String;

  user:any=[];
listfav:any=[];
listnew:any=[];
data1:any

list:any[];
m1:number;
m2:number;
m3:number;
m4:number;
m5:number;
m6:number;
m7:number;
m8:number;
m9:number;
m10:number;

r1:number;
r2:number;
r3:number;
r4:number;
r5:number;
r6:number;
r7:number;
r8:number;
r9:number;
r10:number;

s1:number;
s2:number;
s3:number;
s4:number;
s5:number;
s6:number;
s7:number;
s8:number;
s9:number;
s10:number;

t1:number;


num:number=0;

docId:String;

sound:any = [];


sounds:any = [
  {
    title:"Sea Wave",
    subtitle:"sea-wave",
    img:"/assets/img/sea wave.jpg",
    path:"/assets/music/sea-waves.mp3",
  },
  {
    title:"Bird",
    subtitle:"bird-voice",
    img:"/assets/img/bird.jpg",
    path:"/assets/music/bird-voice.mp3",
  },
  {
    title:"Gentle Ocean Waves",
    subtitle:"gentle-ocean-waves",
    img:"/assets/img/gentle ocean waves.jpg",
    path:"/assets/music/gentle-ocean-waves.mp3",
  },
  {
    title:"Midnight Strom",
    subtitle:"midnight-strom",
    img:"/assets/img/midnight storm.jpg",
    path:"/assets/music/midnight-storm.mp3",
  },
  {
    title:"Night",
    subtitle:"night",
    img:"/assets/img/night.jpg",
    path:"/assets/music/NNnight.mp3",
  },
  {
    title:"Dripping Water",
    subtitle:"dripping-water",
    img:"/assets/img/dripping water.jpg",
    path:"/assets/music/dripping-water.mp3",
  },
  {
    title:"Waterfall",
    subtitle:"waterfall",
    img:"/assets/img/waterfall.jpg",
    path:"/assets/music/waterfall.mp3",
  },
  {
    title:"Forest",
    subtitle:"forest",
    img:"/assets/img/Forest Swamp.jpg",
    path:"/assets/music/forest-swamp.mp3",
  },
  {
    title:"Higflow River",
    subtitle:"higflow-river",
    img:"/assets/img/highflow river.jpg",
    path:"/assets/music/highflow-river.mp3",
  },
  {
    title:"Surreal forest",
    subtitle:"surreal-forest",
    img:"/assets/img/Surreal forest.jpg",
    path:"/assets/music/surreal-forest.mp3",
  }
];

relax :any = [
  {
    title:'Happy',
    subtitle:'happy',
    img:'/assets/img/happy.jpg',
    path:'/assets/music/happy.mp3',
  },
  {
    title:'Relaxing',
    subtitle:'relaxing',
    img:'/assets/img/relax.jpg',
    path:'/assets/music/relax.mp3',
  },
  {
    title:'Hopeful',
    subtitle:'hopeful',
    img:'/assets/img/hope.jpg',
    path:'/assets/music/hope.mp3',
  },
  {
    title:'Powerful',
    subtitle:'powerful',
    img:'/assets/img/energy.jpg',
    path:'/assets/music/energy.mp3',
  },
  {
    title:'Joyful',
    subtitle:'joyful',
    img:'/assets/img/joyful.jpg',
    path:'/assets/music/joyful.mp3',
  },
  {
    title:'Peaceful',
    subtitle:'peaceful',
    img:'/assets/img/quiet.jpg',
    path:'/assets/music/quiet.mp3',
  },
  {
    title:'Restless',
    subtitle:'restless',
    img:'/assets/img/restless.jpg',
    path:'/assets/music/restless.mp3',
  },
  {
    title:'Suspense',
    subtitle:'suspense',
    img:'/assets/img/suspense.jpg',
    path:'/assets/music/suspense.mp3',
  },
  {
    title:'Fanciful',
    subtitle:'fanciful',
    img:'/assets/img/fanciful.jpg',
    path:'/assets/music/fanciful.mp3',
  },
  {
    title:'Charming',
    subtitle:'charming',
    img:'/assets/img/charm.jpg',
    path:'/assets/music/charm.mp3',
  }
];

musical :any = [
  {
    title:'Piano',
    subtitle:'piano',
    img:'/assets/img/piano.jpg',
    path:'/assets/music/piano.mp3',
  },
  {
    title:'RnB',
    subtitle:'rnb',
    img:'/assets/img/rnb.jpg',
    path:'/assets/music/rnb.mp3',
  },
  {
    title:'Classic',
    subtitle:'classic',
    img:'/assets/img/classic.jpg',
    path:'/assets/music/classic.mp3',
  },
  {
    title:'Jazz',
    subtitle:'jazz',
    img:'/assets/img/jazz.jpg',
    path:'/assets/music/jazz.mp3',
  },
  {
    title:'Synthpop',
    subtitle:'synthpop',
    img:'/assets/img/synth-pop.jpg',
    path:'/assets/music/synth-pop.mp3',
  },
  {
    title:'Indie',
    subtitle:'indie',
    img:'/assets/img/indie.jpg',
    path:'/assets/music/indie.mp3',
  },
  {
    title:'Blues',
    subtitle:'blues',
    img:'/assets/img/blues.jpg',
    path:'/assets/music/blues.mp3',
  },
  {
    title:'Electronic',
    subtitle:'electronic',
    img:'/assets/img/electronic.jpg',
    path:'/assets/music/electronic.mp3',
  },
  {
    title:'Hardrock',
    subtitle:'hardrock',
    img:'/assets/img/hard rock.jpg',
    path:'/assets/music/hard rock.mp3',
  },
  {
    title:'Hiphop',
    subtitle:'hiphop',
    img:'/assets/img/hip hop.jpg',
    path:'/assets/music/hip hop.mp3',
  }
];

constructor(public navCtrl:NavController,
  private actroute:ActivatedRoute,private router:Router,
  private homets: homets,
  private route: ActivatedRoute,
  private db:AngularFirestore,
  // private firstpage: FirstpagePage
) {


  this.reload()
}
//ลบเพลงที่ชอบ
delete(i) {
  // window.location.reload();
  this.navCtrl.back()
  console.log(i);
  console.log(this.listfav[i].title);
  let tmpobj


  if(this.listfav[i].title ==="Sea Wave"){
    let tmpobj1 =  //db : inputform
    { m1 : 0
    };
    tmpobj = tmpobj1

  }
   else if(this.listfav[i].title ==="Bird"){
      let tmpobj2 =  //db : inputform
      { m2 : 0
      };
      tmpobj = tmpobj2
    }
    else if(this.listfav[i].title ==="Gentle Ocean Waves"){
      let tmpobj3 =  //db : inputform
      { m3 : 0
      };
      tmpobj = tmpobj3
    }
    else if(this.listfav[i].title==="Midnight Strom"){
      let tmpobj4 =  //db : inputform
      { m4 : 0
      };
      tmpobj = tmpobj4
    }
    else if(this.listfav[i].title ==="Night"){
      let tmpobj5 =  //db : inputform
      { m5 : 0
      };
      tmpobj = tmpobj5
    }
    else if(this.listfav[i].title === "Dripping Water"){
      let tmpobj6 =  //db : inputform
      { m6 : 0
      };
      tmpobj = tmpobj6
    }
    else if(this.listfav[i].title ==="Waterfall"){
      let tmpobj7 =  //db : inputform
      { m7 : 0
      };
      tmpobj = tmpobj7
    }
    else if(this.listfav[i].title ==="Forest"){
      let tmpobj8 =  //db : inputform
      { m8 : 0
      };
      tmpobj = tmpobj8
    }
    else if(this.listfav[i].title ==="Higflow River"){
      let tmpobj9 =  //db : inputform
      { m9 : 0
      };
      tmpobj = tmpobj9
    }
    else if(this.listfav[i].title ==="Surreal forest"){
      let tmpobj10 =  //db : inputform
      { m10 : 0
      };
      tmpobj = tmpobj10
    }
    else if(this.listfav[i].title ==="Happy"){
      let tmpobj11 =  //db : inputform
      { r1 : 0
      };
      tmpobj = tmpobj11
    }
    else if(this.listfav[i].title ==="Relaxing"){
      let tmpobj12 =  //db : inputform
      { r2 : 0
      };
      tmpobj = tmpobj12
    }
    else if(this.listfav[i].title ==="Hopeful"){
      let tmpobj13 =  //db : inputform
      { r3 : 0
      };
      tmpobj = tmpobj13
    }
    else if(this.listfav[i].title ==="Powerful"){
      let tmpobj14 =  //db : inputform
      { r4 : 0
      };
      tmpobj = tmpobj14
    }
    else if(this.listfav[i].title ==="Joyful"){
      let tmpobj15 =  //db : inputform
      { r5 : 0
      };
      tmpobj = tmpobj15
    }
    else if(this.listfav[i].title ==="Peaceful"){
      let tmpobj16 =  //db : inputform
      { r6 : 0
      };
      tmpobj = tmpobj16
    }
    else if(this.listfav[i].title ==="Restless"){
      let tmpobj17 =  //db : inputform
      { r7 : 0
      };
      tmpobj = tmpobj17
    }
    else if(this.listfav[i].title ==="Suspense"){
      let tmpobj18 =  //db : inputform
      { r8 : 0
      };
      tmpobj = tmpobj18
    }
    else if(this.listfav[i].title ==="Fanciful"){
      let tmpobj19 =  //db : inputform
      { r9 : 0
      };
      tmpobj = tmpobj19
    }
    else if(this.listfav[i].title ==="Charming"){
      let tmpobj20 =  //db : inputform
      { r10 : 0
      };
      tmpobj = tmpobj20
    }
    else if(this.listfav[i].title ==="Piano"){
      let tmpobj21 =  //db : inputform
      { s1 : 0
      };
      tmpobj = tmpobj21
    }
    else if(this.listfav[i].title ==="RnB"){
      let tmpobj22 =  //db : inputform
      { s2 : 0
      };
      tmpobj = tmpobj22
    }
    else if(this.listfav[i].title ==="Classic"){
      let tmpobj23 =  //db : inputform
      { s3 : 0
      };
      tmpobj = tmpobj23
    }
    else if(this.listfav[i].title ==="Jazz"){
      let tmpobj24 =  //db : inputform
      { s4 : 0
      };
      tmpobj = tmpobj24
    }
    else if(this.listfav[i].title ==="Synthpop"){
      let tmpobj25 =  //db : inputform
      { s5 : 0
      };
      tmpobj = tmpobj25
    }
    else if(this.listfav[i].title ==="Indie"){
      let tmpobj26 =  //db : inputform
      { s6 : 0
      };
      tmpobj = tmpobj26
    }
    else if(this.listfav[i].title ==="Blues"){
      let tmpobj27 =  //db : inputform
      { s7 : 0
      };
      tmpobj = tmpobj27
    }
    else if(this.listfav[i].title ==="Electronic"){
      let tmpobj28 =  //db : inputform
      { s8 : 0
      };
      tmpobj = tmpobj28
    }
    else if(this.listfav[i].title ==="Hardrock"){
      let tmpobj29 =  //db : inputform
      { s9 : 0
      };
      tmpobj = tmpobj29
    }
    else if(this.listfav[i].title ==="Hiphop"){
      let tmpobj30 =  //db : inputform
      { s10 : 0
      };
      tmpobj = tmpobj30
    }
    return this.db.doc('acc/'+this.docId).update(tmpobj);

  }

  del(i) {
    this.navCtrl.back()
    console.log(this.listnew[i].title);
    let tmpobj

    if(this.listnew[i].title ===""){
      let tmpobj31 =  //db : inputform
      { t1 : 0
      };
      tmpobj = tmpobj31

    }
    return this.db.doc('acc/'+this.docId).update(tmpobj);
  }
//โหลดเพลงที่ชอบหรือไม่ชอบ 0 & 1
reload(){
    this.data1 = JSON.parse(localStorage.getItem('myData'));
  console.log(this.data1);
  this.docId= this.data1.demo
  this.listfav=this.data1.fav
  this.listnew=this.data1.sound
  console.log(this.listfav);
  this.db.collection('acc').snapshotChanges().subscribe(data => {
    this.list = data.map(e => {
    return {
      id: e.payload.doc.id,

    //  mbird: e.payload.doc.data()['m2'.toString()],
    //   mdrippingwater: e.payload.doc.data()['m6'.toString()],
    //   mforest: e.payload.doc.data()['m8'.toString()],
    //   mgentleoceanwaves: e.payload.doc.data()['m3'.toString()],
    //   mhigflowriver: e.payload.doc.data()['m9'.toString()],
    //   mmidnightstrom: e.payload.doc.data()['m4'.toString()],
    //   mnight: e.payload.doc.data()['m5'.toString()],
    //   mseawave: e.payload.doc.data()['m1'.toString()],
    //   msurrealforest: e.payload.doc.data()['m10'.toString()],
    //   mwaterfall: e.payload.doc.data()['m7'.toString()],

      // happy: e.payload.doc.data()['r1'.toString()],
      // relaxing: e.payload.doc.data()['r2'.toString()],
      // hopeful: e.payload.doc.data()['r3'.toString()],
      // powerful: e.payload.doc.data()['r4'.toString()],
      // joyful: e.payload.doc.data()['r5'.toString()],
      // peaceful: e.payload.doc.data()['r6'.toString()],
      // restless: e.payload.doc.data()['r7'.toString()],
      // suspense: e.payload.doc.data()['r8'.toString()],
      // fanciful: e.payload.doc.data()['r9'.toString()],
      // charming: e.payload.doc.data()['r2'.toString()],

      // piano: e.payload.doc.data()['s1'.toString()],
      // rnb: e.payload.doc.data()['s2'.toString()],
      // classic: e.payload.doc.data()['s3'.toString()],
      // jazz: e.payload.doc.data()['s4'.toString()],
      // synthpop: e.payload.doc.data()['s5'.toString()],
      // indie: e.payload.doc.data()['s6'.toString()],
      // blues: e.payload.doc.data()['s7'.toString()],
      // electronic: e.payload.doc.data()['s8'.toString()],
      // hardrock: e.payload.doc.data()['s9'.toString()],
      // hiphop: e.payload.doc.data()['s10'.toString()],

    };


 }

 );

//  console.log("xxx",this.data1.sound)
//เช็คว่า = 0 หริอ ไม่เท่ากับ 0
  for (let i=0; i< this.list.length; i++){

      this.m1 = (this.list[i].bird)
      if(this.m1>0){
        this.user[this.num]=(this.sounds[1])
              }
      this.m2 = (this.list[i].drippingwater)
      if(this.m2>0){
        this.user[this.num]=(this.sounds[5])
        this.num = this.num + 1
              }
      this.m3 = (this.list[i].forest)
      if(this.m3>0){
        this.user[this.num]=(this.sounds[7])
        this.num = this.num + 1
              }
      this.m4 = (this.list[i].gentleoceanwaves)
      if(this.m4>0){
        this.user[this.num]=(this.sounds[2])
        this.num = this.num + 1
              }
      this.m5 = (this.list[i].higflowriver)
      if(this.m5>0){
        this.user[this.num]=(this.sounds[8])
        this.num = this.num + 1
              }
      this.m6 = (this.list[i].midnightstrom)
      if(this.m6>0){
        this.user[this.num]=(this.sounds[3])
        this.num = this.num + 1
              }
      this.m7 = (this.list[i].night)
      if(this.m7>0){
        this.user[this.num]=(this.sounds[4])
        this.num = this.num + 1
              }
      this.m8 = (this.list[i].seawave)
      if(this.m8>0){
        this.user[this.num]=(this.sounds[0])
        this.num = this.num + 1
              }
      this.m9 = (this.list[i].surrealforest)
      if(this.m9>0){
        this.user[this.num]=(this.sounds[9])
        this.num = this.num + 1
              }
      this.m10 = (this.list[i].waterfall)
      if(this.m10>0){
        this.user[this.num]=(this.sounds[6])
        this.num = this.num + 1
              }
      this.r1 = (this.list[i].happy)
      if(this.r1>0){
        this.user[this.num]=(this.relax[0])
        this.num = this.num + 1
            }
      this.r2 = (this.list[i].relaxing)
      if(this.r2>0){
        this.user[this.num]=(this.relax[1])
        this.num = this.num + 1
            }
      this.r3 = (this.list[i].hopeful)
      if(this.r3>0){
        this.user[this.num]=(this.relax[2])
        this.num = this.num + 1
            }
      this.r4 = (this.list[i].powerful)
      if(this.r4>0){
        this.user[this.num]=(this.relax[3])
        this.num = this.num + 1
            }
      this.r5 = (this.list[i].joyful)
      if(this.r5>0){
        this.user[this.num]=(this.relax[4])
        this.num = this.num + 1
            }
      this.r6 = (this.list[i].peaceful)
      if(this.r6>0){
        this.user[this.num]=(this.relax[5])
        this.num = this.num + 1
            }
      this.r7 = (this.list[i].restless)
      if(this.r7>0){
        this.user[this.num]=(this.relax[6])
        this.num = this.num + 1
            }
      this.r8 = (this.list[i].suspense)
      if(this.r8>0){
        this.user[this.num]=(this.relax[7])
        this.num = this.num + 1
            }
      this.r9 = (this.list[i].fanciful)
      if(this.r9>0){
        this.user[this.num]=(this.relax[8])
        this.num = this.num + 1
            }
      this.r10 = (this.list[i].charming)
      if(this.r10>0){
        this.user[this.num]=(this.relax[9])
        this.num = this.num + 1
            }
      this.s1 = (this.list[i].piano)
      if(this.s1>0){
        this.user[this.num]=(this.musical[0])
        this.num = this.num + 1
            }
      this.s2 = (this.list[i].rnb)
      if(this.s2>0){
        this.user[this.num]=(this.musical[1])
        this.num = this.num + 1
            }
      this.s3 = (this.list[i].classic)
      if(this.s3>0){
        this.user[this.num]=(this.musical[2])
        this.num = this.num + 1
            }
      this.s4 = (this.list[i].jazz)
      if(this.s4>0){
        this.user[this.num]=(this.musical[3])
        this.num = this.num + 1
            }
      this.s5 = (this.list[i].synthpop)
      if(this.s5>0){
        this.user[this.num]=(this.musical[4])
        this.num = this.num + 1
            }
      this.s6 = (this.list[i].indie)
      if(this.s6>0){
        this.user[this.num]=(this.musical[5])
        this.num = this.num + 1
            }
      this.s7 = (this.list[i].blues)
      if(this.s7>0){
        this.user[this.num]=(this.musical[6])
        this.num = this.num + 1
            }
      this.s8 = (this.list[i].electronic)
      if(this.s8>0){
        this.user[this.num]=(this.musical[7])
        this.num = this.num + 1
            }
      this.s9 = (this.list[i].hardrock)
      if(this.s9>0){
        this.user[this.num]=(this.musical[8])
        this.num = this.num + 1
            }
      this.s10 = (this.list[i].hiphop)
      if(this.s10>0){
        this.user[this.num]=(this.musical[9])
        this.num = this.num + 1
            }
      this.t1 = (this.list[i].t)
      if(this.t1>0){
        this.user[this.num]=(this.sound[10])
        this.num = this.num + 1
            }
    }




});
// this.reload2()
}


// reload2(){
//   this.data1 = JSON.parse(localStorage.getItem('myData'));
//   console.log(this.data1);
//   this.docId= this.data1.demo
//   this.listfav=this.data1.fav
//   this.listnew=this.data1.sound
//   console.log(this.listfav);

//   this.db.collection('notes').snapshotChanges().subscribe(data => {
//     this.list2 = data.map(e => {
//       return {
//         id: e.payload.doc.id,


//       };
//     }
//     );
//   });
//   console.log("a",this.list2)
//   }








  ngOnInit() {
    // console.log(this.firstpage.abcx());


  }
//โหลดข้อมูลมาจากหน้าที่แล้ว
  ionViewWillEnter(){
     this.data1 = JSON.parse(localStorage.getItem('myData'));
    console.log(this.data1);
    this.docId= this.data1.demo
}

back(){
  this.navCtrl.back()
}

// doRefresh(event) {
//   console.log('Begin async operation');

//   setTimeout(() => {
//     console.log('Async operation has ended');
//     event.target.complete();
//   }, 2000);
// }
refresh(): void {
  window.location.reload();
}
}

