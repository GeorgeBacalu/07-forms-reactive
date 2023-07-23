import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses: string[] = ["Stable", "Critical", "Finished"];
  defaultStatus: string = "Critical";
  submitted: boolean = false;
  user: { projectName: string, projectStatus: string, email: string } = { projectName: "", projectStatus: "", email: "" };

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      "project": new FormGroup({
        "name": new FormControl(null, Validators.required, CustomValidators.invalidProjectName),
        "status": new FormControl(this.defaultStatus)
      }),
      "email": new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit(): void {
    const { project, email } = this.projectForm.value;
    this.user = { projectName: project.name, projectStatus: project.status, email: email };
    this.submitted = true;
    this.projectForm.reset();
  }

  getProjectNameControl(): AbstractControl<any, any> { return this.projectForm.get("project.name"); }

  getEmailControl(): AbstractControl<any, any> { return this.projectForm.get("email"); }
}
