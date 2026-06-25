// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order for the specified sort field. Valid values:
   * 
   * - `ASC` (default): Ascending order.
   * 
   * - `DESC`: Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A comma-separated list of role IDs.
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
   * The role type.
   * 
   * - `custom`: A custom role.
   * 
   * @example
   * custom
   */
  roleType?: string;
  /**
   * @remarks
   * The sort field for paginated queries. Valid values:
   * 
   * - `GmtCreateTime` (default): Sorts by creation time.
   * 
   * - `GmtModifiedTime`: Sorts by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - `Creating`
   * 
   * - `Updating`
   * 
   * - `Deleting`
   * 
   * - `Succeeded`: A terminal state.
   * 
   * - `Failed`: A terminal state.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * A comma-separated list of fields to return. Currently, only `ModulePermissions` is supported, which returns the permission configuration of the role.
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

