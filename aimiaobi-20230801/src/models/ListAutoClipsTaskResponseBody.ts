// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoClipsTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeStart?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  taskName?: string;
  /**
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
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListAutoClipsTaskResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  total?: number;
  /**
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

