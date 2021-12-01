import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailstoService} from '../detailsto.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  

  constructor(private router: Router, private detailsto: DetailstoService) { 
    
  }
  detailsData: any
  ngOnInit() {
    this.detailsto.detailsData().subscribe((data: any) => {
        this.detailsData = data.engagements
    });         
  
  }

  
}
