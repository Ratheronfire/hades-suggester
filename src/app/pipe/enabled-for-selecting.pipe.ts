import { Pipe, PipeTransform } from '@angular/core';
import { Asset } from '../asset';

@Pipe({
  name: 'enabledForSelecting'
})
export class EnabledForSelectingPipe<T> implements PipeTransform {

  transform(items: Array<Asset<T>>): any {
    if (!items) {
      return items;
    }

    return items.filter(item => item.enabledForSuggesting);
  }
}
