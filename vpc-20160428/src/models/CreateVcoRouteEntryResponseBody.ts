// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVcoRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the destination route entry was created. Unit: milliseconds.
   * 
   * The timestamp follows the UNIX timestamp format, which represents the total number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC to the time when the destination route entry was created.
   * 
   * @example
   * 1658387202664
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the destination route entry.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The next hop of the destination route entry.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol.
   * 
   * The value is **Ipsec**, which specifies the IPsec tunneling protocol.
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
   * CFC4D13B-E680-3985-95B1-87AA155481DF
   */
  requestId?: string;
  /**
   * @remarks
   * The destination CIDR block of the destination route entry.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The publish status of the destination route entry.
   * 
   * The value is **published**, which indicates that the route entry is published to the transit router instance.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The weight of the destination route entry.
   * 
   * - **0**: low priority.
   * - **100**: high priority.
   * 
   * @example
   * 100
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
      vpnConnectionId: 'VpnConnectionId',
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
      vpnConnectionId: 'string',
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

