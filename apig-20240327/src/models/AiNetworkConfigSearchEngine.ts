// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiNetworkConfigSearchEngine extends $dara.Model {
  apiKey?: string;
  contentMode?: string;
  count?: number;
  endpoint?: string;
  industry?: string;
  optionArgs?: { [key: string]: string };
  start?: number;
  timeRange?: string;
  timeoutMillisecond?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      contentMode: 'contentMode',
      count: 'count',
      endpoint: 'endpoint',
      industry: 'industry',
      optionArgs: 'optionArgs',
      start: 'start',
      timeRange: 'timeRange',
      timeoutMillisecond: 'timeoutMillisecond',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      contentMode: 'string',
      count: 'number',
      endpoint: 'string',
      industry: 'string',
      optionArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      start: 'number',
      timeRange: 'string',
      timeoutMillisecond: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.optionArgs) {
      $dara.Model.validateMap(this.optionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

