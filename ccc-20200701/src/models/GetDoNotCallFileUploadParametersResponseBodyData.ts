// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoNotCallFileUploadParametersResponseBodyData extends $dara.Model {
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
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0xNVQwMzowMzo0MC4zMTJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidGVtcC9ibGFja2xpc3QvaW1wb3J0LzE1NzcyNDcxMTU0OTA0MDEvY2NjVjIta216LzIwMjIE1MTAwMzQwLyJd****
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

