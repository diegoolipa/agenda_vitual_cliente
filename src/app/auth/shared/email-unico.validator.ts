import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })
export class EmailUnicoValidator implements AsyncValidator {

  constructor(
    private authService: AuthService
  ) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.authService.verificarEmail(control.value).pipe(
      map((result: any) => (result['exists']) ? { emailExiste: true } : null ),
      catchError(() => of(null))
    )
  }

}
