import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Characters } from './character.module';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {}

  getCharacters(){
    return this.http.get<Characters>(`${environment.api}/people/`);
  }
}
