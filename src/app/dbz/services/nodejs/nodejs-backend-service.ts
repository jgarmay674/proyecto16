import { environment } from "../../environment/environment";
import { BackendService } from "../backend.service"


export class NodejsBackendService extends BackendService{

    constructor(backend:string){
        super(backend);
    }
    
    override init(backend: string): void {
        this.backend = backend;
        this.backendUrl = environment.backendUrl+`:${environment.backendPort}`;
        this.listDataEndpoint = '/leer';
        this.newDataEndpoint = '/grabar';
        this.deleteDataEndpoint = '/borrar';
    }

    public getListUrl():string{
        if(this.backendUrl && this.listDataEndpoint)
          return `${this.backendUrl + this.listDataEndpoint}`;
        throw new Error('No se ha iniciado el servicio');
      }
    
      public getNewDataUrl():string{
        if(this.backendUrl && this.newDataEndpoint)
          return `${this.backendUrl + this.newDataEndpoint}`;
        throw new Error('No se ha iniciado el servicio');
      }
    
      public getDeleteDataUrl(id:number):string{
        if(this.backendUrl && this.deleteDataEndpoint)
          return `${this.backendUrl + this.deleteDataEndpoint}/${id}`;
        throw new Error('No se ha iniciado el servicio');
      }
}