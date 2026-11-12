// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment when the billing method of the instance is changed from pay-as-you-go to subscription. Valid values:
   * 
   * - true: enables automatic payment. Make sure that your account balance is sufficient.
   * 
   * - false: only generates the order without deducting the fee. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal when the billing method of the instance is changed from pay-as-you-go to subscription. Valid values:
   * 
   * - true: enables auto-renewal.
   * 
   * - false: disables auto-renewal. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing cycle. Valid values: Month, Day, and Hour.
   * 
   * @example
   * Month
   */
  billingCycle?: string;
  /**
   * @remarks
   * Specifies whether to convert all pay-as-you-go data cloud disks created along with the instance into subscription data cloud disks when the billing method of the instance is changed from pay-as-you-go to subscription. Valid values:
   * 
   * - true: yes.
   * 
   * - false: no. This is the default value.
   * 
   * @example
   * true
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * The target billing method of the instance. Valid values:
   * 
   * - PrePaid: converts the instance-level pay-as-you-go instance to a subscription instance.
   * 
   * - PostPaid: converts the subscription instance to an instance-level pay-as-you-go instance. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The subscription duration when the billing method of the instance is changed from pay-as-you-go to subscription. This parameter is required in this scenario. Valid values:
   * 
   * - If PeriodUnit is set to Day, Period can only be set to 3.
   * 
   * - If PeriodUnit is set to Month, Period can be set to 1, 2, 3, 4, 5, 6, 7, 8, 9, or 12.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription duration when the billing method of the instance is changed from pay-as-you-go to subscription. This parameter is required in this scenario. Valid values:
   * 
   * - Month: month.
   * 
   * - Day: day.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      billingCycle: 'BillingCycle',
      includeDataDisks: 'IncludeDataDisks',
      instanceChargeType: 'InstanceChargeType',
      instanceIdsShrink: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      billingCycle: 'string',
      includeDataDisks: 'boolean',
      instanceChargeType: 'string',
      instanceIdsShrink: 'string',
      period: 'string',
      periodUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

