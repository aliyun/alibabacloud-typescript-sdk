// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs extends $dara.Model {
  /**
   * @remarks
   * The display name of the instance type.
   * 
   * @example
   * elb.s1.small
   */
  displayName?: string;
  /**
   * @remarks
   * The specifications of the ELB instance.
   * 
   * @example
   * elb.s1.small
   */
  loadBalancerSpec?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loadBalancerSpec: 'LoadBalancerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

