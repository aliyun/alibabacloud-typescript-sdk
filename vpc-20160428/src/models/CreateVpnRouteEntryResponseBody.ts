// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the destination-based route was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the destination-based route.
   * 
   * @example
   * mytest
   */
  description?: string;
  /**
   * @remarks
   * The next hop of the destination-based route.
   * 
   * @example
   * vco-bp15oes1py4i66rmd****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol. The value is set to **Ipsec**, which indicates the IPsec tunneling protocol.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BE01CD7-5A50-472D-AC14-CA181C5C03BE
   */
  requestId?: string;
  /**
   * @remarks
   * The destination CIDR block of the destination-based route.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The status of the destination-based route.
   * 
   * *   **published**: advertised to the VPC route table.
   * *   **normal**: not advertised to the VPC route table.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1a3kqjiiq9legfx****
   */
  vpnInstanceId?: string;
  /**
   * @remarks
   * The weight of the destination-based route. Valid values:
   * 
   * *   **100**: a high priority
   * *   **0**: a low priority
   * 
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      nextHop: 'NextHop',
      overlayMode: 'OverlayMode',
      requestId: 'RequestId',
      routeDest: 'RouteDest',
      state: 'State',
      vpnInstanceId: 'VpnInstanceId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      nextHop: 'string',
      overlayMode: 'string',
      requestId: 'string',
      routeDest: 'string',
      state: 'string',
      vpnInstanceId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

