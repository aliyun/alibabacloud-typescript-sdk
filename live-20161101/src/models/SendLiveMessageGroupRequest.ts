// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLiveMessageGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application that is used to receive the message.
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
   * hello,group
   */
  body?: string;
  /**
   * @remarks
   * The data center, which must be the same as the data center specified in [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html). Valid values:
   * 
   * - cn-shanghai: Shanghai
   * - ap-southeast-1: Singapore
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The ID of the group that receives the message.
   * 
   * > Make sure that the specified GroupId is available. Otherwise, a ResourceNotExist error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The unique identifier of the message. This parameter is used to delete the message. The ID can contain only letters and digits and can be up to 64 bytes in length.
   * 
   * @example
   * 169830****
   */
  msgTid?: string;
  /**
   * @remarks
   * The message type. The total number of message types sent within a single group cannot exceed 30.
   * 
   * @example
   * 1
   */
  msgType?: number;
  /**
   * @remarks
   * Specifies whether to disable message caching to the list of the latest messages in the group. Valid values: true and false. Default value: false, which indicates that the message is cached.
   * 
   * @example
   * false
   */
  noCache?: boolean;
  /**
   * @remarks
   * Specifies whether to disable message storage. Valid values: true and false. Default value: false, which indicates that the message is stored for a validity period of 30 days. You can find the message in the response of the ListLiveMessageGroupMessages operation. If you do not need to store the message, set this parameter to true.
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
   * The weight of the message. Default value: 1.
   * 
   * - For low-priority messages such as likes, you can set the weight to 1.
   * - For regular text messages such as bullet comments, you can set the weight to 5.
   * - For high-priority messages such as red envelopes and gifts, you can set the weight to 1000000.
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

