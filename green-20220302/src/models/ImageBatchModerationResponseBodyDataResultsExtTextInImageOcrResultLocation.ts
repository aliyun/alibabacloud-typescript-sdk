// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area, in pixels.
   * 
   * @example
   * 33
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area, in pixels.
   * 
   * @example
   * 44
   */
  w?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin, in pixels.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin, in pixels.
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

