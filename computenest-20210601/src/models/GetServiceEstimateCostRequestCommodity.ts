// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEstimateCostRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * 优惠券ID
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
   * *   Year
   * *   Month
   * *   Day
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

