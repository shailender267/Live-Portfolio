import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFound } from './PageNotFound/error-page.component';

const routes: Routes = [
    { path: 'skill', component: SkillComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'project-details/:project-name', component: ProjectDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'pageNotFound', component: PageNotFound }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
