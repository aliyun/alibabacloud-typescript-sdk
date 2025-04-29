// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSavingsPlanPriceResponseBodyPriceInfoPrice } from "./DescribeSavingsPlanPriceResponseBodyPriceInfoPrice";
import { DescribeSavingsPlanPriceResponseBodyPriceInfoRules } from "./DescribeSavingsPlanPriceResponseBodyPriceInfoRules";


export class DescribeSavingsPlanPriceResponseBodyPriceInfo extends $dara.Model {
  price?: DescribeSavingsPlanPriceResponseBodyPriceInfoPrice;
  rules?: DescribeSavingsPlanPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeSavingsPlanPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeSavingsPlanPriceResponseBodyPriceInfoRules },
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

