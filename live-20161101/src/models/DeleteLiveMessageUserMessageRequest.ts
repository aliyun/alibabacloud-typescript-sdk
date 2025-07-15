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
   * The data center where the interactive messaging application is deployed. Set this parameter to the value of DataCenter that you specified when you called the [CreateLiveMessageApp](https://help.aliyun.com/document_detail/2593195.html) operation. Valid values: cn-shanghai (Shanghai) and ap-southeast-1 (Singapore).
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The ID of the user who performs the deletion operation. The ID can contain only letters and digits and can be up to 64 bytes in length.
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
   * username
   */
  deleterInfo?: string;
  /**
   * @remarks
   * The ID of the message that you want to delete. Set this parameter to the value of MsgTid that you specified when you called the SendLiveMessageUser operation. The ID can contain only letters and digits and can be up to 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * **********
   */
  messageId?: string;
  /**
   * @remarks
   * The ID of the user who received the message to delete. The ID can contain only letters and digits and can be up to 64 bytes in length.
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

