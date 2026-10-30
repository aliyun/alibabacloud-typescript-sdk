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
   * The route type of the aggregate route.
   * 
   * Valid value: **Static**, which indicates a static route. After the aggregate route is propagated to a VPC-connected instance, it becomes a custom route entry by default.
   * 
   * @example
   * Static
   */
  routeType?: string;
  /**
   * @remarks
   * The propagation scope of the aggregate route.
   * 
   * Valid value: **VPC**, which indicates that the aggregate route is propagated to all VPC-connected instances that are associated with the route table of the current Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  scope?: string;
  /**
   * @remarks
   * The list of propagation scopes for the aggregate route.
   * >You must specify at least one of the propagation scope and the propagation scope list. We recommend that you specify the propagation scope list. The elements in the propagation scope list cannot be the same as the value of the propagation scope.
   */
  scopeList?: string[];
  /**
   * @remarks
   * The propagation status of the aggregate route.
   * 
   * - **AllConfigured**: The aggregate route is delivered to all VPC-connected instances.
   * - **Configuring**: The aggregate route is being delivered.
   * - **ConfigFailed**: The aggregate route failed to be delivered.
   * - **PartialConfigured**: The aggregate route is not delivered to some VPC-connected instances.
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
   * The list of aggregate routes.
   */
  data?: DescribeTransitRouteTableAggregationResponseBodyData[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * - If **NextToken** is empty, no next query is to be sent.
   * - If **NextToken** is returned, the value indicates the token that is used for the next query.
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

