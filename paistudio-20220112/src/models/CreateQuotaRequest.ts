// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClusterSpec } from "./ClusterSpec";
import { Label } from "./Label";
import { ResourceSpec } from "./ResourceSpec";
import { QuotaConfig } from "./QuotaConfig";


export class CreateQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The quota allocation strategy. Currently, only ByNodeSpecs is supported.
   * 
   * @example
   * ByNodeSpecs
   */
  allocateStrategy?: string;
  /**
   * @remarks
   * The specifications of the native cluster for the resource quota.
   */
  clusterSpec?: ClusterSpec;
  /**
   * @remarks
   * The quota description.
   * 
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @remarks
   * The quota labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The minimum quota configuration. Valid options:
   * - ResourceAmount: specifies CPU, memory, or GPU details.
   * - NodeSpecs: specifies the instance type and quantity.
   * 
   * Constraints:
   * - If the quota allocates resources from a dedicated resource group, only the NodeSpecs strategy is allowed.
   * - If the quota allocates resources from a parent quota, both strategies are allowed, but all child quotas must use the same strategy.
   * - All GPU specifications within a quota must use the same GPU type.
   * - Resource quotas with the ECS or Lingjun resource type can only use the NodeSpecs strategy.
   */
  min?: ResourceSpec;
  /**
   * @remarks
   * The parent QuotaId:
   * - If ParentQuotaId is empty, a root quota is created and machines are allocated from the dedicated resource group.
   * - If ParentQuotaId is not empty, a child quota is created and resources are allocated from the nodes bound to the root quota.
   * 
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @remarks
   * Four queuing policies are supported for quotas.
   * 
   * - PaiStrategyIntelligent: intelligent policies.
   * - PaiStrategyBalance: balanced policy.
   * - PaiStrategyRoundRobin: resource-priority policy.
   * - PaiStrategyStrictFIFO: FIFO policy.
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
   * QuotaConfig configuration constraints:
   * - This configuration does not take effect when the ECS or Lingjun resource type is used.
   * - When the ACS resource type is used, the user VPC information and ACS configuration take effect.
   */
  quotaConfig?: QuotaConfig;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * test-quota
   */
  quotaName?: string;
  /**
   * @remarks
   * The list of dedicated resource groups. Constraints:
   * - Only root quotas (where ParentQuotaId is empty) can allocate machines from resource groups.
   * - The VPC configurations in the specified resource groups must be consistent.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The quota resource type (Lingjun/ECS/ACS). Default value: ECS.
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

