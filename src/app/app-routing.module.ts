import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdemComponent} from './pages/ordem/ordem.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ordem',
    pathMatch: 'full'
  },
  {
    path: 'ordem',
    component: OrdemComponent,

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
