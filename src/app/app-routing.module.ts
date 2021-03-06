/**
 * Created by Sander on 8-6-2018.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StreamingComponent} from './components/streaming/streaming.component';
import {OverviewGridComponent} from './components/overview-grid/overview-grid.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  {path : 'overview/watch/:key', component: StreamingComponent},
  { path: 'test', component: StreamingComponent},
  { path: 'overview', component: OverviewGridComponent, children: [
    {
      path: 'view/:name', component: StreamingComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
