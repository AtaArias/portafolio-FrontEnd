import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { EducationComponent } from './components/pages/education/education.component';
import { LogInOutComponent } from './components/header-elements/log-in-out/log-in-out.component';
import { LogoDelProgramaComponent } from './components/header-elements/logo-del-programa/logo-del-programa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainWrapperComponent,
    NavComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    LogInOutComponent,
    LogoDelProgramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
