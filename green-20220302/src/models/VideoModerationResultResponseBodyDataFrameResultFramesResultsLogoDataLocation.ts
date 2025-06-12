// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation extends $dara.Model {
  /**
   * @remarks
   * The height of the text area. Unit: pixels.
   * 
   * @example
   * 111
   */
  h?: number;
  /**
   * @remarks
   * The width of the text area. Unit: pixels.
   * 
   * @example
   * 111
   */
  w?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the y-axis, with the top-left corner of the image as the origin. Unit: pixels.
   * 
   * @example
   * 111
   */
  x?: number;
  /**
   * @remarks
   * The distance from the top-left corner of the text area to the x-axis, with the top-left corner of the image as the origin. Unit: pixels.
   * 
   * @example
   * 222
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

