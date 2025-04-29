// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos";


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPrice extends $dara.Model {
  /**
   * @remarks
   * The currency unit. Valid values:
   * 
   * *   Alibaba Cloud China site (aliyun.com): CNY
   * *   Alibaba Cloud International site (alibabacloud.com): USD
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
  detailInfos?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 61.320
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 175.200
   */
  originalPrice?: number;
  /**
   * @remarks
   * The transaction price, which is equal to the original price minus the discount.
   * 
   * @example
   * 113.880
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
      detailInfos: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfos,
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

