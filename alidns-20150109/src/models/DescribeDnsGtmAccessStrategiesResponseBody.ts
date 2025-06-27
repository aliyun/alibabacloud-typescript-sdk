// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategies } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategies";


export class DescribeDnsGtmAccessStrategiesResponseBody extends $dara.Model {
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CCC9971-CEC9-4132-824B-4AE611C07623
   */
  requestId?: string;
  /**
   * @remarks
   * The access policies.
   */
  strategies?: DescribeDnsGtmAccessStrategiesResponseBodyStrategies;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 11
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 11
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeDnsGtmAccessStrategiesResponseBodyStrategies,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.strategies && typeof (this.strategies as any).validate === 'function') {
      (this.strategies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

