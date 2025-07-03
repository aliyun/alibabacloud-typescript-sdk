// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAgentTemplateRequestTtsConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ak-1213123123132123131
   */
  apiKey?: string;
  filterBrackets?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tts
   */
  name?: string;
  /**
   * @example
   * 0.8
   */
  pitch?: number;
  /**
   * @example
   * 0.8
   */
  rate?: number;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @example
   * longcheng
   */
  voice?: string;
  /**
   * @example
   * 70
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      filterBrackets: 'FilterBrackets',
      name: 'Name',
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
      name: 'string',
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

