// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRefundPriceResponseBodyPriceInfo extends $dara.Model {
  /**
   * @remarks
   * <props="china">Currency unit (CNY).
   * <props="intl">Currency unit (USD).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * This refund amount.
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

export class DescribeRefundPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Price details.
   */
  priceInfo?: DescribeRefundPriceResponseBodyPriceInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: DescribeRefundPriceResponseBodyPriceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

