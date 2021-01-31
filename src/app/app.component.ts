import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Widget = {
  id: number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets: Widget[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/widgets')
      .subscribe((widgets: Widget[]) => (this.widgets = widgets));
  }

  addNewWidget(): void {
    this.http
      .get('http://localhost:3000/new-widget')
      .subscribe((widget: Widget) => {
        this.widgets = [...this.widgets, widget];
      });
  }
}
