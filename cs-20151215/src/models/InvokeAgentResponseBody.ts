// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAgentResponseBodyOutcomeInterrupts extends $dara.Model {
  /**
   * @remarks
   * The optional expiration time string of the interrupt. This field is not output for current tool approvals.
   * 
   * @example
   * 2026-11-04T00:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The ID of the interrupt. It is used as resume[].interruptId when resuming the run.
   * 
   * This parameter is required.
   * 
   * @example
   * i-1
   */
  id?: string;
  /**
   * @remarks
   * The approval description or follow-up question text displayed to the user.
   * 
   * @example
   * Proceed with execution?
   */
  message?: string;
  /**
   * @remarks
   * The optional extension information of the interrupt. It cannot replace tool events.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The reason for the interrupt. The value is tool_call_approve for tool approval and ask_human for follow-up questions.
   * 
   * This parameter is required.
   * 
   * @example
   * tool_call_approve
   */
  reason?: string;
  /**
   * @remarks
   * The JSON Schema for the response. Tool approval requires decision=yes/no, and follow-up questions use strings.
   * 
   * @example
   * {"type":"object","properties":{"decision":{"type":"string","enum":["yes","no"]}},"required":["decision"]}
   */
  responseSchema?: { [key: string]: any };
  /**
   * @remarks
   * The optional associated tool invoke ID. It is the same as the toolCallId of the preceding TOOL_CALL_START event.
   * 
   * @example
   * call-1
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'expiresAt',
      id: 'id',
      message: 'message',
      metadata: 'metadata',
      reason: 'reason',
      responseSchema: 'responseSchema',
      toolCallId: 'toolCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      id: 'string',
      message: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reason: 'string',
      responseSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      toolCallId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.responseSchema) {
      $dara.Model.validateMap(this.responseSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAgentResponseBodyOutcome extends $dara.Model {
  /**
   * @remarks
   * The list of interrupts waiting for a response. This field appears only when outcome.type is interrupt and contains at least one item.
   * 
   * @example
   * [{"id":"i-1","reason":"tool_call_approve","toolCallId":"call-1"}]
   */
  interrupts?: InvokeAgentResponseBodyOutcomeInterrupts[];
  /**
   * @remarks
   * The outcome type. A value of success indicates normal completion. A value of interrupt indicates waiting for a response, in which case the interrupts array contains at least one item.
   * 
   * This parameter is required.
   * 
   * @example
   * interrupt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      interrupts: 'interrupts',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interrupts: { 'type': 'array', 'itemType': InvokeAgentResponseBodyOutcomeInterrupts },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interrupts)) {
      $dara.Model.validateArray(this.interrupts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code for the RUN_ERROR event.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The tool output text for the TOOL_CALL_RESULT event. The text may be truncated.
   * 
   * @example
   * done
   */
  content?: string;
  /**
   * @remarks
   * The incremental fragment of text, reasoning, or tool parameters. Fragments with the same ID are concatenated in order.
   * 
   * @example
   * Hello
   */
  delta?: string;
  /**
   * @remarks
   * The error description for the RUN_ERROR event.
   * 
   * @example
   * Request failed
   */
  message?: string;
  /**
   * @remarks
   * The ID of the message to which the text, reasoning, or tool result belongs.
   * 
   * @example
   * m-1
   */
  messageId?: string;
  /**
   * @remarks
   * The name of the CUSTOM extension event, such as analysis_result.
   * 
   * @example
   * analysis_result
   */
  name?: string;
  /**
   * @remarks
   * The completion reason for the RUN_FINISHED event. A value of success indicates normal completion, and interrupt indicates waiting for a response.
   * 
   * @example
   * {"type":"success"}
   */
  outcome?: InvokeAgentResponseBodyOutcome;
  /**
   * @remarks
   * The optional parent message ID for the TOOL_CALL_START event.
   * 
   * @example
   * m-1
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The role of the message. The role is assistant for text messages and tool for tool results.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The run ID of the current run for RUN_STARTED and RUN_FINISHED events.
   * 
   * @example
   * r-1
   */
  runId?: string;
  /**
   * @remarks
   * The thread snapshot for the STATE_SNAPSHOT event, including sessionId and requestId.
   * 
   * @example
   * {"sessionId":"abcdef0123456789abcdef0123456789","requestId":"req-1"}
   */
  snapshot?: any;
  /**
   * @remarks
   * The thread ID for RUN_STARTED and RUN_FINISHED events. It is consistent with the request and the thread snapshot.
   * 
   * @example
   * abcdef0123456789abcdef0123456789
   */
  threadId?: string;
  /**
   * @remarks
   * The tool invoke ID. It associates TOOL_CALL_START/ARGS/END/RESULT events with approval interrupts.
   * 
   * @example
   * call-1
   */
  toolCallId?: string;
  /**
   * @remarks
   * The name of the tool for the TOOL_CALL_START event.
   * 
   * @example
   * example_tool
   */
  toolCallName?: string;
  /**
   * @remarks
   * The event type of the SSE data object. For the required fields of each event type, see the response description.
   * 
   * This parameter is required.
   * 
   * @example
   * RUN_STARTED
   */
  type?: string;
  /**
   * @remarks
   * The extension value of the CUSTOM event. It can be any JSON object or null.
   * 
   * @example
   * {"reference":null,"actions":[],"messageId":null}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      content: 'content',
      delta: 'delta',
      message: 'message',
      messageId: 'messageId',
      name: 'name',
      outcome: 'outcome',
      parentMessageId: 'parentMessageId',
      role: 'role',
      runId: 'runId',
      snapshot: 'snapshot',
      threadId: 'threadId',
      toolCallId: 'toolCallId',
      toolCallName: 'toolCallName',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      content: 'string',
      delta: 'string',
      message: 'string',
      messageId: 'string',
      name: 'string',
      outcome: InvokeAgentResponseBodyOutcome,
      parentMessageId: 'string',
      role: 'string',
      runId: 'string',
      snapshot: 'any',
      threadId: 'string',
      toolCallId: 'string',
      toolCallName: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(this.outcome && typeof (this.outcome as any).validate === 'function') {
      (this.outcome as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

