// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes";
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions";
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork";
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards";
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes";


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  attributes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes;
  /**
   * @remarks
   * The baseline vCPU computing performance (overall baseline performance of all vCPUs) per t5 or t6 burstable instance.
   * 
   * @example
   * 4
   */
  baselineCredit?: number;
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
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpuCoreCount?: number;
  /**
   * @remarks
   * The CPU options.
   */
  cpuOptions?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions;
  /**
   * @remarks
   * The CPU base frequency. Unit: GHz.
   * 
   * @example
   * 2.7
   */
  cpuSpeedFrequency?: number;
  /**
   * @remarks
   * The CPU turbo frequency. Unit: GHz.
   * 
   * @example
   * 3.5
   */
  cpuTurboFrequency?: number;
  /**
   * @remarks
   * The maximum number of cloud disks per instance.
   * 
   * @example
   * 17
   */
  diskQuantity?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  enhancedNetwork?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork;
  /**
   * @remarks
   * The maximum number of IPv6 addresses per ENI.
   * 
   * @example
   * 1
   */
  eniIpv6AddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of IPv4 addresses per ENI.
   * 
   * @example
   * 10
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The maximum number of ENIs per instance.
   * 
   * @example
   * 3
   */
  eniQuantity?: number;
  /**
   * @remarks
   * The maximum number of ENIs, including primary, secondary, and trunk ENIs.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  eniTotalQuantity?: number;
  /**
   * @remarks
   * Indicates whether trunk ENIs are supported.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  eniTrunkSupported?: boolean;
  /**
   * @remarks
   * The number of ERIs.
   * 
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  eriQuantity?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  GPUAmount?: number;
  /**
   * @remarks
   * The amount of GPU memory per GPU. Unit: GiB
   * 
   * @example
   * 32
   */
  GPUMemorySize?: number;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * The initial vCPU credits per t5 or t6 burstable instance.
   * 
   * @example
   * 120
   */
  initialCredit?: number;
  /**
   * @remarks
   * The maximum inbound internal bandwidth. Unit: Kbit/s.
   * 
   * @example
   * 1024000
   */
  instanceBandwidthRx?: number;
  /**
   * @remarks
   * The maximum outbound internal bandwidth. Unit: Kbit/s.
   * 
   * @example
   * 1024000
   */
  instanceBandwidthTx?: number;
  /**
   * @remarks
   * The category of the instance type. Valid values:
   * 
   * *   General-purpose
   * *   Compute-optimized
   * *   Memory-optimized
   * *   Big data
   * *   Local SSDs
   * *   High Clock Speed
   * *   Enhanced
   * *   Shared
   * *   Compute-optimized with GPU
   * *   Visual Compute-optimized
   * *   Heterogeneous Service
   * *   Compute-optimized with FPGA
   * *   Compute-optimized with NPU
   * *   ECS Bare Metal
   * *   Super Computing Cluster
   * *   High Performance Compute
   * 
   * @example
   * Big data
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * *   EntryLevel: entry level (shared).
   * *   EnterpriseLevel: enterprise level.
   * *   CreditEntryLevel: credit-based entry level. For more information, see [Overview](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The inbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * @example
   * 500000
   */
  instancePpsRx?: number;
  /**
   * @remarks
   * The outbound packet forwarding rate over the internal network. Unit: pps.
   * 
   * @example
   * 500000
   */
  instancePpsTx?: number;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs.g6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The ID of the instance type.
   * 
   * @example
   * ecs.g6.large
   */
  instanceTypeId?: string;
  /**
   * @remarks
   * Indicates whether jumbo frames are supported.
   * 
   * @example
   * true
   */
  jumboFrameSupport?: boolean;
  /**
   * @remarks
   * The number of local disks per instance.
   * 
   * @example
   * 1
   */
  localStorageAmount?: number;
  /**
   * @remarks
   * The capacity of each local disk. Unit: GiB
   * 
   * @example
   * 5000
   */
  localStorageCapacity?: number;
  /**
   * @remarks
   * The category of local disks. For more information, see [Local disks](https://help.aliyun.com/document_detail/63138.html). Valid values:
   * 
   * *   local_hdd_pro: local SATA HDDs, which are attached to d1ne or d1 instances
   * *   local_ssd_pro: local NVMe SSDs, which are attached to i2, i2g, i1, ga1, or gn5 instances
   * 
   * @example
   * local_ssd_pro
   */
  localStorageCategory?: string;
  /**
   * @remarks
   * The maximum number of queues per ENI, including primary and secondary ENIs.
   * 
   * @example
   * 4
   */
  maximumQueueNumberPerEni?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB
   * 
   * @example
   * 16
   */
  memorySize?: number;
  /**
   * @remarks
   * The maximum number of network cards that the instance type supports.
   * 
   * @example
   * 1
   */
  networkCardQuantity?: number;
  /**
   * @remarks
   * The information about the network cards.
   */
  networkCards?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards;
  /**
   * @remarks
   * Indicates whether to allow network traffic transmitted over virtual private clouds (VPCs) to be encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  networkEncryptionSupport?: boolean;
  /**
   * @remarks
   * Indicates whether cloud disks can be attached by using the NVMe protocol. Valid values:
   * 
   * *   required: Cloud disks can be attached by using the NVMe protocol.
   * *   unsupported: Cloud disks cannot be attached by using the NVMe protocol.
   * 
   * @example
   * unsupported
   */
  nvmeSupport?: string;
  /**
   * @remarks
   * The CPU model.
   * 
   * @example
   * Intel Xeon(Ice Lake) Platinum 8369B
   */
  physicalProcessorModel?: string;
  /**
   * @remarks
   * The default number of queues per primary ENI.
   * 
   * @example
   * 4
   */
  primaryEniQueueNumber?: number;
  /**
   * @remarks
   * The maximum number of QPs per instance, which varies based on the instance type.
   * 
   * *   For enterprise-level CPU-based instance types, the value of `QueuePairNumber` is the maximum number of QPs per instance.
   * *   For GPU-accelerated instance types, the maximum number of QPs per instance is calculated by using the following formula: Value of `QueuePairNumber` × Value of NetworkCardQuantity.
   * 
   * @example
   * 22
   */
  queuePairNumber?: number;
  /**
   * @remarks
   * The default number of queues per secondary ENI.
   * 
   * @example
   * 4
   */
  secondaryEniQueueNumber?: number;
  /**
   * @remarks
   * The boot modes supported by the instance type.
   */
  supportedBootModes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes;
  /**
   * @remarks
   * The maximum number of queues on ENIs that the instance type supports.
   * 
   * @example
   * 12
   */
  totalEniQueueQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      baselineCredit: 'BaselineCredit',
      cpuArchitecture: 'CpuArchitecture',
      cpuCoreCount: 'CpuCoreCount',
      cpuOptions: 'CpuOptions',
      cpuSpeedFrequency: 'CpuSpeedFrequency',
      cpuTurboFrequency: 'CpuTurboFrequency',
      diskQuantity: 'DiskQuantity',
      enhancedNetwork: 'EnhancedNetwork',
      eniIpv6AddressQuantity: 'EniIpv6AddressQuantity',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      eniQuantity: 'EniQuantity',
      eniTotalQuantity: 'EniTotalQuantity',
      eniTrunkSupported: 'EniTrunkSupported',
      eriQuantity: 'EriQuantity',
      GPUAmount: 'GPUAmount',
      GPUMemorySize: 'GPUMemorySize',
      GPUSpec: 'GPUSpec',
      initialCredit: 'InitialCredit',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instanceCategory: 'InstanceCategory',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      jumboFrameSupport: 'JumboFrameSupport',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageCategory: 'LocalStorageCategory',
      maximumQueueNumberPerEni: 'MaximumQueueNumberPerEni',
      memorySize: 'MemorySize',
      networkCardQuantity: 'NetworkCardQuantity',
      networkCards: 'NetworkCards',
      networkEncryptionSupport: 'NetworkEncryptionSupport',
      nvmeSupport: 'NvmeSupport',
      physicalProcessorModel: 'PhysicalProcessorModel',
      primaryEniQueueNumber: 'PrimaryEniQueueNumber',
      queuePairNumber: 'QueuePairNumber',
      secondaryEniQueueNumber: 'SecondaryEniQueueNumber',
      supportedBootModes: 'SupportedBootModes',
      totalEniQueueQuantity: 'TotalEniQueueQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes,
      baselineCredit: 'number',
      cpuArchitecture: 'string',
      cpuCoreCount: 'number',
      cpuOptions: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions,
      cpuSpeedFrequency: 'number',
      cpuTurboFrequency: 'number',
      diskQuantity: 'number',
      enhancedNetwork: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork,
      eniIpv6AddressQuantity: 'number',
      eniPrivateIpAddressQuantity: 'number',
      eniQuantity: 'number',
      eniTotalQuantity: 'number',
      eniTrunkSupported: 'boolean',
      eriQuantity: 'number',
      GPUAmount: 'number',
      GPUMemorySize: 'number',
      GPUSpec: 'string',
      initialCredit: 'number',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instanceCategory: 'string',
      instanceFamilyLevel: 'string',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      jumboFrameSupport: 'boolean',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      localStorageCategory: 'string',
      maximumQueueNumberPerEni: 'number',
      memorySize: 'number',
      networkCardQuantity: 'number',
      networkCards: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards,
      networkEncryptionSupport: 'boolean',
      nvmeSupport: 'string',
      physicalProcessorModel: 'string',
      primaryEniQueueNumber: 'number',
      queuePairNumber: 'number',
      secondaryEniQueueNumber: 'number',
      supportedBootModes: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes,
      totalEniQueueQuantity: 'number',
    };
  }

  validate() {
    if(this.attributes && typeof (this.attributes as any).validate === 'function') {
      (this.attributes as any).validate();
    }
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.enhancedNetwork && typeof (this.enhancedNetwork as any).validate === 'function') {
      (this.enhancedNetwork as any).validate();
    }
    if(this.networkCards && typeof (this.networkCards as any).validate === 'function') {
      (this.networkCards as any).validate();
    }
    if(this.supportedBootModes && typeof (this.supportedBootModes as any).validate === 'function') {
      (this.supportedBootModes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

