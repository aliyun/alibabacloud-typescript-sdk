// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false** (default): Only an order is generated and no payment is deducted.
   * 
   * 
   * 
   * 
   * > If the balance of your payment method is insufficient, set this parameter to false to generate an unpaid order. You can log on to the Wuying Cloud Phone console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The idempotency key.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of resource plan IDs.
   */
  mobileAgentPackageIds?: string[];
  /**
   * @remarks
   * The redirect URL for the payment success page.
   * 
   * @example
   * https://aim.wuying.aliyun.com/nodes
   */
  paidCallbackUrl?: string;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by PeriodUnit.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the resource. Valid values:
   * - **Month**: Month.
   * - **Year**: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

