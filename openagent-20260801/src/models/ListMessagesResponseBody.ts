// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsDataApiCalls extends $dara.Model {
  /**
   * @remarks
   * The name of the API action.
   * 
   * @example
   * ExampleAction
   */
  action?: string;
  /**
   * @remarks
   * The description of the operation pending approval.
   * 
   * @example
   * Execute changes on the sample resource
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsData extends $dara.Model {
  /**
   * @remarks
   * The list of API operations that require approval.
   */
  apiCalls?: ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsDataApiCalls[];
  /**
   * @remarks
   * The associated approval ID.
   * 
   * @example
   * approval_example_001
   */
  approvalId?: string;
  /**
   * @remarks
   * The URL of the approval page. The example URL cannot be used for actual approval.
   * 
   * @example
   * https://example.com/approvals/approval_example_001
   */
  approvalUrl?: string;
  /**
   * @remarks
   * Specifies whether the approval can be canceled.
   * 
   * @example
   * true
   */
  cancellable?: boolean;
  /**
   * @remarks
   * The digest identifier of the change pending approval.
   * 
   * @example
   * example-change-digest
   */
  changeDigest?: string;
  /**
   * @remarks
   * The title of the approval item.
   * 
   * @example
   * Sample change approval
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      apiCalls: 'apiCalls',
      approvalId: 'approvalId',
      approvalUrl: 'approvalUrl',
      cancellable: 'cancellable',
      changeDigest: 'changeDigest',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCalls: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsDataApiCalls },
      approvalId: 'string',
      approvalUrl: 'string',
      cancellable: 'boolean',
      changeDigest: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiCalls)) {
      $dara.Model.validateArray(this.apiCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterrupts extends $dara.Model {
  /**
   * @remarks
   * The supplementary business data for the interrupt.
   */
  data?: ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsData;
  /**
   * @remarks
   * The expiration time of the interrupt, in RFC 3339 format.
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The interrupt ID.
   * 
   * @example
   * interrupt_example_001
   */
  id?: string;
  /**
   * @remarks
   * The interrupt prompt displayed to the user.
   * 
   * @example
   * Specify the target region
   */
  message?: string;
  /**
   * @remarks
   * The extended metadata of the interrupt.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The reason for the interrupt. Valid values: `tool_call` (tool invocation requires processing), `input_required` (user input is required), `confirmation` (confirmation is required), and `out_of_band_approval` (waiting for out-of-band approval).
   * 
   * @example
   * input_required
   */
  reason?: string;
  /**
   * @remarks
   * The JSON schema that the resume result payload must follow.
   * 
   * @example
   * {"type":"object","properties":{"region":{"type":"string"}},"required":["region"]}
   */
  responseSchema?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the tool invocation associated with the interrupt.
   * 
   * @example
   * tool_call_example_001
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
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
      data: ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterruptsData,
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
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
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

