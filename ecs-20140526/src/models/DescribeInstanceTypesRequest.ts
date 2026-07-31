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
   * The instance type category. Valid values:
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
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
   * The instance family to which the instance type belongs. For more information, see [DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html).
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
   * The local disk types to query. Array length: 1 to 2.
   */
  localStorageCategories?: string[];
  /**
   * @remarks
   * The local disk type. For more information, see [Local disks](~~63138#section_n2w_8yc_5u1~~). Valid values:
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging query. Maximum value: 1600.
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
   * The expected maximum number of vCPU cores when querying instance types. Valid values: positive integers.
   * 
   * @example
   * 10
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The expected maximum clock speed when querying instance types.
   * 
   * @example
   * 3.2
   */
  maximumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The expected maximum turbo frequency when querying instance types.
   * 
   * @example
   * 4.1
   */
  maximumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The expected maximum number of GPUs when querying instance types. Valid values: positive integers.
   * 
   * @example
   * 10
   */
  maximumGPUAmount?: number;
  /**
   * @remarks
   * The expected maximum memory size when querying instance types. Unit: GiB.
   * 
   * @example
   * 60
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The expected minimum baseline vCPU computing performance (sum of all vCPUs) for burstable instances t5 and t6 when querying instance types.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The expected minimum number of vCPU cores when querying instance types. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The expected minimum clock speed when querying instance types.
   * 
   * @example
   * 2.5
   */
  minimumCpuSpeedFrequency?: number;
  /**
   * @remarks
   * The expected minimum turbo frequency when querying instance types.
   * 
   * @example
   * 3.2
   */
  minimumCpuTurboFrequency?: number;
  /**
   * @remarks
   * The expected minimum number of cloud disks that can be attached when querying instance types.
   * 
   * @example
   * 4
   */
  minimumDiskQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of IPv6 addresses per Elastic Network Interface (ENI) network interface controller (NIC) when querying instance types.
   * 
   * @example
   * 2
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of IPv4 addresses per Elastic Network Interface (ENI) network interface controller (NIC) when querying instance types.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of Elastic Network Interfaces (ENIs) that can be attached per network interface controller (NIC) when querying instance types.
   * 
   * @example
   * 4
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of Elastic RDMA Interfaces (ERIs) per network interface controller (NIC) when querying instance types.
   * 
   * @example
   * 0
   */
  minimumEriQuantity?: number;
  /**
   * @remarks
   * The expected minimum number of GPUs when querying instance types. Valid values: positive integers.
   * 
   * @example
   * 3
   */
  minimumGPUAmount?: number;
  /**
   * @remarks
   * The expected minimum initial vCPU CPU credits for burstable instances t5 and t6 when querying instance types.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The expected minimum inbound internal bandwidth when querying instance types. Unit: kbit/s.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthRx?: number;
  /**
   * @remarks
   * The expected minimum outbound internal bandwidth when querying instance types. Unit: kbit/s.
   * 
   * @example
   * 12288
   */
  minimumInstanceBandwidthTx?: number;
  /**
   * @remarks
   * The expected minimum inbound packet forwarding rate over the internal network when querying instance types. Unit: pps.
   * 
   * @example
   * 15
   */
  minimumInstancePpsRx?: number;
  /**
   * @remarks
   * The expected minimum outbound packet forwarding rate over the internal network when querying instance types. Unit: pps.
   * 
   * @example
   * 15
   */
  minimumInstancePpsTx?: number;
  /**
   * @remarks
   * The expected minimum number of local disks attached to the instance when querying instance types.
   * 
   * @example
   * 4
   */
  minimumLocalStorageAmount?: number;
  /**
   * @remarks
   * The capacity of each local disk attached to the instance. Unit: GiB.
   * 
   * @example
   * 40
   */
  minimumLocalStorageCapacity?: number;
  /**
   * @remarks
   * The expected minimum memory size when querying instance types. Unit: GiB.
   * 
   * @example
   * 20
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The expected minimum number of default queues for the primary ENI when querying instance types.
   * 
   * @example
   * 8
   */
  minimumPrimaryEniQueueNumber?: number;
  /**
   * @remarks
   * The expected minimum number of QueuePair (QP) queues per Elastic RDMA Interface (ERI) when querying instance types.
   * 
   * @example
   * 8
   */
  minimumQueuePairNumber?: number;
  /**
   * @remarks
   * The expected minimum number of default queues for secondary Elastic Network Interfaces (ENIs) per network interface controller (NIC) when querying instance types.
   * 
   * @example
   * 4
   */
  minimumSecondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The query token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first call.
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

