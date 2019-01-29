import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit-cesta.component.html',
  styleUrls: ['./edit-cesta.component.css']
})
export class EditComponent implements OnInit {

  foods: Food[] = [
    {value: '60', viewValue: 'Estacionamento Polis'},
    {value: '66', viewValue: 'Estacionamento Angeloni'}
  ];

  value;
  breakpoint;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
