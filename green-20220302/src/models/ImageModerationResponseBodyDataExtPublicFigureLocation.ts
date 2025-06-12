// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtPublicFigureLocation extends $dara.Model {
  /**
   * @remarks
   * The height
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The weight
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * X coordinate
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate
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

