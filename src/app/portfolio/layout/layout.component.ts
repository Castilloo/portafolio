import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'portfolio-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  public isActive: boolean = false;

  ngOnInit(): void {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: Event) {
    this.checkWindowSize();
  }

  private checkWindowSize(): void {
    const width = window.innerWidth;
    if(width >= 1024){
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  scrollTo(value : string):void {
    const element = document.getElementById(value);
    // console.log(element);
    
    if(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
