// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Application Load Balancing (ALB) instance.
   * 
   * @example
   * alb-o9ulmq5hqn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

