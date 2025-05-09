// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceResponseBodyPriceInfoPrice } from "./DescribeMultiPriceResponseBodyPriceInfoPrice";
import { DescribeMultiPriceResponseBodyPriceInfoRules } from "./DescribeMultiPriceResponseBodyPriceInfoRules";


export class DescribeMultiPriceResponseBodyPriceInfo extends $dara.Model {
  price?: DescribeMultiPriceResponseBodyPriceInfoPrice;
  rules?: DescribeMultiPriceResponseBodyPriceInfoRules[];
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeMultiPriceResponseBodyPriceInfoPrice,
      rules: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoRules },
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

