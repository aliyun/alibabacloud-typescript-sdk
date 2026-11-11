// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCopilotSessionResponseBodyDataActiveTurn extends $dara.Model {
  /**
   * @remarks
   * The creation time of the current execution turn. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The end time of the execution. The time is in the ISO 8601 format. This field is empty if the execution has not ended.
   * 
   * @example
   * 2026-09-09T09:03:00+08:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The cumulative number of input tokens for the current turn. This is not the incremental usage for the current event.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The cumulative number of output tokens for the current turn.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the form that is currently waiting for user input. It is used when submitting user input. This field is empty when no form is pending.
   * 
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @remarks
   * The execution status. Valid values: running (in progress), waiting_input (waiting for user input), cancelling (cancelling), completed (completed), failed (failed), cancelled (cancelled), and outcome_unknown (outcome unknown, may still occupy the session, and should not be automatically rerun).
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the current execution turn. It is used to submit user input, reconnect, or stop the execution.
   * 
   * @example
   * t001
   */
  turnId?: string;
  /**
   * @remarks
   * The last update time of the current execution turn. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:02:00+08:00
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

export class UpdateCopilotSessionResponseBodyDataLastTurn extends $dara.Model {
  /**
   * @remarks
   * The creation time of the current execution turn. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The end time of the execution. The time is in the ISO 8601 format. This field is empty if the execution has not ended.
   * 
   * @example
   * 2026-09-09T09:03:00+08:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The cumulative number of input tokens for the current turn. This is not the incremental usage for the current event.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The cumulative number of output tokens for the current turn.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the form that is currently waiting for user input. It is used when submitting user input. This field is empty when no form is pending.
   * 
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @remarks
   * The execution status. Valid values: running (in progress), waiting_input (waiting for user input), cancelling (cancelling), completed (completed), failed (failed), cancelled (cancelled), and outcome_unknown (outcome unknown, may still occupy the session, and should not be automatically rerun).
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the current execution turn. It is used to submit user input, reconnect, or stop the execution.
   * 
   * @example
   * t001
   */
  turnId?: string;
  /**
   * @remarks
   * The last update time of the current execution turn. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:02:00+08:00
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

export class UpdateCopilotSessionResponseBodyDataScheduledTask extends $dara.Model {
  /**
   * @remarks
   * The ID of this scheduled execution. Multiple triggers of the same scheduled task use different runIds.
   * 
   * @example
   * run-example-001
   */
  runId?: string;
  /**
   * @remarks
   * The scheduled trigger time. The time is in the ISO 8601 format with a time zone. This field is empty when no record exists.
   * 
   * @example
   * 2026-09-09T01:00:00+00:00
   */
  scheduledAt?: string;
  /**
   * @remarks
   * The time when Copilot starts processing this schedule. The time is in the ISO 8601 format with a time zone. This is not the time when the model outputs the first token.
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
   * The name of the scheduled task at the time of this trigger.
   * 
   * @example
   * Daily inspection
   */
  taskName?: string;
  /**
   * @remarks
   * The scheduling time zone of the scheduled task, such as Asia/Shanghai.
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

export class UpdateCopilotSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summary of the execution that currently occupies the session. This field is empty when no active execution is in progress. An execution with an unknown outcome may still occupy the session.
   */
  activeTurn?: UpdateCopilotSessionResponseBodyDataActiveTurn;
  /**
   * @remarks
   * The creation time of the session. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The latest persisted event cursor for the current session, returned as a decimal string. The value is 0 when no events exist. This value does not represent the position consumed by the client.
   * 
   * @example
   * 12
   */
  cursor?: string;
  /**
   * @remarks
   * The summary of the most recent execution. This field is empty if no execution has ever occurred. If the most recent execution has not ended, this field may point to the same execution as activeTurn.
   */
  lastTurn?: UpdateCopilotSessionResponseBodyDataLastTurn;
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
   * The snapshot information when the scheduled task is triggered. This is returned only for scheduled task sessions and is empty for sessions from other sources. Subsequent renaming or deletion of the task does not change the historical snapshot.
   */
  scheduledTask?: UpdateCopilotSessionResponseBodyDataScheduledTask;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * s001
   */
  sessionId?: string;
  /**
   * @remarks
   * The source of the session creation. Valid values: openapi (proactive call), cron (scheduled task), im_dingtalk (DingTalk), im_feishu (Lark), and alert (alert). This is determined by the server, and subsequent follow-up questions do not change the source.
   * 
   * @example
   * openapi
   */
  sessionType?: string;
  /**
   * @remarks
   * The session status. Valid values: active (not archived) and archived (archived). This field does not indicate whether the execution has ended.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the session. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:02:00+08:00
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
      activeTurn: UpdateCopilotSessionResponseBodyDataActiveTurn,
      createdAt: 'string',
      cursor: 'string',
      lastTurn: UpdateCopilotSessionResponseBodyDataLastTurn,
      name: 'string',
      scheduledTask: UpdateCopilotSessionResponseBodyDataScheduledTask,
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

export class UpdateCopilotSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. Success indicates that the request is successful. Other values indicate that the request failed.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdateCopilotSessionResponseBodyData;
  /**
   * @remarks
   * The error message. If the code is Success, this field is empty. Otherwise, this field contains the request error message.
   * 
   * @example
   * Service temporarily unavailable
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It can be used for end-to-end diagnostics.
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
      data: UpdateCopilotSessionResponseBodyData,
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

