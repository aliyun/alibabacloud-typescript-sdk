// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2ResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 78
   */
  inputTokens?: number;
  /**
   * @example
   * 34
   */
  outputTokens?: number;
  tokenMap?: { [key: string]: number };
  /**
   * @example
   * 38
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      tokenMap: 'TokenMap',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      tokenMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      totalTokens: 'number',
    };
  }

  validate() {
    if(this.tokenMap) {
      $dara.Model.validateMap(this.tokenMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

