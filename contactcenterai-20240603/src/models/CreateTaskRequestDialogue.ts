// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskRequestDialogueSentences } from "./CreateTaskRequestDialogueSentences";


export class CreateTaskRequestDialogue extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  sentences?: CreateTaskRequestDialogueSentences[];
  /**
   * @example
   * session-01
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sentences: 'sentences',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sentences: { 'type': 'array', 'itemType': CreateTaskRequestDialogueSentences },
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

