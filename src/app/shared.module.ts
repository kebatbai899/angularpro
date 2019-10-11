import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorChanger } from "./shared/colorchanger.directive";
import { DropdownDirective } from "./shared/dropdown.directive";
import { Summary } from "./shared/summary.pipe";
@NgModule({
  declarations: [
    ColorChanger,
    DropdownDirective,
    Summary,
  ],
  exports: [
    ColorChanger,
    DropdownDirective,
    Summary,
  ],
  imports: [
    BrowserModule
  ],
})
export class SharedModule {}