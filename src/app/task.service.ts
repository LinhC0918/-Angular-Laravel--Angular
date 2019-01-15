import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Itask} from './itask';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private readonly API_URL = 'http://localhost:8000/api/tasks';

    constructor(private http: HttpClient) {
    }

    getTask(): Observable<Itask[]> {
        return this.http.get<Itask[]>(this.API_URL);
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

    addTask(task: Partial<Itask>): Observable<Itask> {
        return this.http.post<Itask>(this.API_URL, task);
    }
}
