
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: "AboutComponent",
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    onResume(){
        window.open("./assets/resume/UX_UI_DesignerDeveloper.docx", "_blank");
    }
}

