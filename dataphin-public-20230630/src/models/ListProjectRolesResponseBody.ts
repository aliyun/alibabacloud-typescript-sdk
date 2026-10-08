// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesResponseBodyRoleList extends $dara.Model {
  /**
   * @example
   * {}
   */
  authJson?: string;
  /**
   * @example
   * 30112011
   */
  creator?: string;
  /**
   * @example
   * 2026-01-30 17:38:32
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-01-30 17:38:32
   */
  gmtModified?: string;
  /**
   * @example
   * 30112011
   */
  modifier?: string;
  /**
   * @example
   * BASIC
   */
  projectType?: string;
  /**
   * @example
   * test
   */
  roleDesc?: string;
  /**
   * @example
   * abc::01121
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
   * 30110110
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      authJson: 'AuthJson',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifier: 'Modifier',
      projectType: 'ProjectType',
      roleDesc: 'RoleDesc',
      roleKey: 'RoleKey',
      roleName: 'RoleName',
      roleType: 'RoleType',
      status: 'Status',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authJson: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      projectType: 'string',
      roleDesc: 'string',
      roleKey: 'string',
      roleName: 'string',
      roleType: 'string',
      status: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBody extends $dara.Model {
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
  roleList?: ListProjectRolesResponseBodyRoleList[];
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
      roleList: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyRoleList },
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

