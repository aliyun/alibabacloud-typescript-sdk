// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  tokenMap?: { [key: string]: number };
  /**
   * @example
   * 2
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

