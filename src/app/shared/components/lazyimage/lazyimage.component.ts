import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sahred-lazy-image',
  templateUrl: './lazyimage.component.html',
})
export class LaztimageComponent implements OnInit {
  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('url property is required');
    }

  }
}
