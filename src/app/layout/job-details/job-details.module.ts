import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsRoutingModule } from './job-details-routing.module';
import { JobDetailsComponent } from './job-details.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import {TableModule} from 'primeng/table';

@NgModule({
    imports: [
        JobDetailsRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        TableModule
    ],
    declarations: [JobDetailsComponent],
    exports: []
})
export class JobDetailsModule { }