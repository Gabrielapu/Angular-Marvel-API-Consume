import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  buscarForm: FormControl;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buscarForm = new FormControl('', Validators.required);
  }

  onSubmit() {
    if (this.buscarForm.valid) {
      /* this.router.navigate(['/characters', this.buscarForm.value]); */

  

      this.router.navigate(['/characters'], { queryParams: { nombre: this.buscarForm.value } })
      this.buscarForm.reset();
    }
  }
}
