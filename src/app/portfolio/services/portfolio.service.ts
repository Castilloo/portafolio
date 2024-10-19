import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, catchError, of, shareReplay, first, take } from 'rxjs';
import { About, Experience, Portfolio, Project } from '../interfaces/interfaces';

@Injectable({providedIn: 'root'})
export class PortfolioService {
    
    private readonly DATA_URL = '../../../assets/data/data.json';

    private _data$ = new Observable<Portfolio | null>;

    constructor(private _http: HttpClient) {
        this._data$ = this._http.get<Portfolio | null>(this.DATA_URL).pipe(
            catchError(err => {
                console.error('Error al cargar los datos:', err);
                return of(null);
            }),
            shareReplay(1),
            // tap(data => console.log("Datos: ", data),
        );
    }

    get about$(): Observable<About[] | null> {
        return this.getDataProperty$('about');
    }

    get experience$(): Observable<Experience[] | null> {
        return this.getDataProperty$('experiencies');
    }

    get projects$(): Observable<Project[] | null> {
        return this.getDataProperty$('projects');
    }

    private getDataProperty$<T>(property: keyof Portfolio): Observable<T | null> {
        return this._data$.pipe(
            map(data => (data![property] ?? null) as T | null ),
            catchError(err => of(null)), 
        );
    } 

}