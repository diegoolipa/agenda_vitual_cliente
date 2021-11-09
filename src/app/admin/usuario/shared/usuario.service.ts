import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/api/usuarios');
  }

  get(id:number){
    return this.http.get(`http://localhost:8080/api/usuarios/${id}`)
  }

  create(usuario:any){
    return this.http.post('http://localhost:8080/api/usuarios',usuario)
  }

  update(id:number, usuario:any){
    return this.http.put(`http://localhost:8080/api/usuarios/${id}`,usuario)
  }
  delete(id:number){
    return this.http.delete(`http://localhost:8080/api/usuarios/${id}`)
  }
}
