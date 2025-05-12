// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsProgramCodeData extends $dara.Model {
  /**
   * @remarks
   * The height of the mini program code area. Unit: pixel.
   * 
   * @example
   * 413.0
   */
  h?: number;
  /**
   * @remarks
   * The width of the mini program code area. Unit: pixel.
   * 
   * @example
   * 402.0
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the mini program code area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 11.0
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the mini program code area and the x-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 0.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
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

