// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResult4QueryInstancePrice4ModifyResponseBodyDataPriceList extends $dara.Model {
  /**
   * @example
   * 2
   */
  discountAmount?: number;
  error?: string;
  /**
   * @example
   * vpc
   */
  nodeType?: string;
  /**
   * @example
   * 3
   */
  originalAmount?: number;
  priceUnit?: string;
  promotionName?: string;
  /**
   * @example
   * 1
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalAmount: 'OriginalAmount',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalAmount: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

