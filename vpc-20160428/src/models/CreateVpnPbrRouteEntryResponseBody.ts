// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the policy-based route was created.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the policy-based route.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The next hop of the policy-based route.
   * 
   * @example
   * vco-bp15oes1py4i66rmd****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol. The value is **Ipsec**.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  /**
   * @remarks
   * The priority of the policy-based route.
   * 
   * @example
   * 10
   */
  priority?: number;
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
   * The destination CIDR block of the policy-based route.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The source CIDR block of the policy-based route.
   * 
   * @example
   * 192.168.1.0/24
   */
  routeSource?: string;
  /**
   * @remarks
   * The status of the policy-based route. Valid values:
   * 
   * *   **published**: advertised to the VPC route table.
   * *   **normal**: not advertised to the VPC route table.
   * 
   * @example
   * normal
   */
  state?: string;
  /**
   * @remarks
   * The VPN gateway ID.
   * 
   * @example
   * vpn-bp1cmw7jh1nfe43m9****
   */
  vpnInstanceId?: string;
  /**
   * @remarks
   * The weight of the policy-based route. Valid values:
   * 
   * *   **100**: The IPsec-VPN connection associated with the policy-based route serves as an active connection.
   * *   **0**: The IPsec-VPN connection associated with the policy-based route serves as a standby connection.
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
      priority: 'Priority',
      requestId: 'RequestId',
      routeDest: 'RouteDest',
      routeSource: 'RouteSource',
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
      priority: 'number',
      requestId: 'string',
      routeDest: 'string',
      routeSource: 'string',
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

