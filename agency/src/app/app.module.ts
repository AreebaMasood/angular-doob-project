import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BannerComponent } from './modules/common/banner/banner.component';
import { ServicesComponent } from './modules/common/services/services.component';
import { AboutComponent } from './modules/common/about/about.component';
import { PortfolioComponent } from './modules/common/portfolio/portfolio.component';
import { BlogComponent } from './modules/common/blog/blog.component';
import { ContactComponent } from './modules/common/contact/contact.component';
import { FooterComponent } from './modules/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
