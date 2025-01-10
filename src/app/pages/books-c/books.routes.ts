import { Route } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { CreateComponent } from "./pages/create/create.component";
import { ReadComponent } from "./pages/read/read.component";
import { UpdateComponent } from "./pages/update/update.component";
import { DeleteComponent } from "./pages/delete/delete.component";

export const routes: Route[] = [

    // {
    //     path: 'books-c',
    //     component: IndexComponent
    // }



    // site.com/books/
    // site.com/books/create
    // site.com/books/42
    // site.com/books/42/edit
    // site.com/books/42/delete

    // // Index - liste des livres
    // {
    //     path: 'books',
    //     component: IndexComponent
    // },
    
    // // Create - Ajouter un livre
    // {
    //     path: 'books/create',
    //     component: CreateComponent
    // },
    
    // // Read - Voir le détail d'un livre
    // {
    //     path: 'books/:id',
    //     component: ReadComponent
    // },
    
    // // Update - Editer un livre
    // {
    //     path: 'books/:id/edit',
    //     component: UpdateComponent
    // },
    
    // // Delete - supprimer un livre
    // {
    //     path: 'books/:id/delete',
    //     component: DeleteComponent
    // },



    // {
    //     path: 'books',
    //     children: [

    //         // Index - liste des livres
    //         {
    //             path: '', // site.com/books/
    //             component: IndexComponent
    //         },
            
    //         // Create - Ajouter un livre
    //         {
    //             path: 'create', // site.com/books/create
    //             component: CreateComponent
    //         },
            
    //         // Read - Voir le détail d'un livre
    //         {
    //             path: ':id',
    //             children: [
                    
    //                 {
    //                     path: '', // site.com/42/
    //                     component: ReadComponent
    //                 },

    //                 // Update - Editer un livre
    //                 {
    //                     path: 'edit', // site.com/42/edit
    //                     component: UpdateComponent
    //                 },
                
    //                 // Delete - supprimer un livre
    //                 {
    //                     path: 'delete', // site.com/42/delete
    //                     component: DeleteComponent
    //                 }

    //             ]
    //         }

    //     ]
    // }







    // site.com/books/
    // site.com/book/
    // site.com/book/42
    // site.com/book/42/edit
    // site.com/book/42/delete


    // Index - liste des livres
    {
        path: 'books',
        component: IndexComponent
    },

    {
        path: 'book',
        children: [

            {
                path: '',
                component: CreateComponent
            },
            
            // Read - Voir le détail d'un livre
            {
                path: ':id', 
                children: [
                    // Create - Ajouter un livre
                    {
                        path: '',
                        component: ReadComponent
                    },

                    // Update - Editer un livre
                    {
                        path: 'edit',
                        component: UpdateComponent
                    },
                    
                    // Delete - supprimer un livre
                    {
                        path: 'delete',
                        component: DeleteComponent
                    }
                ]
            }
        ]
    }
    
];