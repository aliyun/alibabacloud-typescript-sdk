// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPrice } from "./DescribePriceResponseBodyPriceInfoPrice";
import { DescribePriceResponseBodyPriceInfoRules } from "./DescribePriceResponseBodyPriceInfoRules";


export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a free enterprise drive is available.
   * 
   * @example
   * true
   */
  freeCdsQuota?: boolean;
  /**
   * @remarks
   * The free capacity provided by the enterprise drive. Unit: GiB.
   * 
   * @example
   * 100
   */
  freeCdsSize?: number;
  /**
   * @remarks
   * The price.
   */
  price?: DescribePriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The details of the promotion rules.
   */
  rules?: DescribePriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      freeCdsQuota: 'FreeCdsQuota',
      freeCdsSize: 'FreeCdsSize',
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeCdsQuota: 'boolean',
      freeCdsSize: 'number',
      price: DescribePriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoRules },
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

