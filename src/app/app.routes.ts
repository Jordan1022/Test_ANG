import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog-list', component: BlogListComponent },
    { path: 'blog-post/:id', component: BlogPostComponent },
    { path: 'create-post', component: CreatePostComponent }
];

export const routes: Routes = [];
