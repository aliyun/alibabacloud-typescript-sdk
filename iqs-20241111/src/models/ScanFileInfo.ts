// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanFileInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  angle?: number;
  /**
   * @example
   * 100
   */
  height?: number;
  /**
   * @example
   * erwre
   */
  imageBase64?: Buffer;
  /**
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
      imageBase64: 'Buffer',
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

