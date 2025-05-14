// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RealTimeDialogResponseBodyChoicesDelta } from "./RealTimeDialogResponseBodyChoicesDelta";
import { RealTimeDialogResponseBodyChoicesMessage } from "./RealTimeDialogResponseBodyChoicesMessage";


export class RealTimeDialogResponseBodyChoices extends $dara.Model {
  delta?: RealTimeDialogResponseBodyChoicesDelta;
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
  message?: RealTimeDialogResponseBodyChoicesMessage;
  static names(): { [key: string]: string } {
    return {
      delta: 'delta',
      finishReason: 'finishReason',
      index: 'index',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: RealTimeDialogResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
      message: RealTimeDialogResponseBodyChoicesMessage,
    };
  }

  validate() {
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
    }
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

