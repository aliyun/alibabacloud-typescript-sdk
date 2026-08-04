// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterSpec } from "./ClusterSpec";
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaConfig } from "./QuotaConfig";


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation strategy for the quota. Only `ByNodeSpecs` is supported.
   * 
   * @example
   * ByNodeSpecs
   */
  allocateStrategy?: string;
  /**
   * @remarks
   * The native cluster specification for the quota.
   */
  clusterSpec?: ClusterSpec;
  /**
   * @remarks
   * The description of the quota.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The tags for the quota.
   */
  labels?: Label[];
  /**
   * @remarks
   * The minimum resources for the quota. You can define this in one of the following ways:
   * 
   * - `ResourceAmount`: Specifies the CPU, memory, and GPU details.
   * 
   * - `NodeSpecs`: Specifies the node specification and the number of nodes.
   * 
   * Constraints:
   * 
   * - If this quota allocates resources from a dedicated resource group, you must use the `NodeSpecs` method.
   * 
   * - If this quota allocates resources from a parent quota, both methods are allowed. However, all its child quotas must use the same method.
   * 
   * - All GPU specifications within the quota must have the same GPU type.
   * 
   * - For quotas with the resource type set to ECS or Lingjun, only the `NodeSpecs` method can be used.
   */
  min?: ResourceSpec;
  /**
   * @remarks
   * The ID of the parent quota.
   * 
   * - If you do not specify this parameter, a root quota is created. Resources are allocated from a dedicated resource group.
   * 
   * - If you specify this parameter, a child quota is created. Resources are allocated from the nodes that are bound to the root quota.
   * 
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * The queuing strategy for the quota. Four strategies are supported:
   * 
   * - `PaiStrategyIntelligent`: The intelligent strategy.
   * 
   * - `PaiStrategyBalance`: The balance strategy.
   * 
   * - `PaiStrategyRoundRobin`: The round-robin strategy.
   * 
   * - `PaiStrategyStrictFIFO`: The FIFO strategy.
   * 
   * @example
   * PaiStrategyIntelligent
   * 
   * **if can be null:**
   * true
   */
  queueStrategy?: string;
  /**
   * @remarks
   * Constraints for the `QuotaConfig` parameter:
   * 
   * - This parameter is ignored if the resource type is ECS or Lingjun.
   * 
   * - If the resource type is ACS, the specified VPC and ACS configurations are applied.
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The name of the quota.
   * 
   * @example
   * test-quota
   */
  quotaName?: string;
  /**
   * @remarks
   * The IDs of the dedicated resource groups. The following constraints apply:
   * 
   * - Only a root quota, for which `ParentQuotaId` is empty, can allocate nodes from a resource group.
   * 
   * - The VPC configurations of the specified resource groups must be the same.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The resource type of the quota. Valid values: Lingjun, ECS, and ACS. Default value: ECS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      clusterSpec: 'ClusterSpec',
      description: 'Description',
      labels: 'Labels',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      clusterSpec: ClusterSpec,
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(this.clusterSpec && typeof (this.clusterSpec as any).validate === 'function') {
      (this.clusterSpec as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

