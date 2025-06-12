// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVisitorChatMessagesResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * http://xxxxx.com/avatar.png
   */
  senderAvatarUrl?: string;
  /**
   * @example
   * fcd020fe-****-1a272a174a7d
   */
  senderId?: string;
  senderName?: string;
  /**
   * @example
   * CUSTOMER
   */
  senderType?: string;
  /**
   * @example
   * 1696126980371
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jobId: 'JobId',
      senderAvatarUrl: 'SenderAvatarUrl',
      senderId: 'SenderId',
      senderName: 'SenderName',
      senderType: 'SenderType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      jobId: 'string',
      senderAvatarUrl: 'string',
      senderId: 'string',
      senderName: 'string',
      senderType: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

