// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Enables automatic payment. Make sure that your account balance is sufficient.
   * 
   * - **false** (default): Generates an unpaid order.
   * 
   * > If your account balance is insufficient, set this parameter to `false` to generate an unpaid order. You can then pay for the order in the Wuying Mobile Cloud Phone management console.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. The default value is `false`.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * A list of mobile agent package IDs.
   */
  mobileAgentPackageIds?: string[];
  /**
   * @remarks
   * The URL to which a user is redirected after a successful payment.
   * 
   * @example
   * https://aim.wuying.aliyun.com/nodes
   */
  paidCallbackUrl?: string;
  /**
   * @remarks
   * The renewal period. The `PeriodUnit` parameter specifies the time unit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period.
   * Valid values:
   * 
   * - **Month**: month.
   * 
   * - **Year**: year.
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
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      mobileAgentPackageIds: 'MobileAgentPackageIds',
      paidCallbackUrl: 'PaidCallbackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      mobileAgentPackageIds: { 'type': 'array', 'itemType': 'string' },
      paidCallbackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mobileAgentPackageIds)) {
      $dara.Model.validateArray(this.mobileAgentPackageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

