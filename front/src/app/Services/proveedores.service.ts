import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproveedor } from '../Interface/iproveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';

  constructor(private cliente: HttpClient) { }

  todos(): Observable<Iproveedor[]>{
    return this.cliente.get<Iproveedor[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Iproveedor> {
    var proveedores = new FormData();
    return this.cliente.post<Iproveedor>(this.urlBase + 'uno', proveedores);
  }

  insertar(proveedor: Iproveedor): Observable<any> {
    var provee = new FormData();
    provee.append('nombres', proveedor.Nombres);
    provee.append('telefono', proveedor.Telefono);
    provee.append('correo', proveedor.Correo);
    return this.cliente.post(this.urlBase + 'insertar', provee);
  }

  actualizar(proveedor: Iproveedor): Observable<any> {
    var provee = new FormData();
    provee.append('id', proveedor.ProveedorId.toString());
    provee.append('nombres', proveedor.Nombres);
    provee.append('telefono', proveedor.Telefono);
    provee.append('correo', proveedor.Correo);
    return this.cliente.post(this.urlBase + 'actualizar', provee);
  }
  
  eliminar(id: number): Observable<any> {
    var provee = new FormData();
    provee.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', provee);
  }
}
