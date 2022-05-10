import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild("slickModal3", { static: true })
  slickModal3!: SlickCarouselComponent;

  constructor() { }

  ngOnInit(): void {}
    slideConfig3 = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 15000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    next3() { this.slickModal3.slickNext();
      this.slickModal3.slickNext(); }
    prev3() { this.slickModal3.slickPrev();
      this.slickModal3.slickPrev(); }
  

}
