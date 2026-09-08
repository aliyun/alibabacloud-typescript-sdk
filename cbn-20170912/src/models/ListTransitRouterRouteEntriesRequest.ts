// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteEntriesRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PrefixExactMatchCidrs**: exact match.
   * - **LongestPrefixMatchCidrs**: longest prefix match. IP addresses and CIDR blocks are supported.
   * - **SubnetOfMatchCidrs**: subnet match. Matches subnets of the specified CIDR block, including the specified CIDR block itself.
   * - **SupernetOfMatchCidrs**: supernet match. Matches supernets of the specified CIDR block, including the specified CIDR block itself.
   * 
   * Multiple filter conditions have an **AND** relationship by default, which means that a route entry must meet all filter conditions to be considered a match. You cannot specify the same filter condition more than once.
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
   * The number of entries per page when entries are returned in pages. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * - You do not need to specify this parameter for the first query or if no subsequent query is to be sent.
   * - If a subsequent query is to be sent, set the value to the **NextToken** value returned by the previous API call.
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
   * The filter conditions for route entry CIDR blocks.
   */
  routeFilter?: ListTransitRouterRouteEntriesRequestRouteFilter[];
  /**
   * @remarks
   * The destination CIDR block of the route entry (**This parameter will be deprecated. Use the RouteFilter parameter instead**).
   * 
   * @example
   * 192.168.0.0/24
   * 
   * @deprecated
   */
  transitRouterRouteEntryDestinationCidrBlock?: string;
  /**
   * @remarks
   * The IDs of the route entries.
   * 
   * @example
   * rte-oklkgwmj97z6dn****
   */
  transitRouterRouteEntryIds?: string[];
  /**
   * @remarks
   * The names of the route entries.
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
   * The instance ID of the next hop of the route entry.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryNextHopResourceId?: string;
  /**
   * @remarks
   * The type of the next hop instance of the route entry. Valid values:
   * 
   * - **VPC**: Virtual Private Cloud (VPC) instance.
   * - **VBR**: Virtual Border Router (VBR) instance.
   * - **TR**: transit router instance.
   * - **VPN**: IPsec connection instance.
   * 
   * @example
   * VPC
   */
  transitRouterRouteEntryNextHopResourceType?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **BlackHole**: the route entry is a blackhole route.
   * - **Attachment**: the next hop of the route entry is a network instance connection.
   * 
   * @example
   * Attachment
   */
  transitRouterRouteEntryNextHopType?: string;
  /**
   * @remarks
   * The instance ID of the origin of the route entry.
   * 
   * @example
   * vpc-m5ent6du8deaq5*****
   */
  transitRouterRouteEntryOriginResourceId?: string;
  /**
   * @remarks
   * The type of the origin instance of the route entry. Valid values:
   * 
   * - **VPC**: Virtual Private Cloud (VPC) instance.
   * - **VBR**: Virtual Border Router (VBR) instance.
   * - **TR**: transit router instance.
   * - **VPN**: IPsec connection instance.
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
   * - **Active (default)**: queries only route entries in the active state.
   * - **Rejected**: queries only route entries that are rejected due to route conflicts.
   * - **Prohibited**: queries only route entries that are prohibited because they match a routing policy.
   * - **Standby**: queries only route entries that serve as standby routes.
   * - **Candidate**: queries only route entries that serve as candidate routes.
   * 
   * If you do not specify this parameter, only route entries in the active state are queried.
   * 
   * @example
   * Active
   */
  transitRouterRouteEntryStatus?: string;
  /**
   * @remarks
   * The type of the route entry. Valid values:
   * 
   * - **Propagated**: generated by automatic learning on the current route table.
   * - **Static**: generated by static configuration on the current route table.
   * 
   * @example
   * Propagated
   */
  transitRouterRouteEntryType?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
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

