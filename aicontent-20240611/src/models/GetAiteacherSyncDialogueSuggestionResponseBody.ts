// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherSyncDialogueSuggestionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The assistant\\"s suggestion in Chinese.
   * 
   * @example
   * 谢谢莉莉.你喜欢吃肉吗，莉莉？
   */
  chineseResult?: string;
  /**
   * @remarks
   * The assistant\\"s suggestion in English.
   * 
   * @example
   * Thanks, Lily. Do you like meat, Lily?
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

export class GetAITeacherSyncDialogueSuggestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that contains the result of the request.
   * 
   * @example
   * []
   */
  data?: GetAITeacherSyncDialogueSuggestionResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
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
      data: GetAITeacherSyncDialogueSuggestionResponseBodyData,
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

