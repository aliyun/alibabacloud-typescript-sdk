// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets";


export class DescribeNetworkInterfacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the ENIs.
   */
  networkInterfaceSets?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
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
   * 708AF9CE-FF92-5DF9-93F8-B7754AB1061A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSets: 'NetworkInterfaceSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSets: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.networkInterfaceSets && typeof (this.networkInterfaceSets as any).validate === 'function') {
      (this.networkInterfaceSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

