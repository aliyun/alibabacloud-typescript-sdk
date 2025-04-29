// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of your Alibaba Cloud account or RAM user. For information about how to obtain an AccessKey pair, see [Create an AccessKey pair](https://help.aliyun.com/document_detail/116401.html).
   * 
   * >  If you use the pair of static username and password that is created by using the Accesskey pair of a RAM user to access ApsaraMQ for RabbitMQ to send and receive messages, make sure that the RAM user is granted the required permissions. For more information, see [RAM policies](https://help.aliyun.com/document_detail/146559.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAccessKeyID
   */
  accountAccessKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the password is created. Unit: milliseconds.
   * 
   * >  This timestamp is specified by you and is used to generate a static password. The timestamp is not the timestamp that indicates when the system generates the password.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance for which you want to create a pair of static username and password.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The AccessKey secret signature. The system generates a static password based on the signature in the request, the AccessKey secret signature, and the username.
   * 
   * The system uses the HMAC-SHA1 algorithm to generate the AccessKey secret signature based on the timestamp that indicates when the username is created and the AccessKey ID. For more information, see the **"Sample code on how to generate a signature"** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c1a6367ce4c4255e9617326f9133ac635******
   */
  secretSign?: string;
  /**
   * @remarks
   * The signature. The system generates a static password based on the signature in the request, the AccessKey secret signature, and the username.
   * 
   * The system uses the HMAC-SHA1 algorithm to generate the signature based on the timestamp that indicates when the username is created and the AccessKey ID. For more information, see the **"Sample code on how to generate a signature"** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 22c2d7d1769cb53c5a6d9213248e2de524******
   */
  signature?: string;
  /**
   * @remarks
   * The static username that you want to create.
   * 
   * The value of this parameter is a Base64-encoded string that is generated based on the instance ID and AccessKey ID. For more information, see the "**Sample code on how to generate a username**" section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Mjo****************
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAccessKey: 'accountAccessKey',
      createTimestamp: 'createTimestamp',
      instanceId: 'instanceId',
      secretSign: 'secretSign',
      signature: 'signature',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAccessKey: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      secretSign: 'string',
      signature: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

