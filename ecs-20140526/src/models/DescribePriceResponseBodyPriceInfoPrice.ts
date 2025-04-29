// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceResponseBodyPriceInfoPriceDetailInfos } from "./DescribePriceResponseBodyPriceInfoPriceDetailInfos";


export class DescribePriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The currency unit.
   * 
   * Alibaba Cloud China site (aliyun.com): CNY.
   * 
   * Alibaba Cloud International site (alibabacloud.com): USD.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The information about the price.
   * 
   * >  This parameter is returned only when ResourceType is set to instance.
   */
  detailInfos?: DescribePriceResponseBodyPriceInfoPriceDetailInfos;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 655.2
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 4368
   */
  originalPrice?: number;
  /**
   * @remarks
   * The hourly price of the reserved instance for which the No Upfront or Partial Upfront payment option is used.
   * 
   * @example
   * 1
   */
  reservedInstanceHourPrice?: number;
  /**
   * @remarks
   * The transaction price of the order. The transaction price is equal to the original price minus the discount.
   * 
   * @example
   * 3712.8
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      reservedInstanceHourPrice: 'ReservedInstanceHourPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: DescribePriceResponseBodyPriceInfoPriceDetailInfos,
      discountPrice: 'number',
      originalPrice: 'number',
      reservedInstanceHourPrice: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.detailInfos && typeof (this.detailInfos as any).validate === 'function') {
      (this.detailInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

