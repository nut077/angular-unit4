import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-form',
  template: `
    <input type="text" name="note" [(ngModel)]="note" />
    <button type="submit" (click)="addNote($event)">add</button>
  `,
})
export class NoteFormComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter<string>();
  note = '';

  constructor() {}

  addNote(event): void {
    event.preventDefault();
    this.formSubmit.emit(this.note);
    this.note = '';
  }
}
