// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishVpnRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b382****
   */
  clientToken?: string;
  /**
   * @remarks
   * The next hop of the VPN gateway route.
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
   * Specifies whether to advertise the VPN gateway route to the VPC route table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * The ID of the region where the VPN gateway is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The destination CIDR block of the VPN gateway route.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The type of the VPN gateway route. Valid values:
   * 
   * *   **pbr**: policy-based route
   * *   **dbr**: destination-based route
   * 
   * This parameter is required.
   * 
   * @example
   * pbr
   */
  routeType?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
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

