import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { TestService } from './test.service';
import { NumberFormatDirective } from './number-format.directive';
import { DupfreePipe } from './dupfree.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DropdownComponent,
    AComponent,
    BComponent,
    NumberFormatDirective,
    DupfreePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
