// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromotionInfo extends $dara.Model {
  canPromFee?: string;
  isSelected?: string;
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      isSelected: 'IsSelected',
      promotionDesc: 'PromotionDesc',
      promotionName: 'PromotionName',
      promotionOptionCode: 'PromotionOptionCode',
      promotionOptionNo: 'PromotionOptionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'string',
      isSelected: 'string',
      promotionDesc: 'string',
      promotionName: 'string',
      promotionOptionCode: 'string',
      promotionOptionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

