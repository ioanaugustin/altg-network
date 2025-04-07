import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;

        // Prevent scrolling when menu is open
        if (this.isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMenu() {
        if (this.isMenuOpen) {
            this.isMenuOpen = false;
            document.body.style.overflow = '';
        }
    }

    // Close menu when screen size changes to desktop
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        if (window.innerWidth > 768 && this.isMenuOpen) {
            this.closeMenu();
        }
    }

    // Close menu when clicking outside
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: any) {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');

        if (this.isMenuOpen &&
            event.target !== menuToggle &&
            !menuToggle?.contains(event.target) &&
            event.target !== mainNav &&
            !mainNav?.contains(event.target)) {
            this.closeMenu();
        }
    }
}