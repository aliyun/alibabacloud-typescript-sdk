// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoActivityInfo } from "./DescribePriceResponseBodyPriceInfoActivityInfo";
import { DescribePriceResponseBodyPriceInfoCoupons } from "./DescribePriceResponseBodyPriceInfoCoupons";
import { DescribePriceResponseBodyPriceInfoRuleIds } from "./DescribePriceResponseBodyPriceInfoRuleIds";


export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the promotion.
   */
  activityInfo?: DescribePriceResponseBodyPriceInfoActivityInfo;
  /**
   * @remarks
   * The information about the coupon.
   */
  coupons?: DescribePriceResponseBodyPriceInfoCoupons;
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
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * Order Information
   */
  orderLines?: any;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 2504
   */
  originalPrice?: number;
  /**
   * @remarks
   * An array that consists of the ID of the promotion rule.
   */
  ruleIds?: DescribePriceResponseBodyPriceInfoRuleIds;
  /**
   * @remarks
   * The estimated hourly cost that is calculated based on the maximum number of RCUs you specify.
   * 
   * @example
   * 1**
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The estimated hourly cost that is calculated based on the minimum number of RCUs you specify.
   * 
   * @example
   * 2**
   */
  tradeMinRCUAmount?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 2504
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      activityInfo: 'ActivityInfo',
      coupons: 'Coupons',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      orderLines: 'OrderLines',
      originalPrice: 'OriginalPrice',
      ruleIds: 'RuleIds',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityInfo: DescribePriceResponseBodyPriceInfoActivityInfo,
      coupons: DescribePriceResponseBodyPriceInfoCoupons,
      currency: 'string',
      discountPrice: 'number',
      orderLines: 'any',
      originalPrice: 'number',
      ruleIds: DescribePriceResponseBodyPriceInfoRuleIds,
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
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

