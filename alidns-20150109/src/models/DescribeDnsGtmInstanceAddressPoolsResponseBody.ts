// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools } from "./DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools";


export class DescribeDnsGtmInstanceAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned address pools.
   */
  addrPools?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools;
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
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.addrPools && typeof (this.addrPools as any).validate === 'function') {
      (this.addrPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

