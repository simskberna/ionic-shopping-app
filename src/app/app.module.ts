import { environment } from './../environments/environment.prod';
import { BackendInterceptor } from './services/backend.interceptor';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreen } from '@capacitor/core';
import { FilterMenuComponent } from './Components/filter-menu/filter-menu.component';
import { IonicStorageModule } from  '@ionic/storage-angular';
import firebaseConfig from './firebase';
import {AngularFireModule} from  '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
