// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentDownloadUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A short-lived GET pre-signed URL that the client uses to download the original file.
   * 
   * @example
   * https://my-bucket.oss-cn-hangzhou.aliyuncs.com/kb/doc-bp1xxxxxxxxxxxx?Expires=1788000000&Signature=xxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the pre-signed download URL, in ISO 8601 UTC format.
   * 
   * @example
   * 1756022400000
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

export class GetDocumentDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of Success indicates a successful call. If the call fails, a specific error code is returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The document download URL information.
   */
  data?: GetDocumentDownloadUrlResponseBodyData;
  /**
   * @remarks
   * The message returned by the operation. A value of Operation success indicates a successful call. If the call fails, a specific error description is returned.
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success.
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
      data: GetDocumentDownloadUrlResponseBodyData,
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

