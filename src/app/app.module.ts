import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
import { BackendService } from './dbz/services/backend.service';
import { PHPBackendService } from './dbz/services/php/php-backend-service';
import { FlaskBackendService } from './dbz/services/flask/flask-backend-service';
import { NodejsBackendService } from './dbz/services/nodejs/nodejs-backend-service';


export function getBackendService(backend:string){
  switch(backend){
    case 'PHP':
      return new PHPBackendService(backend);
    case 'FLASK':
      return new FlaskBackendService(backend);
      case 'NODEJS':
        return new NodejsBackendService(backend);
    default:
      throw new Error('Backend no soportado');
  }
  
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers:[
    {
      provide: 'backend',
      useValue: 'NODEJS'
    },
    {
      provide:BackendService,
      deps:['backend'],
      useFactory: getBackendService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
