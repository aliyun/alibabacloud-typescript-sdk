// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConversationTimelineResponseBody extends $dara.Model {
  /**
   * @example
   * [{"seq":1,"type":"user"}]
   */
  items?: any;
  /**
   * @example
   * 42
   */
  replayCursor?: number;
  /**
   * @example
   * {"run_01":"up"}
   */
  responseFeedback?: any;
  /**
   * @example
   * [{"id":"run_01","modelId":"qwen3-coder"}]
   */
  runs?: any;
  /**
   * @example
   * events
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      replayCursor: 'replayCursor',
      responseFeedback: 'responseFeedback',
      runs: 'runs',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: 'any',
      replayCursor: 'number',
      responseFeedback: 'any',
      runs: 'any',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

