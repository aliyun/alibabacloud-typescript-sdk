// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The distance between the upper-left corner of the text area and the y-axis, using the upper-left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance between the upper left corner of the text area and the x-axis, with the upper left corner of the image as the coordinate origin, in pixels.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
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

