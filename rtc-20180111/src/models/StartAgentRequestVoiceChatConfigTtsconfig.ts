// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestVoiceChatConfigTTSConfig extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  apiKey?: string;
  filterBrackets?: number[];
  /**
   * @example
   * cosyvoice-v1
   */
  model?: string;
  /**
   * @example
   * 1
   */
  pitch?: number;
  /**
   * @example
   * 1
   */
  rate?: number;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @example
   * longxiaoxia
   */
  voice?: string;
  /**
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      filterBrackets: 'FilterBrackets',
      model: 'Model',
      pitch: 'Pitch',
      rate: 'Rate',
      vendor: 'Vendor',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      filterBrackets: { 'type': 'array', 'itemType': 'number' },
      model: 'string',
      pitch: 'number',
      rate: 'number',
      vendor: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filterBrackets)) {
      $dara.Model.validateArray(this.filterBrackets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

