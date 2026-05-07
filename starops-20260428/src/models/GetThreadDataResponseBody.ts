// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadDataResponseBodyDataMessages extends $dara.Model {
  agents?: { [key: string]: any }[];
  artifacts?: { [key: string]: any }[];
  /**
   * @example
   * 3b5287b7176360
   */
  callId?: string;
  contents?: { [key: string]: any }[];
  /**
   * @example
   * context of model exceed
   */
  detail?: string;
  events?: { [key: string]: any }[];
  /**
   * @example
   * 3b5287b7176360
   */
  parentCallId?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * 0
   */
  seq?: number;
  /**
   * @example
   * 1768702985000000000
   */
  timestamp?: string;
  tools?: { [key: string]: any }[];
  /**
   * @example
   * task_finished
   */
  type?: string;
  /**
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
  messages?: GetThreadDataResponseBodyDataMessages[];
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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
  data?: GetThreadDataResponseBodyData[];
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
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

