import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**Modulos */
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [

  /** Rutas publicas
   * path: '/dashboard', PagesRouting
   */

  /** Rutas Protegidas
   * path: '/auth', AuthRouting
   */

  /**Redirecciones */
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
