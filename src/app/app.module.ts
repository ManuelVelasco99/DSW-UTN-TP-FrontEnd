import { AppComponent            } from './app.component';
import { AppRoutingModule        } from './app-routing.module';
import { BaseModule              } from './base/base.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule           } from '@angular/platform-browser';
import { NgModule                } from '@angular/core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
