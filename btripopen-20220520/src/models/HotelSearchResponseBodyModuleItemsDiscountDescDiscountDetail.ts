// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelSearchResponseBodyModuleItemsDiscountDescDiscountDetail extends $dara.Model {
  labelName?: string[];
  moneyDesc?: string;
  static names(): { [key: string]: string } {
    return {
      labelName: 'label_name',
      moneyDesc: 'money_desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelName: { 'type': 'array', 'itemType': 'string' },
      moneyDesc: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelName)) {
      $dara.Model.validateArray(this.labelName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

