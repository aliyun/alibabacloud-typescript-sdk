// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValuateTemplateResponseBodyDataResourceListPriceList } from "./ValuateTemplateResponseBodyDataResourceListPriceList";


export class ValuateTemplateResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 73
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * InvalidSaleComponentFault : The request not refer to the correct order sale component.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs
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
   * The information about the price.
   */
  priceList?: ValuateTemplateResponseBodyDataResourceListPriceList[];
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
   * The price at which the transaction is made.
   * 
   * @example
   * 10.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceList: 'PriceList',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceListPriceList },
      priceUnit: 'string',
      promotionName: 'string',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

