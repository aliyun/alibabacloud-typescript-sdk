// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos } from "./DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos";


export class DescribeContainerGroupPriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The currency unit. Valid values:
   * 
   * *   CNY: This value only applies to the China site (aliyun.com).
   * *   USD: This value only applies to the International site (alibabacloud.com).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The information about the price.
   */
  detailInfos?: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos;
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
   * 0.00012252
   */
  originalPrice?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 0.00012252
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: DescribeContainerGroupPriceResponseBodyPriceInfoPriceDetailInfos,
      discountPrice: 'number',
      originalPrice: 'number',
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

