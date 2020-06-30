// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { CharacterComponent } from './components/character/character.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ManualComponent } from './components/manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterComponent,
    SidebarComponent,
    ManualComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
    ListboxModule,
    ReactiveFormsModule,
    SidebarModule,
    DropdownModule,
    ChipsModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
