// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HalfLLMImageOcrResponseBodyDataOutputChoicesMessage } from "./HalfLlmimageOcrResponseBodyDataOutputChoicesMessage";


export class HalfLLMImageOcrResponseBodyDataOutputChoices extends $dara.Model {
  /**
   * @example
   * null
   */
  finishReason?: string;
  message?: HalfLLMImageOcrResponseBodyDataOutputChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      finishReason: 'finishReason',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishReason: 'string',
      message: HalfLLMImageOcrResponseBodyDataOutputChoicesMessage,
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

