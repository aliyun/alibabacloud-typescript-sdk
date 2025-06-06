// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskOperationLogsResponseBodyPagingInfoOperationLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the operation log was generated.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The operation content.
   * 
   * @example
   * Freeze tasks
   */
  operationContent?: string;
  /**
   * @remarks
   * The serial number of the operation.
   * 
   * @example
   * 1111
   */
  operationSeq?: number;
  /**
   * @remarks
   * The ID of the task on which the operation was performed.
   * 
   * @example
   * 1234
   */
  taskId?: number;
  /**
   * @remarks
   * The account ID of the operator.
   * 
   * @example
   * 1000
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      operationContent: 'OperationContent',
      operationSeq: 'OperationSeq',
      taskId: 'TaskId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      operationContent: 'string',
      operationSeq: 'number',
      taskId: 'number',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

