import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character, Result } from '../../interfaces/character.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { filter} from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characters: Result[] = [];
  total: number = 0;
  displaySidebar: boolean = false;
  dic = new Map<string, string>();



  constructor(
    private charService: CharactersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(({nombre}) => {
      if(nombre) {
        this.dic.clear();
        this.dic.set('nameStartsWith', nombre);
      }
      this.cargarResultados({ page: 0, rows: 8 });
    });

  }

  cargarResultados({ page, rows }) {
    this.dic.set('limit', rows);
    this.dic.set('offset', page);
    this.charService.getCharacters(this.dic).subscribe((r) => {
      this.characters = r.data.results;
      this.total = r.data.total;
    });
  }

  recibirParametro({ field }) {
    this.dic.clear();
    if (field) this.dic.set('orderBy', field);
    this.cargarResultados({ page: 0, rows: 8 });
  }

  verMas(id: number) {
    this.router.navigate(['/character', id]);
  }
}
