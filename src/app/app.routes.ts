import { Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';

const routeConfig: Routes = [
  { path: '', component: PlantListComponent, title: 'Home Page' },
  { path: 'details/:id', component: PlantDetailsComponent, title: 'Details Page' }
];

export default routeConfig;
