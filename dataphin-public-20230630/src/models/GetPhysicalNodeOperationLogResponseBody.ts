// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhysicalNodeOperationLogResponseBodyOperationLogList extends $dara.Model {
  /**
   * @remarks
   * The log details.
   * 
   * @example
   * xx
   */
  context?: string;
  /**
   * @remarks
   * The operation time.
   * 
   * @example
   * 2024-05-30 16:47:13
   */
  operationTime?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * - TASK_UPDATE_PRIORITY: updates the node priority.
   * - PAUSE_TASK: pauses scheduling.
   * - RESUME_TASK: resumes scheduling.
   * - CREATE_NODE: creates a node.
   * - FORCE_DELETE_NODE: force deletes a node.
   * - UPDATE_NODE: updates a node.
   * - DELETE_NODE: deletes a node.
   * - CHANGE_NODE_OWNER: changes the node owner.
   * 
   * @example
   * PAUSE_TASK
   */
  operationType?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * 132222
   */
  operator?: string;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * xx测试
   */
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      operationTime: 'string',
      operationType: 'string',
      operator: 'string',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The node operation logs.
   */
  operationLogList?: GetPhysicalNodeOperationLogResponseBodyOperationLogList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationLogList: 'OperationLogList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogList: { 'type': 'array', 'itemType': GetPhysicalNodeOperationLogResponseBodyOperationLogList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.operationLogList)) {
      $dara.Model.validateArray(this.operationLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

