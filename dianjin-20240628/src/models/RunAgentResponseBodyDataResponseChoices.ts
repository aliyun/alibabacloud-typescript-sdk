// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunAgentResponseBodyDataResponseChoicesMessage } from "./RunAgentResponseBodyDataResponseChoicesMessage";


export class RunAgentResponseBodyDataResponseChoices extends $dara.Model {
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
  message?: RunAgentResponseBodyDataResponseChoicesMessage;
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
      message: RunAgentResponseBodyDataResponseChoicesMessage,
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

