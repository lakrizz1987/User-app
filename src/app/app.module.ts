import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataContextService } from './data-context.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserInputComponent,
    UserEditComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PopUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DataContextService],
  bootstrap: [AppComponent]
})

export class AppModule { }
