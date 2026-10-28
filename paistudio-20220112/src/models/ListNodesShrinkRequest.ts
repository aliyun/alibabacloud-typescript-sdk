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
   * If this parameter is left empty, all types are queried.
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The zone where the nodes reside.
   * 
   * @example
   * C0
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The clique ID.
   */
  cliqueID?: string;
  /**
   * @remarks
   * The performance level (PL) of the cloud disk.
   * 
   * @example
   * PL2
   */
  diskPL?: string;
  /**
   * @remarks
   * Used together with ResourceGroupIds to display nodes in the resource group that are bound to specific quotas.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  filterByQuotaId?: string;
  /**
   * @remarks
   * Used together with QuotaId to display nodes in the quota that belong to specific resource groups.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  filterByResourceGroupIds?: string;
  /**
   * @remarks
   * The GPU card type. Fuzzy match is supported.
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
   * The health rate of the nodes, which is the proportion of healthy nodes.
   */
  healthRateShrink?: string;
  /**
   * @remarks
   * The name of the hypernode.
   */
  hyperNode?: string;
  /**
   * @remarks
   * The hyperzone where the nodes reside.
   * 
   * @example
   * A0
   */
  hyperZone?: string;
  /**
   * @remarks
   * The layout mode.
   * 
   * @example
   * Tree
   */
  layoutMode?: string;
  /**
   * @remarks
   * The IDs of the machine groups to which the nodes belong.
   * 
   * @example
   * mg124
   */
  machineGroupIds?: string;
  /**
   * @remarks
   * The names of the nodes to display. Separate multiple names with commas.
   * 
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  /**
   * @remarks
   * The status of the node. Separate multiple statuses with commas. If you do not specify this parameter, the system returns a list of nodes in all statuses.
   * 
   * @example
   * Ready
   */
  nodeStatuses?: string;
  /**
   * @remarks
   * The list of resource node specifications. Separate multiple specifications with commas. If you do not specify this parameter, the system returns a list of machines of all resource node specifications.
   * 
   * @example
   * ecs.c6.xlarge
   */
  nodeTypes?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: descending order.
   * - asc: ascending order.
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
   * The order status of the node.
   * 
   * @example
   * Ready
   */
  orderStatuses?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method of the node order.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The number of pods on the node.
   * 
   * @example
   * 1
   */
  podNum?: number;
  /**
   * @remarks
   * The ID of the resource quota to which the node belongs.
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @remarks
   * The reason codes for the current status of the nodes.
   * 
   * @example
   * CordonByUser
   */
  reasonCodes?: string;
  /**
   * @remarks
   * The list of resource group IDs. Separate multiple IDs with commas. You must specify either this parameter or QuotaId.
   * Constraints:
   * 1. The user ID of the specified resource group must match the user ID of the request.
   * 2. The resource groups in the list must be of the same type.
   * 3. The VPCs associated with the resource groups in the list must be the same.
   * 
   * @example
   * rg69rj0leslwdnbe
   */
  resourceGroupIds?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * rg-dlc
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The field based on which the results are sorted.
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
  /**
   * @remarks
   * The number of workloads on the node.
   * 
   * @example
   * 1
   */
  workloadNum?: number;
  /**
   * @remarks
   * The ID of the workspace to which the nodes belong.
   * 
   * @example
   * 12345
   */
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

