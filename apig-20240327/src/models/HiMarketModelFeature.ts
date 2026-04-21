// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketModelFeature extends $dara.Model {
  enableMultiModal?: boolean;
  enableThinking?: boolean;
  maxTokens?: number;
  model?: string;
  streaming?: boolean;
  temperature?: number;
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

