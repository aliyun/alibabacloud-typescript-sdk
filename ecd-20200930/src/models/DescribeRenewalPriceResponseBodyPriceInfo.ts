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
   * The promotion rules.
   */
  rules?: DescribeRenewalPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeRenewalPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoRules },
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