export class ListMessagesResponseBodyDataTimelineMessageInterruptOutcome extends $dara.Model {
  /**
   * @remarks
   * The list of historical interrupts.
   */
  interrupts?: ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterrupts[];
  /**
   * @remarks
   * The type of the interrupt result. The value is fixed to `interrupt`.
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
      interrupts: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataTimelineMessageInterruptOutcomeInterrupts },
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

export class ListMessagesResponseBodyDataTimelineMessageResumeInputResume extends $dara.Model {
  /**
   * @remarks
   * The ID of the processed interrupt.
   * 
   * @example
   * interrupt_example_001
   */
  interruptId?: string;
  /**
   * @remarks
   * The processing result for the corresponding interrupt, which must comply with the responseSchema of the interrupt.
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  payload?: any;
  /**
   * @remarks
   * The response method for the current interrupt. Valid values: `resolved` (the answer, confirmation, or tool result required by the interrupt has been submitted, including the `payload`) and `cancelled` (the interrupt has been canceled, excluding the `payload`).
   * 
   * @example
   * resolved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      interruptId: 'interruptId',
      payload: 'payload',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interruptId: 'string',
      payload: 'any',
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

export class ListMessagesResponseBodyDataTimelineMessageResumeInput extends $dara.Model {
  /**
   * @remarks
   * The time when the interrupt processing was completed, in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:01:00Z
   */
  resolvedAt?: string;
  /**
   * @remarks
   * The submitted processing results for each interrupt.
   */
  resume?: ListMessagesResponseBodyDataTimelineMessageResumeInputResume[];
  /**
   * @remarks
   * The ID of the original run that was resumed.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  /**
   * @remarks
   * The source of the resume request. Valid values: `USER` (submitted by a user) and `INTERNAL` (submitted by an internal process).
   * 
   * @example
   * USER
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      resolvedAt: 'resolvedAt',
      resume: 'resume',
      runId: 'runId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resolvedAt: 'string',
      resume: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataTimelineMessageResumeInputResume },
      runId: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resume)) {
      $dara.Model.validateArray(this.resume);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimelineMessageToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * The tool parameters in the form of a JSON string.
   * 
   * @example
   * {"keyword":"example"}
   */
  arguments?: string;
  /**
   * @remarks
   * The name of the function or tool.
   * 
   * @example
   * lookup_example
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'arguments',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimelineMessageToolCalls extends $dara.Model {
  /**
   * @remarks
   * The encrypted content of the tool invocation. The example is only a placeholder value.
   * 
   * @example
   * EXAMPLE_ENCRYPTED_VALUE
   */
  encryptedValue?: string;
  /**
   * @remarks
   * The information about the function to be executed.
   */
  function?: ListMessagesResponseBodyDataTimelineMessageToolCallsFunction;
  /**
   * @remarks
   * The tool invocation ID.
   * 
   * @example
   * tool_call_example_001
   */
  id?: string;
  /**
   * @remarks
   * The extended metadata of the tool invocation.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The type of the tool invocation. The value is fixed to `function`.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedValue: 'encryptedValue',
      function: 'function',
      id: 'id',
      metadata: 'metadata',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedValue: 'string',
      function: ListMessagesResponseBodyDataTimelineMessageToolCallsFunction,
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimelineMessage extends $dara.Model {
  /**
   * @remarks
   * The type identifier of the activity message.
   * 
   * @example
   * example_activity
   */
  activityType?: string;
  /**
   * @remarks
   * The message content. The structure is determined by the message type.
   * 
   * @example
   * Query the status of the sample resource
   */
  content?: any;
  /**
   * @remarks
   * The encrypted content. The example is an invalid placeholder value and does not contain real ciphertext.
   * 
   * @example
   * EXAMPLE_ENCRYPTED_VALUE
   */
  encryptedValue?: string;
  /**
   * @remarks
   * The error description when tool execution fails.
   * 
   * @example
   * Sample tool execution failure
   */
  error?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message_example_001
   */
  id?: string;
  /**
   * @remarks
   * The result information of historical interrupts.
   */
  interruptOutcome?: ListMessagesResponseBodyDataTimelineMessageInterruptOutcome;
  /**
   * @remarks
   * The extended metadata of the message.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name of the message sender.
   * 
   * @example
   * example-user
   */
  name?: string;
  /**
   * @remarks
   * The resume input corresponding to the historical interrupt.
   */
  resumeInput?: ListMessagesResponseBodyDataTimelineMessageResumeInput;
  /**
   * @remarks
   * The role of the message. Valid values: `user` (user message), `assistant` (assistant message), `tool` (tool result), `activity` (activity message), `reasoning` (reasoning message), and `interrupt` (interrupt record).
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The ID of the tool invocation associated with the tool result.
   * 
   * @example
   * tool_call_example_001
   */
  toolCallId?: string;
  /**
   * @remarks
   * The list of tool invocations initiated by the agent.
   */
  toolCalls?: ListMessagesResponseBodyDataTimelineMessageToolCalls[];
  static names(): { [key: string]: string } {
    return {
      activityType: 'activityType',
      content: 'content',
      encryptedValue: 'encryptedValue',
      error: 'error',
      id: 'id',
      interruptOutcome: 'interruptOutcome',
      metadata: 'metadata',
      name: 'name',
      resumeInput: 'resumeInput',
      role: 'role',
      toolCallId: 'toolCallId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      content: 'any',
      encryptedValue: 'string',
      error: 'string',
      id: 'string',
      interruptOutcome: ListMessagesResponseBodyDataTimelineMessageInterruptOutcome,
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      resumeInput: ListMessagesResponseBodyDataTimelineMessageResumeInput,
      role: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataTimelineMessageToolCalls },
    };
  }

  validate() {
    if(this.interruptOutcome && typeof (this.interruptOutcome as any).validate === 'function') {
      (this.interruptOutcome as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.resumeInput && typeof (this.resumeInput as any).validate === 'function') {
      (this.resumeInput as any).validate();
    }
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataTimeline extends $dara.Model {
  /**
   * @remarks
   * The message object. Different message types are distinguished by role, and each type uses the corresponding fields.
   */
  message?: ListMessagesResponseBodyDataTimelineMessage;
  /**
   * @remarks
   * The ID of the run to which the message belongs.
   * 
   * @example
   * run_example_001
   */
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      runId: 'runId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: ListMessagesResponseBodyDataTimelineMessage,
      runId: 'string',
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token for the next page. A value of null indicates that no more data is available.
   * 
   * @example
   * example-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the session to which the messages belong.
   * 
   * @example
   * session_example_001
   */
  sessionId?: string;
  /**
   * @remarks
   * The message records returned in a timeline.
   */
  timeline?: ListMessagesResponseBodyDataTimeline[];
  /**
   * @remarks
   * The number of timeline records on the current page, which is equal to the length of the timeline array.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      sessionId: 'sessionId',
      timeline: 'timeline',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      sessionId: 'string',
      timeline: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataTimeline },
      total: 'number',
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

export class ListMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message history and pagination information.
   */
  data?: ListMessagesResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMessagesResponseBodyData,
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

