// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition extends $dara.Model {
  /**
   * @remarks
   * The height of the rectangle frame. Unit: pixels.
   * 
   * @example
   * 168
   */
  h?: number;
  /**
   * @remarks
   * The width of the rectangle frame. Unit: pixels.
   * 
   * @example
   * 128
   */
  w?: number;
  /**
   * @remarks
   * The x-axis coordinate of the upper-left corner. Unit: pixels.
   * 
   * @example
   * 517
   */
  x?: number;
  /**
   * @remarks
   * The y-axis coordinate of the upper-left corner. Unit: pixels.
   * 
   * @example
   * 409
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

