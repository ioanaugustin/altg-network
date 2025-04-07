import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    // Personal info
    name: string = 'Ioan Augustin Lates';
    title: string = 'Senior Web Developer';
    shortBio: string = 'Innovative Front End Developer with Angular proficiency and eight years of industry experience.';

    // Featured articles
    articles = [
        {
            id: 1,
            title: 'Getting Started with Angular 17',
            excerpt: 'Learn about the newest features in Angular 17 and how to implement them in your projects.',
            date: 'April 2, 2025',
            color: '#3498db', // Blue theme for Angular
            icon: '⚙️',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Effective RxJS Patterns',
            excerpt: 'Discover the most effective patterns for managing reactive programming with RxJS in Angular applications.',
            date: 'March 15, 2025',
            color: '#9b59b6', // Purple theme for RxJS
            icon: '🔄',
            readTime: '7 min read'
        },
        {
            id: 3,
            title: 'UI/UX Best Practices for Web Developers',
            excerpt: 'How to improve your web applications with modern UI/UX design principles that enhance user experience.',
            date: 'February 28, 2025',
            color: '#2ecc71', // Green theme for UI/UX
            icon: '🎨',
            readTime: '6 min read'
        }
    ];
}