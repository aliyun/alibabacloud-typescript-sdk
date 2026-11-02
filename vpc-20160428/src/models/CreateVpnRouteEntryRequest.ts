// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b3828dae****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the destination route.
   * 
   * The description must be **1** to **100** characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * mytest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: Prechecks the request without creating the route. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends the request. If the request passes the precheck, the HTTP 2xx status code is returned and the operation is performed.
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
   * Specifies whether to publish the destination route to the VPC. Valid values:
   * 
   * - **true**: Publishes the destination route to the VPC. The system publishes the route only to the system route table of the VPC, but not to the custom route table of the VPC.
   * 
   *   If you want the custom route table of the VPC to include this route, you must manually add it. For more information, see [CreateRouteEntry](https://help.aliyun.com/document_detail/448722.html).
   * - **false**: Does not publish the destination route to the VPC.
   * 
   *   You must manually add a destination route whose next hop points to the VPN gateway in both the system route table and the custom route table of the VPC. Otherwise, the VPC cannot access resources in the CIDR block through the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  publishVpc?: boolean;
  /**
   * @remarks
   * The region ID of the VPN gateway.
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
   * The weight of the destination route.
   * 
   * In scenarios where you use the same VPN gateway instance to establish active/standby IPsec-VPN connections, you can specify the active/standby links by configuring the weight of the destination route. A destination route with a weight of 100 is the active link by default, and a destination route with a weight of 0 is the standby link by default.
   * 
   * You can configure health checks for the IPsec-VPN connection to automatically detect the connectivity of the links. If the active link is disconnected, the system automatically switches traffic to the standby link to ensure high availability of the cloud access link. For more information, see [CreateVpnConnection](https://help.aliyun.com/document_detail/120391.html).
   * 
   * Valid values:
   * - **100**: The IPsec-VPN connection associated with the destination route is the active link.
   * - **0**: The IPsec-VPN connection associated with the destination route is the standby link.
   * 
   * > - When you specify active/standby links, the active and standby destination routes must have the same destination CIDR block, different next hops, and different weights.
   * > - For a VPN gateway instance that supports dual-tunnel pattern IPsec-VPN connections, you do not need to configure this parameter. A dual-tunnel pattern IPsec-VPN connection contains two tunnels that automatically form active/standby links. You do not need to specify active/standby links by configuring this parameter. If you configure this parameter, the parameter settings do not take effect.
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

