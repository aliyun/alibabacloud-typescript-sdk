// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentUploadParametersResponseBodyData extends $dara.Model {
  /**
   * @example
   * ****
   */
  accessKeyId?: string;
  /**
   * @example
   * 1647313420
   */
  expireTime?: number;
  /**
   * @example
   * ccc-test/blacklist.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * oss host
   * 
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * Permit
   */
  policy?: string;
  /**
   * @example
   * zi31STIMtIfa/UN2l+6lww****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      filePath: 'FilePath',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'number',
      filePath: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

