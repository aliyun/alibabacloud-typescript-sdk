// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadFilePolicyRequest extends $dara.Model {
  /**
   * @example
   * esp.isp
   */
  bizType?: string;
  fileName?: string;
  /**
   * @example
   * company_apply_business_license
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      fileName: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

