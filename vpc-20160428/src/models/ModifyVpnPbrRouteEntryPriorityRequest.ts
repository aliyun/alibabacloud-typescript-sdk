// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnPbrRouteEntryPriorityRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The new priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  newPriority?: number;
  /**
   * @remarks
   * The next hop of the policy-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-bp15oes1py4i66rmd****
   */
  nextHop?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The original priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-henyuan
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination CIDR block of the policy-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The source CIDR block of the policy-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  routeSource?: string;
  /**
   * @remarks
   * The ID of the VPN gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1a3kqjiiq9legfx****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The weight of the policy-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newPriority: 'NewPriority',
      nextHop: 'NextHop',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDest: 'RouteDest',
      routeSource: 'RouteSource',
      vpnGatewayId: 'VpnGatewayId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newPriority: 'number',
      nextHop: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDest: 'string',
      routeSource: 'string',
      vpnGatewayId: 'string',
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

