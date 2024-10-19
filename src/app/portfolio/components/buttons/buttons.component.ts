import { Component, Input } from '@angular/core';
import { Language } from '../../interfaces/interfaces';

@Component({
  selector: 'portfolio-buttons',
  template: `
  <div class="langs">
    <button class="btn" *ngFor="let lang of languages.split(',')">{{ lang }}</button>
  </div>`,
  styleUrls: [ './buttons.component.css' ]
})
export class ButtonsComponent {

  @Input()
  public languages: string = '';
}
