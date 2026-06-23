// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanFileInfo extends $dara.Model {
  /**
   * @remarks
   * The image rotation angle.
   * 
   * @example
   * 100
   */
  angle?: number;
  /**
   * @remarks
   * The image height.
   * 
   * @example
   * 100
   */
  height?: number;
  /**
   * @remarks
   * The Base64 encoding of the image.
   * 
   * @example
   * erwre
   */
  imageBase64?: string;
  /**
   * @remarks
   * The image width.
   * 
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'angle',
      height: 'height',
      imageBase64: 'imageBase64',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      imageBase64: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

