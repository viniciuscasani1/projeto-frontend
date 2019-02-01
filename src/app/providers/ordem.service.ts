import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrdemService{

    constructor(private http: HttpClient) {
    }

    url = 'http://localhost:8080/api/ordem';

    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    create(ordem) {
        console.log(ordem);
        return this.http.post(this.url, ordem);
    }
}
