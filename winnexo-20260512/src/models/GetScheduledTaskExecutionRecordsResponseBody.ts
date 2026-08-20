// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsResponseBodyTasksTimeline extends $dara.Model {
  /**
   * @remarks
   * The actual working hours, in hours.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  actualTime?: string;
  /**
   * @remarks
   * The name of the schedule location.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * The execution record ID.
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * Indicates whether the execution record has been archived due to expiration.
   * 
   * @example
   * false
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The execution output content (historical records only).
   * 
   * @example
   * string_value
   */
  outputContent?: string;
  /**
   * @remarks
   * The timed scheduling time.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  scheduledTime?: string;
  /**
   * @remarks
   * The final status of the message.
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'actualTime',
      displayName: 'displayName',
      errorMessage: 'errorMessage',
      executionId: 'executionId',
      isExpired: 'isExpired',
      outputContent: 'outputContent',
      scheduledTime: 'scheduledTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'string',
      displayName: 'string',
      errorMessage: 'string',
      executionId: 'string',
      isExpired: 'boolean',
      outputContent: 'string',
      scheduledTime: 'string',
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

export class GetScheduledTaskExecutionRecordsResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs. If empty, the task is a personal task.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * string_value
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether public access is enabled.
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * The execution model tier. Valid values:
   * - flagship: flagship.
   * - standard: standard.
   * - quick: lightweight.
   * 
   * @example
   * standard
   */
  model?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The timeline.
   */
  timeline?: GetScheduledTaskExecutionRecordsResponseBodyTasksTimeline[];
  /**
   * @remarks
   * The time zone.
   * 
   * > Default value: UTC+8.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Manual: manually executed.
   * - Cron: triggered by a schedule.
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      cronExpression: 'cronExpression',
      description: 'description',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      taskId: 'taskId',
      timeline: 'timeline',
      timezone: 'timezone',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      cronExpression: 'string',
      description: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      taskId: 'string',
      timeline: { 'type': 'array', 'itemType': GetScheduledTaskExecutionRecordsResponseBodyTasksTimeline },
      timezone: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeline)) {
      $dara.Model.validateArray(this.timeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskExecutionRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more data is available.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of tasks per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The task list.
   */
  tasks?: GetScheduledTaskExecutionRecordsResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      tasks: 'tasks',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': GetScheduledTaskExecutionRecordsResponseBodyTasks },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

