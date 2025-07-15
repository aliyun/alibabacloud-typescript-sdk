// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application in which the message is sent.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The message body. It can be up to 15 KB in length.
   * 
   * @example
   * hello, user
   */
  body?: string;
  /**
   * @remarks
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * Specifies whether to set the message as a highly reliable message. A highly reliable message ensures that success is returned only after the receiver has received the message and responded. If the receiver does not respond within 3 seconds, failure is returned.
   * 
   * *   true: sets the message as a highly reliable message.
   * *   false (default): does not set the message as a highly reliable message.
   * 
   * >  This parameter is supported only by the client SDK V1.5.1 and later. When you send a message to a client with an earlier SDK version, the message can be successfully sent without waiting for an acknowledgement (ACK) response.
   * 
   * @example
   * false
   */
  highReliability?: boolean;
  /**
   * @remarks
   * The ID of the message, which is a unique identifier that can be used to delete the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * @example
   * 169830****
   */
  msgTid?: string;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * 2
   */
  msgType?: number;
  /**
   * @remarks
   * The ID of the user who receives the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * >  Make sure that the user who receives the message is online. You can call the CheckLiveMessageUsersOnline operation to query whether the user is online.
   * 
   * This parameter is required.
   * 
   * @example
   * uid2
   */
  receiverId?: string;
  /**
   * @remarks
   * The ID of the user who sends the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * uid1
   */
  senderId?: string;
  /**
   * @remarks
   * The additional information about the user who sends the message. It can be up to 512 bytes in length.
   * 
   * @example
   * uid1meta1
   */
  senderInfo?: string;
  /**
   * @remarks
   * Specifies whether to store the message.
   * 
   * *   true: stores the message.
   * *   false (default): does not store the message.
   * 
   * @example
   * false
   */
  storage?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      body: 'Body',
      dataCenter: 'DataCenter',
      highReliability: 'HighReliability',
      msgTid: 'MsgTid',
      msgType: 'MsgType',
      receiverId: 'ReceiverId',
      senderId: 'SenderId',
      senderInfo: 'SenderInfo',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      body: 'string',
      dataCenter: 'string',
      highReliability: 'boolean',
      msgTid: 'string',
      msgType: 'number',
      receiverId: 'string',
      senderId: 'string',
      senderInfo: 'string',
      storage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

