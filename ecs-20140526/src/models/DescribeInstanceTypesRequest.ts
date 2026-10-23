// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of advanced instance type features to return.
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * - X86
   * - ARM
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The array of CPU architectures to query. Array length: 1 to 2.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The GPU type.
   * > Fuzzy match is supported. For example, if the GPU type of an instance type is NVIDIA V100, you can enter NVIDIA to query the information of the instance type.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The specified array of GPU types to query. Array length: 1 to 10.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The array of instance type categorizations to query. Array length: 1 to 10.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The categorization of the instance type. Valid values:
   * 
   * - General-purpose: General-purpose.
   * - Compute-optimized: Compute-optimized.
   * - Memory-optimized: Memory-optimized.
   * - Big data: Big data.
   * - Local SSDs: Local SSDs.
   * - High Clock Speed: High clock speed.
   * - Enhanced: enhanced instance families.
   * - Shared: Shared.
   * - Compute-optimized with GPU: GPU computing.
   * - Visual Compute-optimized: Visual compute-optimized.
   * - Heterogeneous Service: Heterogeneous service.
   * - Compute-optimized with FPGA: FPGA-accelerated compute-optimized.
   * - Compute-optimized with NPU: NPU-accelerated compute-optimized.
   * - ECS Bare Metal: ECS Bare Metal.
   * - Super Computing Cluster: Super Computing Cluster (SCC).
   * - High Performance Compute: high-performance computing (HPC) compute-optimized.
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * - EntryLevel: Entry-level (shared).
   * - EnterpriseLevel: Enterprise-level.
   * - CreditEntryLevel: Credit entry-level.
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The specified array of instance families to query. Array length: 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The instance family to which the instance type belongs. For valid values, see [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html).
   * 
   * For more information about instance families, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The specified array of instance types. Array length: 1 to 10. If this parameter is not specified, the information of all instance types is queried by default.
   * 
   * @example
   * ecs.g6.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The array of local disk categories to query. Array length: 1 to 2.
   */
  localStorageCategories?: string[];
  /**
   * @remarks
   * The type of the local disk. For more information, see [Local disks](~~63138#section_n2w_8yc_5u1~~). Valid values:
   * 
   * - local_hdd_pro: SATA HDD local disks equipped with the d1ne and d1 instance families.
   * - local_ssd_pro: NVMe SSD local disks equipped with instance families such as i2, i2g, i1, ga1, and gn5.
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for paging queries. Maximum value: 1600.
   * 
   * Default value: 1600.
   * 
   * @example
   * 10
   * 
   * **if can be null:**
   * false
   */
  maxResults?: number;
  /**
   * @remarks
   * The maximum expected number of vCPU cores when querying instance types. Valid values: positive integers.
   * 
   * > If the number of vCPU cores of an instance type is greater than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 10
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum expected clock speed when querying instance types.
   * 
   * > If the clock speed of an instance type is greater than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 3.2
   */
  maximumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The maximum expected turbo frequency when querying instance types.
   * 
   * > If the turbo frequency of an instance type is greater than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 4.1
   */
  maximumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The maximum expected number of GPUs when querying instance types. Valid values: positive integers.
   * 
   * > If the number of GPUs of an instance type is greater than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 10
   */
  maximumGPUAmount?: number;
  /**
   * @remarks
   * The maximum expected memory size when querying instance types. Unit: GiB.
   * 
   * > If the memory size of an instance type is greater than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 60
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The minimum expected baseline vCPU computing performance (sum of all vCPUs) of burstable instances t5 and t6 when querying instance types.
   * 
   * > If the baseline vCPU computing performance (sum of all vCPUs) of a burstable instance t5 or t6 is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum expected number of vCPU cores when querying instance types. Valid values: positive integers.
   * 
   * > If the number of vCPU cores of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum expected clock speed when querying instance types.
   * 
   * > If the clock speed of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 2.5
   */
  minimumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The minimum expected turbo frequency when querying instance types.
   * 
   * > If the turbo frequency of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 3.2
   */
  minimumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The minimum expected maximum number of cloud disks that can be attached when querying instance types.
   * 
   * > If the maximum number of cloud disks that can be attached to an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 4
   */
  minimumDiskQuantity?: number;
  /**
   * @remarks
   * The minimum expected maximum number of IPv6 addresses per Elastic Network Interface (ENI) network interface controller (NIC) when querying instance types.
   * 
   * > If the maximum number of IPv6 addresses per Elastic Network Interface (ENI) network interface controller (NIC) of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 2
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum expected maximum number of IPv4 addresses per Elastic Network Interface (ENI) network interface controller (NIC) when querying instance types.
   * 
   * > If the maximum number of IPv4 addresses per Elastic Network Interface (ENI) network interface controller (NIC) of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum expected maximum number of Elastic Network Interface (ENI) network interface controller (NIC) that can be attached when querying instance types.
   * 
   * > If the maximum number of Elastic Network Interface (ENI) network interface controller (NIC) that can be attached to an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 4
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum expected number of Elastic RDMA Interface (ERI) Elastic RDMA network interface controller (NIC) when querying instance types.
   * 
   * > If the number of Elastic RDMA Interface (ERI) Elastic RDMA network interface controller (NIC) of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 0
   */
  minimumEriQuantity?: number;
  /**
   * @remarks
   * The minimum expected number of GPUs when querying instance types. Valid values: positive integers.
   * 
   * > If the number of GPUs of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 3
   */
  minimumGPUAmount?: number;
  /**
   * @remarks
   * The minimum expected initial vCPU credits of burstable instances t5 and t6 when querying instance types.
   * 
   * > If the initial vCPU credits of a burstable instance t5 or t6 are less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum expected inbound internal bandwidth limit when querying instance types. Unit: kbit/s.
   * 
   * > If the inbound internal bandwidth limit of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthRx?: number;
  /**
   * @remarks
   * The minimum expected outbound internal bandwidth limit when querying instance types. Unit: kbit/s.
   * 
   * > If the outbound internal bandwidth limit of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthTx?: number;
  /**
   * @remarks
   * The minimum expected inbound internal network packet forwarding rate when querying instance types. Unit: pps.
   * 
   * > If the inbound internal network packet forwarding rate of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 15
   */
  minimumInstancePpsRx?: number;
  /**
   * @remarks
   * The minimum expected outbound internal network packet forwarding rate when querying instance types. Unit: pps.
   * 
   * > If the outbound internal network packet forwarding rate of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 15
   */
  minimumInstancePpsTx?: number;
  /**
   * @remarks
   * The minimum expected number of local disks attached to the instance when querying instance types.
   * 
   * > If the number of local disks attached to an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 4
   */
  minimumLocalStorageAmount?: number;
  /**
   * @remarks
   * The capacity of a single local disk attached to the instance. Unit: GiB.
   * 
   * @example
   * 40
   */
  minimumLocalStorageCapacity?: number;
  /**
   * @remarks
   * The minimum expected memory size when querying instance types. Unit: GiB.
   * 
   * > If the memory size of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 20
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The minimum expected default number of queues for the primary ENI when querying instance types.
   * 
   * > If the default number of queues for the primary ENI of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 8
   */
  minimumPrimaryEniQueueNumber?: number;
  /**
   * @remarks
   * The minimum expected maximum number of Queue Pair (QP) queues per Elastic RDMA Interface (ERI) when querying instance types.
   * 
   * > If the maximum number of QP queues per ERI of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 8
   */
  minimumQueuePairNumber?: number;
  /**
   * @remarks
   * The minimum expected default number of queues for secondary Elastic Network Interface (ENI) network interface controller (NIC) when querying instance types.
   * 
   * > If the default number of queues for secondary Elastic Network Interface (ENI) network interface controller (NIC) of an instance type is less than the specified value, the system does not return the information of the instance type.
   * 
   * @example
   * 4
   */
  minimumSecondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the last call to this operation. You do not need to specify this parameter for the first call.
   * 
   * @example
   * e71d8a535bd9cc11
   * 
   * **if can be null:**
   * true
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether the cloud disks attached to the instance type support NVMe. Valid values:
   * 
   * - required: Supported. Indicates that cloud disks are attached over NVMe.
   * - unsupported: Not supported. Indicates that cloud disks are not attached over NVMe.
   * 
   * @example
   * required
   */
  nvmeSupport?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The processor model.
   * > Fuzzy match is supported. For example, if the processor model of an instance type is Intel Xeon (Ice Lake) Platinum 8369B, you can enter Intel to query the information of the instance type.
   * 
   * @example
   * Intel Xeon(Ice Lake) Platinum 8369B
   */
  physicalProcessorModel?: string;
  /**
   * @remarks
   * The array of physical processor models to query. Array length: 1 to 10.
   */
  physicalProcessorModels?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      additionalAttributes: 'AdditionalAttributes',
      cpuArchitecture: 'CpuArchitecture',
      cpuArchitectures: 'CpuArchitectures',
      GPUSpec: 'GPUSpec',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceCategory: 'InstanceCategory',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypes: 'InstanceTypes',
      localStorageCategories: 'LocalStorageCategories',
      localStorageCategory: 'LocalStorageCategory',
      maxResults: 'MaxResults',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumCpuSpeedFrequency: 'MaximumCpuSpeedFrequency',
      maximumCpuTurboFrequency: 'MaximumCpuTurboFrequency',
      maximumGPUAmount: 'MaximumGPUAmount',
      maximumMemorySize: 'MaximumMemorySize',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumCpuSpeedFrequency: 'MinimumCpuSpeedFrequency',
      minimumCpuTurboFrequency: 'MinimumCpuTurboFrequency',
      minimumDiskQuantity: 'MinimumDiskQuantity',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumEriQuantity: 'MinimumEriQuantity',
      minimumGPUAmount: 'MinimumGPUAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumInstanceBandwidthRx: 'MinimumInstanceBandwidthRx',
      minimumInstanceBandwidthTx: 'MinimumInstanceBandwidthTx',
      minimumInstancePpsRx: 'MinimumInstancePpsRx',
      minimumInstancePpsTx: 'MinimumInstancePpsTx',
      minimumLocalStorageAmount: 'MinimumLocalStorageAmount',
      minimumLocalStorageCapacity: 'MinimumLocalStorageCapacity',
      minimumMemorySize: 'MinimumMemorySize',
      minimumPrimaryEniQueueNumber: 'MinimumPrimaryEniQueueNumber',
      minimumQueuePairNumber: 'MinimumQueuePairNumber',
      minimumSecondaryEniQueueNumber: 'MinimumSecondaryEniQueueNumber',
      nextToken: 'NextToken',
      nvmeSupport: 'NvmeSupport',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      physicalProcessorModel: 'PhysicalProcessorModel',
      physicalProcessorModels: 'PhysicalProcessorModels',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      cpuArchitecture: 'string',
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      GPUSpec: 'string',
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceCategory: 'string',
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      instanceTypeFamily: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      localStorageCategories: { 'type': 'array', 'itemType': 'string' },
      localStorageCategory: 'string',
      maxResults: 'number',
      maximumCpuCoreCount: 'number',
      maximumCpuSpeedFrequency: 'number',
      maximumCpuTurboFrequency: 'number',
      maximumGPUAmount: 'number',
      maximumMemorySize: 'number',
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumCpuSpeedFrequency: 'number',
      minimumCpuTurboFrequency: 'number',
      minimumDiskQuantity: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumEriQuantity: 'number',
      minimumGPUAmount: 'number',
      minimumInitialCredit: 'number',
      minimumInstanceBandwidthRx: 'number',
      minimumInstanceBandwidthTx: 'number',
      minimumInstancePpsRx: 'number',
      minimumInstancePpsTx: 'number',
      minimumLocalStorageAmount: 'number',
      minimumLocalStorageCapacity: 'number',
      minimumMemorySize: 'number',
      minimumPrimaryEniQueueNumber: 'number',
      minimumQueuePairNumber: 'number',
      minimumSecondaryEniQueueNumber: 'number',
      nextToken: 'string',
      nvmeSupport: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      physicalProcessorModel: 'string',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.additionalAttributes)) {
      $dara.Model.validateArray(this.additionalAttributes);
    }
    if(Array.isArray(this.cpuArchitectures)) {
      $dara.Model.validateArray(this.cpuArchitectures);
    }
    if(Array.isArray(this.gpuSpecs)) {
      $dara.Model.validateArray(this.gpuSpecs);
    }
    if(Array.isArray(this.instanceCategories)) {
      $dara.Model.validateArray(this.instanceCategories);
    }
    if(Array.isArray(this.instanceTypeFamilies)) {
      $dara.Model.validateArray(this.instanceTypeFamilies);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.localStorageCategories)) {
      $dara.Model.validateArray(this.localStorageCategories);
    }
    if(Array.isArray(this.physicalProcessorModels)) {
      $dara.Model.validateArray(this.physicalProcessorModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

