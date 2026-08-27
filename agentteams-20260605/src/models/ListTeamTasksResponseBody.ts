// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The assignee of the task.
   * 
   * @example
   * worker-1
   */
  assignedTo?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2026-07-01T12:00:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task title.
   * 
   * @example
   * 数据分析任务
   */
  taskTitle?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'AssignedTo',
      createdAt: 'CreatedAt',
      status: 'Status',
      taskId: 'TaskId',
      taskTitle: 'TaskTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      createdAt: 'string',
      status: 'string',
      taskId: 'string',
      taskTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task list.
   * 
   * @example
   * [...]
   */
  items?: ListTeamTasksResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 10
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
   * The pagination token for the next page. This parameter is empty if no more data exists.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-list-team-tasks-001
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
  /**
   * @remarks
   * The total number of records that meet the conditions.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListTeamTasksResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

