import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrdemComponent} from './pages/ordem/ordem.component';
import {ModalOrdemComponent} from './pages/modal-ordem/modal-ordem.component';
import {MatDialogModule, MatIconModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdemComponent,
    ModalOrdemComponent
  ],
  entryComponents: [ModalOrdemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
