import { Component, OnInit,NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';

const MaterialComponents= [
       MatButtonModule
];
@NgModule({
  imports :[MaterialComponents],
  exports :[MaterialComponents]
})
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})

export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
