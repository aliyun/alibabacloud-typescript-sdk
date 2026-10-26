// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission scope.
   */
  actionAuthKeys?: string[];
  /**
   * @remarks
   * Permission type:
   * - portal_create: Data Portal
   * - dashboard_create: Dashboard
   * - report_create: Spreadsheet
   * - screen_create: Data Screen
   * - analysis: Ad-hoc Analysis
   * - offline_download: Self-service Data Retrieval
   * - data_form: Data Entry
   * - quick_etl: Data Preparation
   * - cube: Dataset
   * - datasource: Data Source
   * 
   * @example
   * portal_create
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      actionAuthKeys: 'ActionAuthKeys',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionAuthKeys: { 'type': 'array', 'itemType': 'string' },
      authKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionAuthKeys)) {
      $dara.Model.validateArray(this.actionAuthKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Value range:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Workspace role ID, including predefined roles and custom roles:
   * 
   * - 25: Workspace Administrator (predefined role)
   * - 26: Developer (predefined role)
   * - 27: Analyst (predefined role)
   * - 30: Viewer (predefined role)
   * - Custom role: The corresponding role ID for the custom role
   * 
   * @example
   * 25
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * pace administrator
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': QueryWorkspaceRoleConfigResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorkspaceRoleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the query result of the interface.
   */
  result?: QueryWorkspaceRoleConfigResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryWorkspaceRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

