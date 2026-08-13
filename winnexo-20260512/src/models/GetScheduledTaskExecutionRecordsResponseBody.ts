// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsResponseBodyTasksTimeline extends $dara.Model {
  /**
   * @remarks
   * 实际执行时间（仅历史记录）
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  actualTime?: string;
  /**
   * @remarks
   * 执行记录展示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 错误信息（仅失败记录）
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * 执行记录 ID（历史记录才有）
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * 执行输出内容（仅历史记录）
   * 
   * @example
   * string_value
   */
  outputContent?: string;
  /**
   * @remarks
   * 计划执行时间 ISO8601
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  scheduledTime?: string;
  /**
   * @remarks
   * 状态：PENDING/RUNNING/SUCCESS/FAILED/SCHEDULED
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
   * Cron 表达式
   * 
   * @example
   * string_value
   */
  cronExpression?: string;
  /**
   * @remarks
   * 任务简述
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 是否公开
   * 
   * @example
   * true
   */
  isOpen?: boolean;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 任务 ID
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  timeline?: GetScheduledTaskExecutionRecordsResponseBodyTasksTimeline[];
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发类型 cron/manual/event
   * 
   * @example
   * string_value
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      description: 'description',
      isOpen: 'isOpen',
      name: 'name',
      taskId: 'taskId',
      timeline: 'timeline',
      timezone: 'timezone',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      description: 'string',
      isOpen: 'boolean',
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
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  tasks?: GetScheduledTaskExecutionRecordsResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': GetScheduledTaskExecutionRecordsResponseBodyTasks },
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

