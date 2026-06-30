// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Order ID.
   * 
   * <props="china">
   * 
   * The order ID. This parameter is returned when \\`InstanceChargeType\\` is set to \\`PREPAY\\` (subscription). If \\`AutoPay\\` is set to \\`false\\`, go to the [Order Hub](https://usercenter2.aliyun.com/order/list) on the Alibaba Cloud China site to complete the payment.
   * 
   * 
   * 
   * <props="intl">
   * 
   * If you are using the Alibaba Cloud International site and \\`AutoPay\\` is set to \\`false\\`, go to the [Order Hub](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * @example
   * 208257****
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

