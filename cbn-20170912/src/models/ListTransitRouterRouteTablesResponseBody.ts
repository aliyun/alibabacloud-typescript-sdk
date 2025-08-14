// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether ECMP routing is enabled. Valid values:
   * 
   * *   **disable** If ECMP routing is disabled, routes that are learned from different regions but have the same prefix and attributes select the transit router with the smallest region ID as the next hop. Region IDs are sorted in alphabetic order. The network latency and bandwidth consumption also vary based on the region. Proceed with caution.
   * *   **enable** If ECMP routing is enabled, routes that are learned from different regions but have the same prefix and attributes form an ECMP route. The network latency and bandwidth consumption also vary based on the region. Proceed with caution.
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
   * The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
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
   * The features of the route table.
   */
  routeTableOptions?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesRouteTableOptions;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTransitRouterRouteTablesResponseBodyTransitRouterRouteTablesTags[];
  /**
   * @remarks
   * The transit router ID.
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
   * The ID of the route table.
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
   * The status of the route table. Valid values:
   * 
   * *   **Creating**
   * *   **Deleting**
   * *   **Active**
   * 
   * @example
   * Active
   */
  transitRouterRouteTableStatus?: string;
  /**
   * @remarks
   * The type of the route table. Valid values:
   * 
   * *   **Custom**
   * *   **System**
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
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * *   If a value of **NextToken** is not returned, it indicates that no additional results exist.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 82678F4A-C9F7-4CC1-8BF0-D619A63BFC57
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of route tables.
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

