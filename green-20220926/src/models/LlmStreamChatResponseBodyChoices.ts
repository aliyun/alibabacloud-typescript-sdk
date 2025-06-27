// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LlmStreamChatResponseBodyChoicesDelta } from "./LlmStreamChatResponseBodyChoicesDelta";


export class LlmStreamChatResponseBodyChoices extends $dara.Model {
  delta?: LlmStreamChatResponseBodyChoicesDelta;
  /**
   * @example
   * stop
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * null
   */
  logprobs?: string;
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
      finishReason: 'FinishReason',
      index: 'Index',
      logprobs: 'Logprobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: LlmStreamChatResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
      logprobs: 'string',
    };
  }

  validate() {
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

