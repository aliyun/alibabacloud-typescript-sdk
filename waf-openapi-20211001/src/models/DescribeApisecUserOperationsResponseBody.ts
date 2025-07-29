// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecUserOperationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The state before the operation.
   * 
   * Valid values of the risk state:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **toBeFixed**
   * *   **fixed**
   * *   **ignored**
   * 
   * Valid values of the event state:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **ignored**
   * 
   * @example
   * ignored
   */
  fromStatus?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Handled
   */
  note?: string;
  /**
   * @remarks
   * The object ID of the operation record.
   * 
   * @example
   * 24d997acc48a67a01e09b9c5ad861287
   */
  objectId?: string;
  operationSource?: string;
  /**
   * @remarks
   * The time at which the operation was performed. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1685072214
   */
  time?: number;
  /**
   * @remarks
   * The state after the operation.
   * 
   * Valid values of the risk state:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **toBeFixed**
   * *   **fixed**
   * *   **ignored**
   * 
   * Valid values of the event state:
   * 
   * *   **toBeConfirmed**
   * *   **confirmed**
   * *   **ignored**
   * 
   * @example
   * Confirmed
   */
  toStatus?: string;
  /**
   * @remarks
   * The type of the operation record. Valid values:
   * 
   * *   **abnormal**: risk detection
   * *   **event**: security event
   * 
   * @example
   * abnormal
   */
  type?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1610954****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      fromStatus: 'FromStatus',
      note: 'Note',
      objectId: 'ObjectId',
      operationSource: 'OperationSource',
      time: 'Time',
      toStatus: 'ToStatus',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromStatus: 'string',
      note: 'string',
      objectId: 'string',
      operationSource: 'string',
      time: 'number',
      toStatus: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecUserOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation records.
   */
  data?: DescribeApisecUserOperationsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C9825654-327B-5156-A570-847054B4CF10
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecUserOperationsResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

