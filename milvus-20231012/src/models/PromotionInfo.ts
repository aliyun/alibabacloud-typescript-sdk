// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromotionInfo extends $dara.Model {
  /**
   * @remarks
   * The fee that can be covered by the promotion.
   */
  canPromFee?: string;
  /**
   * @remarks
   * Indicates whether the promotion is selected.
   */
  isSelected?: boolean;
  /**
   * @remarks
   * The description of the promotion.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The name of the promotion.
   */
  promotionName?: string;
  /**
   * @remarks
   * The code of the promotion option.
   */
  promotionOptionCode?: string;
  /**
   * @remarks
   * The number of the promotion option.
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * Indicates whether the promotion is selected.
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'canPromFee',
      isSelected: 'isSelected',
      promotionDesc: 'promotionDesc',
      promotionName: 'promotionName',
      promotionOptionCode: 'promotionOptionCode',
      promotionOptionNo: 'promotionOptionNo',
      selected: 'selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'string',
      isSelected: 'boolean',
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionCode: 'string',
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

