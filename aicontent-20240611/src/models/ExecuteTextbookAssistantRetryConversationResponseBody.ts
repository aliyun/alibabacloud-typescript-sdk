// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantRetryConversationResponseBodyDataResult extends $dara.Model {
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

export class ExecuteTextbookAssistantRetryConversationResponseBody extends $dara.Model {
  data?: ExecuteTextbookAssistantRetryConversationResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * null
   */
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
   * 2F2ABF4B-A4F6-5EC7-B287-7EF5B156F1ED
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
      data: ExecuteTextbookAssistantRetryConversationResponseBodyData,
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

