// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig extends $dara.Model {
  /**
   * @example
   * qW8GpBOdHK/pv9gdUSVLvQ==
   */
  apiKey?: string;
  /**
   * @example
   * 8
   */
  historyDepth?: number;
  /**
   * @example
   * 1024
   */
  maxToken?: number;
  /**
   * @example
   * deepseek-r1
   */
  model?: string;
  /**
   * @example
   * llm
   */
  name?: string;
  prompt?: string;
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @example
   * https://test.com
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
      name: 'Name',
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
      name: 'string',
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

