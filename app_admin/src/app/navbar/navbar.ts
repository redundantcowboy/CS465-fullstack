import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class NavbarComponent implements OnInit {

    // This tells if the user is logged in or not so we can show the right stuff
    public isLoggedIn: boolean = false;

    constructor(
        private authenticationService: AuthenticationService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {

        // watch for login state changes so that the navbar updates without refreshing
        this.authenticationService.loggedIn$.subscribe(
            (loggedIn) => {
                this.isLoggedIn = loggedIn;

                //  don't have to refresh manually
                this.cdr.detectChanges();
            }
        );
    }

    public onLogout(): void {

        // Clear the token and update the state
        this.authenticationService.logout();

        //  the navbar updates immediately
        this.isLoggedIn = false;
        this.cdr.detectChanges();

        // Give it a moment then refresh the page to fully reset everything
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }
}