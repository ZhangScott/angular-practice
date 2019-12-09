import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class UniqueAlterEgoValidator implements AsyncValidator {
    constructor(private heroesService: HeroesService) {

    }

    validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
            map(isTaken => (isTaken ? {uniqueAlterEgo: true} : null)),
            catchError(() => null)
        );
    }
}


interface HeroesService {
    isAlterEgoTaken: (alterEgo: string) => Observable<boolean>;
}