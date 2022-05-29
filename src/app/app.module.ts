import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import {  MatFormFieldModule } from '@angular/material/form-field'
import {  MatButtonModule } from '@angular/material/button'
import { routing } from './approuting';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { StorageComponent } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    routing
  ],
  providers: [
    {provide: BUCKET, useValue: environment.firebase.storageBucket}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
