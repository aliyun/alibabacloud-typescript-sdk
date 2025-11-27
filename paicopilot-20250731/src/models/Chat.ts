// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatDetail } from "./ChatDetail";


export class Chat extends $dara.Model {
  answer?: ChatDetail;
  chatId?: string;
  extraData?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtModified?: string;
  message?: string;
  ownerId?: string;
  question?: ChatDetail;
  sessionId?: string;
  status?: string;
  title?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      chatId: 'ChatId',
      extraData: 'ExtraData',
      gmtCreateTime: 'GmtCreateTime',
      gmtModified: 'GmtModified',
      message: 'Message',
      ownerId: 'OwnerId',
      question: 'Question',
      sessionId: 'SessionId',
      status: 'Status',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: ChatDetail,
      chatId: 'string',
      extraData: 'string',
      gmtCreateTime: 'string',
      gmtModified: 'string',
      message: 'string',
      ownerId: 'string',
      question: ChatDetail,
      sessionId: 'string',
      status: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    if(this.question && typeof (this.question as any).validate === 'function') {
      (this.question as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

