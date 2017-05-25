import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-note-form',
    template: `
      <form>
        <input type="text" name="note" [(ngModel)]="note"/>
        <button type="submit" (click)="addNote($event)">add</button>
      </form>
    `
})
export class NoteFormComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();
  note = '';
  addNote(event: MouseEvent) {
    event.preventDefault();
    this.formSubmit.emit(this.note);
    this.note = '';
  }
}
