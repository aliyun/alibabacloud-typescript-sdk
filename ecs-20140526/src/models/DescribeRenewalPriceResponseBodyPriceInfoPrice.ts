// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfos } from "./DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfos";


export class DescribeRenewalPriceResponseBodyPriceInfoPrice extends $dara.Model {
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
   * Details about the resource prices.
   */
  detailInfos?: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfos;
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
   * The transaction price, which is equal to the original price minus the discount.
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
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: DescribeRenewalPriceResponseBodyPriceInfoPriceDetailInfos,
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

