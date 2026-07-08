// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomTextResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Content
   * 
   * @example
   * 内容
   */
  content?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @remarks
   * Created by
   * 
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 34
   */
  id?: number;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @remarks
   * Update user
   * 
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
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetCustomTextResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Fault description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful: true for success, false for failure
   * 
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

