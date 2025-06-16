// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnGatewaysResponseBodyVpnGateways } from "./DescribeVpnGatewaysResponseBodyVpnGateways";


export class DescribeVpnGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
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
   * DF11D6F6-E35A-41C3-9B20-6FC8A901FE65
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the VPN gateways.
   */
  vpnGateways?: DescribeVpnGatewaysResponseBodyVpnGateways;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnGateways: 'VpnGateways',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnGateways: DescribeVpnGatewaysResponseBodyVpnGateways,
    };
  }

  validate() {
    if(this.vpnGateways && typeof (this.vpnGateways as any).validate === 'function') {
      (this.vpnGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

