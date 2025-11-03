// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkPackageBandwidthRequest extends $dara.Model {
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
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the premium bandwidth plan, in Mbit/s. Valid range: The allowed range depends on the billing method:
   * 
   * *   Subscription: 2 to 1000
   * *   Pay-as-you-go, by data transfer (PayByTraffic): 2 to 200
   * *   Pay-as-you-go, by fixed bandwidth (PayByBandwidth): 2 to 1000
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * np-cxj99qb8d34vo****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 500033080110596
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
      bandwidth: 'Bandwidth',
      networkPackageId: 'NetworkPackageId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      networkPackageId: 'string',
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

