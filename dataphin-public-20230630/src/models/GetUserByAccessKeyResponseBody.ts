// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserByAccessKeyResponseBodyUserInfoTenantRoles extends $dara.Model {
  /**
   * @remarks
   * The role identifier, such as SUPER_ADMIN or COMMON_USER.
   * 
   * @example
   * SUPER_ADMIN
   */
  roleKey?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * Tenant Administrator
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleKey: 'RoleKey',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleKey: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAccessKeyResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The Dataphin user ID.
   * 
   * @example
   * 30011210
   */
  id?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * xx@aliyun.com
   */
  mail?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * zhangsan
   */
  nickName?: string;
  /**
   * @remarks
   * The account source type, such as ALIYUN_OAUTH2, PUBLICCLOUD_OAUTH2, BUC, or APSARA.
   * 
   * @example
   * ALIYUN_OAUTH2
   */
  sourceType?: string;
  /**
   * @remarks
   * The source account ID of the user during SSO integration.
   * 
   * @example
   * 12345
   */
  sourceUserId?: string;
  /**
   * @remarks
   * The tenant member status. Valid values:
   * - NORMAL: Normal.
   * - DEACTIVATE: Deactivated.
   * - DELETE: Deleted.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The list of tenant-level roles assigned to the AK/SK owner in the current tenant.
   */
  tenantRoles?: GetUserByAccessKeyResponseBodyUserInfoTenantRoles[];
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * zhangsan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      mail: 'Mail',
      nickName: 'NickName',
      sourceType: 'SourceType',
      sourceUserId: 'SourceUserId',
      status: 'Status',
      tenantRoles: 'TenantRoles',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      mail: 'string',
      nickName: 'string',
      sourceType: 'string',
      sourceUserId: 'string',
      status: 'string',
      tenantRoles: { 'type': 'array', 'itemType': GetUserByAccessKeyResponseBodyUserInfoTenantRoles },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tenantRoles)) {
      $dara.Model.validateArray(this.tenantRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAccessKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned for the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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
  /**
   * @remarks
   * The user information.
   */
  userInfo?: GetUserByAccessKeyResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userInfo: GetUserByAccessKeyResponseBodyUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

