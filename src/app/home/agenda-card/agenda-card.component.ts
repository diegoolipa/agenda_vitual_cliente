import {Component, Input, OnInit} from '@angular/core';
import {Libro} from "../../admin/libros/shared/libro.model";
import {HomeService} from "../shared/home.service";
import {CarritoService} from "../shared/carrito.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-libro-card',
  templateUrl: './libro-card.component.html',
  styleUrls: ['./libro-card.component.css']
})
export class LibroCardComponent implements OnInit {

  @Input() libro!:Libro;
  constructor(
    private homeService:HomeService,
    private carritoServise:CarritoService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  agregaraACarrito(libro:Libro){
    this.carritoServise.agregarItem(libro);
    this.snackBar.open('Iten agregado al carrito','Cerrar',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    })
  }

  libroYaEstaAgregado(libro:Libro){
    return this.carritoServise.itemYaExiste(libro);
  }
}
