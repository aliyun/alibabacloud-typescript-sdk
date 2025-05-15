// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceShrinkRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the service instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * *   **Day**
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

