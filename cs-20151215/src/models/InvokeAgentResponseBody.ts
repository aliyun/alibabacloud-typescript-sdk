// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAgentResponseBodyOutcomeInterrupts extends $dara.Model {
  /**
   * @example
   * 2026-11-04T00:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-1
   */
  id?: string;
  /**
   * @example
   * 是否执行？
   */
  message?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tool_call_approve
   */
  reason?: string;
  /**
   * @example
   * {"type":"object","properties":{"decision":{"type":"string","enum":["yes","no"]}},"required":["decision"]}
   */
  responseSchema?: { [key: string]: any };
  /**
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
   * @example
   * [{"id":"i-1","reason":"tool_call_approve","toolCallId":"call-1"}]
   */
  interrupts?: InvokeAgentResponseBodyOutcomeInterrupts[];
  /**
   * @remarks
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
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @example
   * done
   */
  content?: string;
  /**
   * @example
   * 你好
   */
  delta?: string;
  /**
   * @example
   * 请求失败
   */
  message?: string;
  /**
   * @example
   * m-1
   */
  messageId?: string;
  /**
   * @example
   * analysis_result
   */
  name?: string;
  /**
   * @example
   * {"type":"success"}
   */
  outcome?: InvokeAgentResponseBodyOutcome;
  /**
   * @example
   * m-1
   */
  parentMessageId?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * r-1
   */
  runId?: string;
  /**
   * @example
   * {"sessionId":"abcdef0123456789abcdef0123456789","requestId":"req-1"}
   */
  snapshot?: any;
  /**
   * @example
   * abcdef0123456789abcdef0123456789
   */
  threadId?: string;
  /**
   * @example
   * call-1
   */
  toolCallId?: string;
  /**
   * @example
   * example_tool
   */
  toolCallName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RUN_STARTED
   */
  type?: string;
  /**
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

