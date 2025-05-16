// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteTextbookAssistantSseDialogueResponseBodyData } from "./ExecuteTextbookAssistantSseDialogueResponseBodyData";


export class ExecuteTextbookAssistantSseDialogueResponseBody extends $dara.Model {
  /**
   * @example
   * 67e4c9d95bdfc83cd742ae7c
   */
  assistant?: string;
  /**
   * @example
   * 67e374acb54c526c95c4fbd4
   */
  chatId?: string;
  data?: ExecuteTextbookAssistantSseDialogueResponseBodyData;
  /**
   * @example
   * BIZ_ERROR
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 67e4c9d6b54c526c95c53925
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      assistant: 'assistant',
      chatId: 'chatId',
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistant: 'string',
      chatId: 'string',
      data: ExecuteTextbookAssistantSseDialogueResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      user: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

