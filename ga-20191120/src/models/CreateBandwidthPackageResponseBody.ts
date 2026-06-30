// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth plan ID.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * <props="china">This parameter is returned only when you set ChargeType to PREPAY. If you set AutoPay to false, go to the [Order Hub](https://usercenter2.aliyun.com/order/list) to complete the payment.
   * 
   * <props="intl">
   * 
   * This parameter is returned only when you set ChargeType to PREPAY. If you set AutoPay to false, go to the [Order Hub](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
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
   * 4B6DBBB0-2D01-4C6A-A384-4129266E6B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
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

