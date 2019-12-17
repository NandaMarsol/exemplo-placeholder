import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  dados: User[];
  constructor( ) { }

  ngOnInit() {
  }

  buscatudo(){

  }

}
