// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewNetworkPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatic payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  autoRenew?: boolean;
  /**
   * @remarks
   * A list of premium public bandwidth IDs. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The renewal duration. Valid values depend on the value of `PeriodUnit`.
   * 
   * - If `PeriodUnit` is `Week`, valid values are: 1.
   * 
   * - If `PeriodUnit` is `Month`, valid values are: 1, 2, 3, or 6.
   * 
   * - If `PeriodUnit` is `Year`, valid values are: 1, 2, or 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit for the renewal duration.
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
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to list regions that support WUYING Workspace.
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

