import {Routes, RouterModule, Route } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { MainComponent } from './main/main.component'
import { HomeComponent } from './home/home.component';
import { StorageComponent } from './storage/storage.component';

const routes : Routes = [
    {path: '', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'home', component: HomeComponent},
    {path: 'storage', component: StorageComponent},
    {path: '**', component: MainComponent}
]

export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(routes);