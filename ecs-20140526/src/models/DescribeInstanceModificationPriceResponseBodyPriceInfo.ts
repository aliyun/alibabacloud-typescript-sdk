// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoPrice } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoPrice";
import { DescribeInstanceModificationPriceResponseBodyPriceInfoRules } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoRules";


export class DescribeInstanceModificationPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice;
  /**
   * @remarks
   * The information about the promotion rules.
   */
  rules?: DescribeInstanceModificationPriceResponseBodyPriceInfoRules;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: DescribeInstanceModificationPriceResponseBodyPriceInfoPrice,
      rules: DescribeInstanceModificationPriceResponseBodyPriceInfoRules,
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

