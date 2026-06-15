// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced attributes of the instance type to return.
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The CPU architecture. Valid values:
   * 
   * - X86
   * 
   * - ARM
   * 
   * @example
   * X86
   */
  cpuArchitecture?: string;
  /**
   * @remarks
   * An array of 1 to 2 CPU architectures.
   */
  cpuArchitectures?: string[];
  /**
   * @remarks
   * The GPU type.
   * 
   * > This parameter supports fuzzy search. For example, specifying `NVIDIA` returns instance types with `NVIDIA V100` GPUs.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * An array of 1 to 10 GPU types.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * An array of 1 to 10 instance categories.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The instance category. Valid values:
   * 
   * - General-purpose
   * 
   * - Compute-optimized
   * 
   * - Memory-optimized
   * 
   * - Big data
   * 
   * - Local SSDs
   * 
   * - High clock speed
   * 
   * - Enhanced
   * 
   * - Shared
   * 
   * - Compute-optimized with GPU
   * 
   * - Visual Compute-optimized
   * 
   * - Heterogeneous service
   * 
   * - Compute-optimized with FPGA
   * 
   * - Compute-optimized with NPU
   * 
   * - ECS Bare Metal
   * 
   * - Super Computing Cluster
   * 
   * - High performance compute
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The instance family level. Valid values:
   * 
   * - `EntryLevel`: Entry-level (shared).
   * 
   * - `EnterpriseLevel`: Enterprise-level.
   * 
   * - `CreditEntryLevel`: Credit-based entry-level.
   * 
   * @example
   * EntryLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * An array of 1 to 10 instance type families.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The instance type family. For valid values, call the [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html) operation.
   * 
   * For more information about instance type families, see [Instance type families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * An array of 1 to 10 instance types. If you do not specify this parameter, the operation returns information about all instance types.
   * 
   * @example
   * ecs.g6.large
   */
  instanceTypes?: string[];
  /**
   * @remarks
   * An array of 1 to 2 local disk categories.
   */
  localStorageCategories?: string[];
  /**
   * @remarks
   * The category of local disks. For more information, see [Local disks](~~63138#section_n2w_8yc_5u1~~). Valid values:
   * 
   * - `local_hdd_pro`: SATA HDD local disks, supported by d1ne and d1 instance types.
   * 
   * - `local_ssd_pro`: NVMe SSD local disks, supported by i2, i2g, i1, ga1, and gn5 instance types.
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 1600.
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
   * The maximum number of vCPU cores for the instance type. The value must be a positive integer.
   * 
   * > The response excludes instance types with more vCPU cores than this value.
   * 
   * @example
   * 10
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum clock speed.
   * 
   * > The response excludes instance types with a clock speed higher than this value.
   * 
   * @example
   * 3.2
   */
  maximumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The maximum turbo frequency.
   * 
   * > The response excludes instance types with a turbo frequency higher than this value.
   * 
   * @example
   * 4.1
   */
  maximumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The maximum number of GPUs. The value must be a positive integer.
   * 
   * > The response excludes instance types with more GPUs than this value.
   * 
   * @example
   * 10
   */
  maximumGPUAmount?: number;
  /**
   * @remarks
   * The maximum memory size for the instance type. Unit: GiB.
   * 
   * > The response excludes instance types with a larger memory size than this value.
   * 
   * @example
   * 60
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The minimum baseline vCPU performance of a t5 or t6 burstable performance instance. This value is the sum of the baseline performance of all vCPUs.
   * 
   * > The response excludes instance types with a baseline vCPU performance lower than this value.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPU cores for the instance type. The value must be a positive integer.
   * 
   * > The response excludes instance types with fewer vCPU cores than this value.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum clock speed.
   * 
   * > The response excludes instance types with a clock speed lower than this value.
   * 
   * @example
   * 2.5
   */
  minimumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The minimum turbo frequency.
   * 
   * > The response excludes instance types with a turbo frequency lower than this value.
   * 
   * @example
   * 3.2
   */
  minimumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The minimum value for the maximum number of cloud disks that can be attached to the instance type.
   * 
   * > The response excludes instance types that support fewer attachable cloud disks than this value.
   * 
   * @example
   * 4
   */
  minimumDiskQuantity?: number;
  /**
   * @remarks
   * The minimum value for the maximum number of IPv6 addresses that can be assigned to a single elastic network interface.
   * 
   * > The response excludes instance types whose ENIs support fewer assignable IPv6 addresses than this value.
   * 
   * @example
   * 2
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum value for the maximum number of IPv4 addresses that can be assigned to a single elastic network interface.
   * 
   * > The response excludes instance types whose ENIs support fewer assignable IPv4 addresses than this value.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum value for the maximum number of elastic network interfaces (ENIs) that can be attached to the instance type.
   * 
   * > The response excludes instance types that support fewer ENIs than this value.
   * 
   * @example
   * 4
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of Elastic RDMA Interfaces (ERIs).
   * 
   * > The response excludes instance types that support fewer ERIs than this value.
   * 
   * @example
   * 0
   */
  minimumEriQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs. The value must be a positive integer.
   * 
   * > The response excludes instance types with fewer GPUs than this value.
   * 
   * @example
   * 3
   */
  minimumGPUAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credits of a t5 or t6 burstable performance instance.
   * 
   * > The response excludes instance types with fewer initial vCPU credits than this value.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum inbound bandwidth over the internal network. Unit: kbit/s.
   * 
   * > The response excludes instance types that have a lower inbound bandwidth limit over the internal network than this value.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthRx?: number;
  /**
   * @remarks
   * The minimum outbound bandwidth over the internal network. Unit: kbit/s.
   * 
   * > The response excludes instance types that have a lower outbound bandwidth limit over the internal network than this value.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthTx?: number;
  /**
   * @remarks
   * The minimum inbound packet rate over the internal network. Unit: pps.
   * 
   * > The response excludes instance types that have a lower inbound packet rate over the internal network than this value.
   * 
   * @example
   * 15
   */
  minimumInstancePpsRx?: number;
  /**
   * @remarks
   * The minimum outbound packet rate over the internal network. Unit: pps.
   * 
   * > The response excludes instance types that have a lower outbound packet rate over the internal network than this value.
   * 
   * @example
   * 15
   */
  minimumInstancePpsTx?: number;
  /**
   * @remarks
   * The minimum number of local disks available on the instance type.
   * 
   * > The response excludes instance types that support fewer local disks than this value.
   * 
   * @example
   * 4
   */
  minimumLocalStorageAmount?: number;
  /**
   * @remarks
   * The minimum capacity of a single local disk, in GiB. The response excludes instance types whose local disks have a capacity smaller than this value.
   * 
   * @example
   * 40
   */
  minimumLocalStorageCapacity?: number;
  /**
   * @remarks
   * The minimum memory size for the instance type. Unit: GiB.
   * 
   * > The response excludes instance types with a smaller memory size than this value.
   * 
   * @example
   * 20
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The minimum number of queues supported by the primary elastic network interface.
   * 
   * > The response excludes instance types that support fewer queues for the primary elastic network interface than this value.
   * 
   * @example
   * 8
   */
  minimumPrimaryEniQueueNumber?: number;
  /**
   * @remarks
   * The minimum value for the maximum number of queue pairs (QPs) supported by a single Elastic RDMA Interface (ERI).
   * 
   * > The response excludes instance types whose ERIs support fewer queue pairs than this value.
   * 
   * @example
   * 8
   */
  minimumQueuePairNumber?: number;
  /**
   * @remarks
   * The minimum number of queues supported by a secondary elastic network interface.
   * 
   * > The response excludes instance types that support fewer queues for a secondary elastic network interface than this value.
   * 
   * @example
   * 4
   */
  minimumSecondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. You do not need to set this parameter for the first request. For subsequent requests, set this to the `NextToken` value from the previous response.
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
   * Specifies whether cloud disks attached to the instance type support NVMe. Valid values:
   * 
   * - `required`: Cloud disks are attached using the NVMe protocol.
   * 
   * - `unsupported`: Cloud disks are attached without using the NVMe protocol.
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
   * > This parameter supports fuzzy search. For example, specifying `Intel` returns instance types with `Intel Xeon(Ice Lake) Platinum 8369B` processors.
   * 
   * @example
   * Intel Xeon(Ice Lake) Platinum 8369B
   */
  physicalProcessorModel?: string;
  /**
   * @remarks
   * An array of 1 to 10 processor models.
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

