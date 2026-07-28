// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishVpnRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b382****
   */
  clientToken?: string;
  /**
   * @remarks
   * The next hop of the route entry of the VPN gateway.
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
   * Specifies whether to publish or withdraw the route. Valid values:
   * 
   * - **true**: Publishes the destination-based route or policy-based route to the system route table of the VPC.
   * 
   * - **false**: Withdraws the published destination-based route or policy-based route from the system route table of the VPC.
   * 
   * 
   * > If a route entry with the same destination CIDR block exists in both the policy-based route table and the destination-based route table, and both route entries are published to the same VPC, when you withdraw the route entry from the policy-based route table, the route entry in the destination-based route table is also withdrawn. When you withdraw the route entry from the destination-based route table, the route entry in the policy-based route table is also withdrawn.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * The region ID of the VPN gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination CIDR block of the route entry of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The type of the route entry of the VPN gateway. Valid values:
   * 
   * - **pbr**: policy-based route.
   * 
   * - **dbr**: destination-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * pbr
   */
  routeType?: string;
  /**
   * @remarks
   * The instance ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1a3kqjiiq9legfx****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextHop: 'NextHop',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publishVpc: 'PublishVpc',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDest: 'RouteDest',
      routeType: 'RouteType',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextHop: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publishVpc: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDest: 'string',
      routeType: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

