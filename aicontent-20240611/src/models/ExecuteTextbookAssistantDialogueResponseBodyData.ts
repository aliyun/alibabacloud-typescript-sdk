// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantDialogueResponseBodyDataResult } from "./ExecuteTextbookAssistantDialogueResponseBodyDataResult";


export class ExecuteTextbookAssistantDialogueResponseBodyData extends $dara.Model {
  assistant?: string;
  chatId?: string;
  result?: ExecuteTextbookAssistantDialogueResponseBodyDataResult;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      chatId: 'chatId',
      result: 'result',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      chatId: 'string',
      result: ExecuteTextbookAssistantDialogueResponseBodyDataResult,
      user: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

