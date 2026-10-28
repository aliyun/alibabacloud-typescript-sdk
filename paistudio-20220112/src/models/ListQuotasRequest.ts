// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * RayCluster
   */
  clusterType?: string;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @remarks
   * Specifies whether the quota contains resources.
   * 
   * @example
   * true
   */
  hasResource?: string;
  /**
   * @remarks
   * Filters the results by label keys and values. Separate multiple labels with commas (,).
   * 
   * @example
   * official=true,gpu=false
   */
  labels?: string;
  /**
   * @remarks
   * The display mode. Valid values: tree and list.
   * 
   * @example
   * Tree
   */
  layoutMode?: string;
  /**
   * @remarks
   * The sort order. Valid values: desc and asc.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Minimum value: 1.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by ParentQuotaId.
   * 
   * - If this parameter is not specified, all quotas under the tenant are listed, including root quotas and child quotas.
   * 
   * - If this parameter is left empty, all root quotas are listed.
   * 
   * - If this parameter is specified, all child quotas of the specified ParentQuotaId are listed.
   * 
   * @example
   * quotajradxh43rgb
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * Filters the results by QuotaIds. Separate multiple IDs with commas (,). Only exact matching is supported. A maximum of 100 IDs can be specified at a time.
   * 
   * @example
   * quota1ci8g793pgm,quotajradxh43rgb
   */
  quotaIds?: string;
  /**
   * @remarks
   * Filters the results by QuotaName. Fuzzy matching is supported.
   * 
   * @example
   * quotajradxh43rgb
   */
  quotaName?: string;
  /**
   * @remarks
   * The resource type of the quota. Valid values: Lingjun, ECS, and ACS. Default value: ECS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * 
   * - QuotaName
   * 
   * - Status
   * 
   * - CPU
   * 
   * - Memory
   * 
   * - GPU
   * 
   * - GmtCreatedTime
   * 
   * - GmtModifiedTime
   * 
   * @example
   * status
   */
  sortBy?: string;
  /**
   * @remarks
   * Filters the results by quota statuses. Separate multiple statuses with commas (,). Only exact matching is supported.
   * 
   * @example
   * Creating
   */
  statuses?: string;
  /**
   * @remarks
   * Specifies whether to display details. Valid values:
   * - true: Displays details.
   * - false: Does not display details.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Filters the results by version information.
   * 
   * @example
   * 1.0
   */
  versions?: string;
  /**
   * @remarks
   * Filters the results by WorkspaceIds. Separate multiple IDs with commas (,). Only exact matching is supported. A maximum of 10 IDs can be specified at a time.
   * 
   * @example
   * 21345,38727
   */
  workspaceIds?: string;
  /**
   * @remarks
   * The name of the associated workspace.
   * 
   * @example
   * myshellprod
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      GPUType: 'GPUType',
      hasResource: 'HasResource',
      labels: 'Labels',
      layoutMode: 'LayoutMode',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentQuotaId: 'ParentQuotaId',
      quotaIds: 'QuotaIds',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      statuses: 'Statuses',
      verbose: 'Verbose',
      versions: 'Versions',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      GPUType: 'string',
      hasResource: 'string',
      labels: 'string',
      layoutMode: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentQuotaId: 'string',
      quotaIds: 'string',
      quotaName: 'string',
      resourceType: 'string',
      sortBy: 'string',
      statuses: 'string',
      verbose: 'boolean',
      versions: 'string',
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

