// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies } from "./DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies";
import { DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList } from "./DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList";


export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType extends $dara.Model {
  /**
   * @remarks
   * The number of cores per physical CPU.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The supported CPU overcommit ratio range.
   * 
   * @example
   * 1-5
   */
  cpuOverCommitRatioRange?: string;
  /**
   * @remarks
   * The dedicated host type.
   * 
   * @example
   * ddh.sn1ne
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * gpu
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The number of local disks on a dedicated host.
   * 
   * @example
   * 0
   */
  localStorageAmount?: number;
  /**
   * @remarks
   * The capacity of a local disk. Unit: GiB.
   * 
   * @example
   * 0
   */
  localStorageCapacity?: number;
  /**
   * @remarks
   * The category of local disks.
   * 
   * @example
   * local
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * @example
   * 112.0
   */
  memorySize?: number;
  /**
   * @remarks
   * The number of physical GPUs.
   * 
   * @example
   * 2
   */
  physicalGpus?: number;
  /**
   * @remarks
   * The number of physical CPUs.
   * 
   * @example
   * 2
   */
  sockets?: number;
  /**
   * @remarks
   * Indicates whether the CPU overcommit ratio settings are supported.
   * 
   * @example
   * true
   */
  supportCpuOverCommitRatio?: boolean;
  /**
   * @remarks
   * The ECS instance families supported by the dedicated host type.
   */
  supportedInstanceTypeFamilies?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies;
  /**
   * @remarks
   * The ECS instance types supported by the dedicated host type.
   */
  supportedInstanceTypesList?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList;
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
      cores: 'Cores',
      cpuOverCommitRatioRange: 'CpuOverCommitRatioRange',
      dedicatedHostType: 'DedicatedHostType',
      GPUSpec: 'GPUSpec',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageCategory: 'LocalStorageCategory',
      memorySize: 'MemorySize',
      physicalGpus: 'PhysicalGpus',
      sockets: 'Sockets',
      supportCpuOverCommitRatio: 'SupportCpuOverCommitRatio',
      supportedInstanceTypeFamilies: 'SupportedInstanceTypeFamilies',
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
      totalVcpus: 'TotalVcpus',
      totalVgpus: 'TotalVgpus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      cpuOverCommitRatioRange: 'string',
      dedicatedHostType: 'string',
      GPUSpec: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      localStorageCategory: 'string',
      memorySize: 'number',
      physicalGpus: 'number',
      sockets: 'number',
      supportCpuOverCommitRatio: 'boolean',
      supportedInstanceTypeFamilies: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypeFamilies,
      supportedInstanceTypesList: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList,
      totalVcpus: 'number',
      totalVgpus: 'number',
    };
  }

  validate() {
    if(this.supportedInstanceTypeFamilies && typeof (this.supportedInstanceTypeFamilies as any).validate === 'function') {
      (this.supportedInstanceTypeFamilies as any).validate();
    }
    if(this.supportedInstanceTypesList && typeof (this.supportedInstanceTypesList as any).validate === 'function') {
      (this.supportedInstanceTypesList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

