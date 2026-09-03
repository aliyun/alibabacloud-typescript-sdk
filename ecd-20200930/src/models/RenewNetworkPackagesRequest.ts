// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewNetworkPackagesRequest extends $dara.Model {
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
   * Specifies whether to enable auto-renewal for subscription shared cloud desktops.
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The IDs of premium Internet bandwidth plans. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The renewal duration. Valid values of this parameter are determined by the value of the `PeriodUnit` parameter.
   * 
   * - If `PeriodUnit` is set to `Week`, the valid value is 1.
   * - If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, and 6.
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
   * The unit of the renewal duration.
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
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID for resource ownership in the reseller pattern. You do not need to specify this parameter if you are not using the reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
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

