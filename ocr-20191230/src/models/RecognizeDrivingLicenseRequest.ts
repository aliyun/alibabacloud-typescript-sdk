// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeDrivingLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeDrivingLicense/xsz2.jpg
   */
  imageURL?: string;
  /**
   * @example
   * face
   */
  side?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      side: 'Side',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      side: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

