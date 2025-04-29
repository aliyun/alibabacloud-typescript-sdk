// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The message returned when the instance was locked.
   * 
   * @example
   * The specified instance is locked due to financial reason.
   */
  lockMsg?: string;
  /**
   * @remarks
   * The reason why the instance was locked. Valid values:
   * 
   * *   financial: The instance was locked due to overdue payments.
   * *   security: The instance was locked due to security reasons.
   * *   recycling: The preemptible instance was locked and pending release.
   * *   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
   * *   refunded: The instance was locked because a refund was made for the instance.
   * 
   * @example
   * Recycling
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockMsg: 'LockMsg',
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockMsg: 'string',
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

