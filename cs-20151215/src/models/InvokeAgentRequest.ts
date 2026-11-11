// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAgentRequestContext extends $dara.Model {
  /**
   * @remarks
   * The description of the orchestration template.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The environment variable value.
   * 
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
   * @remarks
   * Specifies whether to enable thinking.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * The query language. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The source.
   * 
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
   * @remarks
   * The JSON string of the tool invocation parameters, not an expanded object.
   * 
   * @example
   * {}
   */
  arguments?: string;
  /**
   * @remarks
   * The function name.
   * 
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
   * @remarks
   * The encrypted content. The example is an invalid placeholder value and does not contain real ciphertext.
   * 
   * @example
   * ""
   */
  encryptedValue?: string;
  /**
   * @remarks
   * The function information of the historical tool invocation, including the name and arguments in JSON string format. The actual return values should be preserved in subsequent turns.
   * 
   * @example
   * {"name": "xxx", "arguments": "xxx"}
   */
  function?: InvokeAgentRequestMessagesToolCallsFunction;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  id?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The tool invocation type. Fixed to function.
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
   * @remarks
   * The plain text content. This parameter can be omitted when the assistant only calls tools. Currently, only the text of the last user message is consumed.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The encrypted content of the tool invocation. The example is only a placeholder value.
   * 
   * @example
   * ""
   */
  encryptedValue?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  id?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name.
   * 
   * @example
   * n-1
   */
  name?: string;
  /**
   * @remarks
   * The message role. Valid values: user, developer, system, assistant, and tool. The user role requires text content. The assistant role can contain only toolCalls. The tool role requires content and toolCallId. Multimodal input is not declared in the current phase.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The sub-agent invocation ID.
   * 
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  subagentRunId?: string;
  /**
   * @remarks
   * Required when role is set to tool. References the tool_call ID from the previous Mobile-Use Agent response.
   * 
   * @example
   * 64ea4d94937a4c5c84e2b3b814d14696
   */
  toolCallId?: string;
  /**
   * @remarks
   * A structured tool invocation in the historical messages of the assistant. The id, type, and function returned by the server are preserved.
   */
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
   * @remarks
   * Corresponds to outcome.interrupts[].id, not toolCallId.
   * 
   * @example
   * i-1
   */
  interruptId?: string;
  /**
   * @remarks
   * The arbitrary JSON response payload. Tool approval uses an object with decision=yes/no, and ask_human uses a string.
   * 
   * @example
   * {"decision":"yes"}
   */
  payload?: any;
  /**
   * @remarks
   * The response status. Valid values: resolved and cancelled. Both approval and rejection use resolved, distinguished by payload.decision.
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

export class InvokeAgentRequestTools extends $dara.Model {
  /**
   * @remarks
   * The description of the check item.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The environment variable name.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-qa-icloud-edge-ohttp
   */
  name?: string;
  /**
   * @remarks
   * The optional JSON Schema for tool parameters. Cannot be null. The internal structure is defined by the tool.
   * 
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
   * @remarks
   * The AG-UI native context array. Each item contains description and value strings. Undeclared extension keys are still passed through. Currently, the downstream service only logs a warning and ignores them. The ACK resource context is carried by forwardedProps.ackContext. If omitted, it is processed as an empty array. Null values are not accepted.
   * 
   * @example
   * [{"description":"cluster","value":"c-1"}]
   */
  context?: InvokeAgentRequestContext[];
  /**
   * @remarks
   * The AG-UI ACK extension parameters, including language, enableThinking, and source. Unknown extensions are preserved.
   * 
   * @example
   * {"enableThinking":true}
   */
  forwardedProps?: InvokeAgentRequestForwardedProps;
  /**
   * @remarks
   * The AG-UI message list. In the current phase, user input only declares plain text content. Historical assistant and tool messages, as well as toolCalls, are preserved. Only the text of the last user message is consumed. If omitted, it is processed as an empty array. Null values are not accepted. Undeclared extension fields are passed through.
   * 
   * @example
   * [{"id":"m-1","role":"user","content":"Hello"}]
   */
  messages?: InvokeAgentRequestMessages[];
  /**
   * @remarks
   * The parent run ID. This parameter is optional and is currently not used by the downstream service.
   * 
   * @example
   * r-0
   */
  parentRunId?: string;
  /**
   * @remarks
   * The AG-UI interrupt resume response list. Independent of the private protocol approval parameters. A single request must answer the current complete approval batch.
   * 
   * @example
   * [{"interruptId":"i-1","status":"resolved","payload":{"decision":"yes"}}]
   */
  resume?: InvokeAgentRequestResume[];
  /**
   * @remarks
   * The AG-UI current run ID. Must be explicitly provided as a string. Empty strings are allowed and will be generated by the downstream service. Missing or null values are rejected.
   * 
   * @example
   * run-1
   */
  runId?: string;
  /**
   * @remarks
   * The AG-UI native state. Accepts any JSON value, including null. This parameter is currently not used by the downstream service.
   * 
   * @example
   * {}
   */
  state?: any;
  /**
   * @remarks
   * The AG-UI session ID. Must be explicitly provided as a string. If not empty, only 32 lowercase hexadecimal characters [0-9a-f]{32} are accepted. A standard run can be created or resumed by using this ID. If an empty string is provided, the server generates a session ID. A resume operation must use an existing session ID. Missing or null values are rejected. This API only accepts native requests and does not require the stream parameter.
   * 
   * @example
   * abcdef0123456789abcdef0123456789
   */
  threadId?: string;
  /**
   * @remarks
   * The AG-UI native tool definitions. The name and description are strings, and parameters is an opaque JSON Schema. Accepted and passed through. Currently, the downstream service only logs a warning and ignores them. Frontend tool injection is not supported. If omitted, it is processed as an empty array. Null values are not accepted.
   * 
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

