import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  days: any = 36;
  hrs: number = 22;
  min: number = 14;
  sec: number = 4;
  
  gc = setInterval(()=>{
      var DueDate = new Date("May 25, 2022 16:46:00").getTime();
      var today = new Date().getTime();
      var dis = DueDate - today;
      this.days = Math.floor(dis / (1000 * 60 * 60 *24));
      this.hrs = Math.floor((dis % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
      this.min = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
      this.sec = Math.floor((dis % (1000 * 60)) / (1000));
      
      if(dis < 0 ){
        clearInterval(this.gc);
        this.days ="Voting Is Now Expired";
      }
  
  
  }, 1000)
  

}
