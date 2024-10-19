import { Component, inject, Input } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable } from 'rxjs';
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  private _portfolioService = inject(PortfolioService);

  @Input()
  public isActive: boolean = false;

  get projects$(): Observable<Project[] | null> {
    return this._portfolioService.projects$;
  }

  getImg(name: string): string {
    return `../../../../assets/${ name }`;
  }
}
