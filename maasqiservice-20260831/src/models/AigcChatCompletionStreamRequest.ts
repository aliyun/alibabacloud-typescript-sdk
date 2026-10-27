// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AigcChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @remarks
   * The publicly accessible HTTPS URL of the reference image, or a complete Base64 image Data URL (such as data:image/png;base64,...). Signed URLs must remain valid during request execution. Re-upload or update the link for expired or unauthorized images.
   * 
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
   * @remarks
   * The video URL.
   * 
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
  /**
   * @remarks
   * The reference image when type is set to image_url. Supports HTTPS URLs or Base64 Data URLs.
   */
  imageUrl?: AigcChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @remarks
   * The generation or editing objective when type is set to text.
   * 
   * @example
   * Change the background of the reference image to a seaside sunset
   */
  text?: string;
  /**
   * @remarks
   * The content part type: text, image_url, or video_url.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The video input when type is set to video_url. Only accepted by the Creative Agent Dedicated edition Planner. The Creative Agent Lite edition rejects this type.
   */
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
   * @remarks
   * The message content. Can be text. A multimodal array can contain text, image_url, or video_url. The Creative Agent Lite edition performs image-to-image when a reference image is provided and text-to-image when no reference image is provided. It does not accept video.
   * 
   * @example
   * Generate a futuristic city nightscape after rain
   */
  content?: AigcChatCompletionStreamRequestMessagesContent[];
  /**
   * @remarks
   * The message role. Place the current generation objective in a user message. History can include user, assistant, and tool.
   * 
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
   * @remarks
   * The guidance scale. Must be a finite number between 0 and 20.
   * 
   * @example
   * 0.0
   */
  guidanceScale?: number;
  /**
   * @remarks
   * The number of images to generate for this request. Must be an integer in the range of 1 to 6.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The negative prompt that describes content you do not want to appear in the result.
   * 
   * @example
   * low quality, blurry, text, watermark
   */
  negativePrompt?: string;
  /**
   * @remarks
   * The number of model inference iterations. Must be an integer in the range of 1 to 200.
   * 
   * @example
   * 8
   */
  numInferenceSteps?: number;
  /**
   * @remarks
   * The random seed. Must be an integer in the range of 0 to 2147483647.
   * 
   * @example
   * 42
   */
  seed?: number;
  /**
   * @remarks
   * The output pixel dimensions, such as `1024*1024` or `1280*720`. The format `1024x1024` is also accepted. When specified, this value overrides the default canvas dimensions for this request. Use width and height values supported by the model.
   * 
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
   * @remarks
   * The image parameters for this request. Only size, n, seed, negative_prompt, num_inference_steps, and guidance_scale are supported. Omitted fields use the default configurations. response_format is not supported.
   * 
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
   * @remarks
   * The HTTP JSON key is include_usage. When set to true, an independent usage chunk is returned before the end marker. The choices field in this chunk is an empty array. Token usage does not represent the number of images or the final bill.
   * 
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
   * The conversation message array. Creative Agent uses the last user message as the current objective and executes it in combination with the session history.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"role":"user","content":"Generate an ink wash landscape painting"}]
   */
  messages?: AigcChatCompletionStreamRequestMessages[];
  /**
   * @remarks
   * The extended input for this image creation request. Use the parameters object to set generation parameters. Do not use this field to pass model addresses or keys.
   * 
   * @example
   * {"parameters":{"size":"1024*1024","n":1}}
   */
  metadata?: AigcChatCompletionStreamRequestMetadata;
  /**
   * @remarks
   * A compatibility placeholder field. Can be omitted or set to an empty string. You cannot use this field to switch the model used by the instance. The model field in the response is an empty string.
   * 
   * @example
   * " "
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to use SSE streaming responses. This parameter must be set to true for this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The HTTP JSON key is stream_options. Set include_usage to retrieve the token usage for this call.
   * 
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

