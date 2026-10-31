// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantRolesResponseBodyRoleList extends $dara.Model {
  /**
   * @remarks
   * The JSON string of the permission set.
   * 
   * @example
   * {}
   */
  authJson?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 30121201
   */
  creator?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-07 16:45:30
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-01-07 16:45:30
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user ID of the modifier.
   * 
   * @example
   * 30121201
   */
  modifier?: string;
  /**
   * @remarks
   * The role description.
   * 
   * @example
   * test
   */
  roleDesc?: string;
  /**
   * @remarks
   * The role key.
   * 
   * @example
   * test::1212
   */
  roleKey?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * test
   */
  roleName?: string;
  /**
   * @remarks
   * The role type. Valid values:
   * - BUILD_IN: built-in role
   * - CUSTOM: custom role
   * 
   * @example
   * CUSTOM
   */
  roleType?: string;
  /**
   * @remarks
   * The role status. Valid values:
   * - ON: enabled
   * - OFF: disabled
   * - DEL: deleted
   * 
   * @example
   * ON
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30121001
   */
  tenantId?: number;
  /**
   * @remarks
   * The tenant type.
   * 
   * @example
   * CUSTOM
   */
  tenantType?: string;
  static names(): { [key: string]: string } {
    return {
      authJson: 'AuthJson',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifier: 'Modifier',
      roleDesc: 'RoleDesc',
      roleKey: 'RoleKey',
      roleName: 'RoleName',
      roleType: 'RoleType',
      status: 'Status',
      tenantId: 'TenantId',
      tenantType: 'TenantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authJson: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      roleDesc: 'string',
      roleKey: 'string',
      roleName: 'string',
      roleType: 'string',
      status: 'string',
      tenantId: 'number',
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

export class ListTenantRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the backend response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message of the request.
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
   * The role list.
   */
  roleList?: ListTenantRolesResponseBodyRoleList[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      roleList: { 'type': 'array', 'itemType': ListTenantRolesResponseBodyRoleList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

