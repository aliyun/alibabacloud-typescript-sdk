// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveMessageGroupMessageRequest extends $dara.Model {
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
   * The data center. It must be the same as the data center that was specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2848162.html) operation to create the interactive messaging application. Valid values: cn-shanghai and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The ID of the user who deletes the message. The ID must be up to 64 bytes in length and can contain letters and digits.
   * 
   * @example
   * 169830****
   */
  deleterId?: string;
  /**
   * @remarks
   * The additional information about the user who performs the deletion operation. The value can be up to 512 bytes in length.
   * 
   * @example
   * testname
   */
  deleterInfo?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the message that you want to delete. Set this parameter to the value of MsgTid that you specified when you called the SendLiveMessageGroup operation. The ID must be up to 64 bytes in length and can contain letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * a74a8fbd3cfe4b2daa8517e4e3******
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataCenter: 'DataCenter',
      deleterId: 'DeleterId',
      deleterInfo: 'DeleterInfo',
      groupId: 'GroupId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataCenter: 'string',
      deleterId: 'string',
      deleterInfo: 'string',
      groupId: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

