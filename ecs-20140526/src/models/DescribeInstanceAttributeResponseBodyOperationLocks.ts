// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAttributeResponseBodyOperationLocksLockReason } from "./DescribeInstanceAttributeResponseBodyOperationLocksLockReason";


export class DescribeInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeInstanceAttributeResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyOperationLocksLockReason },
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

