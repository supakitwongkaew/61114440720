import { Component, OnInit, ViewChild } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ActionSheetController, AlertController, IonRange, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { edit } from './edit';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { homets } from './homes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {
  @ViewChild('range', { static: false }) range: IonRange;
  getuser:String;
getid:String;
getpass:String;
getimg:String;
playx:any="sounds";
HttpClient:any;
headers:HttpHeaders;
aaa:any;
ttt:any;
list:any;
ids:String;
pass:String;
user:String;
img:String;
lss:any;


bird:any;
drippingwater:any;
forest:any;
gentleoceanwaves:any;
higflowriver:any;
midnightstrom:any;
night:any;
seawave:any;
surrealforest:any;
waterfall:any;

happy:any;
relaxing:any;
hopeful:any;
powerful:any;
joyful:any;
peaceful:any;
restless:any;
suspense:any;
fanciful:any;
charming:any;

piano:any;
rnb:any;
classic:any;
jazz:any;
synthpop:any;
indie:any;
blues:any;
electronic:any;
hardrock:any;
hiphop:any;

public docId:any;

timeout:Number=0;
timeout2:Number=0;
listcount1:number
listcount2:number
listcount3:number
listcount4:number
listcount5:number
listcount6:number
listcount7:number
listcount8:number
listcount9:number
listcount10:number
ax:any=[]
axx:any=[]
ox:any=[]
oxx:any=[]
xxx:String;
fav:any=[]

hoursString : String= '';
 minutesString: String = '';
 secondsString : String= '';
 remainingTime: any;

 hoursString2 : String= '';
 minutesString2: String = '';
 secondsString2 : String= '';
 remainingTime2: any;
xa:Number;
time:string;

someString:string="";

m1:String;
m2:String;
m3:String;
m4:String;
m5:String;
m6:String;
m7:String;
m8:String;
m9:String;
m10:String;

r1:String;
r2:String;
r3:String;
r4:String;
r5:String;
r6:String;
r7:String;
r8:String;
r9:String;
r10:String;

s1:String;
s2:String;
s3:String;
s4:String;
s5:String;
s6:String;
s7:String;
s8:String;
s9:String;
s10:String;

t1:String;


sound:any = [];

  songs:any = [
    {
      title:'Sea Wave',
      subtitle:'sea-wave',
      img:'/assets/img/sea wave.jpg',
      path:'/assets/music/sea-waves.mp3',
    },
    {
      title:'Bird',
      subtitle:'bird-voice',
      img:'/assets/img/bird.jpg',
      path:'/assets/music/bird-voice.mp3',
    },
    {
      title:'Gentle Ocean Waves',
      subtitle:'gentle-ocean-waves',
      img:'/assets/img/gentle ocean waves.jpg',
      path:'/assets/music/gentle-ocean-waves.mp3',
    },
    {
      title:'Midnight Strom',
      subtitle:'midnight-strom',
      img:'/assets/img/midnight storm.jpg',
      path:'/assets/music/midnight-storm.mp3',
    },
    {
      title:'Night',
      subtitle:'night',
      img:'/assets/img/night.jpg',
      path:'/assets/music/NNnight.mp3',
    },
    {
      title:'Dripping Water',
      subtitle:'dripping-water',
      img:'/assets/img/dripping water.jpg',
      path:'/assets/music/dripping-water.mp3',
    },
    {
      title:'Waterfall',
      subtitle:'waterfall',
      img:'/assets/img/waterfall.jpg',
      path:'/assets/music/waterfall.mp3',
    },
    {
      title:'Forest',
      subtitle:'forest',
      img:'/assets/img/Forest Swamp.jpg',
      path:'/assets/music/forest-swamp.mp3',
    },
    {
      title:'Higflow River',
      subtitle:'higflow-river',
      img:'/assets/img/highflow river.jpg',
      path:'/assets/music/highflow-river.mp3',
    },
    {
      title:'Surreal forest',
      subtitle:'surreal-forest',
      img:'/assets/img/Surreal forest.jpg',
      path:'/assets/music/surreal-forest.mp3',
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

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };
    //Current song details
  currTitle:string;
  currSubtitle:string;
  currImage:string;

   //progress bar value
  progress:number = 0;

    //toggle for play/pause button
  isPlaying = false;

    //track of ion-range touch
  isTouched = false;

    //ion range texts
  currSecsText;
  durationText;

    //ion range value
  currRangeTime;
  maxRangeValue;

  //Current song
  currSong: HTMLAudioElement;

  //Upnext song details
  upNextImg;
  upNextTitle;
  upNextSubtitle;

//ประกาศตัวแปรที่importจากด้านบน
  constructor(private backgroundMode:BackgroundMode,
    public actionSheetController:ActionSheetController,
    public actroute: ActivatedRoute,
    private Edit: edit,
    public alertCtrl: AlertController,
    public navCtrl : NavController,
    public rounter:Router,
    private http: HttpClient,

    private https: HTTP,
    private localNotifications: LocalNotifications,
    private plt:Platform,
    private device: Device,
    private db:AngularFirestore,
    private homets: homets) {
    this.homets.check().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        ids: e.payload.doc.data()['id'.toString()],

        pass: e.payload.doc.data()['pass'.toString()],
        user: e.payload.doc.data()['user'.toString()],
        img: e.payload.doc.data()['img'.toString()],
        bird: e.payload.doc.data()['Bird'.toString()],
        drippingwater: e.payload.doc.data()['DrippingWater'.toString()],
        forest: e.payload.doc.data()['Forest'.toString()],
        gentleoceanwaves: e.payload.doc.data()['GentleOceanWaves'.toString()],
        higflowriver: e.payload.doc.data()['HigflowRiver'.toString()],
        midnightstrom: e.payload.doc.data()['MidnightStrom'.toString()],
        night: e.payload.doc.data()['Night'.toString()],
        seawave: e.payload.doc.data()['SeaWave'.toString()],
        surrealforest: e.payload.doc.data()['Surrealforest'.toString()],
        waterfall: e.payload.doc.data()['Waterfall'.toString()],

        happy: e.payload.doc.data()['Happy'.toString()],
        relaxing: e.payload.doc.data()['Relaxing'.toString()],
        hopeful: e.payload.doc.data()['Hopeful'.toString()],
        powerfuly: e.payload.doc.data()['Powerful'.toString()],
        joyful: e.payload.doc.data()['Joyful'.toString()],
        peaceful: e.payload.doc.data()['Peaceful'.toString()],
        restless: e.payload.doc.data()['Restless'.toString()],
        suspense: e.payload.doc.data()['Suspense'.toString()],
        fanciful: e.payload.doc.data()['Fanciful'.toString()],
        charming: e.payload.doc.data()['Charming'.toString()],

        piano: e.payload.doc.data()['Piano'.toString()],
        rnb: e.payload.doc.data()['RnB'.toString()],
        classic: e.payload.doc.data()['Classic'.toString()],
        jazz: e.payload.doc.data()['Jazz'.toString()],
        synthpop: e.payload.doc.data()['Synthpop'.toString()],
        indie: e.payload.doc.data()['Indie'.toString()],
        blues: e.payload.doc.data()['Blues'.toString()],
        electronic: e.payload.doc.data()['Electronic'.toString()],
        hardrock: e.payload.doc.data()['Hardrock'.toString()],
        hiphop: e.payload.doc.data()['Hiphop'.toString()],
        time: e.payload.doc.data()['time'.toString()],

        mbird: e.payload.doc.data()['m2'.toString()],
        mdrippingwater: e.payload.doc.data()['m6'.toString()],
        mforest: e.payload.doc.data()['m8'.toString()],
        mgentleoceanwaves: e.payload.doc.data()['m3'.toString()],
        mhigflowriver: e.payload.doc.data()['m9'.toString()],
        mmidnightstrom: e.payload.doc.data()['m4'.toString()],
        mnight: e.payload.doc.data()['m5'.toString()],
        mseawave: e.payload.doc.data()['m1'.toString()],
        msurrealforest: e.payload.doc.data()['m10'.toString()],
        mwaterfall: e.payload.doc.data()['m7'.toString()],

        rhappy: e.payload.doc.data()['r1'.toString()],
        rrelaxing: e.payload.doc.data()['r2'.toString()],
        rhopeful: e.payload.doc.data()['r3'.toString()],
        rpowerful: e.payload.doc.data()['r4'.toString()],
        rjoyful: e.payload.doc.data()['r5'.toString()],
        rpeaceful: e.payload.doc.data()['r6'.toString()],
        rrestless: e.payload.doc.data()['r7'.toString()],
        rsuspense: e.payload.doc.data()['r8'.toString()],
        rfanciful: e.payload.doc.data()['r9'.toString()],
        rcharming: e.payload.doc.data()['r10'.toString()],

        spiano: e.payload.doc.data()['s1'.toString()],
        srnb: e.payload.doc.data()['s2'.toString()],
        sclassic: e.payload.doc.data()['s3'.toString()],
        sjazz: e.payload.doc.data()['s4'.toString()],
        ssynthpop: e.payload.doc.data()['s5'.toString()],
        sindie: e.payload.doc.data()['s6'.toString()],
        sblues: e.payload.doc.data()['s7'.toString()],
        selectronic: e.payload.doc.data()['s8'.toString()],
        shardrock: e.payload.doc.data()['s9'.toString()],
        shiphop: e.payload.doc.data()['s10'.toString()],

        t: e.payload.doc.data()['t1'.toString()],


      };
   });


   console.log(this.list)

  //  this.checkbed()
   this.count()
   this.send()
    this.time = this.list.time

  });
   }
