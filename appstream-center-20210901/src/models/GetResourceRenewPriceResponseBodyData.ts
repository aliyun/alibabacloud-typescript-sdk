// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceRenewPriceResponseBodyDataPrice } from "./GetResourceRenewPriceResponseBodyDataPrice";
import { GetResourceRenewPriceResponseBodyDataRules } from "./GetResourceRenewPriceResponseBodyDataRules";


export class GetResourceRenewPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourceRenewPriceResponseBodyDataPrice;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: GetResourceRenewPriceResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourceRenewPriceResponseBodyDataPrice,
      rules: { 'type': 'array', 'itemType': GetResourceRenewPriceResponseBodyDataRules },
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

