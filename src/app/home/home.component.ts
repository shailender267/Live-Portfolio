
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: "HomeComponent",
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    onResume(){
        window.open("./assets/resume/UX_UI_DesignerDeveloper.docx", "_blank");
    }
}

