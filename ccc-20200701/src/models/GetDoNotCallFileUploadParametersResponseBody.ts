// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoNotCallFileUploadParametersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessKeyId used for signing.
   * 
   * @example
   * ****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Expiration time, formatted as a Unix timestamp in seconds.
   * 
   * @example
   * 1647313420
   */
  expireTime?: number;
  /**
   * @remarks
   * Key of the OSS file.
   * 
   * @example
   * ccc-test/blacklist.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * Endpoint domain name of OSS.
   * 
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Signature policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0xNVQwMzowMzo0MC4zMTJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidGVtcC9ibGFja2xpc3QvaW1wb3J0LzE1NzcyNDcxMTU0OTA0MDEvY2NjVjIta216LzIwMjIE1MTAwMzQwLyJd****
   */
  policy?: string;
  /**
   * @remarks
   * Signature information of the temporary credential for file upload, used to authenticate validity during upload.
   * 
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

export class GetDoNotCallFileUploadParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: GetDoNotCallFileUploadParametersResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDoNotCallFileUploadParametersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

