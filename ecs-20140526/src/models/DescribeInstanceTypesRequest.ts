// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * *   X86
   * *   ARM
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The CPU architectures of instance types. You can specify 1 or 2 CPU architectures.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The GPU model.
   * 
   * >  Fuzzy match is supported. For example, if an instance type provides NVIDIA V100 GPUs and you set this parameter to NVIDIA, information about the instance type is queried.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The GPU models of instance types. You can specify 1 to 10 GPU models.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The categories of instance types. You can specify 1 to 10 categories of instance types.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The category of the instance type. Valid values:
   * 
   * *   General-purpose: general-purpose instance type
   * *   Compute-optimized: compute-optimized instance type
   * *   Memory-optimized: memory-optimized instance type
   * *   Big data: big data instance type
   * *   Local SSDs: instance type with local SSDs
   * *   High Clock Speed: instance type with high clock speeds
   * *   Enhanced: enhanced instance type
   * *   Shared: shared instance type
   * *   Compute-optimized with GPU: GPU-accelerated compute-optimized instance type
   * *   Visual Compute-optimized: visual compute-optimized instance type
   * *   Heterogeneous Service: heterogeneous service instance type
   * *   Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type
   * *   Compute-optimized with NPU: NPU-accelerated compute-optimized instance type
   * *   ECS Bare Metal: ECS Bare Metal Instance type
   * *   Super Computing Cluster: Super Computing Cluster (SCC) instance type
   * *   High Performance Compute: high-performance computing instance type
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * *   EntryLevel: entry level (shared)
   * *   EnterpriseLevel: enterprise level
   * *   CreditEntryLevel: credit-based entry level
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families. You can specify 1 to 10 instance families.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The instance family to which the instance type belongs. For information about the valid values of this parameter, see [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html).
   * 
   * For more information about instance families, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The instance types. You can specify 1 to 10 instance types. If this parameter is empty, information about all instance types is queried.
   * 
   * @example
   * ecs.g6.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The categories of local disks used by instance types. You can specify 1 or 2 categories of local disks.
   */
  localStorageCategories?: string[];
  /**
   * @remarks
   * The category of local disks. For more information, see [Local disks](~~63138#section_n2w_8yc_5u1~~). Valid values:
   * 
   * *   local_hdd_pro: local Serial Advanced Technology Attachment (SATA) HDDs, which are attached to d1ne or d1 instances.
   * *   local_ssd_pro: local Non-Volatile Memory Express (NVMe) SSDs, which are attached to i2, i2g, i1, ga1, or gn5 instances.
   * 
   * Valid values:
   * 
   * *   local_hdd_pro
   * *   local_ssd_pro
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 1600.
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
   * The maximum number of vCPUs. The value must be a positive integer.
   * 
   * >  If an instance type has more vCPUs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 10
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum clock speed.
   * 
   * >  If an instance type uses processors that have a higher clock speed than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 3.2
   */
  maximumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The maximum turbo frequency.
   * 
   * >  If an instance type uses processors that deliver a higher turbo frequency than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 4.1
   */
  maximumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The maximum number of GPUs. The value must be a positive integer.
   * 
   * >  If an instance type provides more GPUs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 10
   */
  maximumGPUAmount?: number;
  /**
   * @remarks
   * The maximum memory size. Unit: GiB.
   * 
   * >  If the memory size of an instance type is larger than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 60
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The minimum baseline CPU performance (overall baseline performance of all vCPUs) of a t5 or t6 burstable instance.
   * 
   * >  If a t5 or t6 instance type provides baseline CPU performance lower than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPUs. The value must be a positive integer.
   * 
   * >  If an instance type has fewer vCPUs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum clock speed.
   * 
   * >  If an instance type uses processors that have a lower clock speed than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 2.5
   */
  minimumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The minimum turbo frequency.
   * 
   * >  If an instance type uses processors that deliver a lower turbo frequency than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 3.2
   */
  minimumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The minimum number of cloud disks per instance.
   * 
   * >  If an instance type supports fewer cloud disks than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 4
   */
  minimumDiskQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv6 addresses per ENI.
   * 
   * >  If an instance type supports fewer IPv6 addresses per ENI than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 2
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv4 addresses per ENI.
   * 
   * >  If an instance type supports fewer IPv4 addresses per ENI than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of elastic network interfaces (ENIs) per instance.
   * 
   * >  If an instance type supports fewer ENIs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 4
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of ERIs per instance.
   * 
   * >  If an instance type supports fewer ERIs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 0
   */
  minimumEriQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs. The value must be a positive integer.
   * 
   * >  If an instance type provides fewer GPUs than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 3
   */
  minimumGPUAmount?: number;
  /**
   * @remarks
   * The minimum initial CPU credits of a t5 or t6 burstable instance.
   * 
   * >  If a t5 or t6 instance type provides less initial vCPU credits than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum inbound internal bandwidth. Unit: Kbit/s.
   * 
   * >  If an instance type provides an inbound internal bandwidth that is lower than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthRx?: number;
  /**
   * @remarks
   * The minimum outbound internal bandwidth. Unit: Kbit/s.
   * 
   * >  If an instance type provides an outbound internal bandwidth that is lower than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthTx?: number;
  /**
   * @remarks
   * The minimum inbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * >  If an instance type provides an inbound packet forwarding rate over the internal network that is lower than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 15
   */
  minimumInstancePpsRx?: number;
  /**
   * @remarks
   * The minimum outbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * >  If an instance type provides an outbound packet forwarding rate over the internal network that is lower than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 15
   */
  minimumInstancePpsTx?: number;
  /**
   * @remarks
   * The minimum number of local disks per instance.
   * 
   * >  If an instance type supports fewer local disks than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 4
   */
  minimumLocalStorageAmount?: number;
  /**
   * @remarks
   * The capacity of each local disk attached per instance. Unit: GiB.
   * 
   * @example
   * 40
   */
  minimumLocalStorageCapacity?: number;
  /**
   * @remarks
   * The minimum memory size. Unit: GiB.
   * 
   * >  If the memory size of an instance type is smaller than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 20
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The minimum default number of queues per primary network interface controller (NIC).
   * 
   * >  If an instance type supports fewer queues per primary NIC than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 8
   */
  minimumPrimaryEniQueueNumber?: number;
  /**
   * @remarks
   * The minimum number of queue pair (QP) queues per elastic RDMA interface (ERI).
   * 
   * >  If an instance type supports fewer QP queues per ERI than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 8
   */
  minimumQueuePairNumber?: number;
  /**
   * @remarks
   * The minimum default number of queues per secondary NIC.
   * 
   * >  If an instance type supports fewer queues per secondary NIC than the specified value, information about the instance type is not queried.
   * 
   * @example
   * 4
   */
  minimumSecondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to the DescribeInstanceTypes operation. You do not need to specify this parameter for the first request.
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
   * Specifies whether cloud disks can be attached by using the NVMe protocol. Valid values:
   * 
   * *   required: Cloud disks can be attached by using the NVMe protocol.
   * *   unsupported: Cloud disks cannot be attached by using the NVMe protocol.
   * 
   * @example
   * required
   */
  nvmeSupport?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The CPU model.
   * 
   * >  Fuzzy match is supported. For example, if an instance type uses Intel Xeon (Ice Lake) Platinum 8369B processors and you set this parameter to Intel, information about the instance type is queried.
   * 
   * @example
   * Intel Xeon(Ice Lake) Platinum 8369B
   */
  physicalProcessorModel?: string;
  /**
   * @remarks
   * The CPU models of instance types. You can specify 1 to 10 CPU models.
   */
  physicalProcessorModels?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

