import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public listMain: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Trunks',
    power: 20
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  public addCharacter(character: Character):void {
    const newcharacter: Character = { id: uuid(), ...character };
    this.listMain.push(newcharacter);
  }

  public deleteCharacterById(id: string):void {
    this.listMain = this.listMain.filter(x => x.id !== id);
  }
}
