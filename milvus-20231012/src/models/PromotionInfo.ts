// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromotionInfo extends $dara.Model {
  canPromFee?: string;
  isSelected?: boolean;
  promotionDesc?: string;
  promotionName?: string;
  promotionOptionCode?: string;
  promotionOptionNo?: string;
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

