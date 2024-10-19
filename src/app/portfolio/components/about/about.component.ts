import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { About, Portfolio, UrlNameImg } from '../../interfaces/interfaces';
import { PortfolioService } from '../../services/portfolio.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{
  
  private _portfolioService = inject(PortfolioService);
  private _getAbout$?: Subscription;
  
  @Input()
  public isActive: boolean = false;
  public dataAbout: About | null = null;

  ngOnInit(): void {
    this.getAbout();
  }

  ngOnDestroy(): void {
    this._getAbout$?.unsubscribe();
  }
  
  getUrlImg(name: string): string {
    return `../../../../assets/${ name }`;
  }

  private getAbout() {
    this._getAbout$ = this._portfolioService.about$.subscribe(about => {
      if(about) this.dataAbout = about[0];
    });
  }

}
