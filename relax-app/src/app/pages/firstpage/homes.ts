import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class homets{
    update: any;

    constructor(private db:AngularFirestore){}

    add(tmpdoc: any){
        return this.db.collection('acc').add(tmpdoc);
    }

    check(){
        return this.db.collection('acc').snapshotChanges();
    }

}
