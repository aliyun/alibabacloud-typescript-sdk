// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePriceResponseBodyPriceModelPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * coupon****
   */
  optionCode?: string;
  /**
   * @remarks
   * The coupon description.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The coupon name.
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether the coupon was used.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      optionCode: 'OptionCode',
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionCode: 'string',
      promotionDesc: 'string',
      promotionId: 'string',
      promotionName: 'string',
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

