// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteEntriesRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PrefixExactMatchCidrs**: exact match.
   * - **LongestPrefixMatchCidrs**: longest prefix match. Both IP addresses and CIDR blocks are supported.
   * - **SubnetOfMatchCidrs**: subnet match. Matches the subnets of the specified CIDR block, including the specified CIDR block.
   * - **SupernetOfMatchCidrs**: supernet match. Matches the supernets of the specified CIDR block, including the specified CIDR block.
   * 
   * Multiple filter conditions are connected by the **AND** logical operator by default. A route entry must meet all filter conditions to be considered a match. You cannot specify duplicate filter conditions.
   * 
   * @example
   * PrefixExactMatchCidrs
   */
  key?: string;
  /**
   * @remarks
   * The list of filter condition values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If this is your first query or no next query is to be sent, ignore this parameter.
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
   * 
   * @example
   * fce19****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-6ehtn5kqxgeyy08fi****
   */
  prefixListId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The filter conditions for the CIDR blocks of the route entry in the routing table.
   */
  routeFilter?: ListTransitRouterRouteEntriesRequestRouteFilter[];
  /**
   * @remarks
   * The destination CIDR block of the route entry (**This parameter is deprecated. Use the RouteFilter parameter instead**).
   * 
   * @example
   * 192.168.0.0/24
   * 
   * @deprecated
   */
  transitRouterRouteEntryDestinationCidrBlock?: string;
  /**
   * @remarks
   * The IDs of the route entry in the routing table.
   * 
   * @example
   * rte-oklkgwmj97z6dn****
   */
  transitRouterRouteEntryIds?: string[];
  /**
   * @remarks
   * The names of the route entry in the routing table.
   * 
   * @example
   * testname
   */
  transitRouterRouteEntryNames?: string[];
  /**
   * @remarks
   * The ID of the network instance connection associated with the next hop of the route entry.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterRouteEntryNextHopId?: string;
  /**
   * @remarks
   * The next hop instance ID of the route entry in the routing table.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryNextHopResourceId?: string;
  /**
   * @remarks
   * The next hop instance type of the route entry. Valid values:
   * 
   * - **VPC**: VPC.
   * - **VBR**: VBR.
   * - **TR**: transit router.
   * - **VPN**: IPsec connection.
   * 
   * @example
   * VPC
   */
  transitRouterRouteEntryNextHopResourceType?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **BlackHole**: specifies that the route entry is a blackhole route.
   * - **Attachment**: specifies that the next hop of the route entry is a network instance connection.
   * 
   * @example
   * Attachment
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The origin instance ID of the route entry in the routing table.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryOriginResourceId?: string;
  /**
   * @remarks
   * The origin instance type of the route entry. Valid values:
   * 
   * - **VPC**: VPC.
   * - **VBR**: VBR.
   * - **TR**: transit router.
   * - **VPN**: IPsec connection.
   * 
   * @example
   * VPC
   */
  transitRouterRouteEntryOriginResourceType?: string;
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * - **All**: queries route entries in all states.
   * - **Active** (default): queries only active route entries.
   * - **Rejected**: queries only route entries that are rejected due to route conflicts.
   * - **Prohibited**: queries only route entries that are prohibited by route maps.
   * - **Standby**: queries only standby route entries.
   * - **Candidate**: queries only candidate route entries.
   * 
   * If you do not specify this parameter, the system queries only active route entries by default.
   * 
   * @example
   * Active
   */
  transitRouterRouteEntryStatus?: string;
  /**
   * @remarks
   * The destination type of the route entry. Valid values:
   * 
   * - **Propagated**: generated by automatic learning of the current routing table.
   * - **Static**: statically configured in the current routing table.
   * 
   * @example
   * Propagated
   */
  transitRouterRouteEntryType?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeFilter: 'RouteFilter',
      transitRouterRouteEntryDestinationCidrBlock: 'TransitRouterRouteEntryDestinationCidrBlock',
      transitRouterRouteEntryIds: 'TransitRouterRouteEntryIds',
      transitRouterRouteEntryNames: 'TransitRouterRouteEntryNames',
      transitRouterRouteEntryNextHopId: 'TransitRouterRouteEntryNextHopId',
      transitRouterRouteEntryNextHopResourceId: 'TransitRouterRouteEntryNextHopResourceId',
      transitRouterRouteEntryNextHopResourceType: 'TransitRouterRouteEntryNextHopResourceType',
      transitRouterRouteEntryNextHopType: 'TransitRouterRouteEntryNextHopType',
      transitRouterRouteEntryOriginResourceId: 'TransitRouterRouteEntryOriginResourceId',
      transitRouterRouteEntryOriginResourceType: 'TransitRouterRouteEntryOriginResourceType',
      transitRouterRouteEntryStatus: 'TransitRouterRouteEntryStatus',
      transitRouterRouteEntryType: 'TransitRouterRouteEntryType',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      prefixListId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeFilter: { 'type': 'array', 'itemType': ListTransitRouterRouteEntriesRequestRouteFilter },
      transitRouterRouteEntryDestinationCidrBlock: 'string',
      transitRouterRouteEntryIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteEntryNextHopId: 'string',
      transitRouterRouteEntryNextHopResourceId: 'string',
      transitRouterRouteEntryNextHopResourceType: 'string',
      transitRouterRouteEntryNextHopType: 'string',
      transitRouterRouteEntryOriginResourceId: 'string',
      transitRouterRouteEntryOriginResourceType: 'string',
      transitRouterRouteEntryStatus: 'string',
      transitRouterRouteEntryType: 'string',
      transitRouterRouteTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeFilter)) {
      $dara.Model.validateArray(this.routeFilter);
    }
    if(Array.isArray(this.transitRouterRouteEntryIds)) {
      $dara.Model.validateArray(this.transitRouterRouteEntryIds);
    }
    if(Array.isArray(this.transitRouterRouteEntryNames)) {
      $dara.Model.validateArray(this.transitRouterRouteEntryNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

