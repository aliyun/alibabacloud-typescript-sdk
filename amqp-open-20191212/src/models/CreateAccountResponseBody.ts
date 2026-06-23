// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to create the username and password.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The timestamp when the username and password were created. Unit: milliseconds.
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
   * The ID of the Alibaba Cloud account or RAM user that owns the AccessKey. The AccessKey is used to create the static username and password.
   * 
   * @example
   * 1565***********01
   */
  masterUId?: number;
  /**
   * @remarks
   * The created static password.
   * 
   * @example
   * OUYwQzM2QjZBRkUxNDRFM***************MzZCNzdDQzoxNjcxNDMwMzkyODI1
   */
  password?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * *** environment
   */
  remark?: string;
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
      remark: 'Remark',
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
      remark: 'string',
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
   * The return code. A value of 200 indicates that the request was successful.
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
   * FEBA5E0C-50D0-4FA6-A794-4901E5465***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

