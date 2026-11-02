// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteTableEntryAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client. Make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the gateway route table.
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
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
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without modifying the gateway route table. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the gateway route table is modified.
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
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the next hop that you want to modify.
   * 
   * - If **NextHopType** is set to **Instance**, **NextHopId** is the ID of the ECS instance.
   * - If **NextHopType** is set to **NetworkInterface**, **NextHopId** is the ID of the ENI.
   * - If **NextHopType** is set to **Local**, **NextHopId** is empty, which indicates local.
   * 
   * > If the next hop type of the route is **Instance** or **NetworkInterface** and you want to modify the next hop, you must first change **NextHopType** to **Local**, and then change **NextHopType** back to **Instance** or **NetworkInterface** before modifying the specific **NextHopId**. You cannot directly change the next hop from one ENI or ECS instance to another ENI or ECS instance.
   * 
   * @example
   * i-bp18xq9yguxoxe7m****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The next hop type of the route that you want to modify. Valid values:
   * 
   * - **Instance**: ECS instance.
   * - **NetworkInterface**: elastic network interface (ENI).
   * 
   * - **Local**: local.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the gateway route table that you want to modify.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

