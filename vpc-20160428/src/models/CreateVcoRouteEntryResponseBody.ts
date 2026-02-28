// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVcoRouteEntryResponseBody extends $dara.Model {
  /**
   * @example
   * 1658387202664
   */
  createTime?: number;
  /**
   * @example
   * desctest
   */
  description?: string;
  /**
   * @example
   * vco-p0w2jpkhi2eeop6q6****
   */
  nextHop?: string;
  /**
   * @example
   * Ipsec
   */
  overlayMode?: string;
  /**
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

