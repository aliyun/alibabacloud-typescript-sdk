// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region equal-cost multi-path (ECMP) routing feature. Valid values:
   * 
   * - **disable**: Disables multi-region ECMP routing. After this feature is disabled, for routes that are learned from different regions and have the same prefix and other attributes, the system selects the transit router with the smallest region ID as the next hop. Region IDs are sorted in alphabetical order. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you disable the feature.
   * 
   * - **enable**: Enables multi-region ECMP routing. After this feature is enabled, for routes that are learned from different regions and have the same prefix and other attributes, ECMP routing is formed. This changes the latency and bandwidth consumption between different regions. Make sure that you fully evaluate the impact before you enable the feature.
   * 
   * @example
   * disable
   */
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https:// `.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https:// `.
   * 
   * Each tag key must have a corresponding tag value. You can specify up to 20 tag values.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - If this is your first query or no next query is to be sent, do not specify this parameter.
   * 
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The features of the route table.
   */
  routeTableOptions?: ListTransitRouterRouteTablesRequestRouteTableOptions;
  /**
   * @remarks
   * The tag.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListTransitRouterRouteTablesRequestTag[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * You can query multiple route tables at a time. The maximum value of **N** is **20**.
   * 
   * @example
   * vtb-bp1l8awdb4iuo9uwu****
   */
  transitRouterRouteTableIds?: string[];
  /**
   * @remarks
   * The name of the route table.
   * 
   * You can query multiple route tables at a time. The maximum value of **N** is **20**.
   * 
   * > If you query route tables using both **TransitRouterRouteTableNames.N** and **TransitRouterRouteTableIds.N**, make sure that the names and IDs match.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableNames?: string[];
  /**
   * @remarks
   * The status of the route table. Valid values:
   * 
   * - **Creating**: The route table is being created.
   * 
   * - **Deleting**: The route table is being deleted.
   * 
   * - **Active**: The route table is available.
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * - **Custom**: a custom route table.
   * 
   * - **System**: the default route table.
   * 
   * @example
   * Custom
   */
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableIds: 'TransitRouterRouteTableIds',
      transitRouterRouteTableNames: 'TransitRouterRouteTableNames',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: ListTransitRouterRouteTablesRequestRouteTableOptions,
      tag: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesRequestTag },
      transitRouterId: 'string',
      transitRouterRouteTableIds: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableNames: { 'type': 'array', 'itemType': 'string' },
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.transitRouterRouteTableIds)) {
      $dara.Model.validateArray(this.transitRouterRouteTableIds);
    }
    if(Array.isArray(this.transitRouterRouteTableNames)) {
      $dara.Model.validateArray(this.transitRouterRouteTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

