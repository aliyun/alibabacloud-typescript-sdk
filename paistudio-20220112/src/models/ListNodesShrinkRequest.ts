// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerator type. Valid values:
   * 
   * - CPU
   * - GPU
   * 
   * Default value: empty, which indicates all types.
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
   * Used together with ResourceGroupIds to display nodes in the resource groups that are bound to the specified quotas.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  filterByQuotaId?: string;
  /**
   * @remarks
   * Used together with QuotaId to display nodes in the quota that belong to the specified resource groups.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  filterByResourceGroupIds?: string;
  /**
   * @remarks
   * The GPU type. Fuzzy match is supported.
   * 
   * @example
   * T4
   */
  GPUType?: string;
  /**
   * @remarks
   * The number of healthy nodes.
   */
  healthCountShrink?: string;
  /**
   * @remarks
   * The health rate of nodes (the proportion of healthy nodes).
   */
  healthRateShrink?: string;
  hyperNode?: string;
  hyperZone?: string;
  /**
   * @remarks
   * The layout mode.
   */
  layoutMode?: string;
  machineGroupIds?: string;
  /**
   * @remarks
   * The node names to display, separated by commas.
   * 
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  /**
   * @remarks
   * The node statuses, separated by commas. If this parameter is not specified, nodes in all statuses are returned.
   * 
   * @example
   * Ready
   */
  nodeStatuses?: string;
  /**
   * @remarks
   * The resource node specifications, separated by commas. If this parameter is not configured, nodes of all node specifications are returned.
   * 
   * @example
   * ecs.c6.xlarge
   */
  nodeTypes?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: Descending order.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The order ID information.
   * 
   * @example
   * 260590501560397
   */
  orderInstanceIds?: string;
  /**
   * @remarks
   * The order statuses of the nodes.
   * 
   * @example
   * Ready
   */
  orderStatuses?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  paymentType?: string;
  podNum?: number;
  /**
   * @remarks
   * The resource quota ID to which the node belongs.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  reasonCodes?: string;
  /**
   * @remarks
   * The IDs of resource groups, separated by commas. Either this parameter or QuotaId is required.
   * 
   * Constraints:
   * 1. The UserId of the specified ResourceGroupId must match the UserId of the request.
   * 2. The specified resource groups must be of the same type.
   * 3. The specified resource groups must be associated with the same VPC at this stage.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  resourceGroupIds?: string;
  /**
   * @remarks
   * The name of the resource group.
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to return resource usage information. This parameter takes effect only when QuotaId is specified.
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

