// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDeletedDomainsResponseBodyDomains } from "./DescribeCdnDeletedDomainsResponseBodyDomains";


export class DescribeCdnDeletedDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of accelerated domain names and the time each domain name was last modified.
   */
  domains?: DescribeCdnDeletedDomainsResponseBodyDomains;
  /**
   * @remarks
   * The page number of the returned page, which is the same as the **PageNumber** parameter in request parameters.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names returned per page, which is the same as the **PageSize** parameter in request parameters.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA75AADB-5E25-4970-B480-EAA1F5658483
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeCdnDeletedDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

