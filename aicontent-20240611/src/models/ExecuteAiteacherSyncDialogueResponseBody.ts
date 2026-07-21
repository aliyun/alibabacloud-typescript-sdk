// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherSyncDialogueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The English response from the AI teacher.
   * 
   * @example
   * Thanks, Lily. Do you like meat, Lily?
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
   * Indicates whether the user\\"s response is on topic.
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
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      englishResult: 'string',
      isFinish: 'boolean',
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

export class ExecuteAITeacherSyncDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * []
   */
  data?: ExecuteAITeacherSyncDialogueResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
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
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
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
      data: ExecuteAITeacherSyncDialogueResponseBodyData,
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

