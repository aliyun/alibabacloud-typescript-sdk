// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherExpansionDialogueSuggestionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 谢谢莉莉.你喜欢吃肉吗，莉莉？
   */
  chineseResult?: string;
  /**
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

export class GetAITeacherExpansionDialogueSuggestionResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: GetAITeacherExpansionDialogueSuggestionResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
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
      data: GetAITeacherExpansionDialogueSuggestionResponseBodyData,
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

