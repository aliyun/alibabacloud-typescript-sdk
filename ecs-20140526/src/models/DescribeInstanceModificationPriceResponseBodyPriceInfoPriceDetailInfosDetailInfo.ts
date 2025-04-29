// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules } from "./DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules";


export class DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfo extends $dara.Model {
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
   * The resource name. Valid values:
   * 
   * *   InstanceType
   * *   bandwidth
   * *   image
   * *   SystemDisk
   * *   DataDisk
   * 
   * @example
   * instanceType
   */
  resource?: string;
  /**
   * @remarks
   * The pricing rules.
   */
  subRules?: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules;
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 3712.8
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      resource: 'Resource',
      subRules: 'SubRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountPrice: 'number',
      originalPrice: 'number',
      resource: 'string',
      subRules: DescribeInstanceModificationPriceResponseBodyPriceInfoPriceDetailInfosDetailInfoSubRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.subRules && typeof (this.subRules as any).validate === 'function') {
      (this.subRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

