import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './core/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatTableModule, MatPaginatorModule,
   MatSortModule, MatMenuModule,
   MatFormFieldModule, MatFormFieldControl,
   MatInputModule, MatGridListModule, MatCardModule, MatExpansionModule, MatSelectModule,
   MatCheckbox, MatCheckboxModule } from '@angular/material';
import { CestaComponent } from './cesta/list/list-cesta.component';
import { EditComponent } from './cesta/edit/edit-cesta.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CestaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    CurrencyMaskModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
