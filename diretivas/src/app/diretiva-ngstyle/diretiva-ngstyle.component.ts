import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit{

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor(){}

  ngOnInit(): void {

  }

  mudarEstilo(){
    this.ativo = !this.ativo;
    this.tamanhoFonte = this.tamanhoFonte == 10 ? 14 : 10;
  }

}
