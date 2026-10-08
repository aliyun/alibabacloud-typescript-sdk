// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: Enabled (default).
   * * **false**: Disabled.
   * 
   * > * This parameter takes effect only when you switch from pay-as-you-go to subscription.
   * > * All non-**true** strings are treated as **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * * **true** (default): Coupons are used.
   * * **false**: Coupons are not used.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The business extension parameter.
   * 
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @remarks
   * The custom token that is used to ensure the idempotence of the request. 
   * > The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID or cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
  /**
   * @remarks
   * Reserved parameter. Not supported.
   * 
   * @example
   * None
   */
  instanceIds?: string;
  /**
   * @remarks
   * The billing method of the instance after the change. Valid values:
   * * **Prepaid**: subscription.
   * * **Postpaid**: pay-as-you-go.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * * **Year**: yearly subscription.
   * * **Month**: monthly subscription.
   * 
   * > This parameter is required if **PayType** is set to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 72802442****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * **if can be null:**
   * true
   */
  regionId?: string;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * * If **Period** is set to **Year**, the valid values of UsedTime are **1 to 5**.
   * * If **Period** is set to **Month**, the valid values of UsedTime are **1 to 11**.
   * 
   * > This parameter is required if PayType is set to **Prepaid**.
   * 
   * @example
   * 2
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

