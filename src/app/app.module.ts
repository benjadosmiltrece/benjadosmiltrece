import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ComoIncentivarAOtrosAAyudarComponent } from './components/como-incentivar-a-otros-a-ayudar/como-incentivar-a-otros-a-ayudar.component';
import { ComoPuedoYoMismoReciclarComponent } from './components/como-puedo-yo-mismo-reciclar/como-puedo-yo-mismo-reciclar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CualesSonLasAreasMasContaminadasComponent } from './components/cuales-son-las-areas-mas-contaminadas/cuales-son-las-areas-mas-contaminadas.component';
import { ForoDeIdeasComponent } from './components/foro-de-ideas/foro-de-ideas.component';
import { PorQueEstoEsUnProblemaComponent } from './components/por-que-esto-es-un-problema/por-que-esto-es-un-problema.component';
import { CrudComponent } from './components/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ComoIncentivarAOtrosAAyudarComponent,
    ComoPuedoYoMismoReciclarComponent,
    ContactoComponent,
    CualesSonLasAreasMasContaminadasComponent,
    ForoDeIdeasComponent,
    PorQueEstoEsUnProblemaComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
