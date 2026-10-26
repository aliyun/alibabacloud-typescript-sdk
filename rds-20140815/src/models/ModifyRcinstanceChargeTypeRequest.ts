// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: enables auto-renewal (default)
   * * **false**: disables auto-renewal
   * 
   * > * This parameter takes effect only when you change the billing method from pay-as-you-go to subscription.
   * > * Any string other than **true** is processed as **false**.
   * 
   * @example
   * true
   */
  autoRenew?: string;
  /**
   * @remarks
   * Specifies whether to use vouchers. Valid values:
   * * **true** (default): uses vouchers.
   * * **false**: does not use vouchers.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The business extension parameters.
   * 
   * @example
   * None
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. 
   * > The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOC****
   */
  clientToken?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
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
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  instanceIds?: string;
  /**
   * @remarks
   * The billing method of the instance after the change. Valid values:
   * * **Prepaid**: subscription
   * * **Postpaid**: pay-as-you-go
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Specifies the subscription period unit. Valid values:
   * * **Year**: year
   * * **Month**: month
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
   * Specifies the subscription duration. Valid values:
   * * If the **Period** parameter is set to **Year**, the value of UsedTime ranges from **1** to **5**.
   * * If the **Period** parameter is set to **Month**, the value of UsedTime ranges from **1** to **11**.
   * 
   * > This parameter is required if the billing method is set to **Prepaid**.
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

