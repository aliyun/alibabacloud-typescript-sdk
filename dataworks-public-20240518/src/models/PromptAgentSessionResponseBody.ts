// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionResponseBodyMetaEventCursor extends $dara.Model {
  /**
   * @remarks
   * The event stream epoch.
   * 
   * @example
   * f7c6a27a-09f6-4bc9-b924-0c360351373c
   */
  eventEpoch?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 4
   */
  eventId?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * session_update
   */
  eventType?: string;
  /**
   * @remarks
   * The prompt execution ID.
   * 
   * @example
   * p1
   */
  promptId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 79fea58a-45f5-45c6-9169-c59beac0d5b6
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventEpoch: 'EventEpoch',
      eventId: 'EventId',
      eventType: 'EventType',
      promptId: 'PromptId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventEpoch: 'string',
      eventId: 'string',
      eventType: 'string',
      promptId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionResponseBodyMeta extends $dara.Model {
  /**
   * @remarks
   * The event continuation cursor.
   */
  eventCursor?: PromptAgentSessionResponseBodyMetaEventCursor;
  static names(): { [key: string]: string } {
    return {
      eventCursor: 'EventCursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCursor: PromptAgentSessionResponseBodyMetaEventCursor,
    };
  }

  validate() {
    if(this.eventCursor && typeof (this.eventCursor as any).validate === 'function') {
      (this.eventCursor as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromptAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message in the SSE frame. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * {"code": 400, "errorCode": "0x50000000001", "message": "not exist session", "data": null}
   */
  error?: any;
  /**
   * @remarks
   * The ID passed by the requester, which is echoed back as is.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Fixed to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * The event continuation metadata.
   */
  meta?: PromptAgentSessionResponseBodyMeta;
  /**
   * @remarks
   * The SSE method. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * session/update
   */
  method?: string;
  /**
   * @remarks
   * The SSE parameters. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * {"sessionId":"af4f5ef8-e8f5-481c-ad1f-94886c6c0aed","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"hello world"}}}
   */
  params?: any;
  /**
   * @remarks
   * The request ID of this API invocation, which is used to troubleshoot invocation issues.
   * 
   * @example
   * D5D70885-7CC7-594A-80C7-2EF1B00FFB4B
   */
  requestId?: string;
  /**
   * @remarks
   * The result set of the SSE frame. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * {"stopReason":"end_turn"}
   */
  result?: any;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1747447032
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'Error',
      id: 'Id',
      jsonrpc: 'Jsonrpc',
      meta: 'Meta',
      method: 'Method',
      params: 'Params',
      requestId: 'RequestId',
      result: 'Result',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'any',
      id: 'string',
      jsonrpc: 'string',
      meta: PromptAgentSessionResponseBodyMeta,
      method: 'string',
      params: 'any',
      requestId: 'string',
      result: 'any',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

