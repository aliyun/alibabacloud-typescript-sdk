// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConvertInstancePriceResponseBodyPriceInfoOptionalPromotions extends $dara.Model {
  /**
   * @example
   * ￥1,391.5 优惠券 (有效期至 03/23/2022)
   */
  promotionDesc?: string;
  /**
   * @example
   * ￥1,391.5 优惠券
   */
  promotionName?: string;
  /**
   * @example
   * 500011220010099
   */
  promotionOptionNo?: string;
  /**
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionNo: 'PromotionOptionNo',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionNo: 'string',
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

