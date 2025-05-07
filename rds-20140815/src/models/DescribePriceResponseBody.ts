// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfo } from "./DescribePriceResponseBodyPriceInfo";
import { DescribePriceResponseBodyRules } from "./DescribePriceResponseBodyRules";
import { DescribePriceResponseBodyServerlessPrice } from "./DescribePriceResponseBodyServerlessPrice";


export class DescribePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order parameters.
   * 
   * >  If the **OrderParamOut** parameter is set to **true**, the value of the OrderParams parameter is returned.
   * 
   * @example
   * {\\"autoPay\\":false}"
   */
  orderParams?: string;
  /**
   * @remarks
   * The price information.
   */
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA0ADDDC-0BEB-4381-A3ED-73B4C79B8CC6
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the promotion rule.
   */
  rules?: DescribePriceResponseBodyRules;
  /**
   * @remarks
   * The pricing information about a serverless RDS instance.
   */
  serverlessPrice?: DescribePriceResponseBodyServerlessPrice;
  /**
   * @remarks
   * Indicates whether discounts can be used.
   * 
   * @example
   * True
   */
  showDiscount?: boolean;
  /**
   * @remarks
   * The estimated hourly fee that is calculated based on the maximum number of RCUs.
   * 
   * @example
   * 2**
   */
  tradeMaxRCUAmount?: number;
  /**
   * @remarks
   * The estimated hourly fee that is calculated based on the minimum number of RCUs.
   * 
   * @example
   * 1**
   */
  tradeMinRCUAmount?: number;
  static names(): { [key: string]: string } {
    return {
      orderParams: 'OrderParams',
      priceInfo: 'PriceInfo',
      requestId: 'RequestId',
      rules: 'Rules',
      serverlessPrice: 'ServerlessPrice',
      showDiscount: 'ShowDiscount',
      tradeMaxRCUAmount: 'TradeMaxRCUAmount',
      tradeMinRCUAmount: 'TradeMinRCUAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderParams: 'string',
      priceInfo: DescribePriceResponseBodyPriceInfo,
      requestId: 'string',
      rules: DescribePriceResponseBodyRules,
      serverlessPrice: DescribePriceResponseBodyServerlessPrice,
      showDiscount: 'boolean',
      tradeMaxRCUAmount: 'number',
      tradeMinRCUAmount: 'number',
    };
  }

  validate() {
    if(this.priceInfo && typeof (this.priceInfo as any).validate === 'function') {
      (this.priceInfo as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.serverlessPrice && typeof (this.serverlessPrice as any).validate === 'function') {
      (this.serverlessPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