//นับจำนวนครั้งเพลงที่เล่นบ่อยสุด
   count(){

    for (let i=0; i< this.list.length; i++){
      if(this.list[i].user == this.getuser ){
        this.docId = this.list[i].id
        for (let ii=0; ii< this.list.length; ii++){
          if(this.docId == this.list[ii].id){
            let xx = ii;
//นับจำนวนเพลงในlistและเพลงที่เล่นไปแล้วกี่ครั้ง
  //this
  let arrayname = [
  {val:Number(this.list[xx].bird), name:'bird' },
  {val:Number(this.list[xx].drippingwater),name:'drippingwater'},
  {val:Number(this.list[xx].forest),name:'forest'},
  {val:Number(this.list[xx].gentleoceanwaves) ,name:'gentleoceanwaves'},
  {val:Number(this.list[xx].higflowriver),name:'higflowriver'},
  {val:Number(this.list[xx].midnightstrom),name:'midnightstrom'},
  {val:Number(this.list[xx].night),name:'night'},
  {val:Number(this.list[xx].seawave),name:'seawave'},
  {val:Number(this.list[xx].surrealforest),name:'surrealforest'},
  {val:Number(this.list[xx].waterfall),name:'waterfall'},

  {val:Number(this.list[xx].happy),name:'happy'},
  {val:Number(this.list[xx].relaxing),name:'relaxing'},
  {val:Number(this.list[xx].hopeful),name:'hopeful'},
  {val:Number(this.list[xx].powerful),name:'powerful'},
  {val:Number(this.list[xx].joyful),name:'joyful'},
  {val:Number(this.list[xx].peaceful),name:'peaceful'},
  {val:Number(this.list[xx].restless),name:'restless'},
  {val:Number(this.list[xx].suspense),name:'suspense'},
  {val:Number(this.list[xx].fanciful),name:'fanciful'},
  {val:Number(this.list[xx].charming),name:'charming'},

  {val:Number(this.list[xx].piano),name:'piano'},
  {val:Number(this.list[xx].rnb),name:'rnb'},
  {val:Number(this.list[xx].classic),name:'classic'},
  {val:Number(this.list[xx].jazz),name:'jazz'},
  {val:Number(this.list[xx].synthpop),name:'synthpop'},
  {val:Number(this.list[xx].indie),name:'indie'},
  {val:Number(this.list[xx].blues),name:'blues'},
  {val:Number(this.list[xx].electronic),name:'electronic'},
  {val:Number(this.list[xx].hardrock),name:'hardrock'},
  {val:Number(this.list[xx].hiphop),name:'hiphop'},]






//เรียงเพลง
  let arraynamesort =
  arrayname.sort((b,a) => (a.val < b.val) ? -1 : ((b.val > a.val) ? 1 : 0))

//เช็คเพลงที่เคยเล่นชื่อเพลงว่าอะไร
  for (let i=0; i< arraynamesort.length; i++){
    if(arraynamesort[i].val !=0){
      this.ax.push(arraynamesort[i].name)
    }
  }
          }
        }
      }
    }
    //this
  let be=[
    {name:'bird', title:"Bird",  subtitle:"bird-voice", img:"/assets/img/bird.jpg", path:"/assets/music/bird-voice.mp3",},
    {name:'drippingwater',title:"Dripping Water",subtitle:"dripping-water",img:"/assets/img/dripping water.jpg",path:"/assets/music/dripping-water.mp3",},
    {name:'forest',title:"Forest",subtitle:"forest",img:"/assets/img/Forest Swamp.jpg",path:"/assets/music/forest-swamp.mp3",},
    {name:'gentleoceanwaves',title:"Gentle Ocean Waves",subtitle:"gentle-ocean-waves",img:"/assets/img/gentle ocean waves.jpg",path:"/assets/music/gentle-ocean-waves.mp3",},
    {name:'higflowriver',      title:"Higflow River",subtitle:"higflow-river",img:"/assets/img/highflow river.jpg",path:"/assets/music/highflow-river.mp3",},
    {name:'midnightstrom',title:"Midnight Strom",subtitle:"midnight-strom",img:"/assets/img/midnight storm.jpg",path:"/assets/music/midnight-storm.mp3"},
    {name:'night',title:"Night",subtitle:"night",img:"/assets/img/night.jpg",path:"/assets/music/NNnight.mp3"},
    {name:'seawave',    title:"Sea Wave", subtitle:"sea-wave",img:"/assets/img/sea wave.jpg",path:"/assets/music/sea-waves.mp3"},
    {name:'surrealforest', title:"Surreal forest",subtitle:"surreal-forest",img:"/assets/img/Surreal forest.jpg",path:"/assets/music/surreal-forest.mp3",},
    {name:'waterfall',title:"Waterfall",subtitle:"waterfall",img:"/assets/img/waterfall.jpg",path:"/assets/music/waterfall.mp3",},
    {name:'happy', title:"Happy",subtitle:"happy",img:"/assets/img/happy.jpg",path:"/assets/music/happy.mp3",},
    {name:'relaxing',title:"Relaxing",subtitle:"relaxing",img:"/assets/img/relax.jpg",path:"/assets/music/relax.mp3",},
    {name:'hopeful',title:"Hopeful",subtitle:"hopeful",img:"/assets/img/hope.jpg",path:"/assets/music/hope.mp3",},
    {name:'powerful',title:"Powerful",subtitle:"powerful",img:"/assets/img/energy.jpg",path:"/assets/music/energy.mp3",},
    {name:'joyful',title:"Joyful",subtitle:"joyful",img:"/assets/img/joyful.jpg",path:"/assets/music/joyful.mp3",},
    {name:'peaceful',title:"Peaceful",subtitle:"peaceful",img:"/assets/img/quiet.jpg",path:"/assets/music/quiet.mp3",},
    {name:'restless',title:"Restless",subtitle:"restless",img:"/assets/img/restless.jpg",path:"/assets/music/restless.mp3",},
    {name:'suspense',title:"Suspense",subtitle:"suspense",img:"/assets/img/suspense.jpg",path:"/assets/music/suspense.mp3",},
    {name:'fanciful',title:"Fanciful",subtitle:"fanciful",img:"/assets/img/fanciful.jpg",path:"/assets/music/fanciful.mp3",},
    {name:'charming',title:"Charming",subtitle:"charming",img:"/assets/img/charm.jpg",path:"/assets/music/charm.mp3",},
    {name:'piano',title:"Piano",subtitle:"piano",img:"/assets/img/piano.jpg",path:"/assets/music/piano.mp3",},
    {name:'rnb',title:"RnB",subtitle:"rnb",img:"/assets/img/rnb.jpg",path:"/assets/music/rnb.mp3",},
    {name:'classic',title:"Classic",subtitle:"classic",img:"/assets/img/classic.jpg",path:"/assets/music/classic.mp3",},
    {name:'jazz',title:"Jazz",subtitle:"jazz",img:"/assets/img/jazz.jpg",path:"/assets/music/jazz.mp3",},
    {name:'synthpop',title:"Synthpop",subtitle:"synthpop",img:"/assets/img/synth-pop.jpg",path:"/assets/music/synth-pop.mp3",},
    {name:'indie',title:"Indie",subtitle:"indie",img:"/assets/img/indie.jpg",path:"/assets/music/indie.mp3",},
    {name:'blues',title:"Blues",subtitle:"blues",img:'/assets/img/blues.jpg',path:'/assets/music/blues.mp3',},
    {name:'electronic',title:"Electronic",subtitle:"electronic",img:"/assets/img/electronic.jpg",path:"/assets/music/electronic.mp3",},
    {name:'hardrock',title:"Hardrock",subtitle:"hardrock",img:"/assets/img/hard rock.jpg",path:"/assets/music/hard rock.mp3",},
    {name:'hiphop',title:"Hiphop",subtitle:"hiphop",img:"/assets/img/hip hop.jpg",path:"/assets/music/hip hop.mp3",}
  ]
//เช็คเพลงที่เคยเล่นเพลงไหนมากที่สุด
  if(this.timeout==0){
    for (let i=0; i< this.ax.length; i++){
        if(this.ax[i] == 'bird'){
          this.ox .push({title:be[0].title, subtitle:be[0].subtitle,  img:be[0].img, path:be[0].path })
      }
    else if(this.ax[i] == 'drippingwater'){
      this.ox .push({title:be[1].title, subtitle:be[1].subtitle,  img:be[1].img, path:be[1].path })
          }
    else if(this.ax[i] == 'forest'){
      this.ox .push({title:be[2].title, subtitle:be[2].subtitle,  img:be[2].img, path:be[2].path })
          }
    else if(this.ax[i] == 'gentleoceanwaves'){
      this.ox .push({title:be[3].title, subtitle:be[3].subtitle,  img:be[3].img, path:be[3].path })
          }
    else if(this.ax[i] == 'higflowriver'){
      this.ox .push({title:be[4].title, subtitle:be[4].subtitle,  img:be[4].img, path:be[4].path })
          }
    else if(this.ax[i] == 'midnightstrom'){
      this.ox .push({title:be[5].title, subtitle:be[5].subtitle,  img:be[5].img, path:be[5].path })
          }
    else if(this.ax[i] == 'night'){
      this.ox .push({title:be[6].title, subtitle:be[6].subtitle,  img:be[6].img, path:be[6].path })
          }
    else if(this.ax[i] == 'seawave'){
      this.ox .push({title:be[7].title, subtitle:be[7].subtitle,  img:be[7].img, path:be[7].path })
          }
    else if(this.ax[i] == 'surrealforest'){
      this.ox .push({title:be[8].title, subtitle:be[8].subtitle,  img:be[8].img, path:be[8].path })
          }
    else if(this.ax[i] == 'waterfall'){
      this.ox .push({title:be[9].title, subtitle:be[9].subtitle,  img:be[9].img, path:be[9].path })
          }
    else if(this.ax[i] == 'happy'){
      this.ox .push({title:be[10].title, subtitle:be[10].subtitle,  img:be[10].img, path:be[10].path })
          }
    else if(this.ax[i] == 'relaxing'){
      this.ox .push({title:be[11].title, subtitle:be[11].subtitle,  img:be[11].img, path:be[11].path })
          }
    else if(this.ax[i] == 'hopeful'){
      this.ox .push({title:be[12].title, subtitle:be[12].subtitle,  img:be[12].img, path:be[12].path })
          }
    else if(this.ax[i] == 'powerful'){
      this.ox .push({title:be[13].title, subtitle:be[13].subtitle,  img:be[13].img, path:be[13].path })
          }
    else if(this.ax[i] == 'joyful'){
      this.ox .push({title:be[14].title, subtitle:be[14].subtitle,  img:be[14].img, path:be[14].path })
          }
    else if(this.ax[i] == 'peaceful'){
      this.ox .push({title:be[15].title, subtitle:be[15].subtitle,  img:be[15].img, path:be[15].path })
          }
    else if(this.ax[i] == 'restless'){
      this.ox .push({title:be[16].title, subtitle:be[16].subtitle,  img:be[16].img, path:be[16].path })
          }
    else if(this.ax[i] == 'suspense'){
      this.ox .push({title:be[17].title, subtitle:be[17].subtitle,  img:be[17].img, path:be[17].path })
          }
    else if(this.ax[i] == 'fanciful'){
      this.ox .push({title:be[18].title, subtitle:be[18].subtitle,  img:be[18].img, path:be[18].path })
          }
    else if(this.ax[i] == 'charming'){
      this.ox .push({title:be[19].title, subtitle:be[19].subtitle,  img:be[19].img, path:be[19].path })
          }
    else if(this.ax[i] == 'piano'){
      this.ox .push({title:be[20].title, subtitle:be[20].subtitle,  img:be[20].img, path:be[20].path })
          }
    else if(this.ax[i] == 'rnb'){
      this.ox .push({title:be[21].title, subtitle:be[21].subtitle,  img:be[21].img, path:be[21].path })
          }
    else if(this.ax[i] == 'classic'){
      this.ox .push({title:be[22].title, subtitle:be[22].subtitle,  img:be[22].img, path:be[22].path })
          }
    else if(this.ax[i] == 'jazz'){
      this.ox .push({title:be[23].title, subtitle:be[23].subtitle,  img:be[23].img, path:be[23].path })
          }
    else if(this.ax[i] == 'synthpop'){
      this.ox .push({title:be[24].title, subtitle:be[24].subtitle,  img:be[24].img, path:be[24].path })
          }
    else if(this.ax[i] == 'indie'){
      this.ox .push({title:be[25].title, subtitle:be[25].subtitle,  img:be[25].img, path:be[25].path })
          }
    else if(this.ax[i] == 'blues'){
      this.ox .push({title:be[26].title, subtitle:be[26].subtitle,  img:be[26].img, path:be[26].path })
          }
    else if(this.ax[i] == 'electronic'){
      this.ox .push({title:be[27].title, subtitle:be[27].subtitle,  img:be[27].img, path:be[27].path })
          }
    else if(this.ax[i] == 'hardrock'){
      this.ox .push({title:be[28].title, subtitle:be[28].subtitle,  img:be[28].img, path:be[28].path })
          }
    else if(this.ax[i] == 'hiphop'){
      this.ox .push({title:be[29].title, subtitle:be[29].subtitle,  img:be[29].img, path:be[29].path })
          }
  }
  }
  this.timeout=1;
  console.log(this.ox)

this.count2()


  }
  //
  count2(){
    for (let i=0; i< this.list.length; i++){
      if(this.list[i].user == this.getuser ){
        this.docId = this.list[i].id
        for (let ii=0; ii< this.list.length; ii++){
          if(this.docId == this.list[ii].id){
            let xx = ii;

            let arrayname2 = [
              {val:Number(this.list[xx].mbird), name:'bird' },
              {val:Number(this.list[xx].mdrippingwater),name:'drippingwater'},
              {val:Number(this.list[xx].mforest),name:'forest'},
              {val:Number(this.list[xx].mgentleoceanwaves) ,name:'gentleoceanwaves'},
              {val:Number(this.list[xx].mhigflowriver),name:'higflowriver'},
              {val:Number(this.list[xx].mmidnightstrom),name:'midnightstrom'},
              {val:Number(this.list[xx].mnight),name:'night'},
              {val:Number(this.list[xx].mseawave),name:'seawave'},
              {val:Number(this.list[xx].msurrealforest),name:'surrealforest'},
              {val:Number(this.list[xx].mwaterfall),name:'waterfall'},

              {val:Number(this.list[xx].rhappy),name:'happy'},
              {val:Number(this.list[xx].rrelaxing),name:'relaxing'},
              {val:Number(this.list[xx].rhopeful),name:'hopeful'},
              {val:Number(this.list[xx].rpowerful),name:'powerful'},
              {val:Number(this.list[xx].rjoyful),name:'joyful'},
              {val:Number(this.list[xx].rpeaceful),name:'peaceful'},
              {val:Number(this.list[xx].rrestless),name:'restless'},
              {val:Number(this.list[xx].rsuspense),name:'suspense'},
              {val:Number(this.list[xx].rfanciful),name:'fanciful'},
              {val:Number(this.list[xx].rcharming),name:'charming'},

              {val:Number(this.list[xx].spiano),name:'piano'},
              {val:Number(this.list[xx].srnb),name:'rnb'},
              {val:Number(this.list[xx].sclassic),name:'classic'},
              {val:Number(this.list[xx].sjazz),name:'jazz'},
              {val:Number(this.list[xx].ssynthpop),name:'synthpop'},
              {val:Number(this.list[xx].sindie),name:'indie'},
              {val:Number(this.list[xx].sblues),name:'blues'},
              {val:Number(this.list[xx].selectronic),name:'electronic'},
              {val:Number(this.list[xx].shardrock),name:'hardrock'},
              {val:Number(this.list[xx].shiphop),name:'hiphop'},
            ]
            let arraynamesort2 =
            arrayname2.sort((b,a) => (a.val < b.val) ? -1 : ((b.val > a.val) ? 1 : 0))

            for (let i=0; i< arraynamesort2.length; i++){
              if(arraynamesort2[i].val !=0){
                this.axx.push(arraynamesort2[i].name)
              }
            }

            let be=[
              {name:'bird', title:"Bird",  subtitle:"bird-voice", img:"/assets/img/bird.jpg", path:"/assets/music/bird-voice.mp3",},
              {name:'drippingwater',title:"Dripping Water",subtitle:"dripping-water",img:"/assets/img/dripping water.jpg",path:"/assets/music/dripping-water.mp3",},
              {name:'forest',title:"Forest",subtitle:"forest",img:"/assets/img/Forest Swamp.jpg",path:"/assets/music/forest-swamp.mp3",},
              {name:'gentleoceanwaves',title:"Gentle Ocean Waves",subtitle:"gentle-ocean-waves",img:"/assets/img/gentle ocean waves.jpg",path:"/assets/music/gentle-ocean-waves.mp3",},
              {name:'higflowriver',      title:"Higflow River",subtitle:"higflow-river",img:"/assets/img/highflow river.jpg",path:"/assets/music/highflow-river.mp3",},
              {name:'midnightstrom',title:"Midnight Strom",subtitle:"midnight-strom",img:"/assets/img/midnight storm.jpg",path:"/assets/music/midnight-storm.mp3"},
              {name:'night',title:"Night",subtitle:"night",img:"/assets/img/night.jpg",path:"/assets/music/NNnight.mp3"},
              {name:'seawave',    title:"Sea Wave", subtitle:"sea-wave",img:"/assets/img/sea wave.jpg",path:"/assets/music/sea-waves.mp3"},
              {name:'surrealforest', title:"Surreal forest",subtitle:"surreal-forest",img:"/assets/img/Surreal forest.jpg",path:"/assets/music/surreal-forest.mp3",},
              {name:'waterfall',title:"Waterfall",subtitle:"waterfall",img:"/assets/img/waterfall.jpg",path:"/assets/music/waterfall.mp3",},
              {name:'happy', title:"Happy",subtitle:"happy",img:"/assets/img/happy.jpg",path:"/assets/music/happy.mp3",},
              {name:'relaxing',title:"Relaxing",subtitle:"relaxing",img:"/assets/img/relax.jpg",path:"/assets/music/relax.mp3",},
              {name:'hopeful',title:"Hopeful",subtitle:"hopeful",img:"/assets/img/hope.jpg",path:"/assets/music/hope.mp3",},
              {name:'powerful',title:"Powerful",subtitle:"powerful",img:"/assets/img/energy.jpg",path:"/assets/music/energy.mp3",},
              {name:'joyful',title:"Joyful",subtitle:"joyful",img:"/assets/img/joyful.jpg",path:"/assets/music/joyful.mp3",},
              {name:'peaceful',title:"Peaceful",subtitle:"peaceful",img:"/assets/img/quiet.jpg",path:"/assets/music/quiet.mp3",},
              {name:'restless',title:"Restless",subtitle:"restless",img:"/assets/img/restless.jpg",path:"/assets/music/restless.mp3",},
              {name:'suspense',title:"Suspense",subtitle:"suspense",img:"/assets/img/suspense.jpg",path:"/assets/music/suspense.mp3",},
              {name:'fanciful',title:"Fanciful",subtitle:"fanciful",img:"/assets/img/fanciful.jpg",path:"/assets/music/fanciful.mp3",},
              {name:'charming',title:"Charming",subtitle:"charming",img:"/assets/img/charm.jpg",path:"/assets/music/charm.mp3",},
              {name:'piano',title:"Piano",subtitle:"piano",img:"/assets/img/piano.jpg",path:"/assets/music/piano.mp3",},
              {name:'rnb',title:"RnB",subtitle:"rnb",img:"/assets/img/rnb.jpg",path:"/assets/music/rnb.mp3",},
              {name:'classic',title:"Classic",subtitle:"classic",img:"/assets/img/classic.jpg",path:"/assets/music/classic.mp3",},
              {name:'jazz',title:"Jazz",subtitle:"jazz",img:"/assets/img/jazz.jpg",path:"/assets/music/jazz.mp3",},
              {name:'synthpop',title:"Synthpop",subtitle:"synthpop",img:"/assets/img/synth-pop.jpg",path:"/assets/music/synth-pop.mp3",},
              {name:'indie',title:"Indie",subtitle:"indie",img:"/assets/img/indie.jpg",path:"/assets/music/indie.mp3",},
              {name:'blues',title:"Blues",subtitle:"blues",img:'/assets/img/blues.jpg',path:'/assets/music/blues.mp3',},
              {name:'electronic',title:"Electronic",subtitle:"electronic",img:"/assets/img/electronic.jpg",path:"/assets/music/electronic.mp3",},
              {name:'hardrock',title:"Hardrock",subtitle:"hardrock",img:"/assets/img/hard rock.jpg",path:"/assets/music/hard rock.mp3",},
              {name:'hiphop',title:"Hiphop",subtitle:"hiphop",img:"/assets/img/hip hop.jpg",path:"/assets/music/hip hop.mp3",}
            ]
            if(this.timeout2==0){
              for (let i=0; i< this.ax.length; i++){
                  if(this.axx[i] == 'bird'){
                    this.oxx .push({title:be[0].title, img:be[0].img})
                }
              else if(this.axx[i] == 'drippingwater'){
                this.oxx .push({title:be[1].title, subtitle:be[1].subtitle,  img:be[1].img, path:be[1].path })
                    }
                    else if(this.axx[i] == 'forest'){
                      this.oxx .push({title:be[2].title, subtitle:be[2].subtitle,  img:be[2].img, path:be[2].path })
                          }
                    else if(this.axx[i] == 'gentleoceanwaves'){
                      this.oxx .push({title:be[3].title, subtitle:be[3].subtitle,  img:be[3].img, path:be[3].path })
                          }
                    else if(this.axx[i] == 'higflowriver'){
                      this.oxx .push({title:be[4].title, subtitle:be[4].subtitle,  img:be[4].img, path:be[4].path })
                          }
                    else if(this.axx[i] == 'midnightstrom'){
                      this.oxx .push({title:be[5].title, subtitle:be[5].subtitle,  img:be[5].img, path:be[5].path })
                          }
                    else if(this.axx[i] == 'night'){
                      this.oxx .push({title:be[6].title, subtitle:be[6].subtitle,  img:be[6].img, path:be[6].path })
                          }
                    else if(this.axx[i] == 'seawave'){
                      this.oxx .push({title:be[7].title, subtitle:be[7].subtitle,  img:be[7].img, path:be[7].path })
                          }
                    else if(this.axx[i] == 'surrealforest'){
                      this.oxx .push({title:be[8].title, subtitle:be[8].subtitle,  img:be[8].img, path:be[8].path })
                          }
                    else if(this.axx[i] == 'waterfall'){
                      this.oxx .push({title:be[9].title, subtitle:be[9].subtitle,  img:be[9].img, path:be[9].path })
                          }
                    else if(this.axx[i] == 'happy'){
                      this.oxx .push({title:be[10].title, subtitle:be[10].subtitle,  img:be[10].img, path:be[10].path })
                          }
                    else if(this.axx[i] == 'relaxing'){
                      this.oxx .push({title:be[11].title, subtitle:be[11].subtitle,  img:be[11].img, path:be[11].path })
                          }
                    else if(this.axx[i] == 'hopeful'){
                      this.oxx .push({title:be[12].title, subtitle:be[12].subtitle,  img:be[12].img, path:be[12].path })
                          }
                    else if(this.axx[i] == 'powerful'){
                      this.oxx .push({title:be[13].title, subtitle:be[13].subtitle,  img:be[13].img, path:be[13].path })
                          }
                    else if(this.axx[i] == 'joyful'){
                      this.oxx .push({title:be[14].title, subtitle:be[14].subtitle,  img:be[14].img, path:be[14].path })
                          }
                    else if(this.axx[i] == 'peaceful'){
                      this.oxx .push({title:be[15].title, subtitle:be[15].subtitle,  img:be[15].img, path:be[15].path })
                          }
                    else if(this.axx[i] == 'restless'){
                      this.oxx .push({title:be[16].title, subtitle:be[16].subtitle,  img:be[16].img, path:be[16].path })
                          }
                    else if(this.axx[i] == 'suspense'){
                      this.oxx .push({title:be[17].title, subtitle:be[17].subtitle,  img:be[17].img, path:be[17].path })
                          }
                    else if(this.axx[i] == 'fanciful'){
                      this.oxx .push({title:be[18].title, subtitle:be[18].subtitle,  img:be[18].img, path:be[18].path })
                          }
                    else if(this.axx[i] == 'charming'){
                      this.oxx .push({title:be[19].title, subtitle:be[19].subtitle,  img:be[19].img, path:be[19].path })
                          }
                    else if(this.axx[i] == 'piano'){
                      this.oxx .push({title:be[20].title, subtitle:be[20].subtitle,  img:be[20].img, path:be[20].path })
                          }
                    else if(this.axx[i] == 'rnb'){
                      this.oxx .push({title:be[21].title, subtitle:be[21].subtitle,  img:be[21].img, path:be[21].path })
                          }
                    else if(this.axx[i] == 'classic'){
                      this.oxx .push({title:be[22].title, subtitle:be[22].subtitle,  img:be[22].img, path:be[22].path })
                          }
                    else if(this.axx[i] == 'jazz'){
                      this.oxx .push({title:be[23].title, subtitle:be[23].subtitle,  img:be[23].img, path:be[23].path })
                          }
                    else if(this.axx[i] == 'synthpop'){
                      this.oxx .push({title:be[24].title, subtitle:be[24].subtitle,  img:be[24].img, path:be[24].path })
                          }
                    else if(this.axx[i] == 'indie'){
                      this.oxx .push({title:be[25].title, subtitle:be[25].subtitle,  img:be[25].img, path:be[25].path })
                          }
                    else if(this.axx[i] == 'blues'){
                      this.oxx .push({title:be[26].title, subtitle:be[26].subtitle,  img:be[26].img, path:be[26].path })
                          }
                    else if(this.axx[i] == 'electronic'){
                      this.oxx .push({title:be[27].title, subtitle:be[27].subtitle,  img:be[27].img, path:be[27].path })
                          }
                    else if(this.axx[i] == 'hardrock'){
                      this.oxx .push({title:be[28].title, subtitle:be[28].subtitle,  img:be[28].img, path:be[28].path })
                          }
                    else if(this.axx[i] == 'hiphop'){
                      this.oxx .push({title:be[29].title, subtitle:be[29].subtitle,  img:be[29].img, path:be[29].path })
                          }

                  }

            }
            this.timeout2=1;
            console.log(this.oxx)
          }
        }
      }
    }
  }

  // refresh(): void {
  //   window.location.reload();
  // }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('obj');
    let getobj = JSON.parse(dataRev);
    this.getuser = getobj['user'];
    this.getid = getobj['id'];
    this.getpass = getobj['pass'];
    this.getimg = getobj['img'];
    console.log(this.playx);

    this.Edit.showData().subscribe(data => {
      this.sound = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        title: e.payload.doc.data()['title'.toString()],
        subTitle: e.payload.doc.data()['subTitle'.toString()],
        img: e.payload.doc.data()['img'.toString()],
        path: e.payload.doc.data()['path'.toString()]
    };
   });
    console.log(this.sound);
  });
  }

  playSong(title,subTitle,img,song){
    if (this.currSong != null) {
      this.currSong.pause();     //If a song plays,stop that
  }
  //open full player view
  document.getElementById('fullPlayer').style.bottom = '0px';
  //set current song details
  this.currTitle = title;
  this.currSubtitle = subTitle;
  this.currImage = img;

  //Current song audio
  this.currSong = new Audio(song);

  this.currSong.play().then(() => {

    //Total song duration
    this.durationText = this.sToTime(this.currSong.duration);
    //set max range value (important to show proress in ion-range)
    this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));

    //set upnext song
      //get current song index
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    //if current song is the last one then set first song info for upnext song
    if ((index + 1) == this.songs.length) {
      this.upNextImg = this.songs[0].img;
      this.upNextTitle = this.songs[0].title;
      this.upNextSubtitle = this.songs[0].subtitle;
    }

    //else set next song info for upnext song
    else {
      this.upNextImg = this.songs[index + 1].img;
      this.upNextTitle = this.songs[index + 1].title;
      this.upNextSubtitle = this.songs[index + 1].subtitle;
    }
    this.isPlaying = true;

  })

  this.currSong.addEventListener('timeupdate', () => {

    //update some infos as song plays on
      //if ion-range not touched the do update
      if (!this.isTouched) {
        //update ion-range value
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        //update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        //update progress bar (in miniize view)
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));

        //if song ends,play next song
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
  })


  for (let i=0; i< this.list.length; i++){
    if(this.list[i].user == this.getuser ){


//เก็บค่าจำนวนเพลงและส่งข้อมูลไป 0 หรือ 1
this.docId = this.list[i].id
var t :number = this.list[i].bird
var a :number = this.list[i].drippingwater
var b :number = this.list[i].forest
var c :number = this.list[i].gentleoceanwaves
var d :number = this.list[i].higflowriver
var e :number = this.list[i].midnightstrom
var n :number = this.list[i].night
var f :number = this.list[i].seawave
var g :number = this.list[i].surrealforest
var h :number = this.list[i].waterfall

// var aa :number = this.list[i].happy
// var bb :number = this.list[i].relaxing
// var cc :number = this.list[i].hopeful
// var dd :number = this.list[i].powerful
// var dd :number = this.list[i].powerful
// var ee :number = this.list[i].joyful
// var ff :number = this.list[i].peaceful
// var gg :number = this.list[i].restless
// var hh :number = this.list[i].suspense
// var ii :number = this.list[i].fanciful
// var jj :number = this.list[i].charming

// var kk :number = this.list[i].piano
// var ll :number = this.list[i].RnB
// var mm :number = this.list[i].Classic
// var nn :number = this.list[i].Jazz
// var oo :number = this.list[i].Synthpop
// var pp :number = this.list[i].Indie
// var qq :number = this.list[i].Blues
// var rr :number = this.list[i].Electronic
// var ss :number = this.list[i].Hardrock
// var tt :number = this.list[i].Hiphop


if (title =="Bird")
{ console.log("Add",title)
t=t+1
}
else if (title =="DrippingWater")
{ console.log("Add",title)
a=a+1
}
else if (title =="Forest")
{ console.log("Add",title)
b=b+1
}
else if (title =="GentleOceanWaves")
{ console.log("Add",title)
c=c+1
}
else if (title =="HigflowRiver")
{ console.log("Add",title)
d=d+1
}
else if (title =="MidnightStrom")
{ console.log("Add",title)
e=e+1
}
else if (title =="Night")
{ console.log("Add",title)
n=n+1
}
else if (title =="SeaWave")
{ console.log("Add",title)
f=f+1
}
else if (title =="Surrealforeste")
{ console.log("Add",title)
g=g+1
}
else if (title =="Waterfall")
{ console.log("Add",title)
h=h+1
}

// else if (title =="Happy")
// { console.log("Add",title)
// aa=aa+1
// }
// else if (title =="Relaxing")
// { console.log("Add",title)
// bb=bb+1
// }
// else if (title =="Hopeful")
// { console.log("Add",title)
// cc=cc+1
// }
// else if (title =="Powerful")
// { console.log("Add",title)
// dd=dd+1
// }
// else if (title =="Powerful")
// { console.log("Add",title)
// dd=dd+1
// }
// else if (title =="Joyful")
// { console.log("Add",title)
// ee=ee+1
// }
// else if (title =="Peaceful")
// { console.log("Add",title)
// ff=ff+1
// }
// else if (title =="Restless")
// { console.log("Add",title)
// gg=gg+1
// }
// else if (title =="Suspense")
// { console.log("Add",title)
// hh=hh+1
// }
// else if (title =="Fanciful")
// { console.log("Add",title)
// ii=ii+1
// }
// else if (title =="Charming")
// { console.log("Add",title)
// jj=jj+1
// }

// else if (title =="Piano")
// { console.log("Add",title)
// kk=kk+1
// }
// else if (title =="RnB")
// { console.log("Add",title)
// ll=ll+1
// }
// else if (title =="Classic")
// { console.log("Add",title)
// mm=mm+1
// }
// else if (title =="Jazz")
// { console.log("Add",title)
// nn=nn+1
// }
// else if (title =="Synthpop")
// { console.log("Add",title)
// oo=oo+1
// }
// else if (title =="Indie")
// { console.log("Add",title)
// pp=pp+1
// }
// else if (title =="Blues")
// { console.log("Add",title)
// qq=qq+1
// }
// else if (title =="Electronic")
// { console.log("Add",title)
// rr=rr+1
// }
// else if (title =="Hardrock")
// { console.log("Add",title)
// ss=ss+1
// }
// else if (title =="Hiphop")
// { console.log("Add",title)
// tt=tt+1
// }
    }}
  // }




  let tmpobj =  //db : inputform
  {Bird: t,
    DrippingWater: a,
    Forest:b,
    GentleOceanWaves:c,
    HigflowRiver:d,
    MidnightStrom:e,
    Night:n,
    SeaWave:f,
    Surrealforest:g,
    Waterfall:h,

    // Happy:aa,
    // Relaxing:bb,
    // Hopeful:cc,
    // Powerful:dd,
    // Powerful:dd,
    // Joyful:ee,
    // Peaceful:ff,
    // Restless:gg,
    // Suspense:hh,
    // Fanciful:ii,
    // Charming:jj,

    // Piano:kk,
    // RnB:ll,
    // Classic:mm,
    // Jazz:nn,
    // Synthpop:oo,
    // Indie:pp,
    // Blues:qq,
    // Electronic:rr,
    // Hardrock:ss,
    // Hiphop:tt,

  };
  return this.db.doc('acc/'+this.docId).update(tmpobj);

}
  sToTime(t) {
    return this.padZero(parseInt(String((t / (60)) % 60))) + ':' +
      this.padZero(parseInt(String((t) % 60)));
  }
  padZero(v) {
    return (v < 10) ? '0' + v : v;
  }

  playNext() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if ((index + 1) == this.songs.length) {
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    }
    else {
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }
  }

  playPrev() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if (index == 0) {
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    }
    else {
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }
  }

  maximize() {
    document.getElementById('fullPlayer').style.bottom = '0px';
    document.getElementById('miniPlayer').style.bottom = '-100px';
  }
  minimize() {
    document.getElementById('fullPlayer').style.bottom = '-1000px';
    document.getElementById('miniPlayer').style.bottom = '0px';
  }

  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }

  play() {
    this.currSong.play();
    this.isPlaying = true;
  }

  cancel() {
    document.getElementById('miniPlayer').style.bottom = '-100px';
    this.currImage = '';
    this.currTitle = '';
    this.currSubtitle = '';
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }

  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  }

  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }

  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime)
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));

    if (this.isPlaying) {
      this.currSong.play();
    }
  }
  async addplaylist(title){
    // for (var val of this.sounds) {
    //   if(title == this.sounds.title){
    //     this.playlistService.addplaylist({ title: val.title,});
    //   }

    console.log("Add",title)
let tmpobj

if(title =="Sea Wave"){
let tmpobj1 =  //db : inputform
{ m1 : 1
};
tmpobj = tmpobj1
this.oxx.push({title:"Sea Wave", subtitle:"sea-wave",img:"/assets/img/sea wave.jpg"})
}
else if(title =="Bird"){
  let tmpobj2 =  //db : inputform
  { m2 : 1
  };
  tmpobj = tmpobj2
  this.oxx.push({title:"Bird", subtitle:"bird-voice", img:"/assets/img/bird.jpg"})
}
else if(title =="Gentle Ocean Waves"){
  let tmpobj3 =  //db : inputform
  { m3 : 1
  };
  tmpobj = tmpobj3
  this.oxx.push({title:"Gentle Ocean Waves",subtitle:"gentle-ocean-waves",img:"/assets/img/gentle ocean waves.jpg"})
}
else if(title =="Midnight Strom"){
  let tmpobj4 =  //db : inputform
  { m4 : 1
  };
  tmpobj = tmpobj4
  this.oxx.push({title:"Midnight Strom",subtitle:"midnight-strom",img:"/assets/img/midnight storm.jpg"})
}
else if(title =="Night"){
  let tmpobj5 =  //db : inputform
  { m5 : 1
  };
  tmpobj = tmpobj5
  this.oxx.push({title:"Night",subtitle:"night",img:"/assets/img/night.jpg"})
}
else if(title =="Dripping Water"){
  let tmpobj6 =  //db : inputform
  { m6 : 1
  };
  tmpobj = tmpobj6
  this.oxx.push({title:"Dripping Water",subtitle:"dripping-water",img:"/assets/img/dripping water.jpg"})
}
else if(title =="Waterfall"){
  let tmpobj7 =  //db : inputform
  { m7 : 1
  };
  tmpobj = tmpobj7
  this.oxx.push({title:"Waterfall",subtitle:"waterfall",img:"/assets/img/waterfall.jpg"})
}
else if(title =="Forest"){
  let tmpobj8 =  //db : inputform
  { m8 : 1
  };
  tmpobj = tmpobj8
  this.oxx.push({title:"Forest",subtitle:"forest",img:"/assets/img/Forest Swamp.jpg"})
}
else if(title =="Higflow River"){
  let tmpobj9 =  //db : inputform
  { m9 : 1
  };
  tmpobj = tmpobj9
  this.oxx.push({title:"Higflow River",subtitle:"higflow-river",img:"/assets/img/highflow river.jpg"})
}
else if(title =="Surreal forest"){
  let tmpobj10 =  //db : inputform
  { m10 : 1
  };
  tmpobj = tmpobj10
  this.oxx.push({title:"Surreal forest",subtitle:"surreal-forest",img:"/assets/img/Surreal forest.jpg"})
}

else if(title =="Happy"){
  let tmpobj11 =  //db : inputform
  { r1 : 1
  };
  tmpobj = tmpobj11
  this.oxx.push({title:"Happy",subtitle:"happy",img:"/assets/img/happy.jpg"})
}
else if(title =="Relaxing"){
  let tmpobj12 =  //db : inputform
  { r2 : 1
  };
  tmpobj = tmpobj12
  this.oxx.push({title:"Relaxing",subtitle:"relaxing",img:"/assets/img/relax.jpg"})
}
else if(title =="Hopeful"){
  let tmpobj13 =  //db : inputform
  { r3 : 1
  };
  tmpobj = tmpobj13
  this.oxx.push({title:"Hopeful",subtitle:"hopeful",img:"/assets/img/hope.jpg"})
}
else if(title =="Powerful"){
  let tmpobj14 =  //db : inputform
  { r4 : 1
  };
  tmpobj = tmpobj14
  this.oxx.push({title:"Powerful",subtitle:"powerful",img:"/assets/img/energy.jpg"})
}
else if(title =="Joyful"){
  let tmpobj15 =  //db : inputform
  { r5 : 1
  };
  tmpobj = tmpobj15
  this.oxx.push({title:"Joyful",subtitle:"joyful",img:"/assets/img/joyful.jpg"})
}
else if(title =="Peaceful"){
  let tmpobj16 =  //db : inputform
  { r6 : 1
  };
  tmpobj = tmpobj16
  this.oxx.push({title:"Peaceful",subtitle:"peaceful",img:"/assets/img/quiet.jpg"})
}
else if(title =="Restless"){
  let tmpobj17 =  //db : inputform
  { r7 : 1
  };
  tmpobj = tmpobj17
  this.oxx.push({title:"Restless",subtitle:"restless",img:"/assets/img/restless.jpg"})
}
else if(title =="Suspense"){
  let tmpobj18 =  //db : inputform
  { r8 : 1
  };
  tmpobj = tmpobj18
  this.oxx.push({title:"Suspense",subtitle:"suspense",img:"/assets/img/suspense.jpg"})
}
else if(title =="Fanciful"){
  let tmpobj19 =  //db : inputform
  { r9 : 1
  };
  tmpobj = tmpobj19
  this.oxx.push({title:"Fanciful",subtitle:"fanciful",img:"/assets/img/fanciful.jpg"})
}
else if(title =="Charming"){
  let tmpobj20 =  //db : inputform
  { r10 : 1
  };
  tmpobj = tmpobj20
  this.oxx.push({title:"Charming",subtitle:"charming",img:"/assets/img/charm.jpg"})
}

else if(title =="Piano"){
  let tmpobj21 =  //db : inputform
  { s1 : 1
  };
  tmpobj = tmpobj21
  this.oxx.push({title:"Piano",subtitle:"piano",img:"/assets/img/piano.jpg"})
}
else if(title =="RnB"){
  let tmpobj22 =  //db : inputform
  { s2 : 1
  };
  tmpobj = tmpobj22
  this.oxx.push({title:"RnB",subtitle:"rnb",img:"/assets/img/rnb.jpg"})
}
else if(title =="Classic"){
  let tmpobj23 =  //db : inputform
  { s3 : 1
  };
  tmpobj = tmpobj23
  this.oxx.push({title:"Classic",subtitle:"classic",img:"/assets/img/classic.jpg"})
}
else if(title =="Jazz"){
  let tmpobj24 =  //db : inputform
  { s4 : 1
  };
  tmpobj = tmpobj24
  this.oxx.push({title:"Jazz",subtitle:"jazz",img:"/assets/img/jazz.jpg"})
}
else if(title =="Synthpop"){
  let tmpobj25 =  //db : inputform
  { s5 : 1
  };
  tmpobj = tmpobj25
  this.oxx.push({title:"Synthpop",subtitle:"synthpop",img:"/assets/img/synth-pop.jpg"})
}
else if(title =="Indie"){
  let tmpobj26 =  //db : inputform
  { s6 : 1
  };
  tmpobj = tmpobj26
  this.oxx.push({title:"Indie",subtitle:"indie",img:"/assets/img/indie.jpg"})
}
else if(title =="Blues"){
  let tmpobj27 =  //db : inputform
  { s7 : 1
  };
  tmpobj = tmpobj27
  this.oxx.push({title:"Blues",subtitle:"blues",img:"/assets/img/blues.jpg"})
}
else if(title =="Electronic"){
  let tmpobj28 =  //db : inputform
  { s8 : 1
  };
  tmpobj = tmpobj28
  this.oxx.push({title:"Electronic",subtitle:"electronic",img:"/assets/img/electronic.jpg"})
}
else if(title =="Hardrock"){
  let tmpobj29 =  //db : inputform
  { s9 : 1
  };
  tmpobj = tmpobj29
  this.oxx.push({title:"Hardrock",subtitle:"hardrock",img:"/assets/img/hard rock.jpg"})
}
else if(title =="Hiphop"){
  let tmpobj30 =  //db : inputform
  { s10 : 1
  };
  tmpobj = tmpobj30
  this.oxx.push({title:"Hiphop",subtitle:"hiphop",img:"/assets/img/hip hop.jpg"})
}
return this.db.doc('acc/'+this.docId).update(tmpobj);

  }

  async addsong(title){
    // for (var val of this.sounds) {
    //   if(title == this.sounds.title){
    //     this.playlistService.addplaylist({ title: val.title,});
    //   }

    console.log(title)

let tmpobj

if(title ==""){
  let tmpobj31 =  //db : inputform
  { t1 : 1
  };
  tmpobj = tmpobj31
  this.sound.push({})
}
return this.db.doc('acc/'+this.docId).update(tmpobj);

  }
  // settime(){
  //   let bbb = new Date().toString()
  //   this.aaa = bbb;
  //    this.ttt=(this.aaa[16]+this.aaa[17]+this.aaa[18]+this.aaa[19]+this.aaa[20]).toString()
  //    this.xxx = (this.time[11]+this.time[12]+this.time[13]+this.time[14]+this.time[15]).toString()
  //    console.log(this.xxx )
  //    console.log(this.time )
  //    let tmpobj =  //db : inputform
  //    {time: this.xxx,
  //    };
  //    return this.db.doc('acc/'+this.docId).update(tmpobj);

  // }

  //timeout
