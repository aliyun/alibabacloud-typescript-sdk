// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CuaChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/desktop.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CuaChatCompletionStreamRequestMessagesContent extends $dara.Model {
  /**
   * @example
   * data:image/png;base64,<IMAGE_BASE64>
   */
  imageData?: string;
  imageUrl?: CuaChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @example
   * 打开浏览器并访问指定页面。
   */
  text?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image_url
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'imageData',
      imageUrl: 'imageUrl',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageUrl: CuaChatCompletionStreamRequestMessagesContentImageUrl,
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.imageUrl && typeof (this.imageUrl as any).validate === 'function') {
      (this.imageUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CuaChatCompletionStreamRequestMessages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: CuaChatCompletionStreamRequestMessagesContent[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * call_cua_1
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCallId: 'toolCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': CuaChatCompletionStreamRequestMessagesContent },
      role: 'string',
      toolCallId: 'string',
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

export class CuaChatCompletionStreamRequestMetadata extends $dara.Model {
  /**
   * @example
   * 1080
   */
  screenHeight?: number;
  /**
   * @example
   * 1920
   */
  screenWidth?: number;
  static names(): { [key: string]: string } {
    return {
      screenHeight: 'screenHeight',
      screenWidth: 'screenWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenHeight: 'number',
      screenWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CuaChatCompletionStreamRequestStreamOptions extends $dara.Model {
  /**
   * @example
   * true
   */
  includeUsage?: boolean;
  static names(): { [key: string]: string } {
    return {
      includeUsage: 'includeUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeUsage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CuaChatCompletionStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: CuaChatCompletionStreamRequestMessages[];
  metadata?: CuaChatCompletionStreamRequestMetadata;
  /**
   * @example
   * " "
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  stream?: boolean;
  streamOptions?: CuaChatCompletionStreamRequestStreamOptions;
  /**
   * @example
   * []
   */
  tools?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      metadata: 'metadata',
      model: 'model',
      stream: 'stream',
      streamOptions: 'streamOptions',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': CuaChatCompletionStreamRequestMessages },
      metadata: CuaChatCompletionStreamRequestMetadata,
      model: 'string',
      stream: 'boolean',
      streamOptions: CuaChatCompletionStreamRequestStreamOptions,
      tools: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.streamOptions && typeof (this.streamOptions as any).validate === 'function') {
      (this.streamOptions as any).validate();
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

