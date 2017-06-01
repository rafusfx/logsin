import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UsersListComponent} from './users/users-list/users-list.component';
export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'users/user-form', component: UserFormComponent , canActivate: [AuthGuard]},
    { path: 'users/user-detail', component: UserDetailComponent, canActivate: [AuthGuard] },
    { path: 'users/users-list', component: UsersListComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);