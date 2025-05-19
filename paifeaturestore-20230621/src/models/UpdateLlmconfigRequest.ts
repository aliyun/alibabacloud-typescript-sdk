// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLLMConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apikey-***
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @example
   * 8
   */
  batchSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text-embedding-v1
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-config1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  rps?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      baseUrl: 'BaseUrl',
      batchSize: 'BatchSize',
      maxTokens: 'MaxTokens',
      model: 'Model',
      name: 'Name',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      batchSize: 'number',
      maxTokens: 'number',
      model: 'string',
      name: 'string',
      rps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

