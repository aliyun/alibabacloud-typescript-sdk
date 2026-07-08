// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomTextResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Content.
   * 
   * @example
   * 内容
   */
  content?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @remarks
   * The user who created the custom text.
   * 
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 40
   */
  id?: number;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @remarks
   * Modifier.
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

export class ListCustomTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: ListCustomTextResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Unique request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. true: successful, false: failed.
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
      data: { 'type': 'array', 'itemType': ListCustomTextResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

