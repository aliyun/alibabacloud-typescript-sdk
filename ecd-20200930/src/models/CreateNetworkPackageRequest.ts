// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkPackageRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
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
   * The bandwidth of the premium bandwidth plan. Unit: Mbit/s.    
   * 
   * - If the premium bandwidth plan uses the subscription billing method, the valid values are 2 to 1000.
   * - If the premium bandwidth plan uses the pay-as-you-go billing method and the billing type is pay-by-data-transfer (PayByTraffic), the valid values are 2 to 200.
   * - If the premium bandwidth plan uses the pay-as-you-go billing method and the billing type is pay-by-bandwidth (PayByBandwidth), the valid values are 2 to 1000.
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
   * The billable methods of the premium bandwidth plan.
   * 
   * - If the parameter `PayType` is set to `PrePaid`, valid values:
   *     - PayByBandwidth: billing by fixed bandwidth.
   * - If the parameter `PayType` is set to `PostPaid`, valid values:
   *     - PayByTraffic: billing by data transfer.
   *     - PayByBandwidth: billing by fixed bandwidth.
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
   * The subscription duration of the premium bandwidth plan. This parameter takes effect and is required only when PayType is set to PrePaid. Valid values are determined by the PeriodUnit parameter.
   * 
   * - If PeriodUnit is set to Week, the valid value is 1.
   * - If PeriodUnit is set to Month, valid values are 1, 2, 3, and 6.
   * - If PeriodUnit is set to Year, valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the premium bandwidth plan. This parameter takes effect and is required only when PayType is set to PrePaid.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  tag?: CreateNetworkPackageRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': CreateNetworkPackageRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

