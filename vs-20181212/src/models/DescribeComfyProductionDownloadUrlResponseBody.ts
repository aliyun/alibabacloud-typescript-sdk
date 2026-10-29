// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyProductionDownloadUrlResponseBody extends $dara.Model {
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
   * The download URL of the production. Use the Alibaba Cloud OSS SDK to download the production.
   * 
   * @example
   * https://xxx.xxx.xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL. The time is in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format.
   * 
   * @example
   * 2029-03-28T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The description.
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

