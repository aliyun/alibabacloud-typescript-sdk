// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageMosaicRequestTargetsBoundary extends $dara.Model {
  /**
   * @remarks
   * The height of the bounding box. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the height of the bounding box in pixels.
   * *   A decimal value within the range of [0,1) indicates the height of the bounding box as a ratio of its height to the image height.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The reference position of the bounding box on the image. Valid values:
   * 
   * *   topright: the upper-right corner.
   * *   topleft: the upper-left corner. This is the default value.
   * *   bottomright: the lower-right corner.
   * *   bottomleft: the lower-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The width of the bounding box. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the width of the bounding box in pixels.
   * *   A decimal value within the range of [0,1) indicates the width of the bounding box as a ratio of its width to the image width.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  width?: number;
  /**
   * @remarks
   * The horizontal offset relative to the reference position. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the horizontal offset in pixels.
   * *   A decimal value within the range of [0,1) indicates the horizontal offset as a ratio of the offset to the image width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  x?: number;
  /**
   * @remarks
   * The vertical offset relative to the reference position. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the vertical offset in pixels.
   * *   A decimal value within the range of [0,1) indicates the vertical offset as a ratio of the offset to the image height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      referPos: 'ReferPos',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      referPos: 'string',
      width: 'number',
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

