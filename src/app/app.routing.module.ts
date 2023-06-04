import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ConversorComponent } from './conversor/conversor.component';

const routes: Routes = [
  { path: '', component: ConversorComponent },
  { path: 'conversor', component: ConversorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
