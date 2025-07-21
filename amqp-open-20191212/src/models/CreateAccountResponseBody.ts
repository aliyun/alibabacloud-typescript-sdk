// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to create the password.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The timestamp that indicates when the password was created. Unit: milliseconds.
   * 
   * @example
   * 1671175303522
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID or RAM user to which the AccessKey pair that is used to create the static username and password belongs.
   * 
   * @example
   * 15657*********01
   */
  masterUId?: number;
  /**
   * @remarks
   * The created static password.
   * 
   * @example
   * NEMxQTYzNjdDRTVDNDI1NUU5NjE3**************1MzNGODoxNjcxMTc1MzEzNTIy
   */
  password?: string;
  /**
   * @remarks
   * The created static username.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      createTimeStamp: 'CreateTimeStamp',
      instanceId: 'InstanceId',
      masterUId: 'MasterUId',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      createTimeStamp: 'number',
      instanceId: 'string',
      masterUId: 'number',
      password: 'string',
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

export class CreateAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAccountResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateAccountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

