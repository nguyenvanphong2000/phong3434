import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'weatherexercises',
  templateUrl: './weatherexercises.component.html',
})
export class WeatherexercisesComponent {
  weather: any[] = [
    {dt_txt:'2019-04-09',temp:'32',decription:'rain',icon:'10n'},
    {dt_txt:'2019-04-09',temp:'32',decription:'rain',icon:'10n'},
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.menudemo();
  }
  menudemo() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        var ls = data.list;
        this.weather = ls;
      })
  }
}
