// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModificationPriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
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
   * The promotion description.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the promotion activity.
   * 
   * @example
   * promo_option
   */
  promotionId?: string;
  /**
   * @remarks
   * The name of the promotion activity.
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

