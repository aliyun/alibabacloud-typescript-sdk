// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoClipsTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Start time of task creation
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * upload
   * 
   * @example
   * upload
   * clips
   * generate
   */
  taskStep?: string;
  /**
   * @remarks
   * Task type
   * 
   * @example
   * type001
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeStart: 'CreateTimeStart',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStep: 'TaskStep',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeStart: 'string',
      taskId: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStep: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoClipsTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Business data
   */
  data?: ListAutoClipsTaskResponseBodyData[];
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. false means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 20
   */
  total?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListAutoClipsTaskResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
      totalCount: 'number',
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

