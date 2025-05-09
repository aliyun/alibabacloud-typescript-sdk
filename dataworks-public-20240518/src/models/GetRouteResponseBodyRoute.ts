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

