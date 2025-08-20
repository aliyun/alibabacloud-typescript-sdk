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

export class ListStackGroupOperationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The stack group operations.
   */
  stackGroupOperations?: ListStackGroupOperationsResponseBodyStackGroupOperations[];
  /**
   * @remarks
   * The total number of stack group operations.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperations: 'StackGroupOperations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperations: { 'type': 'array', 'itemType': ListStackGroupOperationsResponseBodyStackGroupOperations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackGroupOperations)) {
      $dara.Model.validateArray(this.stackGroupOperations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

