
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const authToken = this.authService.getAuthorizationToken();
            req = req.clone({
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Authorization',  `Token ${authToken}`)
               
                }
            );
            
        }
        return next.handle(req);
    }
}
