// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class KopilotListConversationChatMessagesResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * The actual content of the message.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The UNIX timestamp when the message was created, in milliseconds.
   * 
   * @example
   * 17575885545677
   */
  createTime?: string;
  /**
   * @remarks
   * The user satisfaction level.
   * 
   * @example
   * 1
   */
  feedback?: string;
  /**
   * @remarks
   * The role identifier.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 2345
   */
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      feedback: 'Feedback',
      role: 'Role',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      feedback: 'string',
      role: 'string',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksActiveRun extends $dara.Model {
  /**
   * @remarks
   * The time when the run ended, in UTC ISO 8601 format. This value is typically empty for queued or running tasks.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The unique identifier of a single run.
   * 
   * @example
   * run_0123456789abcdef0123456789abcdef
   */
  runId?: string;
  /**
   * @remarks
   * The status of a single run. A value of QUEUED indicates that the run is queued. A value of RUNNING indicates that the run is in progress.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      runId: 'RunId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      runId: 'string',
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

export class KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksLastCompletedRun extends $dara.Model {
  /**
   * @remarks
   * The time when the run ended, in UTC ISO 8601 format. This value is empty if the run has not ended.
   * 
   * @example
   * 2026-09-17T12:01:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The unique identifier of a single run.
   * 
   * @example
   * run_0123456789abcdef0123456789abcdef
   */
  runId?: string;
  /**
   * @remarks
   * The status of the most recent completed run. For example, SUCCEEDED indicates success and FAILED indicates failure.
   * 
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      runId: 'RunId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      runId: 'string',
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

export class KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasks extends $dara.Model {
  /**
   * @remarks
   * The run record that is currently queued or running. This value is empty if there is no active run.
   */
  activeRun?: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksActiveRun;
  /**
   * @remarks
   * The most recent completed run record, including failed runs. This value is empty if no record exists.
   */
  lastCompletedRun?: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksLastCompletedRun;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * Kafka Resource Inspection
   */
  name?: string;
  /**
   * @remarks
   * The next scheduled execution time, in UTC ISO 8601 format. This value is empty if no next execution is scheduled.
   * 
   * @example
   * 2026-09-17T12:15:00Z
   */
  nextRunAt?: string;
  /**
   * @remarks
   * The human-readable description of the execution schedule.
   * 
   * @example
   * Every 900 seconds
   */
  scheduleDescription?: string;
  /**
   * @remarks
   * The status of the scheduled task. Valid values:
   * - DRAFT: The task is a draft.
   * - ENABLED: The task is enabled.
   * - PAUSED: The task is paused.
   * - NEEDS_AUTH: The task is pending authorization.
   * - COMPLETED: The task is completed.
   * 
   * This status is independent of the run status.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The unique identifier of the scheduled task.
   * 
   * @example
   * task_0123456789abcdef0123456789abcdef
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      activeRun: 'ActiveRun',
      lastCompletedRun: 'LastCompletedRun',
      name: 'Name',
      nextRunAt: 'NextRunAt',
      scheduleDescription: 'ScheduleDescription',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeRun: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksActiveRun,
      lastCompletedRun: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasksLastCompletedRun,
      name: 'string',
      nextRunAt: 'string',
      scheduleDescription: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.activeRun && typeof (this.activeRun as any).validate === 'function') {
      (this.activeRun as any).validate();
    }
    if(this.lastCompletedRun && typeof (this.lastCompletedRun as any).validate === 'function') {
      (this.lastCompletedRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the overview was generated, in UTC ISO 8601 format.
   * 
   * @example
   * 2026-09-17T12:00:00Z
   */
  asOf?: string;
  /**
   * @remarks
   * The number of associated tasks in the ENABLED state.
   * 
   * @example
   * 1
   */
  enabledCount?: number;
  /**
   * @remarks
   * Indicates whether there is a next page of associated tasks.
   * 
   * @example
   * false
   */
  hasMoreTasks?: boolean;
  /**
   * @remarks
   * Indicates whether the current session has associated scheduled tasks in the enabled, paused, or pending authorization state.
   * 
   * @example
   * true
   */
  hasScheduledTask?: boolean;
  /**
   * @remarks
   * The cursor for the next page. This value is empty if there is no next page.
   * 
   * @example
   * 123
   */
  nextTaskCursor?: string;
  /**
   * @remarks
   * The total number of associated tasks. Only tasks in the ENABLED, PAUSED, or NEEDS_AUTH state are counted.
   * 
   * @example
   * 1
   */
  taskCount?: number;
  /**
   * @remarks
   * The list of associated tasks on the current page.
   */
  tasks?: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasks[];
  static names(): { [key: string]: string } {
    return {
      asOf: 'AsOf',
      enabledCount: 'EnabledCount',
      hasMoreTasks: 'HasMoreTasks',
      hasScheduledTask: 'HasScheduledTask',
      nextTaskCursor: 'NextTaskCursor',
      taskCount: 'TaskCount',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asOf: 'string',
      enabledCount: 'number',
      hasMoreTasks: 'boolean',
      hasScheduledTask: 'boolean',
      nextTaskCursor: 'string',
      taskCount: 'number',
      tasks: { 'type': 'array', 'itemType': KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfoTasks },
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

export class KopilotListConversationChatMessagesResponseBodyDataScheduledTaskQuota extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tasks or channels allowed, subject to the actual configuration.
   * 
   * @example
   * 3
   */
  limit?: number;
  /**
   * @remarks
   * The remaining quota, calculated as the limit minus the used quota. The minimum value is 0.
   * 
   * @example
   * 2
   */
  remaining?: number;
  /**
   * @remarks
   * The used task quota. Tasks in the DRAFT, ENABLED, PAUSED, or NEEDS_AUTH state are counted. Completed or deleted tasks do not consume the quota.
   * 
   * @example
   * 1
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      remaining: 'Remaining',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      remaining: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBodyData extends $dara.Model {
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
   * The list of messages.
   */
  messages?: KopilotListConversationChatMessagesResponseBodyDataMessages[];
  /**
   * @remarks
   * The cursor for the next page.
   * 
   * @example
   * 1
   */
  nextBeforeTurnId?: number;
  /**
   * @remarks
   * The details of scheduled tasks associated with the current session. Only tasks in the enabled, paused, or pending authorization state are counted.
   */
  scheduledTaskInfo?: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfo;
  /**
   * @remarks
   * The scheduled task quota for the current Alibaba Cloud account in this environment, counted across regions.
   */
  scheduledTaskQuota?: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskQuota;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 87ce9505-7dec-4fd7-bc7c-e66d949bfdc9
   */
  sessionId?: string;
  /**
   * @remarks
   * The total number of turn IDs.
   * 
   * @example
   * 2
   */
  totalTurns?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      messages: 'Messages',
      nextBeforeTurnId: 'NextBeforeTurnId',
      scheduledTaskInfo: 'ScheduledTaskInfo',
      scheduledTaskQuota: 'ScheduledTaskQuota',
      sessionId: 'SessionId',
      totalTurns: 'TotalTurns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      messages: { 'type': 'array', 'itemType': KopilotListConversationChatMessagesResponseBodyDataMessages },
      nextBeforeTurnId: 'number',
      scheduledTaskInfo: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskInfo,
      scheduledTaskQuota: KopilotListConversationChatMessagesResponseBodyDataScheduledTaskQuota,
      sessionId: 'string',
      totalTurns: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.scheduledTaskInfo && typeof (this.scheduledTaskInfo as any).validate === 'function') {
      (this.scheduledTaskInfo as any).validate();
    }
    if(this.scheduledTaskQuota && typeof (this.scheduledTaskQuota as any).validate === 'function') {
      (this.scheduledTaskQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationChatMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned when the call is successful.
   */
  data?: KopilotListConversationChatMessagesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F69385B9-2139-5A07-AE64-37C4B6ED308E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: KopilotListConversationChatMessagesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

