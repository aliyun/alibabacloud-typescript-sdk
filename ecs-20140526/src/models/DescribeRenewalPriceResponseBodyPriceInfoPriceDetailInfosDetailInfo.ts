// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules } from "./DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules";


export class DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 655.2
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 4368
   */
  originalPrice?: number;
  /**
   * @remarks
   * The name of the resource that corresponds to the price.
   * 
   * @example
   * instance
   */
  resource?: string;
  /**
   * @remarks
   * The pricing rules.
   */
  subRules?: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 3712.8
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resource: 'Resource',
      subRules: 'SubRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resource: 'string',
      subRules: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.subRules && typeof (this.subRules as any).validate === 'function') {
      (this.subRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

