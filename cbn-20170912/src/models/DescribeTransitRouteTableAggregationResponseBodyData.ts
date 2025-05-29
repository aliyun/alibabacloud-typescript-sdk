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
   * The valid value is **Static**, which indicates a static route. By default, aggregate routes advertised to a VPC are considered custom routes.
   * 
   * @example
   * Static
   */
  routeType?: string;
  /**
   * @remarks
   * The scope of networks that you want to advertise the aggregate route.
   * 
   * The valid value is **VPC**, which indicates that the aggregate route is advertised to all virtual private clouds (VPCs) that are in associated forwarding correlation with the Enterprise Edition transit router and have route synchronization enabled.
   * 
   * @example
   * VPC
   */
  scope?: string;
  /**
   * @remarks
   * The list of propagation ranges of the aggregation route.
   * 
   * >  You must specify at least one of the following attributes: Aggregation Scope and Aggregate Scope List. We recommend that you specify the latter. The elements in the two attributes cannot be duplicate.
   */
  scopeList?: string[];
  /**
   * @remarks
   * The status of the advertisement of the aggregate route. Valid values:
   * 
   * *   **AllConfigured**: The aggregate route is advertised to all VPCs.
   * *   **Configuring**: The aggregate route is being advertised.
   * *   **ConfigFailed**: The aggregate route failed to be advertised.
   * *   **PartialConfigured**: Failed to advertise the aggregate route to some VPCs.
   * *   **Deleting**: The aggregate route is being deleted.
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

