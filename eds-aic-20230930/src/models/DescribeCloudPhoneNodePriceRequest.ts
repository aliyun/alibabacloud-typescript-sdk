// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodePriceRequest extends $dara.Model {
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
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  count?: string;
  /**
   * @example
   * false
   */
  isSingleImgDisk?: boolean;
  /**
   * @example
   * 1
   */
  period?: string;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 40
   */
  phoneCount?: number;
  /**
   * @example
   * 20
   */
  phoneDataVolume?: number;
  /**
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @example
   * 10
   */
  swapSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      count: 'Count',
      isSingleImgDisk: 'IsSingleImgDisk',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      swapSize: 'SwapSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      count: 'string',
      isSingleImgDisk: 'boolean',
      period: 'string',
      periodUnit: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      promotionId: 'string',
      serverShareDataVolume: 'number',
      serverType: 'string',
      swapSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

