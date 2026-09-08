// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";
import { QuotaNodeStatistics } from "./QuotaNodeStatistics";


export class QuotaDetails extends $dara.Model {
  /**
   * @remarks
   * The total MinQuota actually allocated. For example, if the user configured 10 nodes but only 8 nodes are actually bound, this value returns the total resources of the 8 nodes.
   */
  actualMinQuota?: ResourceAmount;
  /**
   * @remarks
   * The user-allocatable quota amount. For general computing resources, each node has system-reserved resources. This value represents the quota resources that user workloads can occupy.
   * ActualMin = AllocatableQuota + SystemReservedQuota.
   */
  allocatableQuota?: ResourceAmount;
  /**
   * @remarks
   * The total quota usage information, which is the total resources occupied by workloads after scheduling to nodes.
   */
  allocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * The ancestor quota usage information, which is the total resources of workloads submitted using ancestor quotas after they are scheduled to nodes.
   */
  ancestorsAllocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * The descendant quota usage information, which is the total resources of workloads submitted using descendant quotas after they are scheduled to nodes.
   */
  descendantsAllocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * The total MinQuota desired by the user.
   */
  desiredMinQuota?: ResourceAmount;
  /**
   * @remarks
   * The statistics information of nodes within the quota.
   */
  nodeStatistics?: QuotaNodeStatistics;
  /**
   * @remarks
   * The quota requested amount, which is the total resources occupied by workloads after they are dequeued.
   */
  requestedQuota?: ResourceAmount;
  /**
   * @remarks
   * The current-level quota usage information, which is the total resources of workloads submitted using this quota after they are scheduled to nodes.
   */
  selfAllocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * The amount submitted to this quota, which is the total resources of workloads submitted to this quota, including workloads that are queued.
   */
  selfSubmittedQuota?: ResourceAmount;
  /**
   * @remarks
   * The system-reserved quota amount.
   */
  systemReservedQuota?: ResourceAmount;
  /**
   * @remarks
   * The quota used amount. This field is deprecating. Use AllocatedQuota instead.
   */
  usedQuota?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      actualMinQuota: 'ActualMinQuota',
      allocatableQuota: 'AllocatableQuota',
      allocatedQuota: 'AllocatedQuota',
      ancestorsAllocatedQuota: 'AncestorsAllocatedQuota',
      descendantsAllocatedQuota: 'DescendantsAllocatedQuota',
      desiredMinQuota: 'DesiredMinQuota',
      nodeStatistics: 'NodeStatistics',
      requestedQuota: 'RequestedQuota',
      selfAllocatedQuota: 'SelfAllocatedQuota',
      selfSubmittedQuota: 'SelfSubmittedQuota',
      systemReservedQuota: 'SystemReservedQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinQuota: ResourceAmount,
      allocatableQuota: ResourceAmount,
      allocatedQuota: ResourceAmount,
      ancestorsAllocatedQuota: ResourceAmount,
      descendantsAllocatedQuota: ResourceAmount,
      desiredMinQuota: ResourceAmount,
      nodeStatistics: QuotaNodeStatistics,
      requestedQuota: ResourceAmount,
      selfAllocatedQuota: ResourceAmount,
      selfSubmittedQuota: ResourceAmount,
      systemReservedQuota: ResourceAmount,
      usedQuota: ResourceAmount,
    };
  }

  validate() {
    if(this.actualMinQuota && typeof (this.actualMinQuota as any).validate === 'function') {
      (this.actualMinQuota as any).validate();
    }
    if(this.allocatableQuota && typeof (this.allocatableQuota as any).validate === 'function') {
      (this.allocatableQuota as any).validate();
    }
    if(this.allocatedQuota && typeof (this.allocatedQuota as any).validate === 'function') {
      (this.allocatedQuota as any).validate();
    }
    if(this.ancestorsAllocatedQuota && typeof (this.ancestorsAllocatedQuota as any).validate === 'function') {
      (this.ancestorsAllocatedQuota as any).validate();
    }
    if(this.descendantsAllocatedQuota && typeof (this.descendantsAllocatedQuota as any).validate === 'function') {
      (this.descendantsAllocatedQuota as any).validate();
    }
    if(this.desiredMinQuota && typeof (this.desiredMinQuota as any).validate === 'function') {
      (this.desiredMinQuota as any).validate();
    }
    if(this.nodeStatistics && typeof (this.nodeStatistics as any).validate === 'function') {
      (this.nodeStatistics as any).validate();
    }
    if(this.requestedQuota && typeof (this.requestedQuota as any).validate === 'function') {
      (this.requestedQuota as any).validate();
    }
    if(this.selfAllocatedQuota && typeof (this.selfAllocatedQuota as any).validate === 'function') {
      (this.selfAllocatedQuota as any).validate();
    }
    if(this.selfSubmittedQuota && typeof (this.selfSubmittedQuota as any).validate === 'function') {
      (this.selfSubmittedQuota as any).validate();
    }
    if(this.systemReservedQuota && typeof (this.systemReservedQuota as any).validate === 'function') {
      (this.systemReservedQuota as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

