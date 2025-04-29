// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock } from "./DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock";


export class DescribeDisksResponseBodyDisksDiskOperationLocks extends $dara.Model {
  operationLock?: DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskOperationLocksOperationLock },
    };
  }

  validate() {
    if(Array.isArray(this.operationLock)) {
      $dara.Model.validateArray(this.operationLock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

