// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromptAgentSessionResponseBodyMetaEventCursor extends $dara.Model {
  /**
   * @remarks
   * The event stream generation identifier returned when the current prompt is accepted. It is paired with EventId during resumption. Pass this value as is to the EventEpoch query parameter of GetAgentSessionEvents to verify the same event stream.
   * 
   * @example
   * f7c6a27a-09f6-4bc9-b924-0c360351373c
   */
  eventEpoch?: string;
  /**
   * @remarks
   * The integer ID of the current native event, returned as a decimal string. The client saves it after fully processing the event, and passes this value as the Last-Event-Id HTTP header of GetAgentSessionEvents during resumption to continue receiving subsequent events.
   * 
   * @example
   * 4
   */
  eventId?: string;
  /**
   * @remarks
   * The type of the current native event, obtained from the type field of the native event. The examples do not constitute a fixed enumeration.
   * 
   * @example
   * session_update
   */
  eventType?: string;
  /**
   * @remarks
   * The execution identifier returned when the current prompt is accepted. It is used to associate the current execution with its events.
   * 
   * @example
   * p1
   */
  promptId?: string;
  /**
   * @remarks
   * The identifier of the current DataAgent session. It is used to associate the event with its session.
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
   * The resumption cursor of the current native event. Carried only by verified native events. The client saves the cursor after fully processing the event, and uses the EventId and EventEpoch in it to resume the subscription to GetAgentSessionEvents after a disconnection without resending the prompt.
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
   * The ID passed by the requester. The value is returned as is.
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * The JSON-RPC version. Set the value to 2.0.
   * 
   * @example
   * 2.0
   */
  jsonrpc?: string;
  /**
   * @remarks
   * Carried only by verified native events. The client saves the EventCursor after fully applying the event, and uses EventId and EventEpoch to resume the subscription to GetAgentSessionEvents after a disconnection. Common subscription errors do not contain proof of the native execution terminal state.
   */
  meta?: PromptAgentSessionResponseBodyMeta;
  /**
   * @remarks
   * The method of the SSE. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * session/update
   */
  method?: string;
  /**
   * @remarks
   * The params of the SSE. The returned content complies with the open-source Agent Client Protocol (ACP) specification. For more information, see https://agentclientprotocol.com/protocol/prompt-turn.
   * 
   * @example
   * {"sessionId":"af4f5ef8-e8f5-481c-ad1f-94886c6c0aed","update":{"sessionUpdate":"agent_message_chunk","content":{"type":"text","text":"hello world"}}}
   */
  params?: any;
  /**
   * @remarks
   * Id of the request
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

