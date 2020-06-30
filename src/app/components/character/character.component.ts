import { Component, OnInit } from '@angular/core';
import { Result, Character } from '../../interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character: Result;
  content: any;
  lista: any[];

  isReady: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) {
    this.lista = [
      { name: 'Comics', field: 'comics' },
      { name: 'Series', field: 'series' },
      { name: 'Cuentos', field: 'stories' },
      { name: 'Eventos', field: 'events' },
    ];
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.charactersService.getCharacter(params.id).subscribe((r) => {
        this.character = r.data.results.find((x) => (x.id = params.id));

        this.lista.forEach((v, i) => {
          if(!this.character[v.field].available) {
            this.lista.splice(i, 1);
          }
        });

        this.isReady = true;
      });
    });
  }

  onClick({ field }) {
    this.content = this.character[field].items;
  }
}
