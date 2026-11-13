// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all instances in the optional list mode. This parameter affects the pagination and filtering policies.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The exact load balancer instance ID used to query details by ID in the optional list mode.
   * 
   * @example
   * lb-xxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The network type filter.
   * 
   * @example
   * Internet
   */
  network?: string;
  /**
   * @remarks
   * Specifies the mode switch. If set to true, the API returns the list of load balancers associated with the gateway by reading database relationships. If set to false or left empty, the API uses the optional list mode and calls the SLB or NLB POP API to filter bindable instances. We recommend that you set this parameter to true to retrieve the associated load balancers. In the default mode where related is set to false, the API calls the SLB or NLB POP API to filter bindable instances, which may return a 500 error in common scenarios due to backend data issues.
   * 
   * @example
   * false
   */
  related?: boolean;
  /**
   * @remarks
   * The load balancer type filter.
   * 
   * @example
   * NLB
   */
  type?: string;
  /**
   * @remarks
   * The VPC filter used to filter instances within the specified VPC in the optional list mode. This parameter is required when type is set to NLB and related is not set to true. Otherwise, the API returns a 500 error.
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

