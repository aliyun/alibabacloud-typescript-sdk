// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessCustomIMCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 420F203D-87ED-599A-B137-D9D914EE9E70
   */
  accessChannelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27578380-d382-11ee-9cca-adec43112a87
   */
  conversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "ContentType": "Text",
   *     "Text": "Hello"
   *   }
   */
  messageContent?: string;
  /**
   * @example
   * FCEFE806-E67C-577E-865B-4ED398F2F648
   */
  requestId?: string;
  /**
   * @example
   * FCEFE806-E67C-577E-865B-4ED398F2F648
   */
  senderAvatarMediaId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 654f1054dcda1b251282cbdf
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

