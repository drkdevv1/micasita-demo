import { Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { RegisterComponent} from "./register/pages/register-management/register.component";
import { AboutComponent } from "./public/pages/about/about.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import {EstatesListComponent} from "./register/components/estates-list/estates-list.component";
import {EstateDetailsComponent} from "./register/components/estate-details/estate-details.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'estates-list', component: EstatesListComponent },
  { path: 'estate/:id', component: EstateDetailsComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
