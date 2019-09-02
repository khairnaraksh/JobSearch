import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '',
    component: CustomerComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }