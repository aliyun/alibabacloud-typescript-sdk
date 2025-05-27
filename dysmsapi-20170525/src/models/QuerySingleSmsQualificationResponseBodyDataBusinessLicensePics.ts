// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleSmsQualificationResponseBodyDataBusinessLicensePics extends $dara.Model {
  /**
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 文件的完整路径
   * 
   * @example
   * https://******.aliyuncs.com/******
   */
  picUrl?: string;
  /**
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

