// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of advanced features to return for instance types.
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * - X86.
   * - ARM.
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * The CPU architectures to query. Array length: 1 to 2.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The GPU type.
   * 
   * > Fuzzy matching is supported. For example, if the GPU type of an instance type is NVIDIA V100, you can enter NVIDIA to query the instance type.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The GPU types to query. Array length: 1 to 10.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The instance type categories to query. Array length: 1 to 10.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The category of the instance type. Valid values:
   * 
   * - General-purpose: general-purpose instance type.
   * - Compute-optimized: compute-optimized instance type.
   * - Memory-optimized: memory-optimized instance type.
   * - Big data: big data instance type.
   * - Local SSDs: local SSD instance type.
   * - High Clock Speed: high clock speed instance type.
   * - Enhanced: enhanced instance type.
   * - Shared: shared instance type.
   * - Compute-optimized with GPU: GPU-accelerated compute-optimized instance type.
   * - Visual Compute-optimized: visual compute-optimized instance type.
   * - Heterogeneous Service: heterogeneous service instance type.
   * - Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type.
   * - Compute-optimized with NPU: NPU-accelerated compute-optimized instance type.
   * - ECS Bare Metal: ECS Bare Metal Instance.
   * - Super Computing Cluster: Super Computing Cluster instance type.
   * - High Performance Compute: high-performance computing instance type.
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * - EntryLevel: entry level (shared).
   * - EnterpriseLevel: enterprise level.
   * - CreditEntryLevel: credit-based entry level.
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to query. Array length: 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The instance family that the instance type belongs to. For valid values, see [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html).
   * 
   * For more information about instance families, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The specified instance types. Array length: 1 to 10. If this parameter is not specified, information about all instance types is queried by default.
   * 
   * @example
   * ecs.g6.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * The local disk categories to query. Array length: 1 to 2.
   */
  localStorageCategories?: string[];
  /**
   * @remarks
   * The category of local disks. For more information, see [Local disks](~~63138#section_n2w_8yc_5u1~~). Valid values:
   * 
   * - local_hdd_pro: SATA HDDs used by the d1ne and d1 instance families.
   * - local_ssd_pro: NVMe SSDs used by the i2, i2g, i1, ga1, and gn5 instance families.
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paginated query. Maximum value: 1600.
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
   * The maximum number of vCPU cores when you query instance types. Valid values: positive integers.
   * 
   * > Instance types with more vCPU cores than the specified value are not returned.
   * 
   * @example
   * 10
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum CPU base clock speed when you query instance types.
   * 
   * > Instance types with a base clock speed higher than the specified value are not returned.
   * 
   * @example
   * 3.2
   */
  maximumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The maximum CPU turbo frequency when you query instance types.
   * 
   * > Instance types with a turbo frequency higher than the specified value are not returned.
   * 
   * @example
   * 4.1
   */
  maximumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The maximum number of GPUs when you query instance types. Valid values: positive integers.
   * 
   * > Instance types with more GPUs than the specified value are not returned.
   * 
   * @example
   * 10
   */
  maximumGPUAmount?: number;
  /**
   * @remarks
   * The maximum memory size when you query instance types. Unit: GiB.
   * 
   * > Instance types with a memory size larger than the specified value are not returned.
   * 
   * @example
   * 60
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The minimum baseline vCPU computing performance (total of all vCPUs) for burstable instance types t5 and t6 when you query instance types.
   * 
   * > Instance types with a baseline vCPU computing performance lower than the specified value are not returned.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPU cores when you query instance types. Valid values: positive integers.
   * 
   * > Instance types with fewer vCPU cores than the specified value are not returned.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum CPU base clock speed when you query instance types.
   * 
   * > Instance types with a base clock speed lower than the specified value are not returned.
   * 
   * @example
   * 2.5
   */
  minimumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The minimum CPU turbo frequency when you query instance types.
   * 
   * > Instance types with a turbo frequency lower than the specified value are not returned.
   * 
   * @example
   * 3.2
   */
  minimumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The minimum number of cloud disks that can be attached when you query instance types.
   * 
   * > Instance types that support fewer cloud disks than the specified value are not returned.
   * 
   * @example
   * 4
   */
  minimumDiskQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv6 addresses per ENI when you query instance types.
   * 
   * > Instance types that support fewer IPv6 addresses per ENI than the specified value are not returned.
   * 
   * @example
   * 2
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv4 addresses per ENI when you query instance types.
   * 
   * > Instance types that support fewer IPv4 addresses per ENI than the specified value are not returned.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of ENIs that can be attached when you query instance types.
   * 
   * > Instance types that support fewer ENIs than the specified value are not returned.
   * 
   * @example
   * 4
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of ERIs when you query instance types.
   * 
   * > Instance types with fewer ERIs than the specified value are not returned.
   * 
   * @example
   * 0
   */
  minimumEriQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs when you query instance types. Valid values: positive integers.
   * 
   * > Instance types with fewer GPUs than the specified value are not returned.
   * 
   * @example
   * 3
   */
  minimumGPUAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credits for burstable instance types t5 and t6 when you query instance types.
   * 
   * > Instance types with initial vCPU credits lower than the specified value are not returned.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum inbound internal bandwidth when you query instance types. Unit: kbit/s.
   * 
   * > Instance types with an inbound internal bandwidth lower than the specified value are not returned.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthRx?: number;
  /**
   * @remarks
   * The minimum outbound internal bandwidth when you query instance types. Unit: kbit/s.
   * 
   * > Instance types with an outbound internal bandwidth lower than the specified value are not returned.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthTx?: number;
  /**
   * @remarks
   * The minimum inbound packet forwarding rate over the internal network when you query instance types. Unit: pps.
   * 
   * > Instance types with an inbound packet forwarding rate lower than the specified value are not returned.
   * 
   * @example
   * 15
   */
  minimumInstancePpsRx?: number;
  /**
   * @remarks
   * The minimum outbound packet forwarding rate over the internal network when you query instance types. Unit: pps.
   * 
   * > Instance types with an outbound packet forwarding rate lower than the specified value are not returned.
   * 
   * @example
   * 15
   */
  minimumInstancePpsTx?: number;
  /**
   * @remarks
   * The minimum number of local disks attached to the instance when you query instance types.
   * 
   * > Instance types with fewer local disks than the specified value are not returned.
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
   * The minimum memory size when you query instance types. Unit: GiB.
   * 
   * > Instance types with a memory size smaller than the specified value are not returned.
   * 
   * @example
   * 20
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The minimum default number of queues supported by the primary ENI when you query instance types.
   * 
   * > Instance types with fewer default queues on the primary ENI than the specified value are not returned.
   * 
   * @example
   * 8
   */
  minimumPrimaryEniQueueNumber?: number;
  /**
   * @remarks
   * The minimum number of QueuePair (QP) queues per Elastic RDMA Interface (ERI) when you query instance types.
   * 
   * > Instance types with fewer QP queues per ERI than the specified value are not returned.
   * 
   * @example
   * 8
   */
  minimumQueuePairNumber?: number;
  /**
   * @remarks
   * The minimum default number of queues supported by the secondary ENI when you query instance types.
   * 
   * > Instance types with fewer default queues on the secondary ENI than the specified value are not returned.
   * 
   * @example
   * 4
   */
  minimumSecondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call to this API operation. You do not need to set this parameter for the first request.
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
   * Indicates whether cloud disks attached to the instance type support NVMe. Valid values:
   * 
   * - required: supported. Cloud disks are attached in NVMe mode.
   * - unsupported: not supported. Cloud disks are not attached in NVMe mode.
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
   * 
   * > Fuzzy matching is supported. For example, if the processor model of an instance type is Intel Xeon(Ice Lake) Platinum 8369B, you can enter Intel to query the instance type.
   * 
   * @example
   * Intel Xeon(Ice Lake) Platinum 8369B
   */
  physicalProcessorModel?: string;
  /**
   * @remarks
   * The processor models to query. Array length: 1 to 10.
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

