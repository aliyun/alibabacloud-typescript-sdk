// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShortUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the short URL was created.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the short URL expires.
   * 
   * @example
   * 2019-01-22 11:21:11
   */
  expireDate?: string;
  /**
   * @remarks
   * The PV.
   * 
   * @example
   * 300
   */
  pageViewCount?: string;
  /**
   * @remarks
   * The short URL.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  /**
   * @remarks
   * The service name of the short URL.
   * 
   * @example
   * The Alibaba Cloud Short Link service.
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The status of the short URL. Valid values:
   * 
   * *   **expired**
   * *   **effective**
   * *   **audit**
   * *   **reject**
   * 
   * @example
   * expired
   */
  shortUrlStatus?: string;
  /**
   * @remarks
   * The source address.
   * 
   * @example
   * https://www.****.com/product/sms
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The UV.
   * 
   * @example
   * 23
   */
  uniqueVisitorCount?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      pageViewCount: 'PageViewCount',
      shortUrl: 'ShortUrl',
      shortUrlName: 'ShortUrlName',
      shortUrlStatus: 'ShortUrlStatus',
      sourceUrl: 'SourceUrl',
      uniqueVisitorCount: 'UniqueVisitorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      pageViewCount: 'string',
      shortUrl: 'string',
      shortUrlName: 'string',
      shortUrlStatus: 'string',
      sourceUrl: 'string',
      uniqueVisitorCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryShortUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the short URL.
   */
  data?: QueryShortUrlResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
      data: QueryShortUrlResponseBodyData,
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

