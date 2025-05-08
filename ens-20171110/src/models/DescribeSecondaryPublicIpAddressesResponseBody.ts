// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses } from "./DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses";


export class DescribeSecondaryPublicIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
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
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The array of returned secondary IP addresses.
   */
  secondaryPublicIpAddresses?: DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secondaryPublicIpAddresses: 'SecondaryPublicIpAddresses',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secondaryPublicIpAddresses: { 'type': 'array', 'itemType': DescribeSecondaryPublicIpAddressesResponseBodySecondaryPublicIpAddresses },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.secondaryPublicIpAddresses)) {
      $dara.Model.validateArray(this.secondaryPublicIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

