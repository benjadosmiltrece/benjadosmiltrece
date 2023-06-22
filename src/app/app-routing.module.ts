import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PorQueEstoEsUnProblemaComponent } from './components/por-que-esto-es-un-problema/por-que-esto-es-un-problema.component';
import { ComoIncentivarAOtrosAAyudarComponent } from './components/como-incentivar-a-otros-a-ayudar/como-incentivar-a-otros-a-ayudar.component';
import { ComoPuedoYoMismoReciclarComponent } from './components/como-puedo-yo-mismo-reciclar/como-puedo-yo-mismo-reciclar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CualesSonLasAreasMasContaminadasComponent } from './components/cuales-son-las-areas-mas-contaminadas/cuales-son-las-areas-mas-contaminadas.component';
import { ForoDeIdeasComponent } from './components/foro-de-ideas/foro-de-ideas.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'como-incentivar-a-otros-a-ayudar', component: ComoIncentivarAOtrosAAyudarComponent },
  { path: 'como-puedo-yo-mismo-reciclar', component: ComoPuedoYoMismoReciclarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cuales-son-las-areas-mas-contaminadas', component: CualesSonLasAreasMasContaminadasComponent },
  { path: 'foro-de-ideas', component: ForoDeIdeasComponent },
  { path: 'por-que-esto-es-un-problema', component: PorQueEstoEsUnProblemaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
