// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveMessageUserMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The data center, which must be the same as the data center specified in [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html). Currently, Shanghai (cn-shanghai) and Singapore (ap-southeast-1) are supported.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The ID of the user who initiates the message deletion. The value consists of uppercase and lowercase letters and digits, and cannot exceed 64 bytes in length. This parameter is required in practice. If not specified, InputInvalid is returned.
   * 
   * @example
   * 169830****
   */
  deleterId?: string;
  /**
   * @remarks
   * The extended information of the user who initiates the message deletion. The value cannot exceed 512 bytes in length.
   * 
   * @example
   * username
   */
  deleterInfo?: string;
  /**
   * @remarks
   * The ID of the message to be deleted, which corresponds to the MsgTid in the send message operation. The value consists of uppercase and lowercase letters and digits, and cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * **********
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the user who receives the delete message notification. The value consists of uppercase and lowercase letters and digits, and cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 169830****
   */
  receiverId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      deleterId: 'DeleterId',
      deleterInfo: 'DeleterInfo',
      messageId: 'MessageId',
      receiverId: 'ReceiverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      deleterId: 'string',
      deleterInfo: 'string',
      messageId: 'string',
      receiverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