ionViewDidEnter() {
  //Call start timer function
 this.remainingTime = 5;
 this.startTimer();
}
//นับเวลา
startTimer() {
  var counter = setTimeout(() => {
    var time = this.getTimerClock(this.remainingTime);
    console.log(time);
    if (this.remainingTime > 0) {
      this.startTimer();
      this.remainingTime--;
    }
    else {
      this.pause()
      clearInterval(counter);
    }
  }, 1000);
}
//คำนวณเวลา
getTimerClock(inputSeconds: number) {
var sec_num = parseInt(inputSeconds.toString(), 10);
this.remainingTime = sec_num; //Define variable
var hours = Math.floor(sec_num / 3600);
var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
var seconds = sec_num - (hours * 3600) - (minutes * 60);
this.hoursString = (hours < 10) ? "0" + hours : hours.toString();
this.minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
this.secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
return this.hoursString + ':' + this.minutesString + ':' +this.secondsString;
}

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Time',
    cssClass: 'my-custom-class',
    buttons: [
      {
        text: '5 นาที',
        role: 'destructive',
        icon: 'stopwatch-outline',
        handler: () => {
          console.log('five clicked');
          this.remainingTime = 300
        },

      },
      {
        text: '10 นาที',
        icon: 'stopwatch-outline',
        handler: () => {
          console.log('ten clicked');
          this.remainingTime = 600
        },
      },
      {
        text: '15 นาที',
        icon: 'stopwatch-outline',
        handler: () => {
          console.log('fifteen clicked');
          this.remainingTime = 900
        },
      },
      {
        text: '20 นาที',
        icon: 'stopwatch-outline',
        handler: () => {
          console.log('twenty clicked');
          this.remainingTime= 1200
        },
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ],
  });
  await actionSheet.present();
  this.ionViewDidEnter();
  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
