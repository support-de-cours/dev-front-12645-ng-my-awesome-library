import { Routes } from '@angular/router';
import { IndexComponent as HomepageIndexComponent } from './pages/homepage/pages/index/index.component';
import { IndexComponent as AboutIndexComponent } from './pages/about/pages/index/index.component';
import { IndexComponent as ContactIndexComponent } from './pages/contact/pages/index/index.component';
import { routes as books_c_routes } from './pages/books-c/books.routes';

export const routes: Routes = [
    {
        path: 'homepage',
        component: HomepageIndexComponent
    },
    {
        path: 'about',
        component: AboutIndexComponent
    },
    {
        path: 'contact',
        component: ContactIndexComponent
    },

    {
        path: 'books-m',
        loadChildren: () => import('./pages/books-m/books-m.module').then(m => m.BooksMModule)
    },

    ...books_c_routes,

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/homepage'
    },
    {
        path: '**',
        loadChildren: () => import('./core/pages/not-found/not-found.module').then(m => m.NotFoundModule)
    }
];
