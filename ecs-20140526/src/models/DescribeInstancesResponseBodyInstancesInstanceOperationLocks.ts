// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason } from "./DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason";


export class DescribeInstancesResponseBodyInstancesInstanceOperationLocks extends $dara.Model {
  lockReason?: DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason },
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

