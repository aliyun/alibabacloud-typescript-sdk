// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment when you switch the billing method of the instance from pay-as-you-go to subscription. Valid values:
   * 
   * true: The payment is automatically completed. Make sure that your account balance is sufficient.
   * 
   * false: Only an order is generated but no payment is made. This is the default value.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal when converting the instance from pay-as-you-go to subscription. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is not enabled (default).
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
   * Specifies whether to convert all pay-as-you-go data cloud disks created with the instance to subscription data cloud disks when converting an instance-level pay-as-you-go instance to a subscription instance. Valid values:
   * 
   * @example
   * true
   */
  includeDataDisks?: boolean;
  /**
   * @remarks
   * The target billing method of the instance. Valid values:
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
  instanceIds?: string[];
  /**
   * @remarks
   * The subscription duration when converting a pay-as-you-go instance to subscription. This parameter is required in this scenario. Valid values:
   * 
   * If PeriodUnit is set to Day, Period can only be set to 3.
   * 
   * If PeriodUnit is set to Month, Period can be set to 1-9 or 12.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription duration when converting an instance-level pay-as-you-go instance to a subscription instance. This parameter is required in this scenario. Valid values:
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
      instanceIds: 'InstanceIds',
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
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'string',
      periodUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

