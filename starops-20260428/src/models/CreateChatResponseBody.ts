// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * A list of invoked agents.
   */
  agents?: { [key: string]: any }[];
  /**
   * @remarks
   * A list of generated artifacts.
   */
  artifacts?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the current call.
   * 
   * @example
   * call_search_001
   */
  callId?: string;
  /**
   * @remarks
   * A list of content objects.
   */
  contents?: { [key: string]: any }[];
  /**
   * @remarks
   * Message details.
   * 
   * @example
   * test
   */
  detail?: string;
  /**
   * @remarks
   * A list of events.
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * The ID of the parent call.
   * 
   * @example
   * sess_abc123
   */
  parentCallId?: string;
  /**
   * @remarks
   * The role of the message sender.
   * 
   * @example
   * tool
   */
  role?: string;
  /**
   * @remarks
   * The message sequence number.
   * 
   * @example
   * 1
   */
  seq?: number;
  /**
   * @remarks
   * The timestamp, in nanoseconds.
   * 
   * @example
   * 1765000005
   */
  timestamp?: string;
  /**
   * @remarks
   * A list of tool calls.
   */
  tools?: { [key: string]: any }[];
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * done
   */
  type?: string;
  /**
   * @remarks
   * The message version.
   * 
   * @example
   * v0.1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      artifacts: 'artifacts',
      callId: 'callId',
      contents: 'contents',
      detail: 'detail',
      events: 'events',
      parentCallId: 'parentCallId',
      role: 'role',
      seq: 'seq',
      timestamp: 'timestamp',
      tools: 'tools',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      artifacts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      callId: 'string',
      contents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      detail: 'string',
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parentCallId: 'string',
      role: 'string',
      seq: 'number',
      timestamp: 'string',
      tools: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of message objects in the session.
   */
  messages?: CreateChatResponseBodyMessages[];
  /**
   * @remarks
   * A unique identifier for the API request, useful for troubleshooting.
   * 
   * @example
   * 0CEC5375-XXXX-XXXX-XXXX-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * Uniquely identifies the request chain for tracing.
   * 
   * @example
   * 21504600000008405622576e3b48
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': CreateChatResponseBodyMessages },
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

