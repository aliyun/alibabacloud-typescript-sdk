// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunChatResultGenerationResponseBodyChoicesMessage } from "./RunChatResultGenerationResponseBodyChoicesMessage";


export class RunChatResultGenerationResponseBodyChoices extends $dara.Model {
  /**
   * @example
   * null
   */
  finishReason?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  message?: RunChatResultGenerationResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      index: 'number',
      message: RunChatResultGenerationResponseBodyChoicesMessage,
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

