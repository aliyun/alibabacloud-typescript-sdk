// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GuiChatCompletionStreamRequestChatTemplateKwargs extends $dara.Model {
  /**
   * @remarks
   * chat_template_kwargs.enable_thinking: the request-level switch for model thinking, which overrides the default value with the same name. Enabling this switch does not cause the Mobile-Use Agent response to return reasoning_content.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * Specifies whether to preserve the existing thinking context in subsequent rounds. This parameter is passed as-is according to the vLLM or Qwen chat_template_kwargs.
   * 
   * @example
   * true
   */
  preserveThinking?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'enableThinking',
      preserveThinking: 'preserveThinking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableThinking: 'boolean',
      preserveThinking: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @remarks
   * A publicly accessible HTTPS image URL or a Base64 image data URL. Each round of user messages must and can only contain one current screenshot. Expired or inaccessible image addresses are rejected.
   * 
   * @example
   * https://example.com/screenshot.png
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

export class GuiChatCompletionStreamRequestMessagesContent extends $dara.Model {
  /**
   * @remarks
   * The compatible inline image field for input_image. You can pass a Base64 data URL.
   * 
   * @example
   * data:image/png;base64,...
   */
  imageData?: string;
  /**
   * @remarks
   * The screenshot reference. Supports an image_url string or an object containing a url field. The object format is shown here.
   */
  imageUrl?: GuiChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @remarks
   * The text content, which can describe the current operation objective or supplement the current page state.
   * 
   * @example
   * Click the search button
   */
  text?: string;
  /**
   * @remarks
   * The type of the content item. Use text or input_text for text. Use image_url or input_image for screenshots.
   * 
   * @example
   * text
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
      imageUrl: GuiChatCompletionStreamRequestMessagesContentImageUrl,
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

export class GuiChatCompletionStreamRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The message content. For a user message, use a content array that contains exactly one current screenshot and optionally attached task text. Screenshots support public HTTPS URLs or Base64 image data URLs. When role is set to tool, fill in the actual execution result of the previous action, which can be a non-empty string, object, or array.
   */
  content?: GuiChatCompletionStreamRequestMessagesContent[];
  /**
   * @remarks
   * The message role. The current input must end with a user message. If an execution receipt from the previous round exists, the preceding message must be a tool message.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * Required when role is set to tool. References the tool_call ID from the previous Mobile-Use Agent response.
   * 
   * @example
   * call_gui_1
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
      content: { 'type': 'array', 'itemType': GuiChatCompletionStreamRequestMessagesContent },
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

export class GuiChatCompletionStreamRequestMetadata extends $dara.Model {
  /**
   * @remarks
   * The compatible alias for available_apps, which is also an array of app name strings.
   * 
   * @example
   * ["Chrome","Settings"]
   */
  appList?: string[];
  /**
   * @remarks
   * The supplementary list of application names for the Standard Edition of Mobile-Use Agent. The JSON field is available_apps. The newly passed list replaces the previous supplementary items, but the default applications are retained. An empty array does not clear the default applications. The Dedicated Edition of Mobile-Use Agent does not use this list.
   * 
   * @example
   * ["Chrome","Settings"]
   */
  availableApps?: string[];
  /**
   * @remarks
   * The Mobile-Use Agent Harness receipt text for legacy clients. This cannot be passed at the same time as the preceding tool message. New clients should prioritize using [tool,user] messages.
   * 
   * @example
   * previous action completed
   */
  harnessMessage?: string;
  /**
   * @remarks
   * The screen height as a positive integer. For Base64 images, the width and height are parsed from the image itself. For URL images, this value is used for the runtime screen size.
   * 
   * @example
   * 1080
   */
  screenHeight?: number;
  /**
   * @remarks
   * The screen width as a positive integer. For Base64 images, the width and height are parsed from the image itself. For URL images, this value is used for the runtime screen size.
   * 
   * @example
   * 1920
   */
  screenWidth?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'appList',
      availableApps: 'availableApps',
      harnessMessage: 'harnessMessage',
      screenHeight: 'screenHeight',
      screenWidth: 'screenWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': 'string' },
      availableApps: { 'type': 'array', 'itemType': 'string' },
      harnessMessage: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(Array.isArray(this.availableApps)) {
      $dara.Model.validateArray(this.availableApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMmProcessorKwargs extends $dara.Model {
  /**
   * @remarks
   * The maximum number of dynamic image patches allowed by the vision model.
   * 
   * @example
   * 8
   */
  maxDynamicPatch?: number;
  static names(): { [key: string]: string } {
    return {
      maxDynamicPatch: 'maxDynamicPatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDynamicPatch: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestResponseFormat extends $dara.Model {
  /**
   * @remarks
   * The response format type, such as text, json_object, or json_schema.
   * 
   * @example
   * json_object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GuiChatCompletionStreamRequestStreamOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to output the usage statistics block before data:[DONE].
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

export class GuiChatCompletionStreamRequestStructuredOutputs extends $dara.Model {
  /**
   * @remarks
   * The set of allowed enum text values.
   * 
   * @example
   * ["tap","type"]
   */
  choice?: string[];
  static names(): { [key: string]: string } {
    return {
      choice: 'choice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choice: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.choice)) {
      $dara.Model.validateArray(this.choice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist of token IDs that are allowed to be generated.
   * 
   * @example
   * [10,11]
   */
  allowedTokenIds?: number[];
  /**
   * @remarks
   * The list of words or strings that are banned from being generated.
   * 
   * @example
   * ["blocked"]
   */
  badWords?: string[];
  /**
   * @remarks
   * The vLLM or OpenAI-compatible template parameter object. The request values override the default values with the same names in the model and are passed as-is to the primary model of the Mobile-Use Agent.
   */
  chatTemplateKwargs?: GuiChatCompletionStreamRequestChatTemplateKwargs;
  /**
   * @remarks
   * The frequency penalty parameter, which is passed through to the primary model of the Mobile-Use Agent.
   * 
   * @example
   * 0.0
   */
  frequencyPenalty?: number;
  /**
   * @remarks
   * Specifies whether to ignore the end-of-sequence (EOS) token and continue generation.
   * 
   * @example
   * false
   */
  ignoreEos?: boolean;
  /**
   * @remarks
   * Specifies whether to request the upstream to generate the reasoning field. The client-facing results of the Mobile-Use Agent do not directly expose internal thinking.
   * 
   * @example
   * true
   */
  includeReasoning?: boolean;
  /**
   * @remarks
   * The model compatibility parameter. The JSON field is logprobs. Whether this parameter is accepted and takes effect depends on the model used by the instance. The current Mobile-Use Agent response does not provide token log probability details.
   * 
   * @example
   * false
   */
  logprobs?: boolean;
  /**
   * @remarks
   * The OpenAI-compatible maximum number of completion tokens. If provided, the value must be greater than 0.
   * 
   * @example
   * 2048
   */
  maxCompletionTokens?: number;
  /**
   * @remarks
   * The OpenAI-compatible maximum number of generated tokens. If provided, the value must be greater than 0.
   * 
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * The messages for the current Mobile-Use Agent step. The first step can only contain one user message. Subsequent steps can only contain one tool message followed by one user message. Complete multi-round history is not allowed.
   * 
   * This parameter is required.
   */
  messages?: GuiChatCompletionStreamRequestMessages[];
  /**
   * @remarks
   * The metadata for the Mobile-Use Agent step. Supports screen_width, screen_height, available_apps, and the compatibility field harness_message. The tool receipt and harness_message cannot be passed at the same time.
   */
  metadata?: GuiChatCompletionStreamRequestMetadata;
  /**
   * @remarks
   * The vLLM Min-P sampling parameter.
   * 
   * @example
   * 0.05
   */
  minP?: number;
  /**
   * @remarks
   * The minimum number of tokens to generate.
   * 
   * @example
   * 1
   */
  minTokens?: number;
  /**
   * @remarks
   * The multimodal preprocessor parameters, passed through to the Mobile-Use Agent primary model as-is by key.
   */
  mmProcessorKwargs?: GuiChatCompletionStreamRequestMmProcessorKwargs;
  /**
   * @remarks
   * Reserved for OpenAI client compatibility. This parameter is ignored during routing. The model is determined by the published configuration of the instance, and the model field in the response is always an empty string.
   * 
   * @example
   * " "
   */
  model?: string;
  /**
   * @remarks
   * Set this parameter to 1. Whether this parameter is accepted depends on the model. The current Mobile-Use Agent response does not return multiple candidate actions.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The model-compatible switch to invoke parallel tool calling. This parameter does not expand the set of Mobile-Use Agent actions active for this operation.
   * 
   * @example
   * false
   */
  parallelToolCalls?: boolean;
  /**
   * @remarks
   * The presence penalty parameter, passed through to the Mobile-Use Agent primary model.
   * 
   * @example
   * 0.0
   */
  presencePenalty?: number;
  /**
   * @remarks
   * A model-compatible parameter. The JSON field is prompt_logprobs. Whether this parameter is accepted depends on the model. The current Mobile-Use Agent response does not return input token probability details.
   * 
   * @example
   * 2
   */
  promptLogprobs?: number;
  /**
   * @remarks
   * The OpenAI-compatible reasoning effort, such as low, medium, or high.
   * 
   * @example
   * medium
   */
  reasoningEffort?: string;
  /**
   * @remarks
   * The vLLM repetition penalty parameter.
   * 
   * @example
   * 1.1
   */
  repetitionPenalty?: number;
  /**
   * @remarks
   * The model-compatible structured output options. This parameter does not change the final Mobile-Use Agent tool calling structure when you invoke this operation. Avoid output constraint Settings that conflict with the action protocol.
   */
  responseFormat?: GuiChatCompletionStreamRequestResponseFormat;
  /**
   * @remarks
   * The random seed.
   * 
   * @example
   * 42
   */
  seed?: number;
  /**
   * @remarks
   * Specifies whether to skip special tokens.
   * 
   * @example
   * true
   */
  skipSpecialTokens?: boolean;
  /**
   * @remarks
   * The stop sequences. This parameter is compatible with a single string or an array of strings. The array format is shown here.
   * 
   * @example
   * ["DONE"]
   */
  stop?: string[];
  /**
   * @remarks
   * The list of vLLM stop token IDs.
   * 
   * @example
   * [1,2]
   */
  stopTokenIds?: number[];
  /**
   * @remarks
   * Specifies whether to use Server-Sent Events (SSE) for streaming responses. You must set this parameter to true for this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The OpenAI-compatible streaming options.
   */
  streamOptions?: GuiChatCompletionStreamRequestStreamOptions;
  /**
   * @remarks
   * The vLLM structured output constraints.
   */
  structuredOutputs?: GuiChatCompletionStreamRequestStructuredOutputs;
  /**
   * @remarks
   * The sampling temperature, which overrides the default value of the Mobile-Use Agent primary model.
   * 
   * @example
   * 0.2
   */
  temperature?: number;
  /**
   * @remarks
   * The vLLM Top-K sampling parameter.
   * 
   * @example
   * 20
   */
  topK?: number;
  /**
   * @remarks
   * A model-compatible parameter. The JSON field is top_logprobs. Whether this parameter is accepted depends on the model. The current Mobile-Use Agent response does not return candidate token probability details.
   * 
   * @example
   * 3
   */
  topLogprobs?: number;
  /**
   * @remarks
   * The Top-P nucleus sampling parameter, which overrides the default value of the Mobile-Use Agent primary model.
   * 
   * @example
   * 0.9
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      allowedTokenIds: 'allowedTokenIds',
      badWords: 'badWords',
      chatTemplateKwargs: 'chatTemplateKwargs',
      frequencyPenalty: 'frequencyPenalty',
      ignoreEos: 'ignoreEos',
      includeReasoning: 'includeReasoning',
      logprobs: 'logprobs',
      maxCompletionTokens: 'maxCompletionTokens',
      maxTokens: 'maxTokens',
      messages: 'messages',
      metadata: 'metadata',
      minP: 'minP',
      minTokens: 'minTokens',
      mmProcessorKwargs: 'mmProcessorKwargs',
      model: 'model',
      n: 'n',
      parallelToolCalls: 'parallelToolCalls',
      presencePenalty: 'presencePenalty',
      promptLogprobs: 'promptLogprobs',
      reasoningEffort: 'reasoningEffort',
      repetitionPenalty: 'repetitionPenalty',
      responseFormat: 'responseFormat',
      seed: 'seed',
      skipSpecialTokens: 'skipSpecialTokens',
      stop: 'stop',
      stopTokenIds: 'stopTokenIds',
      stream: 'stream',
      streamOptions: 'streamOptions',
      structuredOutputs: 'structuredOutputs',
      temperature: 'temperature',
      topK: 'topK',
      topLogprobs: 'topLogprobs',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIds: { 'type': 'array', 'itemType': 'number' },
      badWords: { 'type': 'array', 'itemType': 'string' },
      chatTemplateKwargs: GuiChatCompletionStreamRequestChatTemplateKwargs,
      frequencyPenalty: 'number',
      ignoreEos: 'boolean',
      includeReasoning: 'boolean',
      logprobs: 'boolean',
      maxCompletionTokens: 'number',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': GuiChatCompletionStreamRequestMessages },
      metadata: GuiChatCompletionStreamRequestMetadata,
      minP: 'number',
      minTokens: 'number',
      mmProcessorKwargs: GuiChatCompletionStreamRequestMmProcessorKwargs,
      model: 'string',
      n: 'number',
      parallelToolCalls: 'boolean',
      presencePenalty: 'number',
      promptLogprobs: 'number',
      reasoningEffort: 'string',
      repetitionPenalty: 'number',
      responseFormat: GuiChatCompletionStreamRequestResponseFormat,
      seed: 'number',
      skipSpecialTokens: 'boolean',
      stop: { 'type': 'array', 'itemType': 'string' },
      stopTokenIds: { 'type': 'array', 'itemType': 'number' },
      stream: 'boolean',
      streamOptions: GuiChatCompletionStreamRequestStreamOptions,
      structuredOutputs: GuiChatCompletionStreamRequestStructuredOutputs,
      temperature: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedTokenIds)) {
      $dara.Model.validateArray(this.allowedTokenIds);
    }
    if(Array.isArray(this.badWords)) {
      $dara.Model.validateArray(this.badWords);
    }
    if(this.chatTemplateKwargs && typeof (this.chatTemplateKwargs as any).validate === 'function') {
      (this.chatTemplateKwargs as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.mmProcessorKwargs && typeof (this.mmProcessorKwargs as any).validate === 'function') {
      (this.mmProcessorKwargs as any).validate();
    }
    if(this.responseFormat && typeof (this.responseFormat as any).validate === 'function') {
      (this.responseFormat as any).validate();
    }
    if(Array.isArray(this.stop)) {
      $dara.Model.validateArray(this.stop);
    }
    if(Array.isArray(this.stopTokenIds)) {
      $dara.Model.validateArray(this.stopTokenIds);
    }
    if(this.streamOptions && typeof (this.streamOptions as any).validate === 'function') {
      (this.streamOptions as any).validate();
    }
    if(this.structuredOutputs && typeof (this.structuredOutputs as any).validate === 'function') {
      (this.structuredOutputs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

