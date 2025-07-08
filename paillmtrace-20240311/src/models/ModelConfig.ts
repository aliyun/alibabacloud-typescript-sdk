// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelConfig extends $dara.Model {
  apiKey?: string;
  endpoint?: string;
  isSelfHost?: boolean;
  name?: string;
  temperature?: number;
  topP?: number;
  useFunctionCall?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endpoint: 'Endpoint',
      isSelfHost: 'IsSelfHost',
      name: 'Name',
      temperature: 'Temperature',
      topP: 'TopP',
      useFunctionCall: 'UseFunctionCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endpoint: 'string',
      isSelfHost: 'boolean',
      name: 'string',
      temperature: 'number',
      topP: 'number',
      useFunctionCall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

