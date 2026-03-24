// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadDataResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * A list of invoked agents.
   */
  agents?: { [key: string]: any }[];
  /**
   * @remarks
   * Information about the generated artifacts.
   */
  artifacts?: { [key: string]: any }[];
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * 3b5287b7176360
   */
  callId?: string;
  /**
   * @remarks
   * The message content.
   */
  contents?: { [key: string]: any }[];
  /**
   * @remarks
   * The details of the message.
   * 
   * @example
   * context of model exceed
   */
  detail?: string;
  /**
   * @remarks
   * A list of events.
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * The execution ID of the parent level.
   * 
   * @example
   * 3b5287b7176360
   */
  parentCallId?: string;
  /**
   * @remarks
   * The role that sent the message.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The sequence number of the message.
   * 
   * @example
   * 0
   */
  seq?: number;
  /**
   * @remarks
   * The timestamp in nanoseconds.
   * 
   * @example
   * 1768702985000000000
   */
  timestamp?: string;
  /**
   * @remarks
   * A list of tools that were used.
   */
  tools?: { [key: string]: any }[];
  /**
   * @remarks
   * The type of the message.
   * 
   * @example
   * task_finished
   */
  type?: string;
  /**
   * @remarks
   * The version of the message data.
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

export class GetThreadDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of messages in the session.
   */
  messages?: GetThreadDataResponseBodyDataMessages[];
  /**
   * @remarks
   * The ID of the current message request. This is the first request ID in the root data.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the current message request. This is the first trace ID in the root data.
   * 
   * @example
   * 3b5287b717636040171772050d0095
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
      messages: { 'type': 'array', 'itemType': GetThreadDataResponseBodyDataMessages },
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

export class GetThreadDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message data.
   */
  data?: GetThreadDataResponseBodyData[];
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * xxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * thread_id01
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      digitalEmployeeName: 'digitalEmployeeName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetThreadDataResponseBodyData },
      digitalEmployeeName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

