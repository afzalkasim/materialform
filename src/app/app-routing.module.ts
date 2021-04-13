import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatformComponent } from './matform/matform.component';

const routes: Routes = [
  {path:"",component: MatformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
