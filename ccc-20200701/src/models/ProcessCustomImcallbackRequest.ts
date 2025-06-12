// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessCustomIMCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d165de4f-9851-445e-9535-66ebfa72fa51
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  messageContent?: string;
  /**
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  /**
   * @example
   * xxxx
   */
  senderAvatarMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63061274befd6b545aab4c83
   */
  senderId?: string;
  /**
   * @example
   * tom
   */
  senderName?: string;
  static names(): { [key: string]: string } {
    return {
      accessChannelId: 'AccessChannelId',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      messageContent: 'MessageContent',
      requestId: 'RequestId',
      senderAvatarMediaId: 'SenderAvatarMediaId',
      senderId: 'SenderId',
      senderName: 'SenderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessChannelId: 'string',
      conversationId: 'string',
      instanceId: 'string',
      messageContent: 'string',
      requestId: 'string',
      senderAvatarMediaId: 'string',
      senderId: 'string',
      senderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

