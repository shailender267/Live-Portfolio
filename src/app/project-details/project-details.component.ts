
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/projectsServices';
import { IProjects } from './IProject';

@Component({
    moduleId: "ProjectDetailsComponent",
    selector: 'project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
    project: IProjects;
    projectName: string;
    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    }

    ngOnInit() {
        if (this.route.snapshot != undefined && this.route.snapshot.params != undefined) {
            this.getProjectDetails(this.route.snapshot.params['project-name']);
        }
    }

    getProjectDetails(projectName: string) {
        this.projectName = projectName;
        this.projectService.getProducts().subscribe(res => {
            this.project = res.find(x => x.name == projectName);
            console.log(this.project)
        });
    }

    onNavigate(){
        window.open(this.project.moreDetails, "_blank");
    }
}

