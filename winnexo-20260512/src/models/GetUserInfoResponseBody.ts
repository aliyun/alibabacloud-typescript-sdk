// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserInfoResponseBodyTenantList extends $dara.Model {
  /**
   * @remarks
   * The CRM type.
   * 
   * @example
   * standard
   */
  crmType?: string;
  /**
   * @remarks
   * The ID of the tenant to which the task belongs.
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
  /**
   * @remarks
   * The tenant type. Valid values:
   * - user: individual.
   * - org: enterprise.
   * - group: group.
   * 
   * @example
   * normal
   */
  tenantType?: string;
  static names(): { [key: string]: string } {
    return {
      crmType: 'crmType',
      tenantId: 'tenantId',
      tenantName: 'tenantName',
      tenantType: 'tenantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crmType: 'string',
      tenantId: 'number',
      tenantName: 'string',
      tenantType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The profile picture URL.
   * 
   * @example
   * https://example.com/avatar.png
   */
  avatar?: string;
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
   * The CRM type.
   * 
   * @example
   * standard
   */
  crmType?: string;
  /**
   * @remarks
   * Indicates whether the user is an enterprise administrator.
   * 
   * @example
   * true
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Indicates whether the current logon tenant is the system tenant (tenantId=10000).
   * 
   * @example
   * true
   */
  isSystemTenant?: boolean;
  /**
   * @remarks
   * The language preference.
   * 
   * @example
   * string_value
   */
  languagePreference?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
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
   * The user service description. Maximum length: 1000 characters.
   * 
   * @example
   * string_value
   */
  offering?: string;
  /**
   * @remarks
   * The parsed result of the user service (JSON format).
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
   * The personal profile.
   * 
   * @example
   * string_value
   */
  profileRoleInfo?: string;
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
   * The user self-introduction. Maximum length: 1000 characters.
   * 
   * @example
   * string_value
   */
  selfIntroduction?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The tenant list.
   */
  tenantList?: GetUserInfoResponseBodyTenantList[];
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
   * The tenant type. Valid values:
   * - user: individual.
   * - org: enterprise.
   * - group: group.
   * 
   * @example
   * normal
   */
  tenantType?: string;
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
      code: 'code',
      crmType: 'crmType',
      isAdmin: 'isAdmin',
      isSystemTenant: 'isSystemTenant',
      languagePreference: 'languagePreference',
      message: 'message',
      name: 'name',
      offering: 'offering',
      parsedOffering: 'parsedOffering',
      profileRole: 'profileRole',
      profileRoleInfo: 'profileRoleInfo',
      requestId: 'requestId',
      selfIntroduction: 'selfIntroduction',
      tenantId: 'tenantId',
      tenantList: 'tenantList',
      tenantName: 'tenantName',
      tenantType: 'tenantType',
      userCode: 'userCode',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      code: 'string',
      crmType: 'string',
      isAdmin: 'boolean',
      isSystemTenant: 'boolean',
      languagePreference: 'string',
      message: 'string',
      name: 'string',
      offering: 'string',
      parsedOffering: 'string',
      profileRole: 'string',
      profileRoleInfo: 'string',
      requestId: 'string',
      selfIntroduction: 'string',
      tenantId: 'number',
      tenantList: { 'type': 'array', 'itemType': GetUserInfoResponseBodyTenantList },
      tenantName: 'string',
      tenantType: 'string',
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

