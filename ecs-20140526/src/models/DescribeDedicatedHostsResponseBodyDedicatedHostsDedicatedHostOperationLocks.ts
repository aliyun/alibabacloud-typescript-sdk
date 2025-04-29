// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock";


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocks extends $dara.Model {
  operationLock?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostOperationLocksOperationLock },
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

