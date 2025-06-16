// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteTableEntryAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the gateway route table.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * new
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry in the gateway route table.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to precheck only this request. Valid values:
   * 
   * *   **true**: prechecks the request without modifying the gateway route table. The system checks the required parameters, request format, and service limits. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: sends the request. This is the default value. If the request passes the precheck, a 2xx HTTP status code is returned and the gateway route table is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the gateway route table that you want to modify.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * The ID of the gateway route table that you want to modify.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  IPv4GatewayRouteTableId?: string;
  /**
   * @remarks
   * The name of the gateway route table.
   * 
   * The name must be 2 to 128 characters in length and can contain letter, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The new next hop ID of the route entry.
   * 
   * *   If you set **NextHopType** to **Instance**, specify an ECS instance ID for **NextHopId**.
   * *   If you set **NextHopType** to **NetworkInterface**, specify an ENI ID for **NextHopId**.
   * *   If you set **NextHopType** to **Local**, leave **NextHopId** empty. This indicates a local next hop.
   * 
   * >  If the value of NextHopType is **Instance** or **NetworkInterface**, and you want to modify the next hop, you must set **NextHopType** to **Local** first. Then, set **NextHopType** to **Instance** or **NetworkInterface** and specify **NextHopId** based on your requirements. If the next hop type of a route entry is Instance or NetworkInterface, you cannot directly specify a different ENI ID or ECS instance ID for the NextHopId parameter.
   * 
   * @example
   * i-bp18xq9yguxoxe7m****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The new next hop type of the route. Valid values:
   * 
   * *   **Instance**: Elastic Compute Service (ECS) instance
   * *   **NetworkInterface**: elastic network interface (ENI)
   * *   **Local**: local next hop
   * 
   * This parameter is required.
   * 
   * @example
   * EcsInstance
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the gateway route table that you want to modify belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-6
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      gatewayRouteTableId: 'GatewayRouteTableId',
      IPv4GatewayRouteTableId: 'IPv4GatewayRouteTableId',
      name: 'Name',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      gatewayRouteTableId: 'string',
      IPv4GatewayRouteTableId: 'string',
      name: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

