// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommodityValueResultCoupons extends $dara.Model {
  /**
   * @remarks
   * 可支付金额。
   * 
   * @example
   * 9.99
   */
  canPromFee?: number;
  /**
   * @remarks
   * Coupon Description
   * 
   * @example
   * 10元优惠券（有效期至2024年9月8日）
   */
  couponDesc?: string;
  /**
   * @remarks
   * Coupon Name
   * 
   * @example
   * 10元优惠券
   */
  couponName?: string;
  /**
   * @remarks
   * Coupon OptionNo
   * 
   * @example
   * 50008800000xxxx
   */
  couponOptionNo?: string;
  /**
   * @remarks
   * 是否选中。
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionNo: 'CouponOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionNo: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

