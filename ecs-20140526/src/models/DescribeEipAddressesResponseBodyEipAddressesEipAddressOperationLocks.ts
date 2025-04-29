// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason } from "./DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason";


export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks extends $dara.Model {
  lockReason?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason },
    };
  }

  validate() {
    if(Array.isArray(this.lockReason)) {
      $dara.Model.validateArray(this.lockReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

