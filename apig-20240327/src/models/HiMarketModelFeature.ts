// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketModelFeature extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable multi-modal capabilities. If set to `true`, the model can process requests that include multiple data types, such as text and images.
   */
  enableMultiModal?: boolean;
  /**
   * @remarks
   * Indicates whether to include the model\\"s reasoning process in the response. If set to `true`, the output may contain intermediate steps that show how the model arrived at a conclusion.
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * The maximum number of tokens to generate in the response. A token is a unit of text processed by the model.
   */
  maxTokens?: number;
  /**
   * @remarks
   * The identifier of the model to use for inference.
   */
  model?: string;
  /**
   * @remarks
   * Indicates whether to deliver the response as a continuous stream. If set to `true`, results are sent incrementally.
   */
  streaming?: boolean;
  /**
   * @remarks
   * Controls the randomness of the output. Valid values range from 0 to 1. Higher values, such as 0.8, make the output more random. Lower values, such as 0.2, make the output more deterministic.
   */
  temperature?: number;
  /**
   * @remarks
   * Indicates whether the model can search the web to provide more up-to-date responses.
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

