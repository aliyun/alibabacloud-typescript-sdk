// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserDomainsByFuncResponseBodyDomains } from "./DescribeCdnUserDomainsByFuncResponseBodyDomains";


export class DescribeCdnUserDomainsByFuncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the accelerated domain name.
   */
  domains?: DescribeCdnUserDomainsByFuncResponseBodyDomains;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA75AADB-5E25-4970-B480-EAA1F5658483
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
      domains: DescribeCdnUserDomainsByFuncResponseBodyDomains,
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

