// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotSessionsResponseBodyDataSessionsActiveTurn extends $dara.Model {
  /**
   * @remarks
   * The Agent ID bound to the current execution round.
   * 
   * @example
   * sysagent
   */
  agentId?: string;
  /**
   * @remarks
   * The time when the current execution round was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The time when the execution ended, in ISO 8601 format. This field is empty if the execution has not ended.
   * 
   * @example
   * 2026-09-09T09:03:00+08:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The cumulative number of input tokens in the current round, which is not the incremental usage of the current event.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The cumulative number of output tokens in the current round.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The ID of the form that is currently waiting for the user to fill out. This field is used when user input is submitted. This field is empty when no form needs to be filled out.
   * 
   * @example
   * iso-boot-validation
   */
  pendingInputId?: string;
  /**
   * @remarks
   * The execution status. Valid values:
   * - running: The execution is in progress.
   * - waiting_input: Waiting for user input.
   * - cancelling: The execution is being canceled.
   * - completed: The execution is completed.
   * - failed: The execution failed.
   * - cancelled: The execution is canceled.
   * - outcome_unknown: The result is unknown, and the session may still be occupied. The execution should not be automatically rerun.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the current execution round, which is used to submit user input, reconnect, or stop the execution.
   * 
   * @example
   * t001
   */
  turnId?: string;
  /**
   * @remarks
   * The time when the current execution round was last updated, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:02:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
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
      agentId: 'string',
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

export class ListCopilotSessionsResponseBodyDataSessionsScheduledTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the current scheduled execution. Different runIds are used for multiple triggers of the same scheduled task.
   * 
   * @example
   * run-example-001
   */
  runId?: string;
  /**
   * @remarks
   * The scheduled trigger time, in ISO 8601 format with time zone. This field is empty when no record exists.
   * 
   * @example
   * 2026-09-09T01:00:00+00:00
   */
  scheduledAt?: string;
  /**
   * @remarks
   * The time when Copilot started processing the current schedule, in ISO 8601 format with time zone. This is not the time when the model outputs the first token.
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

export class ListCopilotSessionsResponseBodyDataSessions extends $dara.Model {
  /**
   * @remarks
   * The information about the execution that currently occupies the session.
   */
  activeTurn?: ListCopilotSessionsResponseBodyDataSessionsActiveTurn;
  /**
   * @remarks
   * The ID of the execution that currently occupies the session. This field is empty when no active execution exists.
   * 
   * @example
   * t001
   */
  activeTurnId?: string;
  /**
   * @remarks
   * The Agent tag of the session. The current executor is subject to activeTurn.agentId.
   * 
   * @example
   * sysagent
   */
  agentId?: string;
  /**
   * @remarks
   * The time when the session was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * s001
   */
  id?: string;
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
   * The snapshot information when the scheduled task is triggered. This field is returned only for scheduled task sessions and is empty for sessions from other sources.
   */
  scheduledTask?: ListCopilotSessionsResponseBodyDataSessionsScheduledTask;
  /**
   * @remarks
   * The session ID. Use this value when you send questions, query history, and delete sessions later.
   * 
   * @example
   * s001
   */
  sessionId?: string;
  /**
   * @remarks
   * The source from which the session was created. Valid values:
   * - openapi: API call.
   * - cron: Scheduled task.
   * - im_dingtalk: DingTalk.
   * - im_feishu: Lark.
   * - alert: Alert.
   * This value is determined by the server and is not changed by subsequent follow-up questions.
   * 
   * @example
   * openapi
   */
  sessionType?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * - active: Not archived.
   * - archived: Archived.
   * This field does not indicate whether the execution has ended.
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
   * 2026-09-09T09:02:00+08:00
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the user to whom the session belongs. This value is determined by the server based on the caller identity and is not used as a parameter for the client to specify the identity.
   * 
   * @example
   * 10001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activeTurn: 'activeTurn',
      activeTurnId: 'activeTurnId',
      agentId: 'agentId',
      createdAt: 'createdAt',
      id: 'id',
      name: 'name',
      scheduledTask: 'scheduledTask',
      sessionId: 'sessionId',
      sessionType: 'sessionType',
      status: 'status',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTurn: ListCopilotSessionsResponseBodyDataSessionsActiveTurn,
      activeTurnId: 'string',
      agentId: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      scheduledTask: ListCopilotSessionsResponseBodyDataSessionsScheduledTask,
      sessionId: 'string',
      sessionType: 'string',
      status: 'string',
      updatedAt: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.activeTurn && typeof (this.activeTurn as any).validate === 'function') {
      (this.activeTurn as any).validate();
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

export class ListCopilotSessionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page size used for the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. Pass this value back as is in the next request. An empty value indicates that no more pages are available.
   * 
   * @example
   * 50
   */
  nextToken?: string;
  /**
   * @remarks
   * The session list.
   */
  sessions?: ListCopilotSessionsResponseBodyDataSessions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      sessions: 'sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sessions: { 'type': 'array', 'itemType': ListCopilotSessionsResponseBodyDataSessions },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotSessionsResponseBody extends $dara.Model {
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
  data?: ListCopilotSessionsResponseBodyData;
  /**
   * @remarks
   * The page size used for the current request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message. If code is Success, this field is empty. Otherwise, this field contains the request error message.
   * 
   * @example
   * Service temporarily unavailable
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 5BC79EF5-798B-5499-9683-4E14EBBBF712
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCopilotSessionsResponseBodyData,
      maxResults: 'number',
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

