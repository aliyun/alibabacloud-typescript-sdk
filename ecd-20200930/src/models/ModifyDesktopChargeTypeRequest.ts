// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The new billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the cloud desktops. You can specify 1 to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The subscription duration. This parameter is required only when you set the `ChargeType` parameter to `PrePaid`. The unit of the duration is specified by the `PeriodUnit` parameter.
   * 
   * - If you set the `PeriodUnit` parameter to `Week`, you can set this parameter only to 1.
   * 
   * - If you set the `PeriodUnit` parameter to `Month`, you can set this parameter to 1, 2, 3, or 6.
   * 
   * - If you set the `PeriodUnit` parameter to `Year`, you can set this parameter to 1, 2, 3, 4, or 5.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
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
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * sample
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

