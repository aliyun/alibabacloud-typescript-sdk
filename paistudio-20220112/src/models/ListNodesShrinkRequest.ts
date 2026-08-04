// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type. Valid values:
   * 
   * - CPU
   * 
   * - GPU
   * 
   * If omitted, this operation returns nodes of all accelerator types.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  availabilityZone?: string;
  cliqueID?: string;
  diskPL?: string;
  /**
   * @remarks
   * When used with `ResourceGroupIds`, this parameter further filters the results to include only nodes from the specified resource quota.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  filterByQuotaId?: string;
  /**
   * @remarks
   * When used with `QuotaId`, this parameter further filters the results to include only nodes from the specified resource groups.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  filterByResourceGroupIds?: string;
  /**
   * @remarks
   * The GPU type. Fuzzy matching is supported.
   * 
   * @example
   * T4
   */
  GPUType?: string;
  healthCountShrink?: string;
  healthRateShrink?: string;
  hyperNode?: string;
  hyperZone?: string;
  layoutMode?: string;
  machineGroupIds?: string;
  /**
   * @remarks
   * A comma-separated list of node names. Only nodes with names that match this list are returned.
   * 
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  /**
   * @remarks
   * A comma-separated list of node statuses. If this parameter is omitted, this operation returns nodes of all statuses.
   * 
   * @example
   * Ready
   */
  nodeStatuses?: string;
  /**
   * @remarks
   * A comma-separated list of node specifications. If this parameter is omitted, this operation returns nodes of all specifications.
   * 
   * @example
   * ecs.c6.xlarge
   */
  nodeTypes?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `desc`: Descending
   * 
   * - `asc`: Ascending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * A comma-separated list of order IDs.
   * 
   * @example
   * 260590501560397
   */
  orderInstanceIds?: string;
  /**
   * @remarks
   * A comma-separated list of order statuses.
   * 
   * @example
   * Ready
   */
  orderStatuses?: string;
  /**
   * @remarks
   * The page number. The first page is 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  paymentType?: string;
  podNum?: number;
  /**
   * @remarks
   * The ID of the resource quota that contains the nodes.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  reasonCodes?: string;
  /**
   * @remarks
   * A comma-separated list of resource group IDs. You must specify either this parameter or `QuotaId`.
   * Constraints:
   * 
   * 1. The user ID of the request must match the user ID associated with the specified resource groups.
   * 
   * 2. All specified resource groups must be of the same type.
   * 
   * 3. All specified resource groups must be in the same VPC.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  resourceGroupIds?: string;
  resourceGroupName?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to return resource usage information. This parameter applies only when `QuotaId` is specified.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  workloadNum?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      availabilityZone: 'AvailabilityZone',
      cliqueID: 'CliqueID',
      diskPL: 'DiskPL',
      filterByQuotaId: 'FilterByQuotaId',
      filterByResourceGroupIds: 'FilterByResourceGroupIds',
      GPUType: 'GPUType',
      healthCountShrink: 'HealthCount',
      healthRateShrink: 'HealthRate',
      hyperNode: 'HyperNode',
      hyperZone: 'HyperZone',
      layoutMode: 'LayoutMode',
      machineGroupIds: 'MachineGroupIds',
      nodeNames: 'NodeNames',
      nodeStatuses: 'NodeStatuses',
      nodeTypes: 'NodeTypes',
      order: 'Order',
      orderInstanceIds: 'OrderInstanceIds',
      orderStatuses: 'OrderStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentType: 'PaymentType',
      podNum: 'PodNum',
      quotaId: 'QuotaId',
      reasonCodes: 'ReasonCodes',
      resourceGroupIds: 'ResourceGroupIds',
      resourceGroupName: 'ResourceGroupName',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workloadNum: 'WorkloadNum',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      availabilityZone: 'string',
      cliqueID: 'string',
      diskPL: 'string',
      filterByQuotaId: 'string',
      filterByResourceGroupIds: 'string',
      GPUType: 'string',
      healthCountShrink: 'string',
      healthRateShrink: 'string',
      hyperNode: 'string',
      hyperZone: 'string',
      layoutMode: 'string',
      machineGroupIds: 'string',
      nodeNames: 'string',
      nodeStatuses: 'string',
      nodeTypes: 'string',
      order: 'string',
      orderInstanceIds: 'string',
      orderStatuses: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentType: 'string',
      podNum: 'number',
      quotaId: 'string',
      reasonCodes: 'string',
      resourceGroupIds: 'string',
      resourceGroupName: 'string',
      sortBy: 'string',
      verbose: 'boolean',
      workloadNum: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

