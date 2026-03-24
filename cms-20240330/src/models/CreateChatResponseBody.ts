// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatResponseBodyMessages extends $dara.Model {
  /**
   * @remarks
   * Agents list
   */
  agents?: { [key: string]: any }[];
  /**
   * @remarks
   * Artifacts information
   */
  artifacts?: { [key: string]: any }[];
  /**
   * @remarks
   * Call ID of the current node
   * 
   * @example
   * call_search_001
   */
  callId?: string;
  /**
   * @remarks
   * Messages contents array
   */
  contents?: { [key: string]: any }[];
  /**
   * @remarks
   * Detailed information, such as tool progress description
   * 
   * @example
   * test
   */
  detail?: string;
  /**
   * @remarks
   * Events list
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * Call ID of the parent node
   * 
   * @example
   * sess_abc123
   */
  parentCallId?: string;
  /**
   * @remarks
   * Message role
   * 
   * @example
   * tool
   */
  role?: string;
  /**
   * @remarks
   * Event sequence number. This number increments to preserve event order.
   * 
   * @example
   * 1
   */
  seq?: number;
  /**
   * @remarks
   * UNIX timestamp (seconds)
   * 
   * @example
   * 1765000005
   */
  timestamp?: string;
  /**
   * @remarks
   * Tools calls array
   */
  tools?: { [key: string]: any }[];
  /**
   * @remarks
   * Special event type, such as done, error, or heartbeat
   * 
   * @example
   * done
   */
  type?: string;
  /**
   * @remarks
   * Message version number
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
   * Messages list
   */
  messages?: CreateChatResponseBodyMessages[];
  /**
   * @remarks
   * Unique identifier for the request
   * 
   * @example
   * 0CEC5375-XXXX-XXXX-XXXX-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * Global identifier for the request trace
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

