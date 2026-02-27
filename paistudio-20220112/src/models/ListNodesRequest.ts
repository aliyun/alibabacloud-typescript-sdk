// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesRequestHealthCount extends $dara.Model {
  operation?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      operation: 'operation',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequestHealthRate extends $dara.Model {
  operation?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      operation: 'operation',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  availabilityZone?: string;
  cliqueID?: string;
  diskPL?: string;
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
  healthCount?: ListNodesRequestHealthCount;
  healthRate?: ListNodesRequestHealthRate;
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
  podNum?: number;
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
  resourceGroupName?: string;
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
      healthCount: 'HealthCount',
      healthRate: 'HealthRate',
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
      healthCount: ListNodesRequestHealthCount,
      healthRate: ListNodesRequestHealthRate,
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
    if(this.healthCount && typeof (this.healthCount as any).validate === 'function') {
      (this.healthCount as any).validate();
    }
    if(this.healthRate && typeof (this.healthRate as any).validate === 'function') {
      (this.healthRate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

