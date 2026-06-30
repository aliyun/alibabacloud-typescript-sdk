// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouteTableAggregationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the aggregate route.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The name of the aggregate route.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The type of the aggregate route.
   * 
   * The value is set to **Static**. This indicates that the route is a static route. After the aggregate route is advertised to a VPC, it becomes a custom route entry by default.
   * 
   * @example
   * Static
   */
  routeType?: string;
  /**
   * @remarks
   * The scope of the aggregate route.
   * 
   * The value is set to **VPC**. This indicates that the aggregate route is advertised to all VPCs that are associated with the route table of the Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  scope?: string;
  /**
   * @remarks
   * The list of scopes of the aggregate route.
   * 
   * > You must specify at least one of the Scope and ScopeList properties. We recommend that you specify ScopeList. The elements in ScopeList cannot be the same as the value of Scope.
   */
  scopeList?: string[];
  /**
   * @remarks
   * The advertising status of the aggregate route.
   * 
   * - **AllConfigured**: The aggregate route is advertised to all VPCs.
   * 
   * - **Configuring**: The aggregate route is being advertised.
   * 
   * - **ConfigFailed**: The aggregate route failed to be advertised.
   * 
   * - **PartialConfigured**: The aggregate route is advertised to some VPCs.
   * 
   * - **Deleting**: The aggregate route is being deleted.
   * 
   * @example
   * AllConfigured
   */
  status?: string;
  /**
   * @remarks
   * The ID of the route table of the Enterprise Edition transit router.
   * 
   * @example
   * vtb-6ehgc262hr170qgyc****
   */
  trRouteTableId?: string;
  /**
   * @remarks
   * The destination CIDR block of the aggregate route.
   * 
   * @example
   * 192.168.10.0/24
   */
  transitRouteTableAggregationCidr?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      routeType: 'RouteType',
      scope: 'Scope',
      scopeList: 'ScopeList',
      status: 'Status',
      trRouteTableId: 'TrRouteTableId',
      transitRouteTableAggregationCidr: 'TransitRouteTableAggregationCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      routeType: 'string',
      scope: 'string',
      scopeList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      trRouteTableId: 'string',
      transitRouteTableAggregationCidr: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopeList)) {
      $dara.Model.validateArray(this.scopeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * A list of aggregate routes.
   */
  data?: DescribeTransitRouteTableAggregationResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeTransitRouteTableAggregationResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

