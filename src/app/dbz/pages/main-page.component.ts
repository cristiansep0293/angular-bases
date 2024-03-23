import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

constructor(private dbzService: DbzService) { }

get listMain(): Character[] {
  return [...this.dbzService.listMain];
}

deleteCharacterById(id: string):void {
  this.dbzService.deleteCharacterById(id);
}

addCharacter(character: Character):void {
  this.dbzService.addCharacter(character);
}

}
