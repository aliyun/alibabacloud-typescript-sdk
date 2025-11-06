// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchStaticAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @example
   * 1671175303522
   */
  createTimeStamp?: number;
  /**
   * @example
   * amqp-cn-*********
   */
  instanceId?: string;
  /**
   * @example
   * 1565***********01
   */
  masterUId?: number;
  /**
   * @example
   * OUYwQzM2QjZBRkUxNDRFM***************MzZCNzdDQzoxNjcxNDMwMzkyODI1
   */
  password?: string;
  /**
   * @example
   * 备注示例
   */
  remark?: string;
  /**
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

export class FetchStaticAccountResponseBody extends $dara.Model {
  code?: number;
  data?: FetchStaticAccountResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: FetchStaticAccountResponseBodyData,
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

