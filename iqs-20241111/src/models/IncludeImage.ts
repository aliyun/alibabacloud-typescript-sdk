// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncludeImage extends $dara.Model {
  /**
   * @example
   * 324
   */
  height?: number;
  /**
   * @example
   * http://k.sinaimg.cn/n/sinakd20121/594/w2048h946/20240328/74cf-32c0d62e843df76567d760b4459d57c1.jpg/w700d1q75cms.jpg
   */
  imageLink?: string;
  /**
   * @example
   * 700
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      imageLink: 'imageLink',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageLink: 'string',
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