// this.localNotifications.schedule({
  //       id: 1,
  //       title: 'Hi ionic',
  //       text: 'Single'
  //     });
  //     console.log('bed')
checkbed(){
  this.localNotifications.schedule({
    id: 1,
    title: 'Bedtime Reminder',
    text: 'Bedtime',
  });
}



abcx(){
 console.log(this.docId) ;
}

//ทุกครั้งที่เข้าหน้านี้เริ่มนับเวลา
ionViewDidEnter2() {
  //Call start timer function
 this.remainingTime2 = this.ax;
 this.startTimer2();
}

startTimer2() {
  var counter2 = setTimeout(() => {
    var time2 = this.getTimerClock(this.remainingTime2);
    console.log(time2);
    if (this.remainingTime2 > 0) {
      this.startTimer2();
      this.remainingTime2--;
    }
    else {
       console.log("หมดเวลา");
       this.checkbed()
      clearInterval(counter2);
    }
  }, 1000);
}
//นับถอยหลังแค่ครั้งเดียว
getTimerClock2(inputSeconds2: number) {
var sec_num2 = parseInt(inputSeconds2.toString(), 10);
this.remainingTime2 = sec_num2; //Define variable
var hours2 = Math.floor(sec_num2 / 3600);
var minutes2= Math.floor((sec_num2 - (hours2 * 3600)) / 60);
var seconds2 = sec_num2 - (hours2 * 3600) - (minutes2 * 60);
this.hoursString2 = (hours2 < 10) ? "0" + hours2 : hours2.toString();
this.minutesString2 = (minutes2 < 10) ? "0" + minutes2 : minutes2.toString();
this.secondsString2 = (seconds2 < 10) ? "0" + seconds2 : seconds2.toString();
return this.hoursString2 + ':' + this.minutesString2 + ':' +this.secondsString2;
}
//นับเวลาถอยหลังไปเรื่อยๆ
    loop(){

console.log(this.someString)
let date = new Date()
var sdate= String(date);
var splitted= sdate.split(" ", 5);
var time =splitted[4];
time = time[0]+time[1]+time[2]+time[3]+time[4]
let aa=((24-Number(time[0]+time[1]))*3600
)
let bb=((60-Number(time[3]+time[4]))*60
)

let cc=((24-Number(this.someString[11]+this.someString[12]))*3600
)
console.log(this.someString)
let dd=((60-Number(this.someString[14]+this.someString[15]))*60
)
console.log((aa+bb) ,(cc+dd))
this.xa=Number((aa+bb) -(cc+dd))


this.remainingTime2 = this.xa;
this.startTimer2();
    }

//ส่งข้อมูลไปอีกหน้า docid id ของแต่ละ user
    send(){
      let data1 = {"demo": this.docId,"fav":this.oxx,"sound":this.sound};
      localStorage.setItem('myData',JSON.stringify(data1));
      console.log(this.docId);
    }

}
