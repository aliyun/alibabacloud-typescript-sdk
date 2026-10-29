// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5t18quoohsrc3xkf86sp*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The updated instance status. Valid values:
   * - **Active**: Runs the load balancing instance. Listeners in the instance can forward accepted traffic based on rules.
   * - **InActive**: Stops the load balancing instance. Listeners in the instance no longer forward accepted traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerStatus: 'LoadBalancerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

