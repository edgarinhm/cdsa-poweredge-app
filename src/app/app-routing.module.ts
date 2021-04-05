import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./presentation/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./presentation/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'grid-datatable',
    loadChildren: () => import('./presentation/grid-datatable/grid-datatable.module').then( m => m.GridDatatablePageModule)
  },
  {
    path: 'ngx-datatable',
    loadChildren: () => import('./presentation/ngx-datatable/ngx-datatable.module').then( m => m.NgxDatatablePageModule)
  },  {
    path: 'modal-form',
    loadChildren: () => import('./presentation/modals/modal-form/modal-form.module').then( m => m.ModalFormPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
