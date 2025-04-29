// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance was locked. Valid values:
   * 
   * *   financial: The instance was locked due to overdue payments.
   * *   security: The instance was locked due to security reasons.
   * *   recycling: The preemptible instance was locked and pending release.
   * *   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
   * *   refunded: The instance was locked because a refund is made for the instance.
   * 
   * @example
   * financial
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

