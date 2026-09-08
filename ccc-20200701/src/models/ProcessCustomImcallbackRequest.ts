// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessCustomIMCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cf584733-***-***-9699-cb77aa3b7aa6
   */
  accessChannelId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d165de4f-9851-445e-9535-66ebfa72fa51
   */
  conversationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * 消息内容，格式如下：
   * 
   * 
   * 文本消息：
   * { "contentType":"Text", "text":"你好  " }
   * 
   * 图片消息：
   * { "contentType":"Image", "mediaId": "xxx-xxx-xxx", "fileType": "png", "fileSize": 1233 }
   * 
   * 视频消息：
   * { "contentType":"Video", "mediaId": "xxx-xxx-xxx" "duration": 12, "fileSize": 1233, }
   * 
   * 音频消息：
   * { "contentType":"Audio", "mediaId": "xxx-xxx-xxx" "duration": 12, "fileSize": 1233 }
   * 
   * 文件消息：
   * { "contentType":"File", "mediaId": "xxx-xxx-xxx", "fileSize": 223232, "filename": "xyz. zip" }
   */
  messageContent?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  /**
   * @remarks
   * The profile picture ID.
   * 
   * @example
   * xxxx
   */
  senderAvatarMediaId?: string;
  /**
   * @remarks
   * The user ID of the message sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 63061274befd6b545aab4c83
   */
  senderId?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
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

