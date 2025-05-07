// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 200
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
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

