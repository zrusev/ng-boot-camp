import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoServiceService } from './todo-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { ListAllComponent } from './list-all/list-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    AddItemComponent,
    ListAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: TodoServiceService,
      useClass: TodoServiceService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
