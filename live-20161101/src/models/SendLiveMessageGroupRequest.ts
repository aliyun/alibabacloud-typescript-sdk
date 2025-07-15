// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application in which the message is received.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The message body. The body can be up to 15 KB in length.
   * 
   * @example
   * hello,group
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
   * The ID of the group that receives the message.
   * 
   * >  Make sure that the specified group ID exists. Otherwise, a ResourceNotExist error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
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
   * 1
   */
  msgType?: number;
  /**
   * @remarks
   * Specifies whether to disable message caching. Valid values: true and false. Default value: false, which specifies that the message is cached to the recent message list of the group.
   * 
   * @example
   * false
   */
  noCache?: boolean;
  /**
   * @remarks
   * Specifies whether to disable message storage. Valid values: true and false. Default value: false, which specifies that the message is stored for a validity period of 30 days. You can find the message in the response of the ListLiveMessageGroupMessages operation. If you do not want to store the message, set this parameter to true.
   * 
   * @example
   * false
   */
  noStorage?: boolean;
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
   * The additional information about the user who sends the message. The value can be up to 512 bytes in length.
   * 
   * @example
   * uid1meta1
   */
  senderMetaInfo?: string;
  /**
   * @remarks
   * The contribution of the message to the increase in the number of messages of this type. Default value: 1.
   * 
   * @example
   * 1
   */
  staticsIncrease?: number;
  /**
   * @remarks
   * The weight of the message. Default value: 1. A greater value indicates a higher priority. For a message of the highest priority, you can set the weight to 1000000.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      body: 'Body',
      dataCenter: 'DataCenter',
      groupId: 'GroupId',
      msgTid: 'MsgTid',
      msgType: 'MsgType',
      noCache: 'NoCache',
      noStorage: 'NoStorage',
      senderId: 'SenderId',
      senderMetaInfo: 'SenderMetaInfo',
      staticsIncrease: 'StaticsIncrease',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      body: 'string',
      dataCenter: 'string',
      groupId: 'string',
      msgTid: 'string',
      msgType: 'number',
      noCache: 'boolean',
      noStorage: 'boolean',
      senderId: 'string',
      senderMetaInfo: 'string',
      staticsIncrease: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

