// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * If bills are not automatically paid, you must go to the Order Center to complete the payments.
   * 
   * This parameter is returned only if ChargeType is set to PREPAY. If AutoPay is set to false, you must go to the [Order Center](https://usercenter2-intl.aliyun.com/order/list) to complete the payment.
   * 
   * @example
   * 208257****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
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

