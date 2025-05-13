// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of returned fields of workspace details. Used to limit the fields in the returned results. Separate multiple fields with commas (,). Currently, only Id is supported, which is the workspace ID.
   * 
   * @example
   * Id
   */
  fields?: string;
  /**
   * @remarks
   * The modules, separated by commas (,). Default value: PAI.
   * 
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @remarks
   * The query options. Valid values:
   * 
   * *   GetWorkspaces (default): Obtains a list of Workspaces.
   * *   GetResourceLimits: Obtains a list of ResourceLimits.
   * 
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @remarks
   * The order of results (ascending or descending). Valid values:
   * 
   * *   ASC: ascending order. This is the default value.
   * *   DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the workspace list. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID. To obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmwp7rky****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies how to sort the results. Default value: GmtCreateTime. Valid values:
   * 
   * *   GmtCreateTime: Sort by the time when created.
   * *   GmtModifiedTime: Sort by the time when modified.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to display workspace details. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace IDs. Separate multiple IDs by commas (,).
   * 
   * @example
   * 123,234
   */
  workspaceIds?: string;
  /**
   * @remarks
   * The name of the workspace.
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

