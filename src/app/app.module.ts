import { NgModule } from '@angular/core';
import { NgModel } from'@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { rootRouterConfig } from './app.routes';
import { AboutComponent } from './about/about.component';
import { SkillzComponent } from './skillz/skillz.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillzComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: "/home", pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'skills', component: SkillzComponent},
      {path: 'projects', component: ProjectsComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
