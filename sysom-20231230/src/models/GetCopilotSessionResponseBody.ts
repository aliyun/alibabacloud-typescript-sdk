// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotSessionResponseBodyDataActiveTurn extends $dara.Model {
  /**
   * @example
   * 2026-09-09T01:01:00Z
   */
  createdAt?: string;
  /**
   * @example
   * 2026-09-09T01:03:00Z
   */
  finishedAt?: string;
  /**
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * e499819f351242dba59ab8af31bc8b0f
   */
  turnId?: string;
  /**
   * @example
   * 2026-09-09T01:02:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      finishedAt: 'finishedAt',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      pendingInputId: 'pendingInputId',
      status: 'status',
      turnId: 'turnId',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      finishedAt: 'string',
      inputTokens: 'number',
      outputTokens: 'number',
      pendingInputId: 'string',
      status: 'string',
      turnId: 'string',
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

export class GetCopilotSessionResponseBodyDataLastTurn extends $dara.Model {
  /**
   * @example
   * 2026-09-09T01:01:00Z
   */
  createdAt?: string;
  /**
   * @example
   * 2026-09-09T01:03:00Z
   */
  finishedAt?: string;
  /**
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * e499819f351242dba59ab8af31bc8b0f
   */
  turnId?: string;
  /**
   * @example
   * 2026-09-09T01:02:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      finishedAt: 'finishedAt',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      pendingInputId: 'pendingInputId',
      status: 'status',
      turnId: 'turnId',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      finishedAt: 'string',
      inputTokens: 'number',
      outputTokens: 'number',
      pendingInputId: 'string',
      status: 'string',
      turnId: 'string',
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

export class GetCopilotSessionResponseBodyDataScheduledTask extends $dara.Model {
  /**
   * @remarks
   * 本次定时执行的 Run ID
   * 
   * @example
   * run-example-001
   */
  runId?: string;
  /**
   * @remarks
   * 计划触发时间，ISO 8601 含时区偏移
   * 
   * @example
   * 2026-09-09T01:00:00+00:00
   */
  scheduledAt?: string;
  /**
   * @remarks
   * Copilot 开始处理时间，ISO 8601 含时区偏移
   * 
   * @example
   * 2026-09-09T01:00:03+00:00
   */
  startedAt?: string;
  /**
   * @remarks
   * 任务 ID；任务删除后仍保留
   * 
   * @example
   * 42
   */
  taskId?: number;
  /**
   * @remarks
   * 触发时的任务名称快照
   * 
   * @example
   * 每日巡检
   */
  taskName?: string;
  /**
   * @remarks
   * 任务的 cron 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'runId',
      scheduledAt: 'scheduledAt',
      startedAt: 'startedAt',
      taskId: 'taskId',
      taskName: 'taskName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      scheduledAt: 'string',
      startedAt: 'string',
      taskId: 'number',
      taskName: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotSessionResponseBodyData extends $dara.Model {
  activeTurn?: GetCopilotSessionResponseBodyDataActiveTurn;
  /**
   * @example
   * 2026-09-09T01:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 十进制事件序号字符串，范围 0..9223372036854775807；避免 JavaScript 精度丢失
   * 
   * @example
   * 12
   */
  cursor?: string;
  lastTurn?: GetCopilotSessionResponseBodyDataLastTurn;
  /**
   * @example
   * 排查 CPU 负载
   */
  name?: string;
  /**
   * @remarks
   * 定时任务触发快照；非定时会话为空
   */
  scheduledTask?: GetCopilotSessionResponseBodyDataScheduledTask;
  /**
   * @example
   * c356bc310e4345c3a602a2912322ad21
   */
  sessionId?: string;
  /**
   * @remarks
   * 会话初始来源：chat、scheduled_task、alert；后续追问不改变来源
   * 
   * @example
   * openapi
   */
  sessionType?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * 2026-09-09T01:02:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      activeTurn: 'activeTurn',
      createdAt: 'createdAt',
      cursor: 'cursor',
      lastTurn: 'lastTurn',
      name: 'name',
      scheduledTask: 'scheduledTask',
      sessionId: 'sessionId',
      sessionType: 'sessionType',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTurn: GetCopilotSessionResponseBodyDataActiveTurn,
      createdAt: 'string',
      cursor: 'string',
      lastTurn: GetCopilotSessionResponseBodyDataLastTurn,
      name: 'string',
      scheduledTask: GetCopilotSessionResponseBodyDataScheduledTask,
      sessionId: 'string',
      sessionType: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.activeTurn && typeof (this.activeTurn as any).validate === 'function') {
      (this.activeTurn as any).validate();
    }
    if(this.lastTurn && typeof (this.lastTurn as any).validate === 'function') {
      (this.lastTurn as any).validate();
    }
    if(this.scheduledTask && typeof (this.scheduledTask as any).validate === 'function') {
      (this.scheduledTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotSessionResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetCopilotSessionResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 5BC79EF5-798B-5499-9683-4E14EBBBF712
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCopilotSessionResponseBodyData,
      message: 'string',
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

