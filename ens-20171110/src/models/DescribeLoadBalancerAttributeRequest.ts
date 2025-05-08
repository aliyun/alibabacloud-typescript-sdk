// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5rcvo1n1t3hykfhhjwjgq****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

