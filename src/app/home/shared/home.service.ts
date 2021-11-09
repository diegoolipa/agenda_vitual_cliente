import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Libro, LibroPage} from "../../admin/libros/shared/libro.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiBase: string = environment.apiBase;

  constructor(
    private http : HttpClient
  ) { }

  getUltimosLibros(){
    return this.http.get<Libro[]>(this.apiBase+'/ultimos-libros');
  }

  getLibros(page:number=0,size:number=6){

    let params = new HttpParams();
    params=params.append('page',page);
    params=params.append('size',size);
    params=params.append('sort','fechaCreacion,desc')

    return this.http.get<LibroPage>(this.apiBase+'libros',{params});
  }


  getLibro(slug:string){
    return this.http.get<Libro>(this.apiBase+'/libros/'+slug);
  }
}
