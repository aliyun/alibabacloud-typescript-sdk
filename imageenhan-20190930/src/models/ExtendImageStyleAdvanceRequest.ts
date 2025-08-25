// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ExtendImageStyleAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ExtendImageStyle/ExtendImageStyle1.jpg
   */
  majorUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ExtendImageStyle/ExtendImageStyle6.jpg
   */
  styleUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      majorUrlObject: 'MajorUrl',
      styleUrlObject: 'StyleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorUrlObject: 'Readable',
      styleUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

