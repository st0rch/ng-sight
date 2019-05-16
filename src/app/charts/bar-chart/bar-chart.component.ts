import { Component, OnInit } from '@angular/core';


const SAMPLE_BARCHART_DATA: any[] = [
  { data: [2, 5, 4, 3, 5, 3, 3, 4, 8], label: 'My Calls'},
  { data: [5, 7, 4, 5, 9, 7, 6, 7, 9], label: 'Helpdesk  Calls'},
];

const SAMPLE_BARCHART_LABELS: string[] = ['10 AM','11 AM','12 PM', '1 PM' , '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})


export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
