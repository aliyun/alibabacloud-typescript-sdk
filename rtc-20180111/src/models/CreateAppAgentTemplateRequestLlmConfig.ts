// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAgentTemplateRequestLlmConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ak-1213123123132123131
   */
  apiKey?: string;
  /**
   * @example
   * 5
   */
  historyDepth?: number;
  /**
   * @example
   * 1024
   */
  maxToken?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm
   */
  name?: string;
  prompt?: string;
  /**
   * @example
   * 0.9
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @example
   * https://llm.example.aliyuns.com
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * thirdparty
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
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

