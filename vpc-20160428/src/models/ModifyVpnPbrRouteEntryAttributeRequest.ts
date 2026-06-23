// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnPbrRouteEntryAttributeRequest extends $dara.Model {
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
   * The new policy priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * If you do not specify this parameter, the policy priority of the policy-based route is not modified.
   * 
   * > You must specify at least one of the **NewPriority** and **NewWeight** parameters.
   * 
   * @example
   * 10
   */
  newPriority?: number;
  /**
   * @remarks
   * The new weight of the policy-based route. Valid values:
   * 
   * - **100**: The IPsec-VPN connection associated with the policy-based route serves as the active link.
   * - **0**: The IPsec-VPN connection associated with the policy-based route serves as the standby link.
   * 
   * If you do not specify this parameter, the weight of the policy-based route is not modified.
   * > You must specify at least one of the **NewPriority** and **NewWeight** parameters.
   * 
   * @example
   * 0
   */
  newWeight?: number;
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
   * The original policy priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
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
   * The original weight of the policy-based route. Valid values:
   * 
   * - **100**: The IPsec-VPN connection associated with the policy-based route serves as the active link.
   * - **0**: The IPsec-VPN connection associated with the policy-based route serves as the standby link.
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
      newWeight: 'NewWeight',
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
      newWeight: 'number',
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

