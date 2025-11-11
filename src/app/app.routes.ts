import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Service } from './components/service/service';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Value } from './components/value/value';

export const routes: Routes = [
  // { path: '', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Service },
  { path: 'contact', component: Contact },
  { path: 'value', component: Value }
  
];
