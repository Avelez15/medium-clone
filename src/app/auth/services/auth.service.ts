import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { registerRequestInterface } from '../types/registerRequest.interface'
import { currentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient){}

    register(data: registerRequestInterface): Observable<currentUserInterface>
}
