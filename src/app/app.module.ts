import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}