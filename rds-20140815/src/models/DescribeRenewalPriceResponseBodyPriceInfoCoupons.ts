// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon } from "./DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon";


export class DescribeRenewalPriceResponseBodyPriceInfoCoupons extends $dara.Model {
  coupon?: DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon },
    };
  }

  validate() {
    if(Array.isArray(this.coupon)) {
      $dara.Model.validateArray(this.coupon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

