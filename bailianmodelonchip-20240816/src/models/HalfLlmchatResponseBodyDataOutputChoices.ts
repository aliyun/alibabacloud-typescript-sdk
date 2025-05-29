// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMChatResponseBodyDataOutputChoicesMessage } from "./HalfLlmchatResponseBodyDataOutputChoicesMessage";


export class HalfLLMChatResponseBodyDataOutputChoices extends $dara.Model {
  /**
   * @example
   * null
   */
  finishReason?: string;
  message?: HalfLLMChatResponseBodyDataOutputChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      message: HalfLLMChatResponseBodyDataOutputChoicesMessage,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

