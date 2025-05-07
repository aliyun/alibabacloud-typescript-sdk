// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfo } from "./DescribeRenewalPriceResponseBodyPriceInfo";
import { DescribeRenewalPriceResponseBodyRules } from "./DescribeRenewalPriceResponseBodyRules";


export class DescribeRenewalPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of price information.
   */
  priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC9F4EF6-D038-4405-B497-1F48E722C9F2
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the details of the promotion rule.
   */
  rules?: DescribeRenewalPriceResponseBodyRules;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
      requestId: 'string',
      rules: DescribeRenewalPriceResponseBodyRules,
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
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

