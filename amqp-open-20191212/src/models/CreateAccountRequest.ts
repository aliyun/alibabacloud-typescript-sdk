// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks on the static user.
   * 
   * @example
   * *** environment
   */
  remark?: string;
  /**
   * @remarks
   * The AccessKey ID of your Alibaba Cloud account or RAM user. For more information about how to obtain an AccessKey ID, see [Create an AccessKey](https://help.aliyun.com/document_detail/116401.html).
   * 
   * > If you use the AccessKey of a RAM user to create a static username and password to access ApsaraMQ for RabbitMQ and to send and receive messages, make sure that the RAM user is granted the required permissions. For more information, see [RAM access policies](https://help.aliyun.com/document_detail/146559.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAccessKeyID
   */
  accountAccessKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the username and password are created. Unit: milliseconds.
   * 
   * > This timestamp is used to calculate the static password. You can customize this value. This is not the timestamp that the system generates when the username and password are created.
   * 
   * This parameter is required.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance. This specifies the instance for which you want to create a static username and password.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The signature of the AccessKey secret. The system calculates the static password based on the signature, the AccessKey secret signature, and the username.
   * 
   * The AccessKey secret signature is calculated using the HmacSHA1 algorithm on the creation timestamp of the specified username and the AccessKey ID. For more information about how to calculate the signature, see the **Signature algorithm sample code** section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c1a6367ce4c4255e9617326f9133ac635******
   */
  secretSign?: string;
  /**
   * @remarks
   * The signature. The system calculates the static password based on the signature, the AccessKey secret signature, and the username.
   * 
   * The signature is calculated using the HmacSHA1 algorithm on the creation timestamp of the specified username and the AccessKey ID. For more information about how to calculate the signature, see the **Signature algorithm sample code** section in this topic.
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
   * The value of this parameter is a Base64-encoded string that is constructed from the instance ID and the AccessKey ID. For more information about how to calculate the value, see the **Username calculation sample code** section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Mjo****************
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
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
      remark: 'string',
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

