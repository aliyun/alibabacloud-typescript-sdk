// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataPayloadOutputVideoAnalysisResultUsage extends $dara.Model {
  /**
   * @example
   * 0
   */
  inputTokens?: number;
  /**
   * @example
   * 0
   */
  outputTokens?: number;
  /**
   * @example
   * 0
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

