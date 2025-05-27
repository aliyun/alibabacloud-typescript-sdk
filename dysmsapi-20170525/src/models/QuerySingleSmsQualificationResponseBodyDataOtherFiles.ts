// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySingleSmsQualificationResponseBodyDataOtherFiles extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      picUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

