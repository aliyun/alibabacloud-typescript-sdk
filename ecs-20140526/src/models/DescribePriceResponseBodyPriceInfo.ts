// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPrice } from "./DescribePriceResponseBodyPriceInfoPrice";
import { DescribePriceResponseBodyPriceInfoRelatedPrice } from "./DescribePriceResponseBodyPriceInfoRelatedPrice";
import { DescribePriceResponseBodyPriceInfoRules } from "./DescribePriceResponseBodyPriceInfoRules";


export class DescribePriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribePriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The related price.
   */
  relatedPrice?: DescribePriceResponseBodyPriceInfoRelatedPrice;
  /**
   * @remarks
   * The information about the promotion rules.
   */
  rules?: DescribePriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      relatedPrice: 'RelatedPrice',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribePriceResponseBodyPriceInfoPrice,
      relatedPrice: DescribePriceResponseBodyPriceInfoRelatedPrice,
      rules: DescribePriceResponseBodyPriceInfoRules,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    if(this.relatedPrice && typeof (this.relatedPrice as any).validate === 'function') {
      (this.relatedPrice as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

