// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock } from "./DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock";


export class DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocks extends $dara.Model {
  operationLock?: DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock[];
  static names(): { [key: string]: string } {
    return {
      operationLock: 'OperationLock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationLock: { 'type': 'array', 'itemType': DescribeReservedInstancesResponseBodyReservedInstancesReservedInstanceOperationLocksOperationLock },
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

