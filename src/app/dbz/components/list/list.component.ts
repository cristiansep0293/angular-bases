import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public listCharacters: Character[] = [{
    name: 'Goku',
    power: 9500
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacterById(id?: string):void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }

}
