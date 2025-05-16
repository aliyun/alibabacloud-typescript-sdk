// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantRetryConversationResponseBodyDataResult } from "./ExecuteTextbookAssistantRetryConversationResponseBodyDataResult";


export class ExecuteTextbookAssistantRetryConversationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6788e0b4b54c5268c1b78638
   */
  assistant?: string;
  /**
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  result?: ExecuteTextbookAssistantRetryConversationResponseBodyDataResult;
  /**
   * @example
   * 6788e0b45bdfc807f077a5a1
   */
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
      result: ExecuteTextbookAssistantRetryConversationResponseBodyDataResult,
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

