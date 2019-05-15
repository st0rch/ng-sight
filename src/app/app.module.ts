import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionDashboardComponent } from './Sections/section-dashboard/section-dashboard.component';
import { SectionComputerManagementComponent } from './Sections/section-computer-management/section-computer-management.component';
import { SectionHelpdeskLinksComponent } from './Sections/section-helpdesk-links/section-helpdesk-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionDashboardComponent,
    SectionComputerManagementComponent,
    SectionHelpdeskLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
