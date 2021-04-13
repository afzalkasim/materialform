import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matform',
  templateUrl: './matform.component.html',
  styleUrls: ['./matform.component.scss']
})
export class MatformComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      clientName : ["",Validators.required],
      projectName: ["",Validators.required],
      projectType: ["",Validators.required],
      projectDescription: ["",Validators.required],
      projectManager : ["",Validators.required],
      startDate: ["",Validators.required],
      endDate: ["",Validators.required]
    
  })
  }

}
