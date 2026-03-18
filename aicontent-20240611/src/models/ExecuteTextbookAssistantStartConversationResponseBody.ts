// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantStartConversationResponseBodyDataResult extends $dara.Model {
  chineseResult?: string;
  /**
   * @example
   * Good evening! From the book, how does Mike Black introduce himself?
   */
  englishResult?: string;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantStartConversationResponseBodyData extends $dara.Model {
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
  result?: ExecuteTextbookAssistantStartConversationResponseBodyDataResult;
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
      result: ExecuteTextbookAssistantStartConversationResponseBodyDataResult,
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

export class ExecuteTextbookAssistantStartConversationResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantStartConversationResponseBodyData;
  /**
   * @example
   * B_USER_NOT_FOUND_EXCEPTION
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6F73C114-A76E-51AD-99E3-BC7B941B69E0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExecuteTextbookAssistantStartConversationResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

