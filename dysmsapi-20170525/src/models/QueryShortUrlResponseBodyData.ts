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

