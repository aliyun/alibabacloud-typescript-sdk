// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5t18quoohsrc3xkf86spmnu77
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The new instance status. Valid values:
   * 
   * *   **Active**
   * *   **InActive**
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

