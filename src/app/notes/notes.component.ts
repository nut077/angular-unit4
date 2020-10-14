import { Component } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-notes',
  template: `
    <app-note-form (formSubmit)="addNote($event)"></app-note-form>
    <app-note-list
      (noteDelete)="deleteNote($event)"
      [notes]="notes"
    ></app-note-list>
  `,
})
export class NotesComponent {
  notes: Note[] = [];

  constructor() {}

  addNote(note: string): void {
    this.notes.push({ id: this.notes.length + 1, body: note });
    console.log(this.notes);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
