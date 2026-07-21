// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherEnglishParaphraseChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID for the chat session.
   * 
   * @example
   * 6788e0b475a4631ffc626722
   */
  chatId?: string;
  /**
   * @remarks
   * The user\\"s chat message.
   * 
   * This parameter is required.
   * 
   * @example
   * How much is this?
   */
  content?: string;
  /**
   * @remarks
   * The grade level.
   * 
   * @example
   * 3
   */
  grade?: number;
  /**
   * @remarks
   * A unique identifier for the question.
   * 
   * @example
   * xxxxxxxxx
   */
  questionId?: string;
  /**
   * @remarks
   * The user\\"s question.
   * 
   * This parameter is required.
   * 
   * @example
   * How to inquire about the price
   */
  questionInfo?: string;
  /**
   * @remarks
   * The response mode. Set this to `streaming` to receive the response as a stream of events.
   * 
   * This parameter is required.
   * 
   * @example
   * sreaming
   */
  responseMode?: string;
  /**
   * @remarks
   * The user\\"s answer to the question.
   * 
   * This parameter is required.
   * 
   * @example
   * How much is this?
   */
  userAnswer?: string;
  /**
   * @remarks
   * The user ID.
   * 
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

