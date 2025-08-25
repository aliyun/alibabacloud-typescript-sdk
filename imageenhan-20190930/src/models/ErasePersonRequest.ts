// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErasePersonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ErasePerson/ErasePerson1.jpg
   */
  imageURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ErasePerson/ErasePerson6.jpg
   */
  userMask?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      userMask: 'UserMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      userMask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

