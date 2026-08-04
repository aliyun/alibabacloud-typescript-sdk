// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";
import { QuotaNodeStatistics } from "./QuotaNodeStatistics";


export class QuotaDetails extends $dara.Model {
  /**
   * @remarks
   * Total MinQuota amount actually assigned
   */
  actualMinQuota?: ResourceAmount;
  /**
   * @remarks
   * Quota amount assignable by the User
   */
  allocatableQuota?: ResourceAmount;
  /**
   * @remarks
   * Total Quota usage information
   */
  allocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * Quota usage information of ancestors
   */
  ancestorsAllocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * Quota usage information of descendants
   */
  descendantsAllocatedQuota?: ResourceAmount;
  /**
   * @remarks
   * Total MinQuota amount requested by the User
   */
  desiredMinQuota?: ResourceAmount;
  nodeStatistics?: QuotaNodeStatistics;
  /**
   * @remarks
   * Quota request amount
   */
  requestedQuota?: ResourceAmount;
  /**
   * @remarks
   * Quota usage information at the current level
   */
  selfAllocatedQuota?: ResourceAmount;
  selfSubmittedQuota?: ResourceAmount;
  /**
   * @remarks
   * System-reserved Quota amount
   */
  systemReservedQuota?: ResourceAmount;
  /**
   * @remarks
   * Quota usage amount
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

