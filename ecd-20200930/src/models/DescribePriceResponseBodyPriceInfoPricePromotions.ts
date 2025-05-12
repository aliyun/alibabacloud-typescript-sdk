// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion rule.
   * 
   * @example
   * test
   */
  optionCode?: string;
  /**
   * @remarks
   * The description of the promotion.
   * 
   * @example
   * Get started with new services with a discount.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 123456
   */
  promotionId?: string;
  /**
   * @remarks
   * The promotion name.
   * 
   * @example
   * Special Offer
   */
  promotionName?: string;
  /**
   * @remarks
   * Indicates whether an item is selected.
   * 
   * @example
   * false
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

