// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason } from "./DescribeRcinstanceAttributeResponseBodyOperationLocksLockReason";


export class DescribeRCInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason },
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

