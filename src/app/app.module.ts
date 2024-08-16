import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AppComponent } from './app.component';  // Root component
//import { ChatComponent } from './chat/chat.component';  // Example component

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: []  // Bootstrap your root component
})
export class AppModule {}


