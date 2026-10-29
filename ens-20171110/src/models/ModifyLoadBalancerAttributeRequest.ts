// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5q73cv04zeyh43lh74lp4gtm8
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the load balancing instance. The name must be **2** to **128** characters in length, and can contain English or Chinese characters.
   * > It cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  loadBalancerName?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

