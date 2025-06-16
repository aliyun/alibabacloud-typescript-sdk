// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the EIP is locked. Valid values:
   * 
   * *   **financial**: The EIP is locked due to overdue payments.
   * *   **security**: The EIP is locked for security reasons.
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

