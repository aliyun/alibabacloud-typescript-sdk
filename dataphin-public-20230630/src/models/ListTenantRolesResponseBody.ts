// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantRolesResponseBodyRoleList extends $dara.Model {
  /**
   * @example
   * {}
   */
  authJson?: string;
  /**
   * @example
   * 30121201
   */
  creator?: string;
  /**
   * @example
   * 2026-01-07 16:45:30
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-01-07 16:45:30
   */
  gmtModified?: string;
  /**
   * @example
   * 30121201
   */
  modifier?: string;
  /**
   * @example
   * test
   */
  roleDesc?: string;
  /**
   * @example
   * test::1212
   */
  roleKey?: string;
  /**
   * @example
   * test
   */
  roleName?: string;
  /**
   * @example
   * CUSTOM
   */
  roleType?: string;
  /**
   * @example
   * ON
   */
  status?: string;
  /**
   * @example
   * 30121001
   */
  tenantId?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  roleList?: ListTenantRolesResponseBodyRoleList[];
  /**
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

