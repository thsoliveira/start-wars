import { AfterViewInit, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  hiddenNav = true;
  isLoading: boolean;

  constructor(private loaderService: LoaderService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url === '/') {
          this.hiddenNav = false;
        } else {
          this.hiddenNav = true;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loaderService.loader.pipe(delay(0)).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
