// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskConversationRecordsResponseBodyTasksConversations extends $dara.Model {
  /**
   * @remarks
   * The actual group topic ID, which can be associated in queryWorkItemFeed. This ID cannot be used as a Workflow workItemId.
   * 
   * @example
   * exampleConversationId
   */
  conversationId?: string;
  /**
   * @remarks
   * The name of the schedule location.
   * 
   * @example
   * Daily sales weekly report
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether unread messages exist.
   * 
   * @example
   * false
   */
  hasUnread?: boolean;
  /**
   * @remarks
   * The ID of the latest execution record.
   * 
   * @example
   * exampleExecutionId
   */
  latestExecutionId?: string;
  /**
   * @remarks
   * The latest execution status.
   * 
   * @example
   * success
   */
  latestStatus?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-11-16T09:30:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'conversationId',
      displayName: 'displayName',
      hasUnread: 'hasUnread',
      latestExecutionId: 'latestExecutionId',
      latestStatus: 'latestStatus',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      displayName: 'string',
      hasUnread: 'boolean',
      latestExecutionId: 'string',
      latestStatus: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskConversationRecordsResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * Pre-filters by a single task. If you do not specify this parameter, the execution records of all visible tasks are returned.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The list of sessions.
   * 
   * @example
   * []
   */
  conversations?: GetScheduledTaskConversationRecordsResponseBodyTasksConversations[];
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
   * The execution model tier. Valid values: flagship (Flagship), standard (Standard), and quick (Lightweight).
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
   * - Manual: Manual execution.
   * - Cron: Scheduled trigger.
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      conversations: 'conversations',
      cronExpression: 'cronExpression',
      description: 'description',
      isOpen: 'isOpen',
      model: 'model',
      name: 'name',
      taskId: 'taskId',
      timezone: 'timezone',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      conversations: { 'type': 'array', 'itemType': GetScheduledTaskConversationRecordsResponseBodyTasksConversations },
      cronExpression: 'string',
      description: 'string',
      isOpen: 'boolean',
      model: 'string',
      name: 'string',
      taskId: 'string',
      timezone: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversations)) {
      $dara.Model.validateArray(this.conversations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledTaskConversationRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether a next page exists.
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The collaboration group ID, such as cg_101. If you specify this parameter, the data is returned by group dimension, and the caller must be a valid group member. If you do not specify this parameter, the data is returned by personal dimension, excluding group tasks.
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
   * The list of tasks.
   * 
   * @example
   * []
   */
  tasks?: GetScheduledTaskConversationRecordsResponseBodyTasks[];
  /**
   * @remarks
   * The total number of Logtail pipeline configurations in the current project.
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
      tasks: { 'type': 'array', 'itemType': GetScheduledTaskConversationRecordsResponseBodyTasks },
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

