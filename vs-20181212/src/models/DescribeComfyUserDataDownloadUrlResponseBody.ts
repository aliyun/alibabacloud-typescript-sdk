// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDataDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The download URL of the application package.
   * 
   * @example
   * https://xxx.xxx.xxx.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1752805579553
   */
  expiredTime?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadUrl: 'DownloadUrl',
      expiredTime: 'ExpiredTime',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      downloadUrl: 'string',
      expiredTime: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

