import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion'

import { AppComponent } from './app.component';
import { HadesSuggesterComponent } from './component/hades-suggester/hades-suggester.component';
import { SuggestionComponent } from './component/suggestion/suggestion.component';
import { CheckboxGroupComponent } from './component/checkbox-group/checkbox-group.component';
import { ChunkPipe } from './pipe/chunk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HadesSuggesterComponent,
    SuggestionComponent,
    CheckboxGroupComponent,
    ChunkPipe
  ],
  imports: [
    NgxBootstrapSliderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
