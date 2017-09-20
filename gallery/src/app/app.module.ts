import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from "./navbar/navbar.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ImageService} from "./images/shared/image.service";
import {ImageFilterPipe} from "./images/shared/filter.pipe";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../routes";
import {ImageDetailComponent} from "./images/image-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
