// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoActivityInfo } from "./DescribeRenewalPriceResponseBodyPriceInfoActivityInfo";
import { DescribeRenewalPriceResponseBodyPriceInfoCoupons } from "./DescribeRenewalPriceResponseBodyPriceInfoCoupons";
import { DescribeRenewalPriceResponseBodyPriceInfoRuleIds } from "./DescribeRenewalPriceResponseBodyPriceInfoRuleIds";


export class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the promotion.
   */
  activityInfo?: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo;
  /**
   * @remarks
   * An array that consists of information about the coupon.
   */
  coupons?: DescribeRenewalPriceResponseBodyPriceInfoCoupons;
  /**
   * @remarks
   * The currency unit.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 27
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 138
   */
  originalPrice?: number;
  /**
   * @remarks
   * An array that consists of the ID of the promotion rule.
   */
  ruleIds?: DescribeRenewalPriceResponseBodyPriceInfoRuleIds;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 111
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      activityInfo: 'ActivityInfo',
      coupons: 'Coupons',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      ruleIds: 'RuleIds',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityInfo: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo,
      coupons: DescribeRenewalPriceResponseBodyPriceInfoCoupons,
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      ruleIds: DescribeRenewalPriceResponseBodyPriceInfoRuleIds,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.activityInfo && typeof (this.activityInfo as any).validate === 'function') {
      (this.activityInfo as any).validate();
    }
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    if(this.ruleIds && typeof (this.ruleIds as any).validate === 'function') {
      (this.ruleIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

