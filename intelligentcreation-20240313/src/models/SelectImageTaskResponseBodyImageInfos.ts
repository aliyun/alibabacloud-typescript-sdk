// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectImageTaskResponseBodyImageInfos extends $dara.Model {
  /**
   * @example
   * www.ali.com
   */
  customImageUrl?: string;
  /**
   * @example
   * 1
   */
  gmtCreate?: string;
  /**
   * @example
   * 500
   */
  imageH?: string;
  /**
   * @example
   * 500
   */
  imageW?: string;
  static names(): { [key: string]: string } {
    return {
      customImageUrl: 'customImageUrl',
      gmtCreate: 'gmtCreate',
      imageH: 'imageH',
      imageW: 'imageW',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImageUrl: 'string',
      gmtCreate: 'string',
      imageH: 'string',
      imageW: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

