// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupChatMessagesResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * chat-65382141036853491
   */
  jobId?: string;
  /**
   * @example
   * false
   */
  recalled?: boolean;
  /**
   * @example
   * http://xxxxx.com
   */
  senderAvatarUrl?: string;
  /**
   * @example
   * 64bb4ececc34fc5ec1ca1153
   */
  senderId?: string;
  /**
   * @example
   * test-agent@test-instanceId
   */
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
      recalled: 'Recalled',
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
      recalled: 'boolean',
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

