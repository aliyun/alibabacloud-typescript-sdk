// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance is locked. Valid values:
   * 
   * *   **financial**: The instance is locked due to overdue payments.
   * *   **security**: The instance is locked for security purposes.
   * *   **recycling**: The instance is locked because the instance is a preemptible instance and pending to be released.
   * *   **dedicatedhostfinancial**: The instance is locked due to overdue payments for the dedicated host.
   * *   **refunded**: The instance is locked because a refund was made for the instance.
   * 
   * @example
   * None
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

