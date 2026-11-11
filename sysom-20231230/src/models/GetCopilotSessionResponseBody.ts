// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotSessionResponseBodyDataActiveTurn extends $dara.Model {
  /**
   * @remarks
   * The time when the execution turn was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T01:01:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the execution turn ended, in ISO 8601 format. This field is empty if the execution has not ended.
   * 
   * @example
   * 2026-09-09T01:03:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The cumulative number of input tokens in this execution turn.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The cumulative number of output tokens in this execution turn.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the form that is waiting for user input. It is used when you submit user input. This field is empty if no form needs to be filled out.
   * 
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the execution turn. It is used when you submit user input, reconnect, or stop the execution.
   * 
   * @example
   * e499819f351242dba59ab8af31bc8b0f
   */
  turnId?: string;
  /**
   * @remarks
   * The time when the execution turn was last updated, in ISO 8601 format.
   * 
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
   * @remarks
   * The time when the execution turn was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T01:01:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the execution turn ended, in ISO 8601 format. This field is empty if the execution has not ended.
   * 
   * @example
   * 2026-09-09T01:03:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The cumulative number of input tokens in this execution turn.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The cumulative number of output tokens in this execution turn.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the form that is waiting for user input. It is used when you submit user input. This field is empty if no form needs to be filled out.
   * 
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the execution turn. It is used when you submit user input, reconnect, or stop the execution.
   * 
   * @example
   * e499819f351242dba59ab8af31bc8b0f
   */
  turnId?: string;
  /**
   * @remarks
   * The time when the execution turn was last updated, in ISO 8601 format.
   * 
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
   * The ID of this scheduled execution. It is used to associate with the scheduled execution record. Multiple triggers of the same scheduled task use different runIds.
   * 
   * @example
   * run-example-001
   */
  runId?: string;
  /**
   * @remarks
   * The scheduled trigger time, in ISO 8601 format with a time zone. This field is empty if no record exists.
   * 
   * @example
   * 2026-09-09T01:00:00+00:00
   */
  scheduledAt?: string;
  /**
   * @remarks
   * The time when the processing of this schedule started, in ISO 8601 format with a time zone.
   * 
   * @example
   * 2026-09-09T01:00:03+00:00
   */
  startedAt?: string;
  /**
   * @remarks
   * The ID of the associated scheduled task.
   * 
   * @example
   * 42
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the scheduled task when this trigger occurred. Subsequent changes to the task name do not change this snapshot.
   * 
   * @example
   * Daily inspection
   */
  taskName?: string;
  /**
   * @remarks
   * The scheduling time zone of the scheduled task.
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
  /**
   * @remarks
   * The execution information of the turn that currently occupies the session.
   */
  activeTurn?: GetCopilotSessionResponseBodyDataActiveTurn;
  /**
   * @remarks
   * The time when the session was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T01:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The cursor of the latest persisted event in the current session.
   * 
   * @example
   * 12
   */
  cursor?: string;
  /**
   * @remarks
   * The information about the most recent execution turn.
   */
  lastTurn?: GetCopilotSessionResponseBodyDataLastTurn;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Troubleshoot CPU load
   */
  name?: string;
  /**
   * @remarks
   * The snapshot information captured when the scheduled task was triggered.
   */
  scheduledTask?: GetCopilotSessionResponseBodyDataScheduledTask;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * c356bc310e4345c3a602a2912322ad21
   */
  sessionId?: string;
  /**
   * @remarks
   * The session source. Valid values:
   * - openapi: API call.
   * - cron: Scheduled task.
   * - im_dingtalk: DingTalk.
   * - im_feishu: Lark.
   * - alert: Alert.
   * 
   * @example
   * openapi
   */
  sessionType?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * - active: The session is not archived.
   * - archived: The session is archived.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The time when the session was last updated, in ISO 8601 format.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetCopilotSessionResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use it for end-to-end diagnostics.
   * 
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

