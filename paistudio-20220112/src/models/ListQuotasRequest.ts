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
  GPUType?: string;
  hasResource?: string;
  /**
   * @remarks
   * Filters by label key and value. Separate multiple labels with commas (,).
   * 
   * @example
   * official=true,gpu=false
   */
  labels?: string;
  /**
   * @remarks
   * The display mode. Valid values: tree or list.
   * 
   * @example
   * Tree
   */
  layoutMode?: string;
  /**
   * @remarks
   * The sort order. Valid values: desc or asc.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number to query. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by ParentQuotaId:
   * 
   * - Not specified: lists all quotas under the tenant, including root quotas and child quotas.
   * 
   * - Empty string: lists all root quotas.
   * 
   * - Non-empty string: lists all child quotas of the specified ParentQuotaId.
   * 
   * @example
   * quotajradxh43rgb
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * Comma-separated QuotaIds for filtering. Only exact match is supported. A maximum of 100 IDs can be specified at a time.
   * 
   * @example
   * quota1ci8g793pgm,quotajradxh43rgb
   */
  quotaIds?: string;
  /**
   * @remarks
   * Filters by QuotaName. Fuzzy match is supported.
   * 
   * @example
   * quotajradxh43rgb
   */
  quotaName?: string;
  /**
   * @remarks
   * The resource type of the quota (Lingjun/ECS/ACS). Default value: ECS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The field by which to sort the results. Valid values:
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
   * Comma-separated quota statuses for filtering. Only exact match is supported.
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
   * Filters by version information.
   * 
   * @example
   * 1.0
   */
  versions?: string;
  /**
   * @remarks
   * Comma-separated WorkspaceIds for filtering. Only exact match is supported. A maximum of 10 IDs can be specified at a time.
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

