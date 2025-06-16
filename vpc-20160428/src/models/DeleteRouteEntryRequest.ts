// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteRouteEntryRequestNextHopList } from "./DeleteRouteEntryRequestNextHopList";


export class DeleteRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route. Only IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix lists are supported.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  destinationCidrBlock?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * *   To delete a route other than an equal-cost multi-path (ECMP) route, set the **NextHopId** parameter and ignore the **NextHopList** parameter.
   * *   To delete an ECMP route, set the **NextHopList** parameter and ignore the **NextHopId** parameter.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The list of the next hop of the ECMP route.
   */
  nextHopList?: DeleteRouteEntryRequestNextHopList[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the route table.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route that you want to delete.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The ID of the route table to which the route belongs.
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

