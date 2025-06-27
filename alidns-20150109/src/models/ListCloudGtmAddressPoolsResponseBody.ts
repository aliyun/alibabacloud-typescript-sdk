// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAddressPoolsResponseBodyAddressPools } from "./ListCloudGtmAddressPoolsResponseBodyAddressPools";


export class ListCloudGtmAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: ListCloudGtmAddressPoolsResponseBodyAddressPools;
  /**
   * @remarks
   * Current page number, starting at **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries in the address pool.
   * 
   * @example
   * 11
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addressPools: 'AddressPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPools: ListCloudGtmAddressPoolsResponseBodyAddressPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.addressPools && typeof (this.addressPools as any).validate === 'function') {
      (this.addressPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

