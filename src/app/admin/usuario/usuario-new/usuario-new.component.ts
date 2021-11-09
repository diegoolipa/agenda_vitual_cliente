import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../shared/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {

  usuario={
    nombres:'',
    apellidos:'',
    email:'',
    password:'',
  }
  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  create(){
    this.usuarioService.create(this.usuario)
      .subscribe(data=>{
        this.router.navigate(['admin', 'usuarios'])
      });
  }

}
