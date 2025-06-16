// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnConnectionsResponseBodyVpnConnections } from "./DescribeVpnConnectionsResponseBodyVpnConnections";


export class DescribeVpnConnectionsResponseBody extends $dara.Model {
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
   * The number of entries returned per page.
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
   * 238752DC-0693-49BE-9C85-711D5691D3E5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the IPsec-VPN connections.
   */
  vpnConnections?: DescribeVpnConnectionsResponseBodyVpnConnections;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnConnections: 'VpnConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnConnections: DescribeVpnConnectionsResponseBodyVpnConnections,
    };
  }

  validate() {
    if(this.vpnConnections && typeof (this.vpnConnections as any).validate === 'function') {
      (this.vpnConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

