import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../shared/usuario.service";

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario:any;
  constructor(
    private usuarioService:UsuarioService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id=parseInt(this.route.snapshot.paramMap.get('id')!);
    this.usuarioService.get(id)
      .subscribe((data:any)=>this.usuario=data);
  }

  update(){
    this.usuarioService.update(this.usuario.id, this.usuario)
      .subscribe((data)=>this.router.navigate(['admin/usuarios']))
  }

}
