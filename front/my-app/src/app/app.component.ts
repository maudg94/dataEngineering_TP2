import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  numberRequest = 0;
  constructor(private http:HttpClient) {}

  async ngOnInit() {
    this.numberRequest = (await lastValueFrom(this.http.get<PageCountApiResponse>("http://localhost:5000"))).pageCount;
  }
}
export interface PageCountApiResponse {
  pageCount: number;
}
