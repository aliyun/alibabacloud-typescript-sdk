// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteHundredThousandWhysDialogueResponseBodyChoicesDelta } from "./ExecuteHundredThousandWhysDialogueResponseBodyChoicesDelta";


export class ExecuteHundredThousandWhysDialogueResponseBodyChoices extends $dara.Model {
  delta?: ExecuteHundredThousandWhysDialogueResponseBodyChoicesDelta;
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
  static names(): { [key: string]: string } {
    return {
      delta: 'delta',
      finishReason: 'finish_reason',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: ExecuteHundredThousandWhysDialogueResponseBodyChoicesDelta,
      finishReason: 'string',
      index: 'number',
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

