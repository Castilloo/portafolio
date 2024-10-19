import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';
import { Experience } from '../../interfaces/interfaces';

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],

})
export class ExperienceComponent {

  private _portfolioService = inject(PortfolioService);

  @Input()
  public isActive: boolean = false;
  public hoverIndex?: number;

  setHover(index: number | undefined): void {
    this.hoverIndex = index;
  }

  isHover(index: number): boolean {
    return index === this.hoverIndex;
  }

  get experiences$(): Observable<Experience[] | null> {
    return this._portfolioService.experience$;
  }

  getMonthsAndYears(initDate: string, endDate: string): string {
    const init = new Date(initDate);
    const end = new Date(endDate);

    return `${ this.parseDateToString(init) } - ${ this.parseDateToString(end) }`;
  }

  private parseDateToString(date: Date): string {
    return `${ date.toLocaleString('sp-SP', { month: 'numeric' }) }/${ date.toLocaleString('sp-SP', { year: '2-digit' }) }`;
  }
}
