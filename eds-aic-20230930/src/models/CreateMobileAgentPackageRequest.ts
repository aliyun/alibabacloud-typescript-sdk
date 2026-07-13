// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of resource plans.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account balance is sufficient.
   * - **false** (default): generates an order without charging the account.
   * 
   * 
   * 
   * 
   * > If your payment method has an insufficient balance, set this parameter to false. An unpaid order is generated. You can log on to the CloudPhone console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * * **true**: enables auto-renewal.
   * * **false** (default): disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The region in which the instance resides. Currently, only cn-hangzhou is supported.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  channelCookie?: string;
  /**
   * @remarks
   * The credit quota.
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
   * The name of the node instance.
   * 
   * @example
   * CloudPhone
   */
  instanceName?: string;
  /**
   * @remarks
   * The resource plan specification.
   * 
   * @example
   * advanced
   */
  mobileAgentPackageSpec?: string;
  packageSpecId?: number;
  /**
   * @remarks
   * The redirect URL after a successful payment.
   * 
   * @example
   * https://aim.wuying.aliyun.com/nodes
   */
  paidCallbackUrl?: string;
  /**
   * @remarks
   * The duration for which you want to purchase the resource. The unit is specified by `PeriodUnit`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the duration for which you want to purchase the resource.
   * 
   * Valid values:
   * - **Month**: month.
   * - **Year**: year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotional campaign.
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
      channelCookie: 'ChannelCookie',
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
      channelCookie: 'string',
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

