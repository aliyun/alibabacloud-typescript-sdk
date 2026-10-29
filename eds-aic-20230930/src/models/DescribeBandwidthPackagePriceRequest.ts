// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackagePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the network. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Valid values:
   * 
   * <props="china">
   * 
   * - **PayByBandwidth** (default): billing by bandwidth.
   * - **PayBy95**: billing by traditional 95th percentile. IPv6 Internet bandwidth does not support billing by traditional 95th percentile by default. To use this billing method, contact your account manager.
   * 
   * 
   * <props="intl">
   * 
   * - **PayByBandwidth** (default): billing by bandwidth.
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by `PeriodUnit`. Valid values: 1 month, 2 months, 3 months, 6 months, 1 year, 2 years, and 3 years.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the resource. Valid values:
   * - **Month**: Month.
   * - **Year**: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The payment channel.
   * 
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

