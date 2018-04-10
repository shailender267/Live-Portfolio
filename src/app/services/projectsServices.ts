import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { IProjects } from '../project-details/IProject';


@Injectable()
export class ProjectService {

    constructor(private http: Http) { }

    private developmentURL = './assets/api/development.json';
    private designURL = './assets/api/design.json';

    getDevelopments() {
        return this.http.get(this.developmentURL)
            .map((response: Response) => <IProjects[]>response.json());
    }
    getDesigns() {
        return this.http.get(this.designURL)
            .map((response: Response) => <IProjects[]>response.json());
    }
}