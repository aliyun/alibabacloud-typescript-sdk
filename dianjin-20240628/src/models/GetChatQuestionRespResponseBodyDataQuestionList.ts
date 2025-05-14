// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatQuestionRespResponseBodyDataQuestionList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2024-11-17 10:05:00
   */
  gmtCreate?: string;
  oriContent?: string;
  reply?: string;
  /**
   * @example
   * 1732846760323001
   */
  sessionId?: string;
  /**
   * @example
   * PRODUCT_QA
   */
  type?: string;
  /**
   * @example
   * 39847834568436
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      gmtCreate: 'gmtCreate',
      oriContent: 'oriContent',
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
      oriContent: 'string',
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

