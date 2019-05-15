import {Routes} from '@angular/router';
import { SectionDashboardComponent } from './app/Sections/section-dashboard/section-dashboard.component';
import { SectionComputerManagementComponent } from './app/Sections/section-computer-management/section-computer-management.component';
import { SectionHelpdeskLinksComponent } from './app/Sections/section-helpdesk-links/section-helpdesk-links.component';

export const appRoutes: Routes = [
    { path: 'Dashboard', component: SectionDashboardComponent},
    { path: 'ComputerManagement', component: SectionComputerManagementComponent},
    { path: 'HelpdeskLinks', component: SectionHelpdeskLinksComponent},
    { path: '', redirectTo: '/Dashboard', pathMatch: 'full'},
];
