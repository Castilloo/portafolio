import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonsComponent } from './components/buttons/buttons.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class PortfolioModule { }
