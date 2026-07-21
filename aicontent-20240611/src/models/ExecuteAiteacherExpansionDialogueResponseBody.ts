// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherExpansionDialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AI teacher\\"s response in Chinese.
   * 
   * @example
   * 1
   */
  chineseResult?: string;
  /**
   * @remarks
   * The AI teacher\\"s response in English.
   * 
   * @example
   * 1
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
   * Indicates whether the response is off-topic.
   * 
   * @example
   * true
   */
  isOffTopicControl?: boolean;
  /**
   * @remarks
   * Indicates whether the response is on-topic.
   * 
   * @example
   * true
   */
  isOnTopic?: boolean;
  /**
   * @remarks
   * The index of the current question.
   * 
   * @example
   * 2
   */
  questionIndex?: number;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      questionIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAITeacherExpansionDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * []
   */
  data?: ExecuteAITeacherExpansionDialogueResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * A unique identifier for the request.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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
      data: ExecuteAITeacherExpansionDialogueResponseBodyData,
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

