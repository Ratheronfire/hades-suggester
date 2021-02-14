import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../../asset';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent<T> implements OnInit {
  @Input() asset?: Asset<T>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
