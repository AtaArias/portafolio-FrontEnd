import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { EducationComponent } from './components/pages/education/education.component';
import { ExpercienceComponent } from './components/pages/expercience/expercience.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SkillsComponent } from './components/pages/skills/skills.component';

const routes: Routes = [
  {
    path:'About',
    component: AboutMeComponent
  },
  {
    path:'Skills',
    component: SkillsComponent
  },
  {
    path:'Experience',
    component: ExpercienceComponent
  },
  {
    path:'Education',
    component: EducationComponent
  },
  {
    path:'Projects',
    component: ProjectsComponent
  },
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
