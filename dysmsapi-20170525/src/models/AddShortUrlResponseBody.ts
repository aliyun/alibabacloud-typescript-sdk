// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddShortUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the short URL.
   * 
   * > The value of **ExpireDate** is always on the hour.
   * 
   * @example
   * 2021-09-19 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * The generated short URL.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  /**
   * @remarks
   * The source URL that was shortened.
   * 
   * @example
   * https://www.****.com/product/sms
   */
  sourceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'ExpireDate',
      shortUrl: 'ShortUrl',
      sourceUrl: 'SourceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'string',
      shortUrl: 'string',
      sourceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddShortUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error Code List](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the short URL.
   */
  data?: AddShortUrlResponseBodyData;
  /**
   * @remarks
   * The message that describes the status.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E477085AAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddShortUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
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

