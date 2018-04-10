
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/projectsServices';
import { IProjects } from '../project-details/IProject';
@Component({
    moduleId: "ProjectsComponent",
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    development: IProjects[];
    design: IProjects[];

    constructor(private projectService: ProjectService) {
    }

    ngOnInit(): void {
        this.projectService.getDevelopments().subscribe(res => {
            this.development = res;
        });
        this.projectService.getDesigns().subscribe(res => {
            this.design = res;
        });
    }
}

