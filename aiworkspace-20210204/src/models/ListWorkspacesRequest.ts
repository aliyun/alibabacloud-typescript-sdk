// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of return fields for workspace details. This parameter limits the workspace properties returned in the result.
   * Separate multiple properties with commas (,). Currently, only Id is supported, which represents the workspace ID.
   * 
   * @example
   * Id
   */
  fields?: string;
  /**
   * @remarks
   * The comma-separated list of modules. Default value: PAI.
   * 
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @remarks
   * The query option. Valid values:
   * * GetWorkspaces (default): retrieves the workspace list. The Workspaces parameter is returned.
   * * GetResourceLimits: retrieves resource limits. The ResourceLimits parameter is returned.
   * 
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @remarks
   * The sort order for the specified sort field in a paged query. Valid values:
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
   * The number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID. For information about how to view the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmwp7rky****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The field used for sorting in a paged query. Default value: GmtCreateTime. Valid values:
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
   * - ENABLED: Normal.
   * - INITIALIZING: Being initialized.
   * - FAILURE: Failed.
   * - DISABLED: Manually disabled.
   * - FROZEN: Frozen due to overdue payment.
   * - UPDATING: Being updated.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  userId?: string;
  /**
   * @remarks
   * Specifies whether to display detailed workspace information. Valid values:
   * - false (default): does not display detailed information.
   * - true: displays detailed information.
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

