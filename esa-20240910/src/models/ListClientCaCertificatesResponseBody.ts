// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClientCaCertificatesResponseBodyResult } from "./ListClientCaCertificatesResponseBodyResult";


export class ListClientCaCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
   * @remarks
   * The queried client CA certificates.
   */
  result?: ListClientCaCertificatesResponseBodyResult[];
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClientCaCertificatesResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

