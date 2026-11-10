// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return all instances in the optional list mode. This parameter affects the pagination and filtering strategies.
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
   * Specifies whether to return the list of load balancers associated with the gateway. If set to true, the associated load balancers are returned based on database relationships. We recommend setting this parameter to true to retrieve the associated load balancers. If set to false or left empty, the optional list mode is used to call the SLB or NLB API and filter bindable instances. In the default mode where related is false, calling the SLB or NLB API may return a 500 error due to backend data issues in common scenarios.
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

