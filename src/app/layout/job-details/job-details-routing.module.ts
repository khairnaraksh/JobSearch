import { Routes, RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: JobDetailsComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobDetailsRoutingModule { }