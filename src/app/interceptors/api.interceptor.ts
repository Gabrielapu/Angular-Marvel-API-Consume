import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone(
        { setParams : {
            'apikey': '03db8af707f25e47c29c2a4104021095',
            'hash': '54858e8316c4a7322d8282c6e72d73f1',
            'ts': '3000'
        }}
    );
    
    return next.handle(req);
  }
}
