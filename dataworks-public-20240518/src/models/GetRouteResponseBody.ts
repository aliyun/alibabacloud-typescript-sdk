// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRouteResponseBodyRoute extends $dara.Model {
  /**
   * @remarks
   * The time when the route was created. The value is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * The CIDR block of the destination-based route.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The network resource ID.
   * 
   * @example
   * ns-679XXXXX
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destinationCidr: 'DestinationCidr',
      id: 'Id',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      destinationCidr: 'string',
      id: 'number',
      networkId: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the route.
   */
  route?: GetRouteResponseBodyRoute;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      route: 'Route',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      route: GetRouteResponseBodyRoute,
      success: 'boolean',
    };
  }

  validate() {
    if(this.route && typeof (this.route as any).validate === 'function') {
      (this.route as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

