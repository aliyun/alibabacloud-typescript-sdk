// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAddressesResponseBodyAddresses } from "./ListCloudGtmAddressesResponseBodyAddresses";


export class ListCloudGtmAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   */
  addresses?: ListCloudGtmAddressesResponseBodyAddresses;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
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
   * Get the total number of addresses in the address list.
   * 
   * @example
   * 30
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: ListCloudGtmAddressesResponseBodyAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.addresses && typeof (this.addresses as any).validate === 'function') {
      (this.addresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

