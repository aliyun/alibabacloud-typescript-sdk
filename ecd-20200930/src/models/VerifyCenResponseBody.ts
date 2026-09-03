// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCenResponseBodyRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 172.16.XX.XX
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The instance ID of the network instance associated with the routing entry.
   * 
   * @example
   * vpc-uf62bu0xs5j8md54p****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the route.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The route check result.
   * 
   * @example
   * Access
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recommended IPv4 CIDR blocks. Three CIDR blocks are randomly recommended. This parameter is returned when `Status` is `Conflict`.
   */
  cidrBlocks?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AF9D857-AE96-53D6-B317-5DD665EC4EC0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of route information contained in the CEN instance.
   */
  routeEntries?: VerifyCenResponseBodyRouteEntries[];
  /**
   * @remarks
   * The result of the CIDR block conflict check.
   * 
   * @example
   * Access
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlocks: 'CidrBlocks',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': VerifyCenResponseBodyRouteEntries },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrBlocks)) {
      $dara.Model.validateArray(this.cidrBlocks);
    }
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

