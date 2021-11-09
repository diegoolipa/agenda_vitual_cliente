import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroListComponent} from "./libros/libro-list/libro-list.component";
import {LibroNewComponent} from "./libros/libro-new/libro-new.component";
import {LibroEditComponent} from "./libros/libro-edit/libro-edit.component";
import {UsuarioListComponent} from "./usuario/usuario-list/usuario-list.component";
import {UsuarioNewComponent} from "./usuario/usuario-new/usuario-new.component";
import {UsuarioEditComponent} from "./usuario/usuario-edit/usuario-edit.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'libros',
        component:LibroListComponent
      },
      {
        path:'libros/nuevo',
        component:LibroNewComponent
      },
      {
        path:'libros/:id/editar',
        component:LibroEditComponent
      },
      {
        path:'usuarios',
        component:UsuarioListComponent
      },
      {
        path:'usuarios/nuevo',
        component:UsuarioNewComponent

      },
      {
        path:'usuarios/:id/editar',
        component:UsuarioEditComponent
      }

    ]

  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
