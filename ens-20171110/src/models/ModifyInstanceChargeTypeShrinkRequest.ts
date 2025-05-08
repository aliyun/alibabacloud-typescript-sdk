// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment when you change the billing method from pay-as-you-go to subscription. Valid values:
   * 
   * true: enables auto-payment. Make sure that your account has sufficient balance.
   * 
   * false (default): does not enable auto-payment. The order is generated but not paid.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal when you change the billing method from pay-as-you-go to subscription. Valid values:
   * 
   * true: enables auto-renewal for the instance.
   * 
   * false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  billingCycle?: string;
  /**
   * @remarks
   * Specifies whether to change the billing method of all data disks that are created with the instance to subscription when you change the billing method of the instance from pay-as-you-go to subscription. Valid values:
   * 
   * true
   * 
   * false (default)
   * 
   * @example
   * true
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * The new billing method. Valid values:
   * 
   * PrePaid
   * 
   * PostPaid (default)
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required if you set the InstanceChargeType parameter to PrePaid. Valid values:
   * 
   * If the PeriodUnit parameter is set to Day, Period can only be set to 3.
   * 
   * If PeriodUnit is Month, Period can be set to 1 to 9 or 12.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required if you set the InstanceChargeType parameter to PrePaid. Valid values:
   * 
   * Month
   * 
   * Day
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

