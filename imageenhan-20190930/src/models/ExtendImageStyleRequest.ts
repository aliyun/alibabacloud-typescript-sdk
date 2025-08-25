// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtendImageStyleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ExtendImageStyle/ExtendImageStyle1.jpg
   */
  majorUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ExtendImageStyle/ExtendImageStyle6.jpg
   */
  styleUrl?: string;
  static names(): { [key: string]: string } {
    return {
      majorUrl: 'MajorUrl',
      styleUrl: 'StyleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      majorUrl: 'string',
      styleUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

