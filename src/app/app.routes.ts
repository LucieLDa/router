import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent},
    { path: 'user', component: UserProfileComponent },
    { path: '', component: UserProfileComponent },
];
