import { Inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable()
export abstract class BackendService {

  backend:string|undefined = undefined;
  protected backendUrl:string|undefined = undefined;
  protected listDataEndpoint:string|undefined = undefined;
  protected newDataEndpoint:string|undefined = undefined;
  protected deleteDataEndpoint:string|undefined = undefined;

  constructor(backend:string) {
    this.init(backend);
  }

  abstract init(backend:string):void;

  abstract getListUrl():string;

  abstract getNewDataUrl():string;

  abstract getDeleteDataUrl(id:number):string;
}
