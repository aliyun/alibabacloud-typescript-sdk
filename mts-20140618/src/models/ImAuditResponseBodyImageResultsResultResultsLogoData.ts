// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsLogoData extends $dara.Model {
  /**
   * @remarks
   * The height of the logo area. Unit: pixel.
   * 
   * @example
   * 106
   */
  h?: number;
  /**
   * @remarks
   * The name of the detected logo.
   * 
   * @example
   * Hunan TV
   */
  name?: string;
  /**
   * @remarks
   * The type of the detected logo. For example, a value of TV indicates a controlled media logo.
   * 
   * @example
   * TV
   */
  type?: string;
  /**
   * @remarks
   * The width of the logo area. Unit: pixel.
   * 
   * @example
   * 106
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the logo area and the y-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 140
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the logo area and the x-axis, with the upper-left corner of the image being the coordinate origin. Unit: pixel.
   * 
   * @example
   * 68
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'h',
      name: 'name',
      type: 'type',
      w: 'w',
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      name: 'string',
      type: 'string',
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

