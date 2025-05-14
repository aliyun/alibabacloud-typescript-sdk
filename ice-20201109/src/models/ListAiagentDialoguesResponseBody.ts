// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAIAgentDialoguesResponseBodyDialogues } from "./ListAiagentDialoguesResponseBodyDialogues";


export class ListAIAgentDialoguesResponseBody extends $dara.Model {
  dialogues?: ListAIAgentDialoguesResponseBodyDialogues[];
  /**
   * @example
   * 7B117AF5-***************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogues: 'Dialogues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogues: { 'type': 'array', 'itemType': ListAIAgentDialoguesResponseBodyDialogues },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

