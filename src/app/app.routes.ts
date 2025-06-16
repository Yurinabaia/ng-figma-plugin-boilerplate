import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CodeGenerationScreenComponent } from './code-generation-screen/code-generation-screen.component';
import { CodeScreenComponent } from './code-screen/code-screen.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'code-generator',
        component: CodeGenerationScreenComponent,
    },
    {
        path: 'code-screen',
        component: CodeScreenComponent,
    }
];
