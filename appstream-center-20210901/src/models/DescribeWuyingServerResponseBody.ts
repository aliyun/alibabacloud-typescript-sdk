// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWuyingServerResponseBodyDataPrivateIpSets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values: true: The IP address is the primary private IP address. false: The IP address is a secondary private IP address.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.0.0.1
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBodyDataServerInstanceTypeInfo extends $dara.Model {
  /**
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @example
   * 1.00
   */
  gpu?: string;
  /**
   * @example
   * 16384
   */
  gpuMemory?: number;
  /**
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @example
   * appstreaming.general.4c8g
   */
  serverInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      memory: 'Memory',
      serverInstanceType: 'ServerInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
      gpuSpec: 'string',
      memory: 'number',
      serverInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBodyDataServerModelInfo extends $dara.Model {
  /**
   * @example
   * vLLM
   */
  inferenceEngine?: string;
  /**
   * @example
   * ["text"]
   */
  inputModalities?: string[];
  /**
   * @example
   * 16384
   */
  maxModelLen?: number;
  /**
   * @example
   * 4
   */
  maxNumSeqs?: number;
  /**
   * @example
   * Lan
   */
  modelAccessMethod?: string;
  /**
   * @example
   * demo-model
   */
  modelId?: string;
  /**
   * @example
   * 示例模型
   */
  modelName?: string;
  /**
   * @example
   * Running
   */
  modelServiceInferenceStatus?: string;
  /**
   * @example
   * ["text"]
   */
  outputModalities?: string[];
  /**
   * @example
   * demo-model
   */
  servedModelName?: string;
  static names(): { [key: string]: string } {
    return {
      inferenceEngine: 'InferenceEngine',
      inputModalities: 'InputModalities',
      maxModelLen: 'MaxModelLen',
      maxNumSeqs: 'MaxNumSeqs',
      modelAccessMethod: 'ModelAccessMethod',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelServiceInferenceStatus: 'ModelServiceInferenceStatus',
      outputModalities: 'OutputModalities',
      servedModelName: 'ServedModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceEngine: 'string',
      inputModalities: { 'type': 'array', 'itemType': 'string' },
      maxModelLen: 'number',
      maxNumSeqs: 'number',
      modelAccessMethod: 'string',
      modelId: 'string',
      modelName: 'string',
      modelServiceInferenceStatus: 'string',
      outputModalities: { 'type': 'array', 'itemType': 'string' },
      servedModelName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputModalities)) {
      $dara.Model.validateArray(this.inputModalities);
    }
    if(Array.isArray(this.outputModalities)) {
      $dara.Model.validateArray(this.outputModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in the 12-hour US English date and time format.
   * 
   * @example
   * Sep 2, 2026 1:46:41 PM
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum number of private IP addresses per elastic network interface (ENI), including the primary IP address.
   * 
   * @example
   * 10
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The expiration time. The time is displayed in the 12-hour US English date and time format.
   * 
   * @example
   * Oct 3, 2026 12:00:00 AM
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp1234567890abcde
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Ubuntu 22.04
   */
  imageName?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.0.0.1
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-abc123
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Default workspace
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The workspace type.
   * 
   * @example
   * Simple
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The set of private IP addresses, including the primary and secondary IP addresses.
   */
  privateIpSets?: DescribeWuyingServerResponseBodyDataPrivateIpSets[];
  serverInstanceTypeInfo?: DescribeWuyingServerResponseBodyDataServerInstanceTypeInfo;
  serverModelInfo?: DescribeWuyingServerResponseBodyDataServerModelInfo;
  /**
   * @remarks
   * The status of the development host.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Whether ASP streaming connection is supported.
   * 
   * @example
   * true
   */
  supportASP?: boolean;
  /**
   * @remarks
   * The category of the system cloud disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the development host.
   * 
   * @example
   * aig-bp1234567890abcde
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The name of the development host.
   * 
   * @example
   * my-dev-server
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      privateIpSets: 'PrivateIpSets',
      serverInstanceTypeInfo: 'ServerInstanceTypeInfo',
      serverModelInfo: 'ServerModelInfo',
      status: 'Status',
      supportASP: 'SupportASP',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bizRegionId: 'string',
      chargeType: 'string',
      createTime: 'string',
      eniPrivateIpAddressQuantity: 'number',
      expiredTime: 'string',
      imageId: 'string',
      imageName: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      privateIpSets: { 'type': 'array', 'itemType': DescribeWuyingServerResponseBodyDataPrivateIpSets },
      serverInstanceTypeInfo: DescribeWuyingServerResponseBodyDataServerInstanceTypeInfo,
      serverModelInfo: DescribeWuyingServerResponseBodyDataServerModelInfo,
      status: 'string',
      supportASP: 'boolean',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      wuyingServerId: 'string',
      wuyingServerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSets)) {
      $dara.Model.validateArray(this.privateIpSets);
    }
    if(this.serverInstanceTypeInfo && typeof (this.serverInstanceTypeInfo as any).validate === 'function') {
      (this.serverInstanceTypeInfo as any).validate();
    }
    if(this.serverModelInfo && typeof (this.serverModelInfo as any).validate === 'function') {
      (this.serverModelInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWuyingServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the development host.
   */
  data?: DescribeWuyingServerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeWuyingServerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

