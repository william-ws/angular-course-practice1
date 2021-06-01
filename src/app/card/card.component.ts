import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  titre: string;
  soustitre: string;
  desc: string;
  lien: string;
 
  constructor() {
  this.titre = 'Titre';
  this.soustitre = 'Sous-titre';
  this.desc = 'Description';
  this.lien = 'Lien';
 
   }

  ngOnInit(): void {
  }

}
