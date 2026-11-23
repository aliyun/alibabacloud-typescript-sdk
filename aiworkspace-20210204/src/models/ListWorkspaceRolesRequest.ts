// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order for the specified sorting field in paging. Valid values:
   * 
   * - ASC: Ascending order. Default value.
   * - DESC: Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of role IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * role-dhg*******
   */
  roleIds?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * dev-test
   */
  roleName?: string;
  /**
   * @remarks
   * The role type. Valid values:
   * - custom: custom role.
   * 
   * @example
   * custom
   */
  roleType?: string;
  /**
   * @remarks
   * The sorting field for paging. Valid values:
   * 
   * - GmtCreateTime: Sort by creation time. Default value.
   * - GmtModifiedTime: Sort by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * **[Deprecated]** The status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The comma-separated list of fields to return. Currently, only ModulePermissions is supported, which indicates whether to return the permission configurations of the role.
   * 
   * @example
   * ModulePermissions
   */
  verboseFields?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roleIds: 'RoleIds',
      roleName: 'RoleName',
      roleType: 'RoleType',
      sortBy: 'SortBy',
      status: 'Status',
      verboseFields: 'VerboseFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleIds: 'string',
      roleName: 'string',
      roleType: 'string',
      sortBy: 'string',
      status: 'string',
      verboseFields: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

