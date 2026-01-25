import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
})
export class AppendPipe implements PipeTransform {
  transform(datatobeTransform: string, appendtext: string): string {
    return datatobeTransform + ' ' + appendtext;
  }
}
