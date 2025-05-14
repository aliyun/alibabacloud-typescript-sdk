// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitChatQuestionRequestQuestionList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  reply?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1869300950603128834
   */
  sessionId?: string;
  /**
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39485783475638465
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
      reply: 'reply',
      sessionId: 'sessionId',
      type: 'type',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'string',
      reply: 'string',
      sessionId: 'string',
      type: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

