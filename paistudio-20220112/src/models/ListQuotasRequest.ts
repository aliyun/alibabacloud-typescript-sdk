// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by cluster type.
   * 
   * @example
   * RayCluster
   */
  clusterType?: string;
  GPUType?: string;
  hasResource?: string;
  /**
   * @remarks
   * Filters the results by labels. Specify labels as key=value pairs, separated by commas (,).
   * 
   * @example
   * official=true,gpu=false
   */
  labels?: string;
  /**
   * @remarks
   * The layout mode. Valid values: Tree and List.
   * 
   * @example
   * Tree
   */
  layoutMode?: string;
  /**
   * @remarks
   * The sort order. Valid values are desc and asc.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the results to return. The minimum value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The minimum value is 1.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by parent quota ID:
   * 
   * - If this parameter is not specified, all quotas within the tenant are returned, including both root and child quotas.
   * 
   * - If this parameter is set to an empty string, all root quotas are returned.
   * 
   * - If a specific parent quota ID is provided, all child quotas of that parent are returned.
   * 
   * @example
   * quotajradxh43rgb
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * A comma-separated list of up to 100 quota IDs to filter the results. Only exact matching is supported.
   * 
   * @example
   * quota1ci8g793pgm,quotajradxh43rgb
   */
  quotaIds?: string;
  /**
   * @remarks
   * Filters the results by quota name. Fuzzy matching is supported.
   * 
   * @example
   * quotajradxh43rgb
   */
  quotaName?: string;
  /**
   * @remarks
   * The resource type. Valid values are Lingjun, ECS, and ACS. The default value is ECS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The field to sort the results by. Valid values:
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
   * A comma-separated list of quota statuses to filter the results. Only exact matching is supported.
   * 
   * @example
   * Creating
   */
  statuses?: string;
  /**
   * @remarks
   * Specifies whether to return detailed information. Valid values:
   * 
   * - true: Returns detailed information.
   * 
   * - false: Does not return detailed information.
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * Filters the results by version.
   * 
   * @example
   * 1.0
   */
  versions?: string;
  /**
   * @remarks
   * A comma-separated list of up to 10 workspace IDs to filter the results. Only exact matching is supported.
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

