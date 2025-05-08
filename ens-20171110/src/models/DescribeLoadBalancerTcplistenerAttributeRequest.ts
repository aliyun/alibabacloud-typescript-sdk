// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The listening port that you want to query. Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5snthcyu1x10g7tywj7iu****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerPort: 'number',
      loadBalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

