// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherEnglishParaphraseChatMessageRequest extends $dara.Model {
  /**
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * How much is this?
   */
  content?: string;
  /**
   * @example
   * 3
   */
  grade?: number;
  /**
   * @example
   * xxxxxxxxx
   */
  questionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * How to inquire about the price
   */
  questionInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sreaming
   */
  responseMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * How much is this?
   */
  userAnswer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'chatId',
      content: 'content',
      grade: 'grade',
      questionId: 'questionId',
      questionInfo: 'questionInfo',
      responseMode: 'responseMode',
      userAnswer: 'userAnswer',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      content: 'string',
      grade: 'number',
      questionId: 'string',
      questionInfo: 'string',
      responseMode: 'string',
      userAnswer: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

