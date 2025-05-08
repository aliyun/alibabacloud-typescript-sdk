// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsEipAddressesResponseBodyEipAddresses } from "./DescribeEnsEipAddressesResponseBodyEipAddresses";


export class DescribeEnsEipAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the EIPs.
   */
  eipAddresses?: DescribeEnsEipAddressesResponseBodyEipAddresses;
  /**
   * @remarks
   * The page number. Valid values: an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: **10** to **100**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8629F679-B51D-4194-A1CC-5D8F504C362B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEnsEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipAddresses && typeof (this.eipAddresses as any).validate === 'function') {
      (this.eipAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

