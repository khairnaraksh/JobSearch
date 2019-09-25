import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from 'src/shared/services/layout/job-details.service';
import { Router } from '@angular/router';
import { IjobDetailsModel } from 'src/shared/model/jobDetails.model'
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  public allJobs: string[] = [];
  public jobDetailsModel: IjobDetailsModel= <IjobDetailsModel>{};;
  public testAllJobs: string[] = [];
  public spinner: boolean = true;
  public companyname: any =[];
  constructor(private jobDetailsService: JobDetailsService, private router: Router) { }

  ngOnInit() {
    // get all job Details
    this.spinner = true;
    this.jobDetailsService.jobDetails().subscribe((response) => {
      if (response && response['data']) {
        this.spinner = false;
        this.allJobs = response['data'];
        this.testAllJobs = response['data'];
      }
    });
  }

  //  filter jobs on Location, skill and Exprience  
  searchJobDetails = (type, filterData) => {
    switch (type) {
      case 'location':
        this.allJobs = this.testAllJobs.filter(x => x['location'].toLowerCase().indexOf(filterData.toLowerCase()) !== -1);
        break;
      case 'experience':
        this.allJobs = this.testAllJobs.filter(x => x['experience'].toLowerCase().indexOf(filterData.toLowerCase()) !== -1);
        break;
      case 'skill':
        this.allJobs = this.testAllJobs.filter(x => x['skills'].toLowerCase().indexOf(filterData.toLowerCase()) !== -1);
        break;
      default:
        this.allJobs = this.testAllJobs;
        break;
    }
  }
  // For logout the user
  logoutUser = () => {
    localStorage.removeItem("currentUser");
    this.router.navigate(["/Login"]);
  }
}
