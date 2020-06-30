import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {
  
  formIngreso: FormGroup;
  valoresTabla:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.formIngreso = new FormGroup({
      chip: new FormControl('', Validators.required)
    })
  }

  onClick() {
    this.valoresTabla = this.formIngreso.get('chip').value
    this.formIngreso.reset();
    console.log(this.valoresTabla);
  }

}
