// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefineMaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/RefineMask/RefineMask1.jpg
   */
  imageURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/RefineMask/RefineMask6.jpg
   */
  maskImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      maskImageURL: 'MaskImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      maskImageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

