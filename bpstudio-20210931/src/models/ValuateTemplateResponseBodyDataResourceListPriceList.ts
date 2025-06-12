// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateTemplateResponseBodyDataResourceListPriceList extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 82.99
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * ServiceUnavailable : The request has failed due to a temporary failure of the server.\\r\\nRequestId : 4AA302DB-3286-5589-8637-FF6D8507B7A9.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * eip
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 83.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * USD
   */
  priceUnit?: string;
  /**
   * @remarks
   * The discount information.
   * 
   * @example
   * The discount information.
   */
  promotionName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 1687225092
   */
  resourceId?: string;
  /**
   * @remarks
   * The price at which the transaction is made.
   * 
   * @example
   * 0.01
   */
  tradePrice?: number;
  /**
   * @remarks
   * Indicates whether the instance is newly created. Valid values:\\
   * 1: The instance is newly created.\\
   * 2: The instance already exists.\\
   * 0: The price of the instance is not included.
   * 
   * @example
   * "1"
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      resourceId: 'ResourceId',
      tradePrice: 'TradePrice',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      resourceId: 'string',
      tradePrice: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

