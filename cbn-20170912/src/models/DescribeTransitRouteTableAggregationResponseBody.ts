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
   * The routing type of the aggregation route.
   * 
   * The value is **Static** only, which indicates a static route. After the aggregation route is propagated to a VPC-connected instance, it becomes a custom route entry by default.
   * 
   * @example
   * Static
   */
  routeType?: string;
  /**
   * @remarks
   * The propagation scope of the aggregation route.
   * 
   * The value is **VPC** only, which indicates that the aggregation route is propagated to all VPC-connected instances that have established associated forwarding relationships with the current Enterprise Edition transit router route table and have the route synchronization feature enabled.
   * 
   * @example
   * VPC
   */
  scope?: string;
  /**
   * @remarks
   * The propagation scope list of the aggregate route.
   * >You must specify at least one of the propagation scope or the propagation scope list for the aggregate route. We recommend that you use the propagation scope list. Elements in the propagation scope list cannot duplicate the value of the propagation scope.
   */
  scopeList?: string[];
  /**
   * @remarks
   * The propagation status of the aggregation route.
   * 
   * - **AllConfigured**: The aggregation routing has been propagated to all VPC-connected instances.
   * - **Configuring**: The aggregation routing is being propagated.
   * - **ConfigFailed**: The aggregation routing failed to be propagated.
   * - **PartialConfigured**: The aggregation routing failed to be propagated to some VPC-connected instances.
   * - **Deleting**: The aggregation routing is being deleted.
   * 
   * @example
   * AllConfigured
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
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
   * The number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The list of aggregate route information.
   */
  data?: DescribeTransitRouteTableAggregationResponseBodyData[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
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
   * The total number of entries returned.
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

