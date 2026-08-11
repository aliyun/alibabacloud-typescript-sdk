// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchExportTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2026-05-26T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * some apis failed
   */
  errorMessage?: string;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * 5
   */
  processedCount?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * task-xxx
   */
  taskId?: string;
  /**
   * @example
   * BatchExport
   */
  taskType?: string;
  /**
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

export class ListBatchExportTasksResponseBodyData extends $dara.Model {
  items?: ListBatchExportTasksResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
      items: { 'type': 'array', 'itemType': ListBatchExportTasksResponseBodyDataItems },
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

export class ListBatchExportTasksResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListBatchExportTasksResponseBodyData;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * token-xxx
   */
  nextToken?: string;
  /**
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
      data: ListBatchExportTasksResponseBodyData,
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

