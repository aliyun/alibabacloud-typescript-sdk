// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @example
   * JvsMobile
   */
  purchaseChannelType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      internetChargeType: 'InternetChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      purchaseChannelType: 'PurchaseChannelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bizRegionId: 'string',
      internetChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      purchaseChannelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

