// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesShrinkRequest extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  availabilityZone?: string;
  cliqueID?: string;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  filterByQuotaId?: string;
  /**
   * @example
   * rg69rj0leslwdnbe
   */
  filterByResourceGroupIds?: string;
  /**
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
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  /**
   * @example
   * Ready
   */
  nodeStatuses?: string;
  /**
   * @example
   * ecs.c6.xlarge
   */
  nodeTypes?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 260590501560397
   */
  orderInstanceIds?: string;
  /**
   * @example
   * Ready
   */
  orderStatuses?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  paymentType?: string;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  reasonCodes?: string;
  /**
   * @example
   * rg69rj0leslwdnbe
   */
  resourceGroupIds?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      availabilityZone: 'AvailabilityZone',
      cliqueID: 'CliqueID',
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
      quotaId: 'QuotaId',
      reasonCodes: 'ReasonCodes',
      resourceGroupIds: 'ResourceGroupIds',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      availabilityZone: 'string',
      cliqueID: 'string',
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
      quotaId: 'string',
      reasonCodes: 'string',
      resourceGroupIds: 'string',
      sortBy: 'string',
      verbose: 'boolean',
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

