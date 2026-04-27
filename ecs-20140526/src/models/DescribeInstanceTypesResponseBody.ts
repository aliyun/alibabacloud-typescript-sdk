// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes extends $dara.Model {
  attribute?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute[];
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributesAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.attribute)) {
      $dara.Model.validateArray(this.attribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeClock extends $dara.Model {
  ptpSupport?: string;
  static names(): { [key: string]: string } {
    return {
      ptpSupport: 'PtpSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ptpSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes extends $dara.Model {
  supportedTopologyType?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedTopologyType: 'SupportedTopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedTopologyType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedTopologyType)) {
      $dara.Model.validateArray(this.supportedTopologyType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions extends $dara.Model {
  core?: number;
  coreFactor?: number;
  hyperThreadingAdjustable?: boolean;
  nestedVirtualizationSupport?: string;
  supportedTopologyTypes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes;
  threadsPerCore?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      coreFactor: 'CoreFactor',
      hyperThreadingAdjustable: 'HyperThreadingAdjustable',
      nestedVirtualizationSupport: 'NestedVirtualizationSupport',
      supportedTopologyTypes: 'SupportedTopologyTypes',
      threadsPerCore: 'ThreadsPerCore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      coreFactor: 'number',
      hyperThreadingAdjustable: 'boolean',
      nestedVirtualizationSupport: 'string',
      supportedTopologyTypes: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes,
      threadsPerCore: 'number',
    };
  }

  validate() {
    if(this.supportedTopologyTypes && typeof (this.supportedTopologyTypes as any).validate === 'function') {
      (this.supportedTopologyTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork extends $dara.Model {
  rssSupport?: boolean;
  sriovSupport?: boolean;
  vfQueueNumberPerEni?: number;
  static names(): { [key: string]: string } {
    return {
      rssSupport: 'RssSupport',
      sriovSupport: 'SriovSupport',
      vfQueueNumberPerEni: 'VfQueueNumberPerEni',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rssSupport: 'boolean',
      sriovSupport: 'boolean',
      vfQueueNumberPerEni: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo extends $dara.Model {
  networkCardIndex?: number;
  static names(): { [key: string]: string } {
    return {
      networkCardIndex: 'NetworkCardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkCardIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards extends $dara.Model {
  networkCardInfo?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo[];
  static names(): { [key: string]: string } {
    return {
      networkCardInfo: 'NetworkCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkCardInfo: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo },
    };
  }

  validate() {
    if(Array.isArray(this.networkCardInfo)) {
      $dara.Model.validateArray(this.networkCardInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfosWeightingInfo extends $dara.Model {
  ebsBandwidth?: number;
  ebsBurstBandwidth?: number;
  name?: string;
  vpcBandwidth?: number;
  vpcBurstBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ebsBandwidth: 'EbsBandwidth',
      ebsBurstBandwidth: 'EbsBurstBandwidth',
      name: 'Name',
      vpcBandwidth: 'VpcBandwidth',
      vpcBurstBandwidth: 'VpcBurstBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ebsBandwidth: 'number',
      ebsBurstBandwidth: 'number',
      name: 'string',
      vpcBandwidth: 'number',
      vpcBurstBandwidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfos extends $dara.Model {
  weightingInfo?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfosWeightingInfo[];
  static names(): { [key: string]: string } {
    return {
      weightingInfo: 'WeightingInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weightingInfo: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfosWeightingInfo },
    };
  }

  validate() {
    if(Array.isArray(this.weightingInfo)) {
      $dara.Model.validateArray(this.weightingInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeighting extends $dara.Model {
  weightingInfos?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfos;
  static names(): { [key: string]: string } {
    return {
      weightingInfos: 'WeightingInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weightingInfos: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeightingWeightingInfos,
    };
  }

  validate() {
    if(this.weightingInfos && typeof (this.weightingInfos as any).validate === 'function') {
      (this.weightingInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfo extends $dara.Model {
  bandwidthWeighting?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeighting;
  static names(): { [key: string]: string } {
    return {
      bandwidthWeighting: 'BandwidthWeighting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthWeighting: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfoBandwidthWeighting,
    };
  }

  validate() {
    if(this.bandwidthWeighting && typeof (this.bandwidthWeighting as any).validate === 'function') {
      (this.bandwidthWeighting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes extends $dara.Model {
  supportedBootMode?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedBootMode: 'SupportedBootMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedBootMode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedBootMode)) {
      $dara.Model.validateArray(this.supportedBootMode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceType extends $dara.Model {
  attributes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeAttributes;
  baselineCredit?: number;
  clock?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeClock;
  cpuArchitecture?: string;
  cpuCoreCount?: number;
  cpuOptions?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions;
  cpuSpeedFrequency?: number;
  cpuTurboFrequency?: number;
  diskQuantity?: number;
  enhancedNetwork?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeEnhancedNetwork;
  eniIpv6AddressQuantity?: number;
  eniPrivateIpAddressQuantity?: number;
  eniQuantity?: number;
  eniTotalQuantity?: number;
  eniTrunkSupported?: boolean;
  eriQuantity?: number;
  GPUAmount?: number;
  GPUMemorySize?: number;
  GPUSpec?: string;
  initialCredit?: number;
  instanceBandwidthRx?: number;
  instanceBandwidthTx?: number;
  instanceCategory?: string;
  instanceFamilyLevel?: string;
  instancePpsRx?: number;
  instancePpsTx?: number;
  instanceTypeFamily?: string;
  instanceTypeId?: string;
  jumboFrameSupport?: boolean;
  localStorageAmount?: number;
  localStorageCapacity?: number;
  localStorageCategory?: string;
  maximumQueueNumberPerEni?: number;
  memorySize?: number;
  networkCardQuantity?: number;
  networkCards?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards;
  networkEncryptionSupport?: boolean;
  networkInfo?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfo;
  nvmeSupport?: string;
  physicalProcessorModel?: string;
  primaryEniQueueNumber?: number;
  queuePairNumber?: number;
  secondaryEniQueueNumber?: number;
  supportedBootModes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeSupportedBootModes;
  totalEniQueueQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      baselineCredit: 'BaselineCredit',
      clock: 'Clock',
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
      networkInfo: 'NetworkInfo',
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
      clock: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeClock,
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
      networkInfo: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkInfo,
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
    if(this.clock && typeof (this.clock as any).validate === 'function') {
      (this.clock as any).validate();
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
    if(this.networkInfo && typeof (this.networkInfo as any).validate === 'function') {
      (this.networkInfo as any).validate();
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

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $dara.Model {
  instanceType?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBody extends $dara.Model {
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 00827261-20B7-4562-83F2-4DF39876A45A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: DescribeInstanceTypesResponseBodyInstanceTypes,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

