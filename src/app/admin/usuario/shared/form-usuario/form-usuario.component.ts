import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  // usuario={
  //   nombres:'',
  //   apellidos:'',
  //   email:'',
  //   password:'',
  //   rol:''
  // }
  loading:boolean=false;
  form!: FormGroup;


  @Input() usuario?:any;
  @Output() onSave:EventEmitter<any> = new EventEmitter()

  constructor(
    private usuarioService:UsuarioService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
        nombres:
          [this.usuario?.nombres,
            [Validators.required,
              Validators.minLength(3),
              Validators.maxLength(250)]
          ],
        apellidos:
          [this.usuario?.apellidos,
            [Validators.required,
              Validators.minLength(3),
              Validators.maxLength(250)]
          ],
        email:
          [this.usuario?.email,
            [Validators.required]
          ],
        password:
          [this.usuario?.password,
            [Validators.required]
          ],
        rol:
          [this.usuario?.rol,
            [Validators.required]
          ]

      }
    )
  }
  enumKeys = [
    {name:'ADMIN'},
    {name:'LECTOR'}
  ]

  save(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.onSave.emit(this.form.value);
  }

}
