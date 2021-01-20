import { AfterViewInit, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Character } from './character.module';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, AfterViewInit {
  characters = [];
  character: Character;
  characterDialog: boolean;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.charactersService
      .getCharacters()
      .pipe(delay(0))
      .subscribe((characters) => {
        this.characters = characters.results;
      });
  }
  showCharacterDetails(character: Character) {
    this.character = character;
    this.characterDialog = true;
  }
}
