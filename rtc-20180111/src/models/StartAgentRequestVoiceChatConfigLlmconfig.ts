// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestVoiceChatConfigLLMConfig extends $dara.Model {
  /**
   * @example
   * xxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * 3
   */
  historyDepth?: number;
  /**
   * @example
   * 500
   */
  maxToken?: number;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * xxxx
   */
  prompt?: string;
  /**
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @example
   * https://xxxxx
   */
  url?: string;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
      model: 'Model',
      prompt: 'Prompt',
      temperature: 'Temperature',
      topP: 'TopP',
      url: 'Url',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      historyDepth: 'number',
      maxToken: 'number',
      model: 'string',
      prompt: 'string',
      temperature: 'number',
      topP: 'number',
      url: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

