// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region equal-cost multi-path (ECMP) routing feature. Valid values:
   * - **disable**: disables multi-region ECMP routing. After you disable this feature, if routes with the same prefix are learned from different regions and have the same route attributes, the transit router with the smallest region ID (in alphabetical order) is preferred as the next hop. This changes the traffic latency and the bandwidth consumed between regions. Make sure that you fully evaluate the impact before you disable this feature.
   * - **enable**: enables multi-region ECMP routing. After you enable this feature, if routes with the same prefix are learned from different regions and have the same route attributes, ECMP routing is formed. This changes the traffic latency and the bandwidth consumed between regions. Make sure that you fully evaluate the impact before you enable this feature.
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables extends $dara.Model {
  /**
   * @remarks
   * The time when the route table was created.
   * 
   * The time is displayed in ISO 8601 standard format in UTC. Format: YYYY-MM-DDThh:mmZ.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID of the Enterprise Edition transit router.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The route table feature options.
   */
  routeTableOptions?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags[];
  /**
   * @remarks
   * The instance ID of the transit router, which is used to forward routing information.
   * 
   * @example
   * tr-8vb8bie2koduo5awz****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the route table.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The name of the route table.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableName?: string;
  /**
   * @remarks
   * The status of the route table.
   * 
   * - **Creating**: The route table is being created.
   * - **Deleting**: The route table is being deleted.
   * - **Active**: The route table is available.
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table.
   * 
   * - **Custom**: custom route table.
   * - **System**: system default route table.
   * 
   * @example
   * System
   */
  transitRouterRouteTableType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      regionId: 'RegionId',
      routeTableOptions: 'RouteTableOptions',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
      transitRouterRouteTableStatus: 'TransitRouterRouteTableStatus',
      transitRouterRouteTableType: 'TransitRouterRouteTableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      routeTableOptions: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions,
      tags: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags },
      transitRouterId: 'string',
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableId: 'string',
      transitRouterRouteTableName: 'string',
      transitRouterRouteTableStatus: 'string',
      transitRouterRouteTableType: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterRouteTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If **NextToken** is empty, no next query is to be sent.
   * - If **NextToken** returns a value, the value is the token for the next query.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82678F4A-C9F7-4CC1-8BF0-D619A63BFC57
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of route tables.
   */
  transitRouterRouteTables?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterRouteTables: 'TransitRouterRouteTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterRouteTables: { 'type': 'array', 'itemType': ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTables },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterRouteTables)) {
      $dara.Model.validateArray(this.transitRouterRouteTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

