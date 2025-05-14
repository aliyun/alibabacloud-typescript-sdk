// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSummaryTaskResultResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  imageCount?: number;
  /**
   * @example
   * 0
   */
  imageTokens?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 200
   */
  outputTokens?: number;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'imageCount',
      imageTokens: 'imageTokens',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      imageTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

