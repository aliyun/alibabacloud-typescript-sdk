// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAgentRequestContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAgentRequestForwardedProps extends $dara.Model {
  /**
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * user
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'enableThinking',
      language: 'language',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableThinking: 'boolean',
      language: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAgentRequestMessagesToolCallsFunction extends $dara.Model {
  /**
   * @example
   * {}
   */
  arguments?: string;
  /**
   * @example
   * navy
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

export class InvokeAgentRequestMessagesToolCalls extends $dara.Model {
  /**
   * @example
   * ""
   */
  encryptedValue?: string;
  /**
   * @example
   * {"name": "xxx", "arguments": "xxx"}
   */
  function?: InvokeAgentRequestMessagesToolCallsFunction;
  /**
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
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
      function: InvokeAgentRequestMessagesToolCallsFunction,
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

export class InvokeAgentRequestMessages extends $dara.Model {
  /**
   * @example
   * hello
   */
  content?: string;
  /**
   * @example
   * ""
   */
  encryptedValue?: string;
  /**
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * n-1
   */
  name?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  subagentRunId?: string;
  /**
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  toolCallId?: string;
  toolCalls?: InvokeAgentRequestMessagesToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      encryptedValue: 'encryptedValue',
      id: 'id',
      metadata: 'metadata',
      name: 'name',
      role: 'role',
      subagentRunId: 'subagentRunId',
      toolCallId: 'toolCallId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      encryptedValue: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      role: 'string',
      subagentRunId: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': InvokeAgentRequestMessagesToolCalls },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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

export class InvokeAgentRequestResume extends $dara.Model {
  /**
   * @example
   * i-1
   */
  interruptId?: string;
  /**
   * @example
   * {"decision":"yes"}
   */
  payload?: any;
  /**
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

export class InvokeAgentRequestTools extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
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
   * cluster-qa-icloud-edge-ohttp
   */
  name?: string;
  /**
   * @example
   * {\\"region\\": \\"cn-shanghai\\", \\"vpcId\\": \\"vpc-uf6bnhlxne8enjurxxjv4\\", \\"functionName\\": \\"filemgr-cn-shanghai-334a349cd2\\", \\"mountPointsServerAddr\\": \\"334a349cd2-umc45.cn-shanghai.nas.aliyuncs.com\\"}
   */
  parameters?: any;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      metadata: 'metadata',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      parameters: 'any',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAgentRequest extends $dara.Model {
  /**
   * @example
   * [{"description":"cluster","value":"c-1"}]
   */
  context?: InvokeAgentRequestContext[];
  /**
   * @example
   * {"enableThinking":true}
   */
  forwardedProps?: InvokeAgentRequestForwardedProps;
  /**
   * @example
   * [{"id":"m-1","role":"user","content":"你好"}]
   */
  messages?: InvokeAgentRequestMessages[];
  /**
   * @example
   * r-0
   */
  parentRunId?: string;
  /**
   * @example
   * [{"interruptId":"i-1","status":"resolved","payload":{"decision":"yes"}}]
   */
  resume?: InvokeAgentRequestResume[];
  /**
   * @example
   * run-1
   */
  runId?: string;
  /**
   * @example
   * {}
   */
  state?: any;
  /**
   * @example
   * abcdef0123456789abcdef0123456789
   */
  threadId?: string;
  /**
   * @example
   * []
   */
  tools?: InvokeAgentRequestTools[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      forwardedProps: 'forwardedProps',
      messages: 'messages',
      parentRunId: 'parentRunId',
      resume: 'resume',
      runId: 'runId',
      state: 'state',
      threadId: 'threadId',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: { 'type': 'array', 'itemType': InvokeAgentRequestContext },
      forwardedProps: InvokeAgentRequestForwardedProps,
      messages: { 'type': 'array', 'itemType': InvokeAgentRequestMessages },
      parentRunId: 'string',
      resume: { 'type': 'array', 'itemType': InvokeAgentRequestResume },
      runId: 'string',
      state: 'any',
      threadId: 'string',
      tools: { 'type': 'array', 'itemType': InvokeAgentRequestTools },
    };
  }

  validate() {
    if(Array.isArray(this.context)) {
      $dara.Model.validateArray(this.context);
    }
    if(this.forwardedProps && typeof (this.forwardedProps as any).validate === 'function') {
      (this.forwardedProps as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.resume)) {
      $dara.Model.validateArray(this.resume);
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

