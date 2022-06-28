import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'firstpage/:obj',
            loadChildren: () => import('../pages/firstpage/firstpage.module').then( m => m.FirstpagePageModule)
          }
        ]
      },
      {
        path: 'custom',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/custom/custom.module').then( m => m.CustomPageModule)
          }
        ]
      },
      // {
      //   path: 'set',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../pages/set/set.module').then( m => m.SetPageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        redirectTo: '/tabs/firstpage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/firstpage',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
