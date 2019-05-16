import { Component, OnInit } from '@angular/core';


const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 57, 54, 30], label: 'Fall Sales'},
  { data: [25, 39, 20, 41, 56, 53, 30], label: 'Spring Sales'},
];

const SAMPLE_BARCHART_LABELS: string[] = ['w1', 'w2' , 'w3', 'w4', 'w5', 'w6', 'w7'];

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
