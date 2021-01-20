import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent { 
    
    titleHeader: string;

    constructor(private router: Router, private activateRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
      this.titleHeader = this.activateRoute.snapshot.data['titleHeader'];
    }
}