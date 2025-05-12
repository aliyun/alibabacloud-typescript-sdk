// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefundPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * The unit of currency (USD).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount of the refund.
   * 
   * @example
   * 3990.75
   */
  refundFee?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      refundFee: 'RefundFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      refundFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

