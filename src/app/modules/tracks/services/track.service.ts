import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StaticSymbol } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/TrackModel';
// import { resolve } from 'dns';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  private skipById(listTrack: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTrack.filter((a) => a._id !== id);
      resolve(listTmp);
    });
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      tap((data) => console.log(data)),
      catchError((err) => {
        return of([]);
      })
      /* map(dataRevertida => {
        return dataRevertida.filter(track:TrackModel => track._id != 1)
      }) */
    );
  }
}
