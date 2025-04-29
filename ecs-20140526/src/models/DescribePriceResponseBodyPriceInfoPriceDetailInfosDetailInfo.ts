// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules } from "./DescribePriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules";


export class DescribePriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $dara.Model {
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
   * The resource name. Valid values:
   * 
   * *   InstanceType
   * *   bandwidth
   * *   image
   * *   SystemDisk
   * *   DataDisk
   * 
   * @example
   * instance
   */
  resource?: string;
  /**
   * @remarks
   * Details about the pricing rules.
   */
  subRules?: DescribePriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules;
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
      subRules: DescribePriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules,
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

