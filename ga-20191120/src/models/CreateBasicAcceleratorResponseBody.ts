// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the basic GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is returned only if ChargeType is set to PREPAY.
   * 
   * If **AutoPay** is set to **false**, go to [Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment after an order is generated.
   * 
   * @example
   * 2082574365
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F591955F-5CB5-4CCE-A75D-17CF2085CE22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      orderId: 'string',
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

