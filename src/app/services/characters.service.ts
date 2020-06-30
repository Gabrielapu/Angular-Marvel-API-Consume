import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Character, Result } from '../interfaces/character.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  
  getCharacters(dic: Map<string, string>) {
    let params = new HttpParams();
    dic.forEach((value, key) => params = params.set(key, value));
    return this.http.get<Character>(environment.apiUrl + '/characters', {params});
  }

  getCharacter(id: number) {
    return this.http.get<Character>(environment.apiUrl + `/characters/${id}`);
  }

}
