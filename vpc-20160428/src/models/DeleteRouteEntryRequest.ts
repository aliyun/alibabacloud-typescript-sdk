// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntryRequestNextHopList extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop instance of the ECMP route. A maximum of 16 next hop instances are supported.
   * 
   * @example
   * ri-2zeo3xzyf38r43cd****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop of the ECMP route. Set the value to **RouterInterface** (router interface). A maximum of 16 next hop instances are supported.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  static names(): { [key: string]: string } {
    return {
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHopId: 'string',
      nextHopType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route. IPv4 CIDR blocks, IPv6 CIDR blocks, prefix list CIDR blocks, and prefix list instance IDs are supported. This parameter is mutually exclusive with the RouteEntryId parameter.
   * > If the **RouteEntryId** parameter is not specified, the **DestinationCidrBlock** and **RouteTableId** parameters are required. Configure the **NextHopId** or **NextHopList** parameter as needed.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * **true**: performs a dry run without deleting the route. The system checks the AccessKey pair, the authorization of the Resource Access Management (RAM) user, and the required parameters. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * 
   * **false** (default): sends a normal request. After the check succeeds, a 2xx HTTP status code is returned and the route is deleted.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop instance.
   * 
   * - To delete a non-ECMP route, specify **NextHopId**. Do not specify **NextHopList**.
   * - To delete an ECMP route, specify **NextHopList**. Do not specify **NextHopId**.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The information about the next hop instances of the ECMP route. A maximum of 16 next hop instances are supported.
   */
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the route table resides.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route that you want to delete. This parameter is mutually exclusive with the DestinationCidrBlock parameter.
   * > If the **DestinationCidrBlock** parameter is not specified, the **RouteEntryId** parameter is required.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The ID of the route table that contains the route.  
   * > If the **RouteEntryId** parameter is not specified, the **DestinationCidrBlock** and **RouteTableId** parameters are required. Configure the **NextHopId** or **NextHopList** parameter as needed.
   * 
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      nextHopId: 'NextHopId',
      nextHopList: 'NextHopList',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntryId: 'RouteEntryId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      nextHopId: 'string',
      nextHopList: { 'type': 'array', 'itemType': DeleteRouteEntryRequestNextHopList },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntryId: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHopList)) {
      $dara.Model.validateArray(this.nextHopList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

