// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all instances in the selectable list mode. This parameter affects pagination and filtering behavior.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The load balancer instance ID. Specify this parameter to query details of a specific load balancer in the selectable list mode.
   * 
   * @example
   * lb-xxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The network type used to filter results.
   * 
   * @example
   * Internet
   */
  network?: string;
  /**
   * @remarks
   * The mode switch. Valid values:
   * - true: Returns the list of load balancers that are already associated with the gateway by reading database relationships.
   * - false (default): Returns the selectable list by calling SLB or NLB OpenAPI to filter bindable instances.
   * 
   * Use related=true to retrieve the list of associated load balancers. The default mode (related=false) calls SLB or NLB OpenAPI to filter bindable instances, which may return a 500 error in common scenarios due to backend data issues.
   * 
   * @example
   * false
   */
  related?: boolean;
  /**
   * @remarks
   * The load balancer type used to filter results.
   * 
   * @example
   * NLB
   */
  type?: string;
  /**
   * @remarks
   * The VPC ID used to filter instances within the specified VPC in the selectable list mode. This parameter is required when type is set to NLB and related is not set to true. Otherwise, the API returns a 500 error.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      loadBalancerId: 'loadBalancerId',
      network: 'network',
      related: 'related',
      type: 'type',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      loadBalancerId: 'string',
      network: 'string',
      related: 'boolean',
      type: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

