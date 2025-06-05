// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules } from "./DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules";


export class DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 0.000098
   */
  originalPrice?: number;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * cpu
   */
  resource?: string;
  /**
   * @remarks
   * Details about the pricing rules.
   */
  rules?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 0.000098
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resource: 'Resource',
      rules: 'Rules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resource: 'string',
      rules: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

