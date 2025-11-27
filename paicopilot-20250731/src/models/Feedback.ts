// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Feedback extends $dara.Model {
  chatId?: string;
  feedbackAction?: string;
  feedbackId?: string;
  feedbackMessage?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  gmtModified?: string;
  ownerId?: string;
  sessionId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      feedbackAction: 'FeedbackAction',
      feedbackId: 'FeedbackId',
      feedbackMessage: 'FeedbackMessage',
      gmtCreateTime: 'GmtCreateTime',
      gmtModified: 'GmtModified',
      ownerId: 'OwnerId',
      sessionId: 'SessionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      feedbackAction: 'string',
      feedbackId: 'string',
      feedbackMessage: 'string',
      gmtCreateTime: 'string',
      gmtModified: 'string',
      ownerId: 'string',
      sessionId: 'string',
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

