// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketModelFeature extends $dara.Model {
  /**
   * @remarks
   * Indicates whether multimodal input is supported.
   * 
   * @example
   * false
   */
  enableMultiModal?: boolean;
  /**
   * @remarks
   * Indicates whether chain-of-thought (Thinking) is supported.
   * 
   * @example
   * false
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * The maximum number of tokens supported by the model.
   * 
   * @example
   * 8192
   */
  maxTokens?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * Indicates whether streaming output is supported.
   * 
   * @example
   * true
   */
  streaming?: boolean;
  /**
   * @remarks
   * The temperature parameter that controls the randomness of generation.
   * 
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @remarks
   * Indicates whether web search is supported.
   * 
   * @example
   * false
   */
  webSearch?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableMultiModal: 'enableMultiModal',
      enableThinking: 'enableThinking',
      maxTokens: 'maxTokens',
      model: 'model',
      streaming: 'streaming',
      temperature: 'temperature',
      webSearch: 'webSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMultiModal: 'boolean',
      enableThinking: 'boolean',
      maxTokens: 'number',
      model: 'string',
      streaming: 'boolean',
      temperature: 'number',
      webSearch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

