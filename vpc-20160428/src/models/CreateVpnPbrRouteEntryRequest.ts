// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID is different for each request.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the policy-based route.
   * 
   * The description must be 1 to 100 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  description?: string;
  dryRun?: boolean;
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
  /**
   * @remarks
   * The tunneling protocol. Set the value to **Ipsec**.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the policy-based route. Valid values: **1** to **100**. Default value: **10**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether to advertise the policy-based route to a virtual private cloud (VPC) route table. Valid values:
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
   * The region ID of the VPN gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The VPN gateway ID.
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
   * If you use the same VPN gateway to establish active/standby IPsec-VPN connections, you can configure route weights to specify which connection is active. A value of 100 specifies the active connection, whereas a value of 0 specifies the standby connection.
   * 
   * You can configure health checks to automatically check the connectivity of IPsec-VPN connections. If the active connection is down, the standby connection automatically takes over. For more information, see [CreateVpnConnection](https://help.aliyun.com/document_detail/120391.html).
   * 
   * *   **100**: The IPsec-VPN connection associated with the policy-based route serves as an active connection.
   * *   **0**: The IPsec-VPN connection associated with the policy-based route serves as a standby connection.
   * 
   * >  If you specify active/standby IPsec-VPN connections, the active policy-based route and the standby policy-based route must have the same source and destination CIDR blocks.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      nextHop: 'NextHop',
      overlayMode: 'OverlayMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      publishVpc: 'PublishVpc',
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
      description: 'string',
      dryRun: 'boolean',
      nextHop: 'string',
      overlayMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      publishVpc: 'boolean',
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

