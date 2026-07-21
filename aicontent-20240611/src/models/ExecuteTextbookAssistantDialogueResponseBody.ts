// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteTextbookAssistantDialogueResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The Textbook Assistant\\"s reply in Chinese.
   * 
   * @example
   * 让我们再看一遍课文。迈克说: “我是迈克·布莱克。”你能试着像迈克那样说吗？
   */
  chineseResult?: string;
  /**
   * @remarks
   * The Textbook Assistant\\"s reply in English.
   * 
   * @example
   * Let\\"s look at the text again. Mike says, \\"I\\"m Mike Black.\\" Can you try saying it like Mike?
   */
  englishResult?: string;
  /**
   * @remarks
   * Indicates whether the dialogue is finished.
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * Indicates whether the task is completed.
   * 
   * @example
   * true
   */
  isTaskCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isTaskCompleted: 'isTaskCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isTaskCompleted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteTextbookAssistantDialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Textbook Assistant\\"s message.
   * 
   * @example
   * 6788f4935bdfc807f077a984
   */
  assistant?: string;
  /**
   * @remarks
   * The chat ID for this turn.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * The returned data.
   */
  result?: ExecuteTextbookAssistantDialogueResponseBodyDataResult;
  /**
   * @remarks
   * The ID of the user\\"s reply.
   * 
   * @example
   * 6788f4905bdfc807f077a982
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

export class ExecuteTextbookAssistantDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ExecuteTextbookAssistantDialogueResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBFA232A-1176-50E6-95AE-50F7A62A28AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: ExecuteTextbookAssistantDialogueResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
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

