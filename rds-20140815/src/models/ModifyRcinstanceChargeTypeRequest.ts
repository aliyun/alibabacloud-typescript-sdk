// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceChargeTypeRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @example
   * true
   */
  autoRenew?: string;
  autoUseCoupon?: boolean;
  businessInfo?: string;
  clientToken?: string;
  dryRun?: boolean;
  includeDataDisks?: boolean;
  instanceChargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  instanceIds?: string;
  /**
   * @example
   * PrePaid
   */
  payType?: string;
  period?: string;
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      includeDataDisks: 'IncludeDataDisks',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      includeDataDisks: 'boolean',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      regionId: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

