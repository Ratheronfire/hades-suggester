import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe<T> implements PipeTransform {

  transform(value: Array<T>, rowWidth: number): any {
    return this.getChunks(value, rowWidth);
  }

  getChunks(startingArray: Array<T>, rowWidth: number) {
    let newArr = [];

    for (let i = 0; i <= startingArray.length; i += rowWidth) {
      newArr.push(startingArray.slice(i, i + rowWidth));
    }
    
    return newArr;
  }
}