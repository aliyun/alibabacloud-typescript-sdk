// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaChatCompletionStreamRequestChatTemplateKwargs extends $dara.Model {
  /**
   * @remarks
   * Controls whether the model generates reasoning_content through chat_template_kwargs. This value is passed to the model used by the Mobile Planner Agent.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * Specifies whether the model preserves and reuses existing reasoning content in subsequent turns. Passed through as-is per vLLM/Qwen chat_template_kwargs.
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

export class PaChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @remarks
   * The image URL. Remote images must use HTTPS. Base64 Data URLs are also accepted.
   * 
   * @example
   * https://example.com/image.png
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

export class PaChatCompletionStreamRequestMessagesContent extends $dara.Model {
  /**
   * @remarks
   * The image reference when type=image_url. Supports HTTPS URLs or data:image/...;base64,... format.
   */
  imageUrl?: PaChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @remarks
   * The non-empty text when type=text.
   * 
   * @example
   * Analyze this image
   */
  text?: string;
  /**
   * @remarks
   * The content part type. Mobile Planner Agent user messages support text or image_url.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: PaChatCompletionStreamRequestMessagesContentImageUrl,
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

export class PaChatCompletionStreamRequestMessagesToolCallsFunction extends $dara.Model {
  /**
   * @remarks
   * The JSON object string of function arguments.
   * 
   * @example
   * {"city":"Hangzhou"}
   */
  arguments?: string;
  /**
   * @remarks
   * The name of the function to call.
   * 
   * @example
   * get_weather
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

export class PaChatCompletionStreamRequestMessagesToolCalls extends $dara.Model {
  /**
   * @remarks
   * The function information of a historical tool invocation entry, including name and arguments as a JSON character string. Retain the actual returned values in subsequent turns.
   */
  function?: PaChatCompletionStreamRequestMessagesToolCallsFunction;
  /**
   * @remarks
   * The tool invocation ID. Subsequent tool messages reference this through tool_call_id.
   * 
   * @example
   * call_weather_1
   */
  id?: string;
  /**
   * @remarks
   * The tool invocation type. Currently fixed as function.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: PaChatCompletionStreamRequestMessagesToolCallsFunction,
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The message content. Mobile Planner Agent supports text and multimodal content. Image URLs or base64 Data URLs are passed through to the Mobile Planner Agent model if it supports multimodal input.
   * 
   * @example
   * Analyze the image content
   */
  content?: PaChatCompletionStreamRequestMessagesContent[];
  /**
   * @remarks
   * The message role: user, assistant, tool, system, or developer. system/developer is used for optional per-turn text instruction overrides. If omitted, the instructions from the instance configuration are used. Tool results use tool and are associated with tool_call_id.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * Required when role=tool. Must match an id from the preceding assistant.tool_calls.
   * 
   * @example
   * call_weather_1
   */
  toolCallId?: string;
  /**
   * @remarks
   * The list of function invocation entries that can be carried when role=assistant. Used for multi-turn tool invocation continuation.
   */
  toolCalls?: PaChatCompletionStreamRequestMessagesToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCallId: 'toolCallId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessagesContent },
      role: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessagesToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
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

