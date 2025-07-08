// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes";
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities";


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacity extends $dara.Model {
  availableInstanceTypes?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes;
  /**
   * @remarks
   * The amount of available space on the local disks. Unit: GiB
   * 
   * @example
   * 65
   */
  availableLocalStorage?: number;
  /**
   * @remarks
   * The amount of available memory. Unit: GiB.
   * 
   * @example
   * 25
   */
  availableMemory?: number;
  /**
   * @remarks
   * The number of available vCPUs.
   * 
   * @example
   * 5
   */
  availableVcpus?: number;
  /**
   * @remarks
   * The number of available vGPUs.
   * 
   * @example
   * 2
   */
  availableVgpus?: number;
  /**
   * @remarks
   * The category of local disks.
   * 
   * @example
   * i2
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The socket capacities.
   */
  socketCapacities?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities;
  /**
   * @remarks
   * The total capacity of local disks. Unit: GiB.
   * 
   * @example
   * 512
   */
  totalLocalStorage?: number;
  /**
   * @remarks
   * The total amount of memory. Unit: GiB.
   * 
   * @example
   * 1024
   */
  totalMemory?: number;
  /**
   * @remarks
   * The total number of vCPUs.
   * 
   * @example
   * 56
   */
  totalVcpus?: number;
  /**
   * @remarks
   * The total number of vGPUs.
   * 
   * @example
   * 10
   */
  totalVgpus?: number;
  static names(): { [key: string]: string } {
    return {
      availableInstanceTypes: 'AvailableInstanceTypes',
      availableLocalStorage: 'AvailableLocalStorage',
      availableMemory: 'AvailableMemory',
      availableVcpus: 'AvailableVcpus',
      availableVgpus: 'AvailableVgpus',
      localStorageCategory: 'LocalStorageCategory',
      socketCapacities: 'SocketCapacities',
      totalLocalStorage: 'TotalLocalStorage',
      totalMemory: 'TotalMemory',
      totalVcpus: 'TotalVcpus',
      totalVgpus: 'TotalVgpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceTypes: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacityAvailableInstanceTypes,
      availableLocalStorage: 'number',
      availableMemory: 'number',
      availableVcpus: 'number',
      availableVgpus: 'number',
      localStorageCategory: 'string',
      socketCapacities: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities,
      totalLocalStorage: 'number',
      totalMemory: 'number',
      totalVcpus: 'number',
      totalVgpus: 'number',
    };
  }

  validate() {
    if(this.availableInstanceTypes && typeof (this.availableInstanceTypes as any).validate === 'function') {
      (this.availableInstanceTypes as any).validate();
    }
    if(this.socketCapacities && typeof (this.socketCapacities as any).validate === 'function') {
      (this.socketCapacities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

