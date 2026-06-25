// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of packages.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-payment. Valid values:
   * 
   * - **true**: Enables auto-payment. You must ensure that your account balance is sufficient.
   * 
   * - **false** (default): An unpaid order is generated. Your account is not charged.
   * 
   * > If your account balance is insufficient, you can set this parameter to `false` to generate an unpaid order. Then, you can log in to the Wuying Cloud Phone management console to pay for the order.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * 
   * - **false** (default): Disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The region where the instance is located. Currently, only `cn-hangzhou` is supported.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The credit amount.
   * 
   * @example
   * 10000.0
   */
  creditAmount?: string;
  /**
   * @remarks
   * The credit limit configuration.
   * 
   * @example
   * 1
   */
  creditConfig?: string;
  imageId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * CloudPhone
   */
  instanceName?: string;
  /**
   * @remarks
   * The package specification.
   * 
   * @example
   * advanced
   */
  mobileAgentPackageSpec?: string;
  packageSpecId?: number;
  /**
   * @remarks
   * The callback URL to which the user is redirected after a successful payment.
   * 
   * @example
   * https://aim.wuying.aliyun.com/nodes
   */
  paidCallbackUrl?: string;
  /**
   * @remarks
   * The subscription period. The unit of the period is specified by the `PeriodUnit` parameter.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period.
   * Valid values:
   * 
   * - **Month**
   * 
   * - **Year**
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
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      creditAmount: 'CreditAmount',
      creditConfig: 'CreditConfig',
      imageId: 'ImageId',
      instanceName: 'InstanceName',
      mobileAgentPackageSpec: 'MobileAgentPackageSpec',
      packageSpecId: 'PackageSpecId',
      paidCallbackUrl: 'PaidCallbackUrl',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      creditAmount: 'string',
      creditConfig: 'string',
      imageId: 'string',
      instanceName: 'string',
      mobileAgentPackageSpec: 'string',
      packageSpecId: 'number',
      paidCallbackUrl: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

