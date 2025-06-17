// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnServiceResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the service is locked. A value of financial indicates that the service is locked due to overdue payments.
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

