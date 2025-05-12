// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewNetworkPackagesRequest extends $dara.Model {
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
  autoRenew?: boolean;
  /**
   * @remarks
   * The IDs of premium bandwidth plans. You can specify up to 100 IDs.
   * 
   * This parameter is required.
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The subscription duration if you specify subscription as the new billing method for the cloud desktop. The unit of the value is specified by the `PeriodUnit` parameter. This parameter takes effect only when the `ChargeType` parameter is set to `PrePaid`.
   * 
   * *   If the `PeriodUnit` parameter is set to `Week`, the valid value of the Period parameter is 1.
   * *   If the `PeriodUnit` parameter is set to `Month`, the valid values of the Period parameter are 1, 2, 3, and 6.
   * *   If the `PeriodUnit` parameter is set to `Year`, the valid values of the Period parameter are 1, 2, 3, 4, and 5.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration specified by the Period parameter. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 500038360030606
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
      networkPackageId: 'NetworkPackageId',
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
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkPackageId)) {
      $dara.Model.validateArray(this.networkPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

