// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the policy-based route was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the route.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The tunneling protocol. The value is **Ipsec**.
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
   * The priority of the policy-based route.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The priority of the policy-based route.
   * 
   * @example
   * 5BE01CD7-5A50-472D-AC14-CA181C5C03BE
   */
  requestId?: string;
  /**
   * @remarks
   * The VPN gateway ID.
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
   * The status of the policy-based route.
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
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1cmw7jh1nfe43m9****
   */
  vpnInstanceId?: string;
  /**
   * @remarks
   * The source CIDR block of the policy-based route.
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

