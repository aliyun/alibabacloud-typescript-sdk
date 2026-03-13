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
  acceleratorType?: string;
  availabilityZone?: string;
  cliqueID?: string;
  filterByQuotaId?: string;
  filterByResourceGroupIds?: string;
  GPUType?: string;
  healthCount?: ListNodesRequestHealthCount;
  healthRate?: ListNodesRequestHealthRate;
  hyperNode?: string;
  hyperZone?: string;
  layoutMode?: string;
  machineGroupIds?: string;
  nodeNames?: string;
  nodeStatuses?: string;
  nodeTypes?: string;
  order?: string;
  /**
   * @example
   * 260590501560397
   */
  orderInstanceIds?: string;
  orderStatuses?: string;
  pageNumber?: number;
  pageSize?: number;
  paymentType?: string;
  quotaId?: string;
  reasonCodes?: string;
  resourceGroupIds?: string;
  sortBy?: string;
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
      quotaId: 'string',
      reasonCodes: 'string',
      resourceGroupIds: 'string',
      sortBy: 'string',
      verbose: 'boolean',
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

