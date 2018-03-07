import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';

import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { ProjectService } from './services/projectsServices';
import { PageNotFound } from './PageNotFound/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectDetailsComponent,
    ContactComponent,
    AboutComponent,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
