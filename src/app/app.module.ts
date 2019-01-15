import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './list-tasks/list.component';
import {CreateProductComponent} from './create-task/create-product.component';
import {UpdateProductComponent} from './update-task/update-product.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        CreateProductComponent,
        UpdateProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
