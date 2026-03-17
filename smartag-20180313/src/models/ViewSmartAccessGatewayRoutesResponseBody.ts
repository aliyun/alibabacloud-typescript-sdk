// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayRoutesResponseBodyRoutes extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks that overlap with each other.
   */
  conflictCidrs?: string[];
  /**
   * @remarks
   * The route cost.
   * 
   * The first **0** represents the administrative distance (AD).
   * 
   * The second **0** represents the router metric.
   * 
   * @example
   * [0/0]
   */
  cost?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 172.1.1.0/24
   */
  dst?: string;
  /**
   * @remarks
   * The port number. A value of -1 indicates that the next hop points to a VPN tunnel.
   * 
   * Valid values: **-1** to **4294967295**.
   * 
   * @example
   * 2
   */
  idx?: number;
  /**
   * @remarks
   * The next hop.
   * 
   * @example
   * 1.XX.XX.1
   */
  nexthop?: string;
  /**
   * @remarks
   * The port role.
   * 
   * @example
   * WAN
   */
  role?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **static**
   * *   **bgp**
   * *   **ospf**
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conflictCidrs: 'ConflictCidrs',
      cost: 'Cost',
      dst: 'Dst',
      idx: 'Idx',
      nexthop: 'Nexthop',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCidrs: { 'type': 'array', 'itemType': 'string' },
      cost: 'string',
      dst: 'string',
      idx: 'number',
      nexthop: 'string',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conflictCidrs)) {
      $dara.Model.validateArray(this.conflictCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ViewSmartAccessGatewayRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3D21D0B-5258-5412-AD1C-3929D297286B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the queried routes.
   */
  routes?: ViewSmartAccessGatewayRoutesResponseBodyRoutes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routes: 'Routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routes: { 'type': 'array', 'itemType': ViewSmartAccessGatewayRoutesResponseBodyRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

