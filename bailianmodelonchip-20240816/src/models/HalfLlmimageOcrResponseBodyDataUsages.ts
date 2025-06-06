// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMImageOcrResponseBodyDataUsages extends $dara.Model {
  /**
   * @example
   * 771
   */
  inputTokens?: number;
  /**
   * @example
   * 563
   */
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

