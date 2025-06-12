// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtFaceDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the face area. Unit: pixels.
   * 
   * @example
   * 26
   */
  h?: number;
  /**
   * @remarks
   * The width of the face area. Unit: pixels.
   * 
   * @example
   * 83
   */
  w?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the y-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 41
   */
  x?: number;
  /**
   * @remarks
   * The distance from the upper-left corner of the face area to the x-axis with the upper-left corner of the image as the coordinate origin. Unit: pixels.
   * 
   * @example
   * 84
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

