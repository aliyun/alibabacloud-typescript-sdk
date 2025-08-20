// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentHeadRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentHead/SegmentHead1.jpg
   */
  imageURL?: string;
  /**
   * @example
   * mask
   */
  returnForm?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      returnForm: 'ReturnForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      returnForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

