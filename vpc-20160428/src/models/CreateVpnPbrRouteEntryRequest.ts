// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the policy-based route.
   * 
   * The description must be 1 to 100 characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: Prechecks the request without creating the route. The system checks whether the required parameters are specified, the request format, and the service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends the request. If the request passes the precheck, the HTTP 2xx status code is returned and the operation is performed.
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
   * The tunnel protocol. Set the value to **Ipsec** (IPsec tunnel protocol).
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy priority of the policy-based route. Valid values: **1** to **100**. Default value: **10**.
   * 
   * A smaller value indicates a higher policy priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether to publish the policy-based route to the VPC. Valid values:
   * 
   * - **true**: Publishes the policy-based route to the VPC. The system publishes the route only to the system route table of the VPC, but not to custom route tables.
   * 
   *   If you want the custom route tables of the VPC to include this route, you must manually add it. For more information, see [CreateRouteEntry](https://help.aliyun.com/document_detail/448722.html).
   * 
   * - **false**: Does not publish the policy-based route to the route tables of the VPC.
   * 
   *   You must manually add a policy-based route whose next hop points to the VPN gateway in both the system route table and custom route tables of the VPC. Otherwise, the VPC cannot access resources in the CIDR block through the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * The region ID of the VPN gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * The ID of the VPN gateway.
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
   * When you use the same VPN gateway instance to establish active/standby IPsec-VPN connections, you can specify the active/standby links by configuring the weight of the policy-based route. A policy-based route with a weight of 100 is the active link by default, and a policy-based route with a weight of 0 is the standby link by default.
   * 
   * You can configure health checks for the IPsec-VPN connections to automatically detect the connectivity of the links. If the active link fails, the system automatically switches traffic to the standby link to ensure high availability of the cloud access link. For more information, see [CreateVpnConnection](https://help.aliyun.com/document_detail/120391.html).
   * 
   * Valid values:
   * - **100**: The IPsec-VPN connection associated with the policy-based route is the active link.
   * - **0**: The IPsec-VPN connection associated with the policy-based route is the standby link.
   * 
   * > - When you specify the active/standby links, the source and destination CIDR blocks of the active/standby policy-based routes must be the same.
   * > - For VPN gateway instances that support dual-tunnel IPsec-VPN connections, you do not need to configure this parameter. A dual-tunnel IPsec-VPN connection contains two tunnels that automatically form active/standby links. You do not need to specify the active/standby links by configuring this parameter. If you configure this parameter, the parameter settings do not take effect.
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

