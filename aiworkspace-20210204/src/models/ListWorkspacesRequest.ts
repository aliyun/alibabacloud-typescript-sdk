// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of fields to return in the workspace details. Use this parameter to limit the workspace properties included in the response. Separate multiple properties with commas (,). Currently, only Id (workspace ID) is supported.
   * 
   * @example
   * Id
   */
  fields?: string;
  /**
   * @remarks
   * The comma-separated module list. Default value: PAI.
   * 
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @remarks
   * The query options. Valid values:
   * * GetWorkspaces (default): retrieves the workspace list and returns Workspaces.
   * * GetResourceLimits: retrieves resource limits and returns ResourceLimits.
   * 
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @remarks
   * The sort order applied to the specified sort field in a paged query. Valid values:
   * * ASC (default): ascending order.
   * * DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the workspace list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID. For information about how to view the resource group ID, see [View basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmwp7rky****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sort field for a paged query. Default value: GmtCreateTime. Valid values:
   * * GmtCreateTime (default): sorts by creation time.
   * * GmtModifiedTime: sorts by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * - ENABLED: normal.
   * - INITIALIZING: initializing.
   * - FAILURE: failed.
   * - DISABLED: manually disabled.
   * - FROZEN: frozen due to overdue payment.
   * - UPDATING: updating.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17*****1743
   */
  userId?: string;
  /**
   * @remarks
   * Specifies whether to display workspace details. Valid values:
   * - false (default): does not display details.
   * - true: displays details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The list of workspace IDs. Separate multiple workspace IDs with commas (,).
   * 
   * @example
   * 123,234
   */
  workspaceIds?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * abc
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      moduleList: 'ModuleList',
      option: 'Option',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sortBy: 'SortBy',
      status: 'Status',
      userId: 'UserId',
      verbose: 'Verbose',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      moduleList: 'string',
      option: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'string',
      status: 'string',
      userId: 'string',
      verbose: 'boolean',
      workspaceIds: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

