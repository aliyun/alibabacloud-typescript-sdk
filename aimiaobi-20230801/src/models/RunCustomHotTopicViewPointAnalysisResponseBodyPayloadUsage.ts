// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 51
   */
  inputTokens?: number;
  /**
   * @example
   * 79
   */
  outputTokens?: number;
  /**
   * @example
   * 130
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
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

