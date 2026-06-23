// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVcoRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp when the destination-based route entry was created. Unit: milliseconds.  
   * 
   * The timestamp follows the Unix time format, which represents the total number of milliseconds elapsed since 00:00:00 UTC on January 1, 1970, until the destination-based route entry was created.
   * 
   * @example
   * 1658387202664
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the destination-based route entry.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The next hop of the destination-based route entry.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunnel protocol.  
   * 
   * Valid value: **Ipsec**, which indicates the IPsec tunnel protocol.
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
   * The description of the destination-based route.
   * 
   * @example
   * 192.168.10.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The publish status of the destination-based route entry.  
   * 
   * Valid value: **published**, which indicates that the route entry has been published to the transit router instance.
   * 
   * @example
   * published
   */
  state?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The weight of the destination-based route entry.  
   * 
   * - **0**: indicates low priority.  
   * - **100**: indicates high priority.
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

