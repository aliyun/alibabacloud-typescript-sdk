// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The model type. Valid values:
   * - Reasoning: Deep thinking.
   * - VU: Visual understanding.
   * - IG: Image generation.
   * - VG: Video generation.
   * - ASR: Speech recognition.
   * - TTS: Speech synthesis.
   * - ME: Multimodal embedding.
   * - Realtime-Omni: Real-time omni-modal.
   * - Multimodal-Omni: Omni-modal.
   * - Realtime-Text-to-Speech: Real-time speech synthesis.
   * - TG: Text generation.
   * - TR: Text embedding.
   * - Realtime-ASR: Real-time speech recognition.
   * - Realtime-Audio-Translate: Real-time audio translation.
   * - 3D-generation: 3D generation.
   * - Realtime-Chatting: Real-time voice conversation.
   */
  capabilitiesShrink?: string;
  /**
   * @remarks
   * The context window size used to filter models with a context window smaller than this value.
   * 
   * @example
   * 10
   */
  contextWindow?: number;
  /**
   * @remarks
   * The model capability. Valid values:
   * - model-experience: Playground.
   * - function-calling: Function calling.
   * - structured-outputs: Structured output.
   * - web-search: Web search.
   * - prefix-completion: Partial mode.
   * - cache: Cache.
   * - batch: Batch inference.
   * - fine-tuning: Model fine-tuning.
   */
  featuresShrink?: string;
  /**
   * @remarks
   * The language. Valid values:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The maximum number of results to return. Valid values: 0 to 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model name for exact match.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The model name for fuzzy match.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The provider. Valid values:
   * - qwen: Alibaba Cloud - Qwen.
   * - zhipu-ai: Zhipu AI.
   * - wan: Alibaba Cloud - Wan.
   * - qwen-domain-model: Alibaba Cloud - Domain Model.
   * - mini-max: MiniMax.
   * - moonshot-ai: Moonshot AI.
   * - deepseek: DeepSeek.
   * - happyhorse: Alibaba Cloud - HappyHorse.
   * - kling: Kling AI.
   * - pixverse: PixVerse.
   * - vidu: Vidu.
   * - tripo: Tripo.
   * - xiaomi: Xiaomi MiMo.
   */
  providersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      capabilitiesShrink: 'capabilities',
      contextWindow: 'contextWindow',
      featuresShrink: 'features',
      language: 'language',
      maxResults: 'maxResults',
      model: 'model',
      name: 'name',
      nextToken: 'nextToken',
      providersShrink: 'providers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilitiesShrink: 'string',
      contextWindow: 'number',
      featuresShrink: 'string',
      language: 'string',
      maxResults: 'number',
      model: 'string',
      name: 'string',
      nextToken: 'string',
      providersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

