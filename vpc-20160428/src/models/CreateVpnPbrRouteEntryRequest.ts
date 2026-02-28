// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy-based route.
   * 
   * The description must be 1 to 100 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request without performing the operation. The system prechecks the required parameters, request syntax, and limits. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. After the request passes the precheck, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
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
   * The description of the policy-based route.
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The status of the policy-based route. Valid values:
   * 
   * *   **published**: advertised to the VPC route table.
   * *   **normal**: not advertised to the VPC route table.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The destination CIDR block of the policy-based route.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * Specifies whether to advertise the policy-based route to a virtual private cloud (VPC) route table. Valid values:
   * 
   * *   **true**: The route is advertised to the VPC system route table, but not to a VPC custom route table.
   * 
   *     You can manually add the route the a VPC custom route table. For more information, see [CreateRouteEntry](https://help.aliyun.com/document_detail/448722.html).
   * 
   * *   **false**: Do not advertise the route to the route table.
   * 
   *     You must manually add a policy-based route that points to the VPN gateway in the VPC custom and system route table. Otherwise, the VPC cannot access resources in the CIDR block through an IPsec-VPN connection.
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
   * The response parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
  /**
   * @remarks
   * The priority of the policy-based route. Valid values: **1** to **100**. Default value: **10**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  routeSource?: string;
  /**
   * @remarks
   * The tunneling protocol. Set the value to **Ipsec**.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1a3kqjiiq9legfx****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The weight of the policy-based route. Valid values:
   * 
   * *   **100**: The IPsec-VPN connection associated with the policy-based route serves as an active connection.
   * *   **0**: The IPsec-VPN connection associated with the policy-based route serves as a standby connection.
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

