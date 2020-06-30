import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  dropForm: FormControl;
  filtros;
  @Input() display: boolean;
  @Output() closeChanged = new EventEmitter<boolean>();
  @Output() filtro = new EventEmitter();

  constructor() { 

    this.filtros = [
      {name: 'Nombre', field: 'name'},
      {name: 'Modificación', field: 'modified'},
      {name: '[Dsc]Nombre', field: '-name' },
      {name: '[Dsc]Modificacion', field: '-modified'},
    ]
  }

  ngOnInit(): void {
    this.dropForm = new FormControl();
  }

  onSubmit(){
    this.filtro.emit(this.dropForm.value);
    this.onClose();
  }

  onReset(){
    this.dropForm.reset();
    this.filtro.emit({field: ''});
    this.onClose();
  }

  onClose(){
    this.display = false;
    this.closeChanged.emit(false);
  }

}
