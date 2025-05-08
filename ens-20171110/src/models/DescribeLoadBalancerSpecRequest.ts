// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of the ELB instance.
   * 
   * @example
   * elb.s2.small
   */
  loadBalancerSpec?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSpec: 'LoadBalancerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