export class PaChatCompletionStreamRequestMmProcessorKwargs extends $dara.Model {
  /**
   * @remarks
   * Example: the maximum number of dynamic image patches allowed by the vision model.
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

export class PaChatCompletionStreamRequestResponseFormat extends $dara.Model {
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

export class PaChatCompletionStreamRequestStreamOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to output a usage statistics chunk before data:[DONE].
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

export class PaChatCompletionStreamRequestStructuredOutputs extends $dara.Model {
  /**
   * @remarks
   * The set of allowed enumeration text values.
   * 
   * @example
   * ["yes","no"]
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

export class PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity extends $dara.Model {
  /**
   * @remarks
   * The sample parameter description.
   * 
   * @example
   * The name of the city for which to query the weather
   */
  description?: string;
  /**
   * @remarks
   * The JSON Schema type of the sample city field.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class PaChatCompletionStreamRequestToolsFunctionParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The Schema for the sample business parameter city. The actual fields are determined by the caller\\"s tool definition.
   */
  city?: PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity,
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestToolsFunctionParameters extends $dara.Model {
  /**
   * @remarks
   * The property definitions of the JSON Schema.
   */
  properties?: PaChatCompletionStreamRequestToolsFunctionParametersProperties;
  /**
   * @remarks
   * The array of required field names in the JSON Schema.
   */
  required?: string[];
  /**
   * @remarks
   * The root Schema type of the function parameters. Typically set to object.
   * 
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: PaChatCompletionStreamRequestToolsFunctionParametersProperties,
      required: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestToolsFunction extends $dara.Model {
  /**
   * @remarks
   * The description of the function purpose. The model uses this to determine when to call the tool.
   * 
   * @example
   * Query the weather for a specified city
   */
  description?: string;
  /**
   * @remarks
   * The function name. This parameter is required. Used to match assistant.tool_calls with subsequent tool results.
   * 
   * @example
   * get_weather
   */
  name?: string;
  /**
   * @remarks
   * The JSON Schema for function parameters, passed to the model as raw JSON. If not provided, an empty object Schema is used.
   */
  parameters?: PaChatCompletionStreamRequestToolsFunctionParameters;
  /**
   * @remarks
   * Specifies whether the model must strictly follow the function parameter JSON Schema.
   * 
   * @example
   * true
   */
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      strict: 'strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: PaChatCompletionStreamRequestToolsFunctionParameters,
      strict: 'boolean',
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

export class PaChatCompletionStreamRequestTools extends $dara.Model {
  /**
   * @remarks
   * The function tool definition, including the name, description, and JSON Schema parameters.
   */
  function?: PaChatCompletionStreamRequestToolsFunction;
  /**
   * @remarks
   * The tool type. This parameter must be set to function.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: PaChatCompletionStreamRequestToolsFunction,
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelist of token IDs allowed for generation.
   * 
   * @example
   * [10,11]
   */
  allowedTokenIds?: number[];
  /**
   * @remarks
   * The list of words or strings prohibited from generation.
   * 
   * @example
   * ["blocked"]
   */
  badWords?: string[];
  /**
   * @remarks
   * The vLLM/OpenAI-Compatible template parameter object. Request values are merged with model defaults, with request keys taking precedence, and passed to the model as-is.
   */
  chatTemplateKwargs?: PaChatCompletionStreamRequestChatTemplateKwargs;
  /**
   * @remarks
   * The frequency penalty parameter passed through to the Mobile Planner Agent model.
   * 
   * @example
   * 0.0
   */
  frequencyPenalty?: number;
  /**
   * @remarks
   * Specifies whether to ignore EOS and continue generation.
   * 
   * @example
   * false
   */
  ignoreEos?: boolean;
  /**
   * @remarks
   * Specifies whether to request reasoning content from the upstream. The actual capability depends on the model.
   * 
   * @example
   * true
   */
  includeReasoning?: boolean;
  /**
   * @remarks
   * A model-compatible parameter with the JSON field name logprobs. Whether it is accepted and takes effect depends on the model used by the instance. The current Agent response does not provide token log probability details.
   * 
   * @example
   * false
   */
  logprobs?: boolean;
  /**
   * @remarks
   * The maximum number of completion tokens. Must be greater than 0 if provided, and is passed as an OpenAI-compatible model parameter.
   * 
   * @example
   * 2048
   */
  maxCompletionTokens?: number;
  /**
   * @remarks
   * The OpenAI-compatible maximum number of generated tokens. Must be greater than 0 if provided.
   * 
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of conversation messages. The first call can submit one turn or an existing multi-turn conversation. When continuing with an existing session ID, retain the complete and unmodified historical message prefix and append the current turn messages. Tool results are associated through role=tool and the corresponding tool_call_id.
   * 
   * This parameter is required.
   */
  messages?: PaChatCompletionStreamRequestMessages[];
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
   * The multimodal preprocessor parameters passed through to vLLM as-is by key.
   */
  mmProcessorKwargs?: PaChatCompletionStreamRequestMmProcessorKwargs;
  /**
   * @remarks
   * Reserved for OpenAI client compatibility. Ignored during routing. The actual model is determined by the published instance configuration. The model field in the response is always an empty string.
   * 
   * @example
   * " "
   */
  model?: string;
  /**
   * @remarks
   * Set this parameter to 1. Whether the model accepts this parameter depends on the model. The current Mobile Planner Agent response does not return multiple candidate results. Do not use this parameter for multiple-candidate responses.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * Specifies whether the model is allowed to generate multiple tool calling requests in parallel. The model invokes tools concurrently when this parameter is enabled.
   * 
   * @example
   * false
   */
  parallelToolCalls?: boolean;
  /**
   * @remarks
   * The presence penalty parameter, passed through to the Mobile Planner Agent model.
   * 
   * @example
   * 0.0
   */
  presencePenalty?: number;
  /**
   * @remarks
   * A model compatibility parameter. The JSON field is prompt_logprobs. Whether the model accepts this parameter depends on the model. The current Agent response does not return probability details for input tokens.
   * 
   * @example
   * 2
   */
  promptLogprobs?: number;
  /**
   * @remarks
   * The OpenAI-compatible reasoning effort level, such as low, medium, or high.
   * 
   * @example
   * high
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
   * The structured response format, such as json_object or json_schema.
   */
  responseFormat?: PaChatCompletionStreamRequestResponseFormat;
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
   * The stop sequences. Compatible with a single string or an array of strings. This field is displayed in array format.
   * 
   * @example
   * ["END"]
   */
  stop?: string[];
  /**
   * @remarks
   * The vLLM stop token ID list.
   * 
   * @example
   * [1,2]
   */
  stopTokenIds?: number[];
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
   * The OpenAI-compatible streaming options.
   */
  streamOptions?: PaChatCompletionStreamRequestStreamOptions;
  /**
   * @remarks
   * The vLLM structured output constraints.
   */
  structuredOutputs?: PaChatCompletionStreamRequestStructuredOutputs;
  /**
   * @remarks
   * The sampling temperature. Passed as an OpenAI-compatible model parameter to override the model default value.
   * 
   * @example
   * 0.2
   */
  temperature?: number;
  /**
   * @remarks
   * The tool choice strategy. Valid values: auto, none, required, or a named selection supported by the model.
   * 
   * @example
   * auto
   */
  toolChoice?: string;
  /**
   * @remarks
   * The array of function tool definitions available for this request. Mobile Planner Agent registers each named function in the runtime Toolkit and returns tool_calls in the streaming response.
   */
  tools?: PaChatCompletionStreamRequestTools[];
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
   * A model compatibility parameter. The JSON field is top_logprobs. Used for models that support this feature. The current Agent response does not provide candidate token probability details.
   * 
   * @example
   * 3
   */
  topLogprobs?: number;
  /**
   * @remarks
   * Top-P sampling parameter. Passed as an OpenAI-compatible model parameter to override the model default value.
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
      toolChoice: 'toolChoice',
      tools: 'tools',
      topK: 'topK',
      topLogprobs: 'topLogprobs',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIds: { 'type': 'array', 'itemType': 'number' },
      badWords: { 'type': 'array', 'itemType': 'string' },
      chatTemplateKwargs: PaChatCompletionStreamRequestChatTemplateKwargs,
      frequencyPenalty: 'number',
      ignoreEos: 'boolean',
      includeReasoning: 'boolean',
      logprobs: 'boolean',
      maxCompletionTokens: 'number',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessages },
      minP: 'number',
      minTokens: 'number',
      mmProcessorKwargs: PaChatCompletionStreamRequestMmProcessorKwargs,
      model: 'string',
      n: 'number',
      parallelToolCalls: 'boolean',
      presencePenalty: 'number',
      promptLogprobs: 'number',
      reasoningEffort: 'string',
      repetitionPenalty: 'number',
      responseFormat: PaChatCompletionStreamRequestResponseFormat,
      seed: 'number',
      skipSpecialTokens: 'boolean',
      stop: { 'type': 'array', 'itemType': 'string' },
      stopTokenIds: { 'type': 'array', 'itemType': 'number' },
      stream: 'boolean',
      streamOptions: PaChatCompletionStreamRequestStreamOptions,
      structuredOutputs: PaChatCompletionStreamRequestStructuredOutputs,
      temperature: 'number',
      toolChoice: 'string',
      tools: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestTools },
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
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

