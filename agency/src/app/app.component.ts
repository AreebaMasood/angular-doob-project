import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("slickModal", { static: true })
  slickModal!: SlickCarouselComponent;
  @ViewChild("slickModal2", { static: true })
  slickModal2!: SlickCarouselComponent;
  @ViewChild("slickModal3", { static: true })
  slickModal3!: SlickCarouselComponent;
  title = 'agency';

  constructor(
   
  ) { }

  ngOnInit(): void {
  
  }



  // Slider Cats
  slideConfig = {
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
  slideConfig2 = {
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
  next() { this.slickModal.slickNext();
    this.slickModal2.slickNext(); }
  prev() { this.slickModal.slickPrev();
    this.slickModal2.slickPrev(); }
    next3() { this.slickModal3.slickNext();
      this.slickModal3.slickNext(); }
    prev3() { this.slickModal3.slickPrev();
      this.slickModal3.slickPrev(); }


  // next1() { this.slickModal2.slickNext(); }
  // prev2() { this.slickModal2.slickPrev(); }
}
