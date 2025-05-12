// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModificationPriceResponseBodyPriceInfoPrice } from "./DescribeModificationPriceResponseBodyPriceInfoPrice";
import { DescribeModificationPriceResponseBodyPriceInfoRules } from "./DescribeModificationPriceResponseBodyPriceInfoRules";


export class DescribeModificationPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price information.
   */
  price?: DescribeModificationPriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeModificationPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeModificationPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeModificationPriceResponseBodyPriceInfoRules },
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

