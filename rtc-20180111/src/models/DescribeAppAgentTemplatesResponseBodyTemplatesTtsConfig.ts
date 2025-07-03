// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig extends $dara.Model {
  /**
   * @example
   * N5448VFGI2mXJU8a/A03VQ==
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
   * 50
   */
  rate?: number;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @example
   * longwan
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
      model: 'string',
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

