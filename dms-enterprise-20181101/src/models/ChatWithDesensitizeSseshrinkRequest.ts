// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeSSEShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Output audio voice and format; only applicable to the Qwen-Omni model, provided that the modalities parameter is set to ["text", "audio"].
   * 
   * @example
   * {}
   */
  audioJson?: string;
  /**
   * @remarks
   * Masking category. Required when needDataMasking is true.
   * 
   * @example
   * UserInfo
   */
  desensitizationRule?: string;
  /**
   * @remarks
   * The embedding dimensions.
   * 
   * @example
   * 256
   */
  dimensions?: number;
  /**
   * @remarks
   * Specifies whether to enable the code interpreter feature. Takes effect only when model is qwen3-max-preview and enable_thinking is true.
   * 
   * @example
   * false
   */
  enableCodeInterpreter?: boolean;
  /**
   * @remarks
   * Whether to enable web search.
   * 
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * Specifies whether to enable thinking mode when using hybrid thinking models.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * Specifies whether to include token usage information in the final chunk of the streaming response.
   * 
   * @example
   * true
   */
  includeUsage?: boolean;
  /**
   * @remarks
   * The input to the embedding model.
   * 
   * @example
   * test
   */
  input?: string;
  /**
   * @remarks
   * The ID of the instance, used to specify the corresponding data masking rules. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether to return the log probabilities of the output tokens.
   * 
   * @example
   * false
   */
  logprobs?: boolean;
  /**
   * @remarks
   * Limits the maximum number of tokens the model can generate. If the output exceeds this value, generation will be truncated. Suitable for scenarios where you need to control the output length.
   * 
   * @example
   * 256
   */
  maxTokens?: number;
  /**
   * @remarks
   * The conversation context passed to the model, arranged in chronological order.
   * 
   * @example
   * [
   *     {
   *         "content": "你好",
   *         "role": "user"
   *     }
   * ]
   */
  messagesShrink?: string;
  /**
   * @remarks
   * Output data modality; only applicable to the Qwen-Omni model.
   * 
   * @example
   * ["text","audio"]
   */
  modalitiesListShrink?: string;
  /**
   * @remarks
   * The model name. Supported models: Qwen series text-only Large Language Models (commercial and open-source). Multi-modal models are not supported.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * Whether to enable data masking. Defaults to false.
   * 
   * @example
   * false
   */
  needDesensitization?: boolean;
  /**
   * @remarks
   * Model configuration parameters.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * Controls the degree of repetition in generated text. Valid values: [-2.0, 2.0]. Positive values decrease repetition, while negative values increase it.
   * 
   * @example
   * 0.0
   */
  presencePenalty?: string;
  /**
   * @remarks
   * The format of the returned content. Valid values: text: Plain text response; json_object: Standardized JSON string.
   * 
   * @example
   * text
   */
  responseFormat?: string;
  /**
   * @remarks
   * Web search strategy.
   * 
   * @example
   * {}
   */
  searchOptionsShrink?: string;
  /**
   * @remarks
   * Random seed. Used to ensure the reproducibility of results under the same input and parameters. Valid values: [0, 2^31−1].
   * 
   * @example
   * 1
   */
  seed?: number;
  /**
   * @remarks
   * Stop sequences.
   */
  stopShrink?: string;
  /**
   * @remarks
   * Specifies whether to use streaming output.
   * 
   * @example
   * 1-68f11da7e2b826dcc63c5877-hd
   */
  stream?: boolean;
  /**
   * @remarks
   * The sampling temperature controls the diversity of the generated text. The higher the temperature, the more diverse the generated text, and conversely, the more deterministic the generated text. Valid values: [0, 2).
   * 
   * @example
   * 1
   */
  temperature?: string;
  /**
   * @remarks
   * The maximum number of tokens allowed for the model\\"s internal reasoning process.
   * 
   * @example
   * 256
   */
  thinkingBudget?: number;
  /**
   * @remarks
   * Specifies the number of candidate tokens to consider during sampling. Higher values increase randomness, while lower values make the output more deterministic. Set to null or a value greater than 100 to disable.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * Specifies the number of most likely candidate tokens to return at each generation step. Valid values: [0, 5].
   * 
   * @example
   * 1
   */
  topLogprobs?: number;
  /**
   * @remarks
   * The probability threshold for nucleus sampling, used to control the diversity of the generated text. Higher Top-P values result in more diverse generated text. Valid values: (0,1.0].
   * 
   * @example
   * 0.5
   */
  topP?: string;
  /**
   * @remarks
   * Specifies whether to increase the maximum pixel limit of input images to the equivalent of 16,384 tokens.
   * 
   * @example
   * false
   */
  vlHighResolutionImages?: boolean;
  /**
   * @remarks
   * Specifies whether to further identify non-compliant information in both input and output content, building upon the built-in content safety capabilities of the Tongyi Qianwen API.
   * 
   * @example
   * {}
   */
  XDashScopeDataInspection?: string;
  static names(): { [key: string]: string } {
    return {
      audioJson: 'AudioJson',
      desensitizationRule: 'DesensitizationRule',
      dimensions: 'Dimensions',
      enableCodeInterpreter: 'EnableCodeInterpreter',
      enableSearch: 'EnableSearch',
      enableThinking: 'EnableThinking',
      includeUsage: 'IncludeUsage',
      input: 'Input',
      instanceId: 'InstanceId',
      logprobs: 'Logprobs',
      maxTokens: 'MaxTokens',
      messagesShrink: 'Messages',
      modalitiesListShrink: 'ModalitiesList',
      model: 'Model',
      needDesensitization: 'NeedDesensitization',
      parameters: 'Parameters',
      presencePenalty: 'PresencePenalty',
      responseFormat: 'ResponseFormat',
      searchOptionsShrink: 'SearchOptions',
      seed: 'Seed',
      stopShrink: 'Stop',
      stream: 'Stream',
      temperature: 'Temperature',
      thinkingBudget: 'ThinkingBudget',
      topK: 'TopK',
      topLogprobs: 'TopLogprobs',
      topP: 'TopP',
      vlHighResolutionImages: 'VlHighResolutionImages',
      XDashScopeDataInspection: 'XDashScopeDataInspection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioJson: 'string',
      desensitizationRule: 'string',
      dimensions: 'number',
      enableCodeInterpreter: 'boolean',
      enableSearch: 'boolean',
      enableThinking: 'boolean',
      includeUsage: 'boolean',
      input: 'string',
      instanceId: 'number',
      logprobs: 'boolean',
      maxTokens: 'number',
      messagesShrink: 'string',
      modalitiesListShrink: 'string',
      model: 'string',
      needDesensitization: 'boolean',
      parameters: 'string',
      presencePenalty: 'string',
      responseFormat: 'string',
      searchOptionsShrink: 'string',
      seed: 'number',
      stopShrink: 'string',
      stream: 'boolean',
      temperature: 'string',
      thinkingBudget: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'string',
      vlHighResolutionImages: 'boolean',
      XDashScopeDataInspection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

