// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLumaDocumentDownloadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pre-signed download URL for the original document. The URL is valid for a limited period of time.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/kb/doc-bp1xxxxxxxxxxxx?Expires=1788000000&Signature=xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL in UTC.
   * 
   * @example
   * 2026-08-24T12:00:00Z
   */
  expireAt?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      expireAt: 'ExpireAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expireAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLumaDocumentDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates that the call succeeds. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The pre-signed download URL information for the original document.
   */
  data?: GetLumaDocumentDownloadUrlResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. The value is Operation success if the call succeeds, or a specific error description if the call fails.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. Use this ID for troubleshooting or when submitting a ticket.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call succeeds.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLumaDocumentDownloadUrlResponseBodyData,
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

