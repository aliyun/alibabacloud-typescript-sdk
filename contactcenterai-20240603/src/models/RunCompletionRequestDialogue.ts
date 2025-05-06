// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCompletionRequestDialogueSentences } from "./RunCompletionRequestDialogueSentences";


export class RunCompletionRequestDialogue extends $dara.Model {
  sentences?: RunCompletionRequestDialogueSentences[];
  /**
   * @example
   * d25zc9c7004f8dad2b454d
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'Sentences',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': RunCompletionRequestDialogueSentences },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sentences)) {
      $dara.Model.validateArray(this.sentences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

