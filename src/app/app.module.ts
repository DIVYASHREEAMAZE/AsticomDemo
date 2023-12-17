import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FmsinterceptorInterceptor } from './shared/fmsinterceptor.interceptor';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DatePipe
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FmsinterceptorInterceptor,
      multi: true,
    },
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
