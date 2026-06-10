// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewDesktopsRequest extends $dara.Model {
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
   * A list of WUYING Workspace instance IDs. You can renew only instances purchased on a monthly basis.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-ia2zw38bi6cm7****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The renewal duration. Valid values depend on the value of `PeriodUnit`.
   * 
   * - If `PeriodUnit` is `Month`, valid values are 1, 2, 3, and 6.
   * 
   * - If `PeriodUnit` is `Year`, valid values are 1 to 5.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit for the renewal duration, which applies to the `Period` parameter.
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
   * 50003098015****
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to list the regions where WUYING Workspace is available.
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
   * > This field is not available for public use.
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

