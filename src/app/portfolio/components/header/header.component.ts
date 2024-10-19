import { Component, EventEmitter, HostListener, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { HeaderButtons, Icon } from '../../interfaces/interfaces';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  private _clipboard = inject(Clipboard);
  private readonly EMAIL = 'delcaos12@gmail.com'

  @Input()
  public isActive: boolean = false;
  @Output()
  public onScrollEvent = new EventEmitter<string>();
  // public icons: Icon[] = [ 'fi fi-brands-linkedin', 'fi fi-brands-github', 'fi fi-ss-at' ]
  public icons: Icon[] = [
    { name: 'fi fi-brands-linkedin', attr: "LinkedIn" },
    { name: 'fi fi-brands-github', attr: 'Github' },
    { name: 'fi fi-ss-at', attr: `Copiar: ${ this.EMAIL }` }
  ];
  public items: HeaderButtons[] = [
    { name: 'About', isActive: false }, 
    { name: 'Experience', isActive: false },
    { name: 'Projects', isActive: false }
  ];

  copyEmail(index: number):void {
    if(index === 2) this._clipboard.copy(this.EMAIL);
    this.changeAttrValue();
  }

  private changeAttrValue():void {
    this.icons[2].attr = 'Copiado!'
    
    setTimeout(() => {
      this.icons[2].attr = `Copiar: ${ this.EMAIL }`;
    }, 2000);

  }

  scrollTo(index: number): void {
    const scrollToValue = this.items[index].name.toLowerCase();
    // console.log(this.items[index]);
    this.onScrollEvent.emit(scrollToValue);
    this.setClassName(index);
  }

  private setClassName(index: number): void {
      this.items = this.items.map(item => { 
        item.isActive = false;
        return item;
      });

      this.items[index].isActive = true;
  }

}
