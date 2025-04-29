// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissions } from "./DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissions";


export class DescribeNetworkInterfacePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the ENI permissions.
   */
  networkInterfacePermissions?: DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissions;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FCD3DEF-63D3-4605-A818-805C8BD7DB87
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfacePermissions: 'NetworkInterfacePermissions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfacePermissions: DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissions,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.networkInterfacePermissions && typeof (this.networkInterfacePermissions as any).validate === 'function') {
      (this.networkInterfacePermissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

