// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotTopicBroadcastResponseBodyDataTotalTokenInfo extends $dara.Model {
  /**
   * @example
   * 100
   */
  hotTopicCount?: number;
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 100
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      hotTopicCount: 'HotTopicCount',
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTopicCount: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

