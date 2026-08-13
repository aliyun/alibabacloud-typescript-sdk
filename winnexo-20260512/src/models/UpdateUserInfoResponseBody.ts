// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInfoResponseBodyUserTenantList extends $dara.Model {
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * 租户名称
   * 
   * @example
   * string_value
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      tenantName: 'tenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'number',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInfoResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * 用户头像URL
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatar?: string;
  /**
   * @remarks
   * 是否为超级管理员
   * 
   * @example
   * true
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * 当前登录租户是否为系统租户
   * 
   * @example
   * true
   */
  isSystemTenant?: boolean;
  /**
   * @remarks
   * 用户语言偏好
   * 
   * @example
   * string_value
   */
  languagePreference?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 用户服务描述
   * 
   * @example
   * string_value
   */
  offering?: string;
  /**
   * @remarks
   * 用户服务解析结果（JSON格式）
   * 
   * @example
   * string_value
   */
  parsedOffering?: string;
  /**
   * @remarks
   * 用户角色
   * 
   * @example
   * string_value
   */
  profileRole?: string;
  /**
   * @remarks
   * 用户角色描述
   * 
   * @example
   * string_value
   */
  profileRoleInfo?: string;
  /**
   * @remarks
   * 用户自我介绍
   * 
   * @example
   * string_value
   */
  selfIntroduction?: string;
  /**
   * @remarks
   * 当前租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  tenantList?: UpdateUserInfoResponseBodyUserTenantList[];
  /**
   * @remarks
   * 当前租户名称
   * 
   * @example
   * string_value
   */
  tenantName?: string;
  /**
   * @remarks
   * 用户代码
   * 
   * @example
   * string_value
   */
  userCode?: string;
  /**
   * @remarks
   * 用户ID
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      isAdmin: 'isAdmin',
      isSystemTenant: 'isSystemTenant',
      languagePreference: 'languagePreference',
      name: 'name',
      offering: 'offering',
      parsedOffering: 'parsedOffering',
      profileRole: 'profileRole',
      profileRoleInfo: 'profileRoleInfo',
      selfIntroduction: 'selfIntroduction',
      tenantId: 'tenantId',
      tenantList: 'tenantList',
      tenantName: 'tenantName',
      userCode: 'userCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      isAdmin: 'boolean',
      isSystemTenant: 'boolean',
      languagePreference: 'string',
      name: 'string',
      offering: 'string',
      parsedOffering: 'string',
      profileRole: 'string',
      profileRoleInfo: 'string',
      selfIntroduction: 'string',
      tenantId: 'number',
      tenantList: { 'type': 'array', 'itemType': UpdateUserInfoResponseBodyUserTenantList },
      tenantName: 'string',
      userCode: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenantList)) {
      $dara.Model.validateArray(this.tenantList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInfoResponseBody extends $dara.Model {
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
  user?: UpdateUserInfoResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      user: UpdateUserInfoResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

