import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteFormComponent } from './notes/note-form.component';
import { NoteListComponent } from './notes/note-list.component';
import { NoteComponent } from './notes/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteFormComponent,
    NoteListComponent,
    NoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
