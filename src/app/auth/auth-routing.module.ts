import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {IndexComponent} from "./index/index.component";
import {LibrosComponent} from "./libros/libros.component";
import {DetallesLibroComponent} from "./detalles-libro/detalles-libro.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {DetallesVentaComponent} from "./detalles-venta/detalles-venta.component";


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:IndexComponent
      },
      {
        path:'libros',
        component:LibrosComponent
      },
      {
        path:'libros/:slug',
        component:DetallesLibroComponent
      },
      {
        path:'carrito',
        component:CarritoComponent
      },
      {
        path:'detalles-venta/:id',
        component:DetallesVentaComponent
      }


    ]

  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
