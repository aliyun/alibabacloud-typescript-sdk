// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnsubscribeBillToOSSRequest extends $dara.Model {
  /**
   * @remarks
   * The type of accounts whose bills are to be pushed if multi-tier accounts are involved. Valid values:
   * 
   * *   MA: management account.
   * *   ACP1: member account of a virtual network operator (VNO).
   * 
   * Default value: MA.
   * 
   * @example
   * MA
   */
  multAccountRelSubscribe?: string;
  /**
   * @remarks
   * The type of the bill to which you want to subscribe. Valid values:
   * 
   * *   BillingItemDetailForBillingPeriod: bills of billable items
   * *   InstanceDetailForBillingPeriod: bills of instances
   * *   BillingItemDetailMonthly: billable item-based bills summarized by billing cycle
   * *   InstanceDetailMonthly: instance-based bills summarized by billing cycle
   * *   SplitItemDetailDaily: split bills summarized by day
   * *   MonthBill: monthly bills in the PDF format You can subscribe to the monthly PDF bills only of the master account.
   * 
   * This parameter is required.
   * 
   * @example
   * BillingItemDetailForBillingPeriod
   */
  subscribeType?: string;
  static names(): { [key: string]: string } {
    return {
      multAccountRelSubscribe: 'MultAccountRelSubscribe',
      subscribeType: 'SubscribeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multAccountRelSubscribe: 'string',
      subscribeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

