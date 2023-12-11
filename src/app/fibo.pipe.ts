import { Pipe, PipeTransform } from '@angular/core';
import {memo} from "./memo.decorator";
@Pipe({
  name: 'calculFu',
})
export class CalculFuPipe implements PipeTransform {
  @memo()
  transform(value: number): number {
    const result = this.f(value);
    console.log(value + ' ' + result);
    return result;
  }
  @memo()
  public f(x: number): number {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return 2 * this.f(x - 1) + 3 * this.f(x - 2);
    }
  }
}
