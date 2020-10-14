import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note',
  template: `<li>
    {{ note.body }}
    <button (click)="deleteNote()">delete</button>
  </li>`,
})
export class NoteComponent {
  @Input() note: Note;
  @Output() noteDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  deleteNote(): void {
    this.noteDelete.emit(this.note.id);
  }
}
