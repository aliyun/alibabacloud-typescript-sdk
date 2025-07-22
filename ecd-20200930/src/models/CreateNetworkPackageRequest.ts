// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature.
   * 
   * Valid values:
   * 
   * *   true (default): enables the auto-payment feature.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     Make sure that your account has sufficient balance. Otherwise, no order is generated.
   * 
   *     <!-- -->
   * 
   * *   false: disables the auto-payment feature. In this case, an order is generated but you need to make the payment manually.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     To make the payment, log on to the Elastic Desktop Service console, go to the Orders page, and find the order based on the order ID.
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the premium bandwidth plan.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bandwidth provided by the premium bandwidth plan. Unit: Mbit/s.
   * 
   * *   Valid values if the premium bandwidth plan is a subscription plan: 2 to 1000.
   * *   Valid values if the premium bandwidth plan is a pay-as-you-go plan that charges by data transfer (PayByTraffic): 2 to 200.
   * *   Valid values if the premium bandwidth plan is a pay-as-you-go plan that charges by fixed bandwidth (PayByBandwidth): 2 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The charge type of the premium bandwidth plan.
   * 
   * *   Valid value when the `PayType` parameter is set to `PrePaid`:
   * 
   *     *   PayByBandwidth: charges by fixed bandwidth.
   * 
   * *   Valid values when the `PayType` parameter is set to `PostPaid`:
   * 
   *     *   PayByTraffic: charges by data transfer.
   *     *   PayByBandwidth: charges by fixed bandwidth.
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
   * The billing method of the premium bandwidth plan.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration of the premium bandwidth plan. This parameter takes effect and is required only when the `PayType` parameter is set to `PrePaid`. The valid values of this parameter vary based on the `PeriodUnit` value.
   * 
   * *   Valid value when the `PeriodUnit` parameter is set to `Week`: 1
   * *   Valid values when the `PeriodUnit` parameter is set to `Month`: 1, 2, 3, and 6
   * *   Valid values when the `PeriodUnit` parameter is set to `Year`: 1, 2, and 3
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the premium bandwidth plan. This parameter takes effect and is required only when the `PayType` parameter is set to `PrePaid`.
   * 
   * Valid values:
   * 
   * *   Month
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Year
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Week
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the sales promotion.
   * 
   * @example
   * 23141
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

