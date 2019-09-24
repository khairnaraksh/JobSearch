import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/shared/authGards/auth.guard';

const routes: Routes = [
  { path: "", loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) },
  { path: "Login", loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) },
  { path: "Job-Details", loadChildren: () => import('./layout/job-details/job-details.module').then(m => m.JobDetailsModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
