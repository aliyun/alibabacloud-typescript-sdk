// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditZeroCreditShutdownRequest extends $dara.Model {
  /**
   * @remarks
   * ### **Shutdown policy**
   * For more information, refer to the official documentation: https://www.alibabacloud.com/help/zh/channel-platform/latest/shutdowndelayprivilege
   * 
   * - **immediatelyStop**——When the active credit of the distributor customer account is less than 0, the account enters the overdue payment state. New resources cannot be purchased. Pay-as-you-go instances are stopped and no longer incur charges. Upfront instances can be used until they expire. After the instances remain stopped for 15 days, pay-as-you-go instances are released. Because of billing delays, credits may continue to be deducted even after instances are successfully stopped.
   * - **delayStop**——The overdraft quota in the delayed shutdown policy is calculated by Alibaba Cloud based on the historical consumption of the account. The minimum overdraft quota is 600 USD, and instances can continue to run for approximately 15 days after the overdue payment occurs. The overdraft quota applies to pay-as-you-go products. After this policy is enabled, when the customer has an overdue payment (active credit < 0) and the overdue amount is within the overdraft quota, instance shutdown is not triggered. The overdraft quota is not the upper limit of the overdue amount. Because of billing delays, credits may continue to be deducted even after instances are successfully stopped. After the instances remain stopped for 15 days, pay-as-you-go instances are released. When the delayed shutdown quota <= remaining credit < 0, you can manually trigger an immediate shutdown.
   * - **noStop**——If you select this option, instances are not stopped when the customer has an overdue payment. When the customer has an overdue payment (remaining credit < 0), instance shutdown is not triggered. There is no upper limit on the overdue amount. You must perform a manual operation of "Immediate Shutdown" in ACPN to change the instance status. Use this option with caution.
   * 
   * @example
   * noStop
   */
  shutdownPolicy?: string;
  /**
   * @remarks
   * The UID of the distributor customer whose shutdown policy you want to modify.
   * 
   * @example
   * 1263644979775567
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      shutdownPolicy: 'ShutdownPolicy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shutdownPolicy: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

