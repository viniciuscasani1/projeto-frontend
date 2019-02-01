import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  url = environment.api_path + '/ordem';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  create(ordem) {
    console.log(ordem);
    return this.http.post(this.url, ordem);
  }
}
