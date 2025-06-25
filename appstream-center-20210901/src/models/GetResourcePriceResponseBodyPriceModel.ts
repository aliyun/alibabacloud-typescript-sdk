// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourcePriceResponseBodyPriceModelPrice } from "./GetResourcePriceResponseBodyPriceModelPrice";
import { GetResourcePriceResponseBodyPriceModelRules } from "./GetResourcePriceResponseBodyPriceModelRules";


export class GetResourcePriceResponseBodyPriceModel extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourcePriceResponseBodyPriceModelPrice;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: GetResourcePriceResponseBodyPriceModelRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceModelPrice,
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceModelRules },
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

