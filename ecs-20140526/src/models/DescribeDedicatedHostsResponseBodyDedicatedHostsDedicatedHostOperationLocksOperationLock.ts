// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock extends $dara.Model {
  /**
   * @remarks
   * The reason why the dedicated host was locked. Valid values:
   * 
   * *   financial: The dedicated host was locked due to overdue payments.
   * *   security: The dedicated host was locked due to security reasons.
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

