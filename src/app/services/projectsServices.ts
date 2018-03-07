import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { IProjects } from '../project-details/IProject';


@Injectable()
export class ProjectService {

    constructor(private http: Http) { }

    private _productURL = 'assets/api/invitation-notification.json';
    getProducts() {
        return this.http.get(this._productURL)
            .map((response: Response) => <IProjects[]>response.json());
    }
}