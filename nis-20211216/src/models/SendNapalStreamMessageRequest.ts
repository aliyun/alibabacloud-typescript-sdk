// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNapalStreamMessageRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * The accepted output modes. Default value: ["text/event-stream"], which indicates that SSE streaming responses are accepted.
   */
  acceptedOutputModes?: string[];
  /**
   * @remarks
   * The history message length. Controls the number of historical messages carried in multi-turn conversations. Default value: 20.
   * 
   * @example
   * 20
   */
  historyLength?: number;
  /**
   * @remarks
   * Specifies whether to return immediately. Valid values:
   * 
   * - false (default): Returns responses in streaming mode.
   * - true: Returns the task ID immediately and processes the request asynchronously.
   * 
   * @example
   * false
   */
  returnImmediately?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptedOutputModes: 'AcceptedOutputModes',
      historyLength: 'HistoryLength',
      returnImmediately: 'ReturnImmediately',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedOutputModes: { 'type': 'array', 'itemType': 'string' },
      historyLength: 'number',
      returnImmediately: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.acceptedOutputModes)) {
      $dara.Model.validateArray(this.acceptedOutputModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageRequestMessageParts extends $dara.Model {
  /**
   * @remarks
   * The structured data, used to pass JSON-formatted structured content.
   * 
   * @example
   * {"key":"value"}
   */
  data?: any;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * report.txt
   */
  filename?: string;
  /**
   * @remarks
   * The media type.
   * 
   * @example
   * application/json
   */
  mediaType?: string;
  /**
   * @remarks
   * The raw content, used to pass non-text data.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The text content. The natural language instruction entered by the user, such as a diagnostic request or question consultation.
   * 
   * @example
   * Diagnose this instance ngw-xxx
   */
  text?: string;
  /**
   * @remarks
   * The file URL, used to pass file-type content.
   * 
   * @example
   * https://example.com/file.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageRequestMessage extends $dara.Model {
  /**
   * @remarks
   * The session context ID. Do not specify this parameter for the first conversation. The server creates a new session. For multi-turn conversations, pass the contextId from the previous response to maintain context continuity.
   * 
   * @example
   * context-xxx
   */
  contextId?: string;
  /**
   * @remarks
   * The list of extension information.
   */
  extensions?: string[];
  /**
   * @remarks
   * The message ID. If not specified, the server automatically generates one.
   * 
   * @example
   * m_msijl2sv_pcfge8r7l
   */
  messageId?: string;
  /**
   * @remarks
   * The extended metadata, used to pass additional context information.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The list of message content parts. Multiple parts are supported.
   */
  parts?: SendNapalStreamMessageRequestMessageParts[];
  /**
   * @remarks
   * The list of referenced historical task IDs, used for context association.
   */
  referenceTaskIds?: string[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The task ID. Pass the ID of the previous task in follow-up conversation scenarios.
   * 
   * @example
   * task-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      extensions: 'Extensions',
      messageId: 'MessageId',
      metadata: 'Metadata',
      parts: 'Parts',
      referenceTaskIds: 'ReferenceTaskIds',
      role: 'Role',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
      extensions: { 'type': 'array', 'itemType': 'string' },
      messageId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageRequestMessageParts },
      referenceTaskIds: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    if(Array.isArray(this.referenceTaskIds)) {
      $dara.Model.validateArray(this.referenceTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The request configuration object.
   */
  configuration?: SendNapalStreamMessageRequestConfiguration;
  /**
   * @remarks
   * The message object that contains user input and session context information.
   */
  message?: SendNapalStreamMessageRequestMessage;
  /**
   * @remarks
   * The additional request information.
   */
  metadata?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      message: 'Message',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: SendNapalStreamMessageRequestConfiguration,
      message: SendNapalStreamMessageRequestMessage,
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
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

