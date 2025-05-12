// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true (default): enables the auto-payment feature. Make sure that your account balance is sufficient. Otherwise, an abnormal order is generated.
   * *   false: disables the auto-payment feature. In this case, an order is generated but you need to complete the payment. You can log on to the EDS console and complete the payment based on the order ID on the Orders page.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The cloud computer IDs. You can only renew monthly subscription cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-ia2zw38bi6cm7****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The renewal duration. Valid values of this parameter are determined by the value of the `PeriodUnit` parameter.
   * 
   * *   Valid values if you set the `PeriodUnit` parameter to `Month`: 1, 2, 3, and 6
   * *   Valid values if you set the `PeriodUnit` parameter to `Year`: 1, 2, 3, 4, 5, and 6
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration specified by the `Period` parameter.
   * 
   * Default value: Month. Valid values:
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
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotional activity.
   * 
   * @example
   * 500030980150146
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  /**
   * @remarks
   * >  This field is not available for public use.
   * 
   * @example
   * null
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

