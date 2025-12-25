// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatResponseBodyMessages extends $dara.Model {
  agents?: { [key: string]: any }[];
  /**
   * @example
   * call_search_001
   */
  callId?: string;
  contents?: { [key: string]: any }[];
  /**
   * @example
   * test
   */
  detail?: string;
  /**
   * @example
   * sess_abc123
   */
  parentCallId?: string;
  /**
   * @example
   * tool
   */
  role?: string;
  /**
   * @example
   * 1
   */
  seq?: number;
  /**
   * @example
   * 1765000005
   */
  timestamp?: number;
  tools?: { [key: string]: any }[];
  /**
   * @example
   * done
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'agents',
      callId: 'callId',
      contents: 'contents',
      detail: 'detail',
      parentCallId: 'parentCallId',
      role: 'role',
      seq: 'seq',
      timestamp: 'timestamp',
      tools: 'tools',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      callId: 'string',
      contents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      detail: 'string',
      parentCallId: 'string',
      role: 'string',
      seq: 'number',
      timestamp: 'number',
      tools: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
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
  messages?: CreateChatResponseBodyMessages[];
  /**
   * @example
   * 0CEC5375-XXXX-XXXX-XXXX-9A629907C1F0
   */
  requestId?: string;
  /**
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

