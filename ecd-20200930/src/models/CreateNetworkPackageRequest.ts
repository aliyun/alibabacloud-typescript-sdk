// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bandwidth of the network package, in Mbps.
   * 
   * - For subscription network packages, the value range is 2 to 1,000.
   * 
   * - For pay-as-you-go network packages that are billed by traffic, the value range is 2 to 200.
   * 
   * - For pay-as-you-go network packages that are billed by bandwidth, the value range is 2 to 1,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  channelCookie?: string;
  /**
   * @remarks
   * The billing method for the network package.
   * 
   * - When `PayType` is set to `PrePaid`, the only valid value is:
   * 
   *   - `PayByBandwidth`: pay-by-bandwidth.
   * 
   * - When `PayType` is set to `PostPaid`, valid values are:
   * 
   *   - `PayByTraffic`: pay-by-traffic.
   * 
   *   - `PayByBandwidth`: pay-by-bandwidth.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration of the network package. This parameter is required and applies only when `PayType` is set to `PrePaid`. The valid values for this parameter depend on the value of `PeriodUnit`.
   * 
   * - If `PeriodUnit` is set to `Week`, the only valid value is 1.
   * 
   * - If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, and 6.
   * 
   * - If `PeriodUnit` is set to `Year`, valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the network package. This parameter is required and applies only when `PayType` is set to `PrePaid`.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 23141
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to get the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidth: 'Bandwidth',
      channelCookie: 'ChannelCookie',
      internetChargeType: 'InternetChargeType',
      officeSiteId: 'OfficeSiteId',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidth: 'number',
      channelCookie: 'string',
      internetChargeType: 'string',
      officeSiteId: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

