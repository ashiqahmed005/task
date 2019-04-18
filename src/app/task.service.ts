import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class TaskService {
accountUrl: any;

  private _url = 'https://gsmtasks.com/api/tasks/tasks/';
  constructor(private http: HttpClient) { }
    // ,

  /** GET tasks from the server */

  getTasks(): Observable<any> {
    return this.http.get(this._url)
    
  }
  getTaskAccoutUrl(): Observable<any>{
    return this.http.get("https://gsmtasks.com/api/tasks/accounts/")
  }



  //////// Save methods //////////



addTask (task: { category: string; address: any; }): Observable<any> {
  
    return this.getTaskAccoutUrl().pipe(
      switchMap(data => {
        this.accountUrl = data[0].url;
        console.log(this.accountUrl);
        const body = {
          account: this.accountUrl,
          category: task.category,
          address: task.address,
        };
        //console.log(body);
        return this.http.post<any>(this._url,body);
      })
    )
  



//   console.log(addero.address);
//   let data = {
//     task: addero.address
//   }
//   console.log(data);
//  return this.http.post<any>(this._url).pipe(
  // tap(data => console.log('All: ' + JSON.stringify(data))),
  //  catchError(this.handleError));
  //this.taskAdded.emit(this.getEmployees);
  // .pipe(
  //  // tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //   catchError(this.handleError<Hero>('addHero'))
  // );
}




  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TaskService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`TaskService: ${message}`);
  // }
}
