import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private  api_key: string = 'cyUeBAKMVkhDttjxLifi333JysI96ng8';
  private  url: string = 'https://api.giphy.com/v1/gifs';


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }


  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.searcLocalStorage();
  }

  private searcLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) {
      return;
    }

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) {
      return;
    }
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('limit', '10')
    .set('q', tag);


    this.http.get<SearchResponse>(`${this.url}/search`, { params: params })
      .subscribe(response => {
        this.gifsList = response.data;
      })
  }
}
