// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OperationStateChangeReason } from "./OperationStateChangeReason";


export class Operation extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the operation was created. This value is a UNIX timestamp, measured in milliseconds.
   * 
   * @example
   * 1628589439114
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * start
   */
  description?: string;
  /**
   * @remarks
   * The time when the operation ended. This value is a UNIX timestamp, measured in milliseconds.
   * 
   * @example
   * 1628589439114
   */
  endTime?: number;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * The operation state. Valid values:
   * 
   * - `IN_PROGRESS`: The operation is in progress.
   * 
   * - `COMPLETED`: The operation completed.
   * 
   * - `HUMAN_PROCESSING`: The operation requires manual intervention.
   * 
   * - `FAILED`: The operation failed.
   * 
   * @example
   * COMPLETED
   */
  operationState?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * CREATE_CLUSTER
   */
  operationType?: string;
  /**
   * @remarks
   * The time when the operation started. This value is a UNIX timestamp, measured in milliseconds.
   * 
   * @example
   * 1628589439114
   */
  startTime?: number;
  /**
   * @remarks
   * The reason for the state change.
   */
  stateChangeReason?: OperationStateChangeReason;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      description: 'Description',
      endTime: 'EndTime',
      operationId: 'OperationId',
      operationState: 'OperationState',
      operationType: 'OperationType',
      startTime: 'StartTime',
      stateChangeReason: 'StateChangeReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'number',
      description: 'string',
      endTime: 'number',
      operationId: 'string',
      operationState: 'string',
      operationType: 'string',
      startTime: 'number',
      stateChangeReason: OperationStateChangeReason,
    };
  }

  validate() {
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

