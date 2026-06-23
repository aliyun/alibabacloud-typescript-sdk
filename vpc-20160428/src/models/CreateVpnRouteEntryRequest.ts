// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3828dae****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the destination route.
   * 
   * The description must be **1** to **100** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * mytest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The next hop of the destination route.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-bp15oes1py4i66rmd****
   */
  nextHop?: string;
  /**
   * @remarks
   * The tunneling protocol. Set the value to **Ipsec** (IPsec tunneling protocol).
   * 
   * @example
   * Ipsec
   */
  overlayMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to publish the destination route to the VPC. Valid values:
   * 
   * - **true**: Publishes the destination route to the VPC. The system publishes the route only to the VPC system route table, not to VPC custom route tables.
   * 
   *   If you want the custom route table to contain this route, manually add the route. For more information, see [CreateRouteEntry](https://help.aliyun.com/document_detail/448722.html).
   * - **false**: Does not publish the destination route to the VPC.
   * 
   *   You must manually add a destination route with the next hop pointing to the VPN gateway instance in both the VPC system route table and custom route tables. Otherwise, the VPC cannot access resources in the destination CIDR block through the IPsec-VPN connection.
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
   * The destination CIDR block of the destination route.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  routeDest?: string;
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
  /**
   * @remarks
   * The weight of the destination routing entry.
   * 
   * When you use the same VPN gateway instance to establish active/standby IPsec-VPN connections, you can specify the active and standby links by configuring the weight of the destination routing entry. A destination routing entry with a weight of 100 is the active link by default, and a destination routing entry with a weight of 0 is the standby link by default.
   * 
   * You can configure health checks for the IPsec-VPN connection to automatically detect the connectivity of the link. If the active link is unavailable, the system automatically switches traffic to the standby link, ensuring high availability of the cloud connection. For more information, see [CreateVpnConnection](https://help.aliyun.com/document_detail/120391.html).
   * 
   * - **100**: The IPsec-VPN connection associated with the destination route serves as the active link.
   * - **0**: The IPsec-VPN connection associated with the destination route serves as the standby link.
   * 
   * > - When you specify active and standby links, the active and standby destination routes must have the same destination CIDR block, different next hops, and different weights.
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
      publishVpc: 'PublishVpc',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeDest: 'RouteDest',
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
      publishVpc: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeDest: 'string',
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

