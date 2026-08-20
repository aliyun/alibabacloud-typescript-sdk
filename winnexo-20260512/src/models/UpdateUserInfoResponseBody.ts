// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserInfoResponseBodyUserTenantList extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The tenant name.
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
   * The user profile picture URL.
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatar?: string;
  /**
   * @remarks
   * Indicates whether the user is a super administrator.
   * 
   * @example
   * true
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Indicates whether the current logged-in tenant is a system tenant.
   * 
   * @example
   * true
   */
  isSystemTenant?: boolean;
  /**
   * @remarks
   * The user language preference.
   * 
   * @example
   * string_value
   */
  languagePreference?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The user service description.
   * 
   * @example
   * string_value
   */
  offering?: string;
  /**
   * @remarks
   * The parsed user service result in JSON format.
   * 
   * @example
   * string_value
   */
  parsedOffering?: string;
  /**
   * @remarks
   * The user role.
   * 
   * @example
   * string_value
   */
  profileRole?: string;
  /**
   * @remarks
   * The user role description.
   * 
   * @example
   * string_value
   */
  profileRoleInfo?: string;
  /**
   * @remarks
   * The user self-introduction.
   * 
   * @example
   * string_value
   */
  selfIntroduction?: string;
  /**
   * @remarks
   * The current tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The list of tenants to which the user belongs.
   */
  tenantList?: UpdateUserInfoResponseBodyUserTenantList[];
  /**
   * @remarks
   * The current tenant name.
   * 
   * @example
   * string_value
   */
  tenantName?: string;
  /**
   * @remarks
   * The user code.
   * 
   * @example
   * string_value
   */
  userCode?: string;
  /**
   * @remarks
   * The user ID.
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The user information.
   */
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

