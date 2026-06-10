// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * true
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
   * The ID of the cloud computer pool.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-7724r1jitbjzc****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The renewal duration. The valid values of this parameter vary based on the `PeriodUnit` value.
   * 
   * - If you set `PeriodUnit` to `Month`, the valid values are 1, 2, 3, and 6.
   * 
   * - If you set `PeriodUnit` to `Year`, the valid values are 1, 2, 3, 4, and 5.
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
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions that are supported by Elastic Desktop Service.
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

