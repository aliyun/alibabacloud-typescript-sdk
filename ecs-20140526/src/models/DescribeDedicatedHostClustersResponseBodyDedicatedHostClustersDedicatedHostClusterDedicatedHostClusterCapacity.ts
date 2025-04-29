// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes";
import { DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities } from "./DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities";


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacity extends $dara.Model {
  /**
   * @remarks
   * The available capacity of ECS instances in the host group.
   */
  availableInstanceTypes?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes;
  /**
   * @remarks
   * The size of available memory. Unit: GiB
   * 
   * @example
   * 4
   */
  availableMemory?: number;
  /**
   * @remarks
   * The number of available vCPUs.
   * 
   * @example
   * 2
   */
  availableVcpus?: number;
  /**
   * @remarks
   * The local storage capacity.
   */
  localStorageCapacities?: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities;
  /**
   * @remarks
   * The total memory size. Unit: GiB
   * 
   * @example
   * 8
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of vCPUs.
   * 
   * @example
   * 4
   */
  totalVcpus?: number;
  static names(): { [key: string]: string } {
    return {
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableMemory: 'AvailableMemory',
      availableVcpus: 'AvailableVcpus',
      localStorageCapacities: 'LocalStorageCapacities',
      totalMemory: 'TotalMemory',
      totalVcpus: 'TotalVcpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceTypes: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypes,
      availableMemory: 'number',
      availableVcpus: 'number',
      localStorageCapacities: DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacities,
      totalMemory: 'number',
      totalVcpus: 'number',
    };
  }

  validate() {
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.localStorageCapacities && typeof (this.localStorageCapacities as any).validate === 'function') {
      (this.localStorageCapacities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

