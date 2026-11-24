// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture type of the instance type. Valid values:
   * 
   * - X86: x86 computing
   * - Heterogeneous: heterogeneous computing, such as GPU or FPGA
   * - BareMental: Elastic Compute Service Bare Metal Server
   * - Arm: Arm computing
   * 
   * Default value: all architecture types.
   */
  architecture?: string[];
  /**
   * @remarks
   * Specifies whether the instance type is a burstable instance type. Valid values:
   * 
   * - Exclude: Burstable instance types are excluded.
   * - Include: Burstable instance types are included.
   * - Required: Only burstable instance types are included.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The channel ID. This parameter is reserved for internal use.
   * 
   * @example
   * 79425074
   */
  channelId?: number;
  /**
   * @remarks
   * The number of vCPUs for the instance type.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of vCPUs for the instance type. You can specify multiple values.
   */
  coresList?: number[];
  /**
   * @remarks
   * The CPU architecture of the instance type. Valid values:
   * 
   * > N specifies the number of CPU architectures that you can set. Valid values of N: 1 to 2.
   * 
   * - X86
   * - ARM
   */
  cpuArchitectures?: string[];
  excludedInstanceType?: string[];
  /**
   * @remarks
   * The GPU type.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The categorization of the instance type. Valid values:
   * 
   * - General-purpose: general-purpose
   * - Compute-optimized: compute-optimized
   * - Memory-optimized: memory-optimized
   * - Big data: big data
   * - Local SSDs: local SSD
   * - High Clock Speed: high frequency
   * - Enhanced: enhanced
   * - Shared: shared
   * - Compute-optimized with GPU: GPU-accelerated compute-optimized
   * - Visual Compute-optimized: visual compute-optimized
   * - Heterogeneous Service: heterogeneous service
   * - Compute-optimized with FPGA: FPGA-accelerated compute-optimized
   * - Compute-optimized with NPU: NPU-accelerated compute-optimized
   * - ECS Bare Metal: Elastic Compute Service Bare Metal Server
   * - High Performance Compute: high-performance computing (HPC)
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * - EntryLevel: Entry-level instance family.
   * - EnterpriseLevel: Enterprise-level instance family.
   * - CreditEntryLevel: Credit entry-level instance family. For more information, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families to be queried. N specifies the number of instance families that you can set. Valid values of N: 1 to 10.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum acceptable hourly price for the pay-as-you-go or spot instance.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPUs for the instance type.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs for the instance. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The maximum memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB. You can specify multiple values.
   */
  memoryList?: number[];
  /**
   * @remarks
   * The minimum baseline vCPU computing performance (sum of all vCPUs) for burstable instances of the t5 and t6 instance types.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPUs for the instance type.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of IPv6 addresses per elastic network interface controller (NIC) for the instance.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of IPv4 addresses per elastic network interface controller (NIC) for the instance.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum upper limit on the number of elastic network interfaces (ENIs) that can be bound to the instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs for the instance. Valid values: positive integers.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The minimum initial vCPU credit for burstable instances of the t5 and t6 instance types.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The processor model of the instance. N specifies the number of processor models that you can set. Valid values of N: 1 to 10.
   */
  physicalProcessorModels?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. Valid values:
   *          
   * - NoSpot: regular pay-as-you-go instance
   * - SpotWithPriceLimit: spot instance with a maximum price limit
   * - SpotAsPriceGo: spot instance whose price is automatically offered by the system based on the current market price
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The list of vSwitch IDs. You must specify at least one of VSwitchId and ZoneId.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The list of zone IDs. This parameter is invalid if a vSwitch ID is specified. You must specify at least one of VSwitchId and ZoneId.
   */
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      burstablePerformance: 'BurstablePerformance',
      channelId: 'ChannelId',
      cores: 'Cores',
      coresList: 'CoresList',
      cpuArchitectures: 'CpuArchitectures',
      excludedInstanceType: 'ExcludedInstanceType',
      gpuSpecs: 'GpuSpecs',
      instanceCategories: 'InstanceCategories',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeFamilies: 'InstanceTypeFamilies',
      maxPrice: 'MaxPrice',
      maximumCpuCoreCount: 'MaximumCpuCoreCount',
      maximumGpuAmount: 'MaximumGpuAmount',
      maximumMemorySize: 'MaximumMemorySize',
      memory: 'Memory',
      memoryList: 'MemoryList',
      minimumBaselineCredit: 'MinimumBaselineCredit',
      minimumCpuCoreCount: 'MinimumCpuCoreCount',
      minimumEniIpv6AddressQuantity: 'MinimumEniIpv6AddressQuantity',
      minimumEniPrivateIpAddressQuantity: 'MinimumEniPrivateIpAddressQuantity',
      minimumEniQuantity: 'MinimumEniQuantity',
      minimumGpuAmount: 'MinimumGpuAmount',
      minimumInitialCredit: 'MinimumInitialCredit',
      minimumMemorySize: 'MinimumMemorySize',
      physicalProcessorModels: 'PhysicalProcessorModels',
      regionId: 'RegionId',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: { 'type': 'array', 'itemType': 'string' },
      burstablePerformance: 'string',
      channelId: 'number',
      cores: 'number',
      coresList: { 'type': 'array', 'itemType': 'number' },
      cpuArchitectures: { 'type': 'array', 'itemType': 'string' },
      excludedInstanceType: { 'type': 'array', 'itemType': 'string' },
      gpuSpecs: { 'type': 'array', 'itemType': 'string' },
      instanceCategories: { 'type': 'array', 'itemType': 'string' },
      instanceFamilyLevel: 'string',
      instanceTypeFamilies: { 'type': 'array', 'itemType': 'string' },
      maxPrice: 'number',
      maximumCpuCoreCount: 'number',
      maximumGpuAmount: 'number',
      maximumMemorySize: 'number',
      memory: 'number',
      memoryList: { 'type': 'array', 'itemType': 'number' },
      minimumBaselineCredit: 'number',
      minimumCpuCoreCount: 'number',
      minimumEniIpv6AddressQuantity: 'number',
      minimumEniPrivateIpAddressQuantity: 'number',
      minimumEniQuantity: 'number',
      minimumGpuAmount: 'number',
      minimumInitialCredit: 'number',
      minimumMemorySize: 'number',
      physicalProcessorModels: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      spotStrategy: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.architecture)) {
      $dara.Model.validateArray(this.architecture);
    }
    if(Array.isArray(this.coresList)) {
      $dara.Model.validateArray(this.coresList);
    }
    if(Array.isArray(this.cpuArchitectures)) {
      $dara.Model.validateArray(this.cpuArchitectures);
    }
    if(Array.isArray(this.excludedInstanceType)) {
      $dara.Model.validateArray(this.excludedInstanceType);
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
    if(Array.isArray(this.memoryList)) {
      $dara.Model.validateArray(this.memoryList);
    }
    if(Array.isArray(this.physicalProcessorModels)) {
      $dara.Model.validateArray(this.physicalProcessorModels);
    }
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    if(Array.isArray(this.zoneId)) {
      $dara.Model.validateArray(this.zoneId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

