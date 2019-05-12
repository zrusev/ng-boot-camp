import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/list'},
    { path: 'add', component:  AddItemComponent},
    { path: 'list', component:  ListAllComponent},
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}