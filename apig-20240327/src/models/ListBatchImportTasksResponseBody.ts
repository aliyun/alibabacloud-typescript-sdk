// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchImportTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-05-26T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * some apis failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the gateway instance associated with the task.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The number of processed items.
   * 
   * @example
   * 5
   */
  processedCount?: number;
  /**
   * @remarks
   * The status of the task. Valid values: Pending, Running, Success, PartialSuccess, and Failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * BatchImport
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      errorMessage: 'errorMessage',
      gatewayId: 'gatewayId',
      processedCount: 'processedCount',
      status: 'status',
      taskId: 'taskId',
      taskType: 'taskType',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorMessage: 'string',
      gatewayId: 'string',
      processedCount: 'number',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchImportTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of tasks. The tasks are returned in descending order of creation time, with the latest tasks first.
   */
  items?: ListBatchImportTasksResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListBatchImportTasksResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchImportTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListBatchImportTasksResponseBodyData;
  /**
   * @remarks
   * The maximum number of records returned in the current response.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The starting token for the next query. This parameter is empty when no more results are available.
   * 
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CE534E1D-FCE4-5930-B784-E055EC1AEE6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBatchImportTasksResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

