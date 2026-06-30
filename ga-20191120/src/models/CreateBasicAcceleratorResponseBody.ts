// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is returned only when ChargeType is set to PREPAY (upfront).
   * 
   * If **AutoPay** is set to **false**, which means automatic payment of the bill is not enabled, go to the <props="china">[Order Center](https://usercenter2.aliyun.com/order/list)
   * <props="intl">[Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * @example
   * 2082574365
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
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

