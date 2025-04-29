// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The architecture types of the instance types. Valid values:
   * 
   * *   X86: x86 architecture.
   * *   Heterogeneous: heterogeneous computing, such as GPU-accelerated or FPGA-accelerated.
   * *   BareMetal: ECS Bare Metal Instance.
   * *   Arm: Arm.
   * 
   * By default, all values are selected.
   */
  architecture?: string[];
  /**
   * @remarks
   * Specifies whether to include burstable instance types. Valid values:
   * 
   * *   Exclude: does not include burstable instance types.
   * *   Include: includes burstable instance types.
   * *   Required: includes only burstable instance types.
   * 
   * Default value: Include.
   * 
   * @example
   * Include
   */
  burstablePerformance?: string;
  /**
   * @remarks
   * The channel ID. This parameter is not for public use.
   * 
   * @example
   * 79425074
   */
  channelId?: number;
  /**
   * @remarks
   * The number of vCPUs that you want to assign to the instance type.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The number of vCPUs that you want to assign to the instance type. You can specify multiple vCPUs.
   */
  coresList?: number[];
  /**
   * @remarks
   * The CPU architectures of the instance types. Valid values:
   * 
   * >  You can specify 1 to 2 CPU architectures.
   * 
   * *   x86
   * *   Arm
   */
  cpuArchitectures?: string[];
  excludedInstanceType?: string[];
  /**
   * @remarks
   * The GPU models.
   */
  gpuSpecs?: string[];
  /**
   * @remarks
   * The classifications of the instance types. Valid values:
   * 
   * *   General-purpose: general-purpose instance type.
   * *   Compute-optimized: compute-optimized instance type.
   * *   Memory-optimized: memory-optimized instance type.
   * *   Big data: big data instance type.
   * *   Local SSDs: instance type with local SSDs.
   * *   High Clock Speed: instance type with high clock speeds.
   * *   Enhanced: enhanced instance type.
   * *   Shared: shared instance type.
   * *   Compute-optimized with GPU: GPU-accelerated compute-optimized instance type.
   * *   Visual Compute-optimized: visual compute-optimized instance type.
   * *   Heterogeneous Service: heterogeneous service instance type.
   * *   Compute-optimized with FPGA: FPGA-accelerated compute-optimized instance type.
   * *   Compute-optimized with NPU: NPU-accelerated compute-optimized instance type.
   * *   ECS Bare Metal: ECS Bare Metal Instance type.
   * *   High Performance Compute: HPC-optimized instance type.
   */
  instanceCategories?: string[];
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * *   EntryLevel: entry level
   * *   EnterpriseLevel: enterprise level
   * *   CreditEntryLevel: credit-based entry level For more information, see [Burstable instance families](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance families that you want to query. You can query 1 to 10 instance families in each call.
   */
  instanceTypeFamilies?: string[];
  /**
   * @remarks
   * The maximum hourly price for pay-as-you-go or preemptible instances.
   * 
   * @example
   * 2
   */
  maxPrice?: number;
  /**
   * @remarks
   * The maximum number of vCPUs per instance type.
   * 
   * @example
   * 4
   */
  maximumCpuCoreCount?: number;
  /**
   * @remarks
   * The maximum number of GPUs per instance. The value must be a positive integer.
   * 
   * @example
   * 2
   */
  maximumGpuAmount?: number;
  /**
   * @remarks
   * The maximum memory size per instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  maximumMemorySize?: number;
  /**
   * @remarks
   * The memory size that you want to assign to the instance type. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The memory size that you want to assign to the instance type. Unit: GiB. You can specify multiple memory sizes.
   */
  memoryList?: number[];
  /**
   * @remarks
   * The baseline vCPU computing performance (overall baseline performance of all vCPUs) per t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumBaselineCredit?: number;
  /**
   * @remarks
   * The minimum number of vCPUs per instance type.
   * 
   * @example
   * 2
   */
  minimumCpuCoreCount?: number;
  /**
   * @remarks
   * The minimum number of IPv6 addresses per ENI.
   * 
   * @example
   * 1
   */
  minimumEniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of IPv4 addresses per ENI.
   * 
   * @example
   * 2
   */
  minimumEniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The minimum number of elastic network interfaces (ENIs) per instance.
   * 
   * @example
   * 2
   */
  minimumEniQuantity?: number;
  /**
   * @remarks
   * The minimum number of GPUs per instance. The value must be a positive integer.
   * 
   * @example
   * 2
   */
  minimumGpuAmount?: number;
  /**
   * @remarks
   * The initial vCPU credits per t5 or t6 burstable instance.
   * 
   * @example
   * 12
   */
  minimumInitialCredit?: number;
  /**
   * @remarks
   * The minimum memory size per instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  minimumMemorySize?: number;
  /**
   * @remarks
   * The processor models of the instance types. You can specify 1 to 10 processor models.
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
   * The preemption policy that you want to apply to pay-as-you-go instances. Valid values:
   * 
   * *   NoSpot: The instances are created as regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as preemptible instances that have a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The IDs of the vSwitches.
   */
  vSwitchId?: string[];
  /**
   * @remarks
   * The zone IDs. If you pass vSwitch IDs to the system, this parameter does not take effect.
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

