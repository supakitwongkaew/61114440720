import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { HTTP } from '@awesome-cordova-plugins/http/ngx';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HttpClientModule ,BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [HTTP,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },StreamingMedia,LocalNotifications,Device,BackgroundMode],
  bootstrap: [AppComponent],
})
export class AppModule {}
