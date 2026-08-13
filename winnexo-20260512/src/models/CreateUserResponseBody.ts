// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * WINNEXO 登录账号
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 用户显示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 是否为新创建的用户（false 表示已有用户加入租户）
   * 
   * @example
   * true
   */
  isNewUser?: boolean;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * WINNEXO 平台用户ID
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      code: 'code',
      displayName: 'displayName',
      isNewUser: 'isNewUser',
      message: 'message',
      requestId: 'requestId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      code: 'string',
      displayName: 'string',
      isNewUser: 'boolean',
      message: 'string',
      requestId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

