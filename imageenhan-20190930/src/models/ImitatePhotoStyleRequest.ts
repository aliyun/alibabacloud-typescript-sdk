// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImitatePhotoStyleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ImitatePhotoStyle/ImitatePhotoStyle1.jpg
   */
  imageURL?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/ImitatePhotoStyle/ImitatePhotoStyle7.jpg
   */
  styleUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      styleUrl: 'StyleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
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

