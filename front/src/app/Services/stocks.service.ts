import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../Interface/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';

  constructor(private cliente: HttpClient) { }

  todos(): Observable<Stock[]>{
    return this.cliente.get<Stock[]>(this.urlBase + 'todos');
  }

  uno(id: number): Observable<Stock> {
    var stocks = new FormData();
    return this.cliente.post<Stock>(this.urlBase + 'uno', stocks);
  }

  insertar(stock: Stock): Observable<any> {
    var st = new FormData();
    st.append('productoid', stock.ProductoId.toString());
    st.append('proveedorid', stock.ProveedorId.toString());
    st.append('cantidad', stock.Cantidad.toString());
    st.append('precio', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', st);
  }

  actualizar(stock: Stock): Observable<any> {
    var st = new FormData();
    st.append('productoid', stock.ProductoId.toString());
    st.append('proveedorid', stock.ProveedorId.toString());
    st.append('cantidad', stock.Cantidad.toString());
    st.append('precio', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', st);
  }
  
  eliminar(id: number): Observable<any> {
    var st = new FormData();
    st.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', st);
  }
}
