// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoPrice } from "./DescribeRenewalPriceResponseBodyPriceInfoPrice";
import { DescribeRenewalPriceResponseBodyPriceInfoRules } from "./DescribeRenewalPriceResponseBodyPriceInfoRules";


export class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeRenewalPriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The information about the promotion rules.
   */
  rules?: DescribeRenewalPriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeRenewalPriceResponseBodyPriceInfoPrice,
      rules: DescribeRenewalPriceResponseBodyPriceInfoRules,
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
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

