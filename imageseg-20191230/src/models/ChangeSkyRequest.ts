// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSkyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/ChangeSky/ChangeSky2.jpg
   */
  imageURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/ChangeSky/ChangeSky6.jpg
   */
  replaceImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      replaceImageURL: 'ReplaceImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      replaceImageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

