// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryShortUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation date and time of the short link.
   * 
   * @example
   * 2019-01-08 16:44:13
   */
  createDate?: string;
  /**
   * @remarks
   * The expiration date and time of the short link.
   * 
   * @example
   * 2019-01-22 11:21:11
   */
  expireDate?: string;
  /**
   * @remarks
   * The page view (PV) count for the short link.
   * 
   * @example
   * 300
   */
  pageViewCount?: string;
  /**
   * @remarks
   * The generated short link.
   * 
   * @example
   * http://****.cn/6y8uy7
   */
  shortUrl?: string;
  /**
   * @remarks
   * The name of the service that generated the short link.
   * 
   * @example
   * 阿里短链测试
   */
  shortUrlName?: string;
  /**
   * @remarks
   * The short link status. Valid values:
   * 
   * - **expired**: The short link has expired.
   * 
   * - **effective**: The short link is active.
   * 
   * - **audit**: The short link is under review.
   * 
   * - **reject**: The short link was rejected.
   * 
   * @example
   * expired
   */
  shortUrlStatus?: string;
  /**
   * @remarks
   * The source URL.
   * 
   * @example
   * https://www.****.com/product/sms
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The unique visitor (UV) count for the short link.
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
   * The request status code.
   * 
   * - A successful request returns `OK`.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the short link.
   */
  data?: QueryShortUrlResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
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

