// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AigcChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @example
   * https://example.com/input.png
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

export class AigcChatCompletionStreamRequestMessagesContentVideoUrl extends $dara.Model {
  /**
   * @example
   * https://example.com/input.mp4
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

export class AigcChatCompletionStreamRequestMessagesContent extends $dara.Model {
  imageUrl?: AigcChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @example
   * 把参考图背景改成海边日落
   */
  text?: string;
  /**
   * @example
   * text
   */
  type?: string;
  videoUrl?: AigcChatCompletionStreamRequestMessagesContentVideoUrl;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      text: 'text',
      type: 'type',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: AigcChatCompletionStreamRequestMessagesContentImageUrl,
      text: 'string',
      type: 'string',
      videoUrl: AigcChatCompletionStreamRequestMessagesContentVideoUrl,
    };
  }

  validate() {
    if(this.imageUrl && typeof (this.imageUrl as any).validate === 'function') {
      (this.imageUrl as any).validate();
    }
    if(this.videoUrl && typeof (this.videoUrl as any).validate === 'function') {
      (this.videoUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AigcChatCompletionStreamRequestMessages extends $dara.Model {
  /**
   * @example
   * 生成一张雨后未来城市夜景
   */
  content?: AigcChatCompletionStreamRequestMessagesContent[];
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': AigcChatCompletionStreamRequestMessagesContent },
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

export class AigcChatCompletionStreamRequestMetadataParameters extends $dara.Model {
  /**
   * @example
   * 0.0
   */
  guidanceScale?: number;
  /**
   * @example
   * 1
   */
  n?: number;
  /**
   * @example
   * 低质量、模糊、文字、水印
   */
  negativePrompt?: string;
  /**
   * @example
   * 8
   */
  numInferenceSteps?: number;
  /**
   * @example
   * 42
   */
  seed?: number;
  /**
   * @example
   * 1024*1024
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      guidanceScale: 'guidanceScale',
      n: 'n',
      negativePrompt: 'negativePrompt',
      numInferenceSteps: 'numInferenceSteps',
      seed: 'seed',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guidanceScale: 'number',
      n: 'number',
      negativePrompt: 'string',
      numInferenceSteps: 'number',
      seed: 'number',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AigcChatCompletionStreamRequestMetadata extends $dara.Model {
  /**
   * @example
   * {"size":"1024*1024","n":1,"num_inference_steps":8}
   */
  parameters?: AigcChatCompletionStreamRequestMetadataParameters;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: AigcChatCompletionStreamRequestMetadataParameters,
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AigcChatCompletionStreamRequestStreamOptions extends $dara.Model {
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

export class AigcChatCompletionStreamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"role":"user","content":"生成一张水墨山水画"}]
   */
  messages?: AigcChatCompletionStreamRequestMessages[];
  /**
   * @example
   * {"parameters":{"size":"1024*1024","n":1}}
   */
  metadata?: AigcChatCompletionStreamRequestMetadata;
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @example
   * {"include_usage":true}
   */
  streamOptions?: AigcChatCompletionStreamRequestStreamOptions;
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
      metadata: 'metadata',
      model: 'model',
      stream: 'stream',
      streamOptions: 'streamOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AigcChatCompletionStreamRequestMessages },
      metadata: AigcChatCompletionStreamRequestMetadata,
      model: 'string',
      stream: 'boolean',
      streamOptions: AigcChatCompletionStreamRequestStreamOptions,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

