// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically pay for the order when you convert the billing method to subscription.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The target billing method to which you want to convert.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cloud desktop IDs. You can specify 1 to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The subscription duration of the cloud desktop when you convert the billing method to subscription. The unit is specified by PeriodUnit. This parameter takes effect and is required only when ChargeType is set to PrePaid.
   * 
   * - If PeriodUnit is set to Week, the valid value of this parameter is 1.
   * - If PeriodUnit is set to Month, valid values of this parameter are 1, 2, 3, and 6.
   * - If PeriodUnit is set to Year, valid values of this parameter are 1, 2, 3, 4, and 5.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration when you convert the billing method to subscription.
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
   * 50003836003****
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource ownership user in reseller pattern. You do not need to specify this parameter if you are not using reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 120
   */
  useDuration?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      useDuration: 'UseDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      useDuration: 'number',
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

