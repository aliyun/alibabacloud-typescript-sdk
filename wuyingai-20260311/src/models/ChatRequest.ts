// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatRequestInputContent extends $dara.Model {
  /**
   * @example
   * report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file path or URL (Type=file).
   * 
   * @example
   * /workspace/report.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The image URL or Base64-encoded string (Type=image).
   * 
   * @example
   * https://example.com/img.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The text content (Type=text).
   * 
   * @example
   * 帮我分析这张图片
   */
  text?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      imageUrl: 'ImageUrl',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
      imageUrl: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestInput extends $dara.Model {
  /**
   * @remarks
   * The content block list.
   */
  content?: ChatRequestInputContent[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ChatRequestInputContent },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestSettings extends $dara.Model {
  /**
   * @remarks
   * Controls the file output mode. Valid values: url or base64. If this parameter is not specified, base64 is used by default for legacy compatibility.
   * 
   * @example
   * base64
   */
  outputFileMode?: string;
  static names(): { [key: string]: string } {
    return {
      outputFileMode: 'OutputFileMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFileMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequestStreamOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the model thinking process. When set to false, the SSE stream does not include messages with Type="reasoning" or their content events.
   * 
   * @example
   * true
   */
  includeReasoning?: boolean;
  /**
   * @remarks
   * Specifies whether to include tool invocation details. When set to false, the SSE stream does not include messages of type plugin_call, plugin_call_output, mcp_call, or mcp_call_output, or their content events.
   * 
   * @example
   * true
   */
  includeToolCalls?: boolean;
  static names(): { [key: string]: string } {
    return {
      includeReasoning: 'IncludeReasoning',
      includeToolCalls: 'IncludeToolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeReasoning: 'boolean',
      includeToolCalls: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * Bearer + JWT returned by GetAccessToken. URL-encode the entire string and pass it as a query parameter.
   * 
   * @example
   * Bearer%20eyJhb****...****k
   */
  authorization?: string;
  /**
   * @remarks
   * The user ID from the external system.
   * 
   * @example
   * test-user
   */
  externalUserId?: string;
  /**
   * @remarks
   * The message list (JSON string), sorted in chronological order.
   * 
   * @example
   * [{"Role":"user","Content":[{"Type":"text","Text":"你好"}]}]
   */
  input?: ChatRequestInput[];
  model?: string;
  resume?: boolean;
  /**
   * @remarks
   * The routing key that specifies the backend instance to process the request.
   * 
   * @example
   * ""
   */
  routingKey?: string;
  /**
   * @remarks
   * The session ID for multi-turn conversation context persistence.
   * 
   * @example
   * test-session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The additional settings. Contains the output file mode control parameter OutputFileMode (string, valid values: url or base64. Defaults to base64 for legacy compatibility. We recommend url).
   * 
   * @example
   * {"OutputFileMode": "url"}
   */
  settings?: ChatRequestSettings;
  /**
   * @remarks
   * The streaming output control options. Contains IncludeReasoning (boolean, default true, specifies whether to include the model thinking process) and IncludeToolCalls (boolean, default true, specifies whether to include tool invocation details). If not specified or set to a null object, the behavior is consistent with the legacy version.
   * 
   * @example
   * {"IncludeReasoning": false, "IncludeToolCalls": false}
   */
  streamOptions?: ChatRequestStreamOptions;
  /**
   * @remarks
   * The agent template ID.
   * 
   * @example
   * template-abc123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      externalUserId: 'ExternalUserId',
      input: 'Input',
      model: 'Model',
      resume: 'Resume',
      routingKey: 'RoutingKey',
      sessionId: 'SessionId',
      settings: 'Settings',
      streamOptions: 'StreamOptions',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      externalUserId: 'string',
      input: { 'type': 'array', 'itemType': ChatRequestInput },
      model: 'string',
      resume: 'boolean',
      routingKey: 'string',
      sessionId: 'string',
      settings: ChatRequestSettings,
      streamOptions: ChatRequestStreamOptions,
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(this.streamOptions && typeof (this.streamOptions as any).validate === 'function') {
      (this.streamOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

