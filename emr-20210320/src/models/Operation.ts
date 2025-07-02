// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OperationStateChangeReason } from "./OperationStateChangeReason";


export class Operation extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 1628589439114
   */
  createTime?: number;
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * start
   */
  description?: string;
  /**
   * @remarks
   * 结束时间。
   * 
   * @example
   * 1628589439114
   */
  endTime?: number;
  /**
   * @remarks
   * 操作ID。
   * 
   * @example
   * op-13c37a77c505****
   */
  operationId?: string;
  /**
   * @remarks
   * 操作状态。
   * 
   * @example
   * COMPLETED
   */
  operationState?: string;
  /**
   * @remarks
   * 操作类型。
   * 
   * @example
   * CLUSTER
   */
  operationType?: string;
  /**
   * @remarks
   * 开始时间。
   * 
   * @example
   * 1628589439114
   */
  startTime?: number;
  /**
   * @remarks
   * 状态转换原因。
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

