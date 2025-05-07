// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 123456
   */
  couponNo?: string;
  /**
   * @remarks
   * The description of the coupon.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the coupon is selected.
   * 
   * @example
   * true
   */
  isSelected?: string;
  /**
   * @remarks
   * The name of the coupon.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      couponNo: 'CouponNo',
      description: 'Description',
      isSelected: 'IsSelected',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponNo: 'string',
      description: 'string',
      isSelected: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

