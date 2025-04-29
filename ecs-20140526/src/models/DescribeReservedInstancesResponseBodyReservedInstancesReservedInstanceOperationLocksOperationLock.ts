// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance is locked.
   * 
   * @example
   * security
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

