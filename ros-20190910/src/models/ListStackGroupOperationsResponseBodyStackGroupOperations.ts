// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupOperationsResponseBodyStackGroupOperations extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   CREATE
   * *   UPDATE
   * *   DELETE
   * *   DETECT_DRIFT
   * 
   * @example
   * CREATE
   */
  action?: string;
  /**
   * @remarks
   * The time when the operation was initiated.
   * 
   * @example
   * 2020-01-20T09:22:36.000000
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the operation ended.
   * 
   * @example
   * 2020-01-20T09:22:41.000000
   */
  endTime?: string;
  /**
   * @remarks
   * The description of the operation.
   * 
   * @example
   * Create stack instance in hangzhou
   */
  operationDescription?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761****
   */
  operationId?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The state of the operation.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * *   SUCCEEDED
   * *   FAILED
   * *   STOPPING
   * *   STOPPED
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      endTime: 'string',
      operationDescription: 'string',
      operationId: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

