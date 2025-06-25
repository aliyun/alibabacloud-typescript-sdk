// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourcePriceResponseBodyPriceListPrice } from "./GetResourcePriceResponseBodyPriceListPrice";
import { GetResourcePriceResponseBodyPriceListRules } from "./GetResourcePriceResponseBodyPriceListRules";


export class GetResourcePriceResponseBodyPriceList extends $dara.Model {
  /**
   * @remarks
   * The price details.
   */
  price?: GetResourcePriceResponseBodyPriceListPrice;
  /**
   * @remarks
   * The price type.
   * 
   * Valid values:
   * 
   * *   Connected: in use
   * *   Standby: pending for use.
   * 
   * @example
   * Standby
   */
  priceType?: string;
  /**
   * @remarks
   * The price calculation rules.
   */
  rules?: GetResourcePriceResponseBodyPriceListRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      priceType: 'PriceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetResourcePriceResponseBodyPriceListPrice,
      priceType: 'string',
      rules: { 'type': 'array', 'itemType': GetResourcePriceResponseBodyPriceListRules },
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

