// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnPbrRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
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
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run without creating the route. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
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
   * The tunneling protocol. Set the value to **Ipsec** (IPsec tunnel protocol).
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
   * A smaller policy priority value indicates a higher routing priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Specifies whether to publish the policy-based route to the VPC route table. Valid values:
   * 
   * - **true**: Publishes the policy-based route to the VPC route table. The system publishes the route only to the VPC system route table, not to VPC custom route tables.
   * 
   *   If you want the VPC custom route table to contain this route, manually add it. For more information, see [CreateRouteEntry](https://help.aliyun.com/document_detail/448722.html).
   * 
   * - **false**: Does not publish the policy-based route to the VPC route table.
   * 
   *   You must manually add a policy-based route whose next hop points to the VPN gateway instance in both the VPC system route table and custom route tables. Otherwise, the VPC cannot access resources in the CIDR block through the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * The region ID of the VPN gateway instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * If you use the same VPN gateway instance to establish active/standby IPsec-VPN connections, you can specify the weight of the policy-based route to specify the active and standby links. A policy-based route with a weight of 100 is the active link by default, and a policy-based route with a weight of 0 is the standby link by default.
   * 
   * You can configure health checks for the IPsec-VPN connection to automatically detect link connectivity. If the active link is unavailable, the system automatically switches traffic to the standby link, which ensures high availability of the cloud connection. For more information, see [CreateVpnConnection](https://help.aliyun.com/document_detail/120391.html).
   * 
   * - **100**: The IPsec-VPN connection associated with the policy-based route serves as the active link.
   * - **0**: The IPsec-VPN connection associated with the policy-based route serves as the standby link.
   * 
   * > - When you specify active and standby links, the source and destination CIDR blocks of the active and standby policy-based routes must be the same.
   * > - For VPN gateway instances that support dual-tunnel pattern IPsec-VPN connections, you do not need to configure this parameter. A dual-tunnel pattern IPsec-VPN connection contains two tunnels that automatically form active/standby links. You do not need to specify active/standby links by configuring this parameter. If you configure this parameter, the parameter settings do not take effect.
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

