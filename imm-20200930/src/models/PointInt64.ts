// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PointInt64 extends $dara.Model {
  /**
   * @remarks
   * The distance from the X-coordinate of the vertex to the left edge. Unit: pixel.
   * 
   * @example
   * 10
   */
  x?: number;
  /**
   * @remarks
   * The distance from the Y-coordinate of the vertex to the top. Unit: pixel.
   * 
   * @example
   * 10
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

