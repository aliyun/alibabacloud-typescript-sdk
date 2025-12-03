// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoadBalancerPayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID of the subscription CLB instance.
   * 
   * @example
   * 20212961978891
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

