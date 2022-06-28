import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class homets{
    update: any;
    data1:any
    docId:String;
    constructor(private db:AngularFirestore){}

    add(tmpdoc: any){
        return this.db.collection('acc').add(tmpdoc);
    }

    check(){
      this.data1 = JSON.parse(localStorage.getItem('myData'));
      console.log(this.data1);
      this.docId= this.data1.demo
        return this.db.collection('acc').snapshotChanges();
    }

}
