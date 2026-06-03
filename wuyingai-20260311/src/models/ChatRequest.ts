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
   * @example
   * /workspace/report.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * https://example.com/img.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * 帮我分析这张图片
   */
  text?: string;
  /**
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
  content?: ChatRequestInputContent[];
  /**
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
   * @example
   * true
   */
  includeReasoning?: boolean;
  /**
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
   * @example
   * Bearer%20eyJhb****...****k
   */
  authorization?: string;
  /**
   * @example
   * test-user
   */
  externalUserId?: string;
  /**
   * @example
   * [{"Role":"user","Content":[{"Type":"text","Text":"你好"}]}]
   */
  input?: ChatRequestInput[];
  /**
   * @example
   * ""
   */
  routingKey?: string;
  /**
   * @example
   * test-session-001
   */
  sessionId?: string;
  /**
   * @example
   * {"OutputFileMode": "url"}
   */
  settings?: ChatRequestSettings;
  /**
   * @example
   * {"IncludeReasoning": false, "IncludeToolCalls": false}
   */
  streamOptions?: ChatRequestStreamOptions;
  /**
   * @example
   * template-abc123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      externalUserId: 'ExternalUserId',
      input: 'Input',
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

