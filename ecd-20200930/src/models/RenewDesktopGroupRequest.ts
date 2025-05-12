// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Valid values:
   * 
   * *   true (default): enables the auto-payment feature. Make sure that your account balance is sufficient. Otherwise, an abnormal order is generated.
   * *   false: disables the auto-payment feature. In this case, an order is generated but you need to make the payment manually. You can log on to the EDS console and complete the payment based on the order ID on the Orders page.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the shared group.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-7724r1jitbjzc****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The renewal duration. Valid values of this parameter are determined by the value of the `PeriodUnit` parameter.
   * 
   * *   Valid values if you set the `PeriodUnit` parameter to `Month`: 1, 2, 3, and 6
   * *   Valid values if you set the `PeriodUnit` parameter to `Year`: 1, 2, 3, 4, and 5
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration specified by the `Period` parameter.
   * 
   * Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
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
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      desktopGroupId: 'DesktopGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      desktopGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
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

