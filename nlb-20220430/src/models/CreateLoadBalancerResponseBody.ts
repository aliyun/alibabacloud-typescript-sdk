// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadbalancerId?: string;
  /**
   * @remarks
   * The ID of the order for the NLB instance.
   * 
   * @example
   * 20230000
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadbalancerId: 'LoadbalancerId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadbalancerId: 'string',
      orderId: 'number',
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

