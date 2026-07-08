// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecUserOperationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the threat detection or security event before the operation was performed.
   * 
   * Valid values for threat detection:
   * 
   * - **toBeConfirmed**: to be confirmed.
   * 
   * - **confirmed**: confirmed.
   * 
   * - **toBeFixed**: to be fixed.
   * 
   * - **fixed**: fixed.
   * 
   * - **ignored**: ignored.
   * 
   * Valid values for a security event:
   * 
   * - **toBeConfirmed**: to be confirmed.
   * 
   * - **confirmed**: confirmed.
   * 
   * - **ignored**: ignored.
   * 
   * @example
   * ignored
   */
  fromStatus?: string;
  /**
   * @remarks
   * The remarks that the user added to the operation record.
   * 
   * @example
   * Procesed
   */
  note?: string;
  /**
   * @remarks
   * The ID of the threat detection or security event associated with the operation record.
   * 
   * @example
   * 24d997acc48a67a01e09b9c5ad861287
   */
  objectId?: string;
  /**
   * @remarks
   * The source of the operation. Valid values:
   * 
   * - **system**: the operation was automatically performed by the system.
   * 
   * - **custom**: the operation was manually performed by a user.
   * 
   * @example
   * custom
   */
  operationSource?: string;
  /**
   * @remarks
   * The time when the operation was performed. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1685072214
   */
  time?: number;
  /**
   * @remarks
   * The status of the threat detection or security event after the operation was performed.
   * 
   * Valid values for threat detection:
   * 
   * - **toBeConfirmed**: to be confirmed.
   * 
   * - **confirmed**: confirmed.
   * 
   * - **toBeFixed**: to be fixed.
   * 
   * - **fixed**: fixed.
   * 
   * - **ignored**: ignored.
   * 
   * Valid values for a security event:
   * 
   * - **toBeConfirmed**: to be confirmed.
   * 
   * - **confirmed**: confirmed.
   * 
   * - **ignored**: ignored.
   * 
   * @example
   * Confirmed
   */
  toStatus?: string;
  /**
   * @remarks
   * The type of the operation record. Valid values:
   * 
   * - **abnormal**: threat detection.
   * 
   * - **event**: security event.
   * 
   * @example
   * abnormal
   */
  type?: string;
  /**
   * @remarks
   * The ID of the user who performed the operation.
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
   * The user operation records for API security.
   */
  data?: DescribeApisecUserOperationsResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
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

