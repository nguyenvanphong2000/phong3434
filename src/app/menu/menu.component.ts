import{Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector:'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent{
   menu:any = [
     {id:1,name:'Chicken',icon:'abc'},
     {id:2,name:'Rice',icon:'abc'},
     {id:3,name:'Drinks',icon:'abc'},
     {id:4,name:'Dessert',icon:'abc'},
   ];
   flag = true;
   on(){
     this.flag=true;
   }
   of(){
     this.flag=false;
   }
  constructor(private http: HttpClient) {
  }


  ngOnInit(){
    this.getMenu();
  }
  getMenu(){
    const url='https://foodgroup.herokuapp.com/api/menu';
    this.http.get<any>(url)
      .subscribe(data=>{
        var ls= data.data;
        this.menu = ls;
      })
  }
}
