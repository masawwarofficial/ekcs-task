import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
   
	// { path: '', component: LoginComponent },
	{ path: '', component: HomePageComponent },

];

@NgModule({
  imports: [
    	RouterModule.forRoot(routes, { 
			useHash: true,
      		scrollPositionRestoration: 'enabled',
      		anchorScrolling: 'enabled',
    	})
  	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
