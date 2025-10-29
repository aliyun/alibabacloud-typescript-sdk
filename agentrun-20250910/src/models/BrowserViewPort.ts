// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserViewPort extends $dara.Model {
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
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

