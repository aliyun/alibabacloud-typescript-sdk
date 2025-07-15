// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomTextResponseBodyData extends $dara.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @example
   * 34
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @example
   * 修改用户
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetCustomTextResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomTextResponseBodyData,
      httpStatusCode: 'number',
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

