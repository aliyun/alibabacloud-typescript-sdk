// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotSessionMessagesResponseBodyDataMessagesContent extends $dara.Model {
  /**
   * @remarks
   * The readable text content in the event. This field is empty if no readable string is available.
   * 
   * @example
   * Checking
   */
  text?: string;
  /**
   * @remarks
   * The event type, such as USER_MESSAGE, TEXT_MESSAGE_CONTENT, or TOOL_CALL_ARGS. This is not fixed to text.
   * 
   * @example
   * TEXT_MESSAGE_CONTENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotSessionMessagesResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * The human-readable content summary of the event. To restore the complete interactive interface, use the original event in metadata.
   */
  content?: ListCopilotSessionMessagesResponseBodyDataMessagesContent[];
  /**
   * @remarks
   * The time when the historical event record was created, in ISO 8601 format.
   * 
   * @example
   * 2026-09-09T09:00:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The position of the event within the session, used for sorting and deduplication.
   * 
   * @example
   * 12
   */
  eventId?: string;
  /**
   * @remarks
   * Currently, an empty string is returned. This field is not used to determine whether the execution has finished.
   * 
   * @example
   * ""
   */
  finishedAt?: string;
  /**
   * @remarks
   * The ID of the historical event record.
   * 
   * @example
   * record-001
   */
  id?: string;
  /**
   * @remarks
   * The complete original event object. The internal fields retain their original protocol names, without recursive naming conversion or the need for further JSON string parsing.
   * 
   * @example
   * {"type":"TEXT_MESSAGE_CONTENT","messageId":"m001","delta":"Checking."}
   */
  metadata?: any;
  /**
   * @remarks
   * Currently, an empty string is returned. This field is not used to identify the event type.
   * 
   * @example
   * ""
   */
  name?: string;
  /**
   * @remarks
   * The role in the original event. An empty string is returned if the event does not contain a role.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The ID of the associated execution. This field is empty if there is no associated execution.
   * 
   * @example
   * t001
   */
  turnId?: string;
  /**
   * @remarks
   * The token usage per event. This data is not currently returned. To query the cumulative usage of an execution, call GetCopilotSession.
   * 
   * @example
   * null
   */
  usage?: any;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createdAt: 'createdAt',
      eventId: 'eventId',
      finishedAt: 'finishedAt',
      id: 'id',
      metadata: 'metadata',
      name: 'name',
      role: 'role',
      turnId: 'turnId',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListCopilotSessionMessagesResponseBodyDataMessagesContent },
      createdAt: 'string',
      eventId: 'string',
      finishedAt: 'string',
      id: 'string',
      metadata: 'any',
      name: 'string',
      role: 'string',
      turnId: 'string',
      usage: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotSessionMessagesResponseBodyDataSessionScheduledTask extends $dara.Model {
  /**
   * @remarks
   * The ID of this scheduled execution. Different runIds are used for multiple triggers of the same scheduled task.
   * 
   * @example
   * run-example-001
   */
  runId?: string;
  /**
   * @remarks
   * The scheduled trigger time, in ISO 8601 format with time zone. This field is empty if there is no record.
   * 
   * @example
   * 2026-09-09T01:00:00+00:00
   */
  scheduledAt?: string;
  /**
   * @remarks
   * The time when Copilot started processing this schedule, in ISO 8601 format with time zone. This is not the time when the model outputs the first token.
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

export class ListCopilotSessionMessagesResponseBodyDataSession extends $dara.Model {
  /**
   * @remarks
   * The agent identifier in the session summary, which does not represent the current executor. The current executor is subject to activeTurn.agentId.
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
   * The session ID, which is the same as sessionId. We recommend using sessionId to initiate subsequent requests.
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
   * The snapshot information when the scheduled task is triggered. This field is returned only for scheduled task sessions and is empty for sessions from other sources. Subsequent renaming or deletion of the task does not change the historical snapshot.
   */
  scheduledTask?: ListCopilotSessionMessagesResponseBodyDataSessionScheduledTask;
  /**
   * @remarks
   * The session ID. Use this value when you send follow-up questions, query history, or delete the session.
   * 
   * @example
   * s001
   */
  sessionId?: string;
  /**
   * @remarks
   * The source from which the session was created. Valid values:
   * - openapi: Active call.
   * - cron: Scheduled task.
   * - im_dingtalk: DingTalk.
   * - im_feishu: Lark.
   * - alert: Alert.
   * This value is determined by the server and is not changed by follow-up questions.
   * 
   * @example
   * openapi
   */
  sessionType?: string;
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
      agentId: 'agentId',
      createdAt: 'createdAt',
      id: 'id',
      name: 'name',
      scheduledTask: 'scheduledTask',
      sessionId: 'sessionId',
      sessionType: 'sessionType',
      updatedAt: 'updatedAt',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      scheduledTask: ListCopilotSessionMessagesResponseBodyDataSessionScheduledTask,
      sessionId: 'string',
      sessionType: 'string',
      updatedAt: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.scheduledTask && typeof (this.scheduledTask as any).validate === 'function') {
      (this.scheduledTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotSessionMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cursor of the last event on the current page, returned as a decimal string. The value is 0 for an empty page. This is not the pagination nextToken and does not indicate that a round of execution has finished.
   * 
   * @example
   * 12
   */
  cursor?: string;
  /**
   * @remarks
   * Indicates whether there are subsequent historical events. Valid values:
   * - true: Yes.
   * - false: No.
   */
  hasMore?: boolean;
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
   * The history event records on the current page, sorted in ascending order by eventId. A record does not necessarily represent a complete chat message and may be a chunk of text or a tool calling (invoke) event.
   */
  messages?: ListCopilotSessionMessagesResponseBodyDataMessages[];
  /**
   * @remarks
   * The token for the next page. Pass this value back as is in the next request. An empty value indicates that there is no next page.
   * 
   * @example
   * 50
   */
  nextToken?: string;
  /**
   * @remarks
   * The session summary of the current user. This object does not contain the active execution summary. To query the execution status, call GetCopilotSession.
   */
  session?: ListCopilotSessionMessagesResponseBodyDataSession;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      hasMore: 'hasMore',
      maxResults: 'maxResults',
      messages: 'messages',
      nextToken: 'nextToken',
      session: 'session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      hasMore: 'boolean',
      maxResults: 'number',
      messages: { 'type': 'array', 'itemType': ListCopilotSessionMessagesResponseBodyDataMessages },
      nextToken: 'string',
      session: ListCopilotSessionMessagesResponseBodyDataSession,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.session && typeof (this.session as any).validate === 'function') {
      (this.session as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotSessionMessagesResponseBody extends $dara.Model {
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
  data?: ListCopilotSessionMessagesResponseBodyData;
  /**
   * @remarks
   * A field retained for historical compatibility, which may be omitted. Use data.maxResults instead.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message. If the code is Success, this field is empty. Otherwise, this field contains the error message of the request.
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
      data: ListCopilotSessionMessagesResponseBodyData,
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

