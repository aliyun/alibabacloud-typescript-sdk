// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SegmentClothAdvanceRequest extends $dara.Model {
  clothClass?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageseg/SegmentCloth/SegmentCloth1.jpg
   */
  imageURLObject?: Readable;
  outMode?: number;
  returnForm?: string;
  static names(): { [key: string]: string } {
    return {
      clothClass: 'ClothClass',
      imageURLObject: 'ImageURL',
      outMode: 'OutMode',
      returnForm: 'ReturnForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothClass: { 'type': 'array', 'itemType': 'string' },
      imageURLObject: 'Readable',
      outMode: 'number',
      returnForm: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clothClass)) {
      $dara.Model.validateArray(this.clothClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

