// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  externalPort?: string;
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyAdditionalIngresses extends $dara.Model {
  hostname?: string;
  isp?: string;
  portMappings?: DescribeRenderingInstanceResponseBodyAdditionalIngressesPortMappings[];
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      isp: 'Isp',
      portMappings: 'PortMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      isp: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyAdditionalIngressesPortMappings },
    };
  }

  validate() {
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes extends $dara.Model {
  /**
   * @example
   * lon
   */
  name?: string;
  /**
   * @example
   * 100
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoConfiguration extends $dara.Model {
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
  /**
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig extends $dara.Model {
  /**
   * @example
   * success
   */
  bandwidthStatus?: string;
  /**
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @example
   * 2023-08-17T09:54:35Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthStatus: 'BandwidthStatus',
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthStatus: 'string',
      maxEgressBandwidth: 'number',
      maxIngressBandwidth: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyConfigInfo extends $dara.Model {
  configuration?: DescribeRenderingInstanceResponseBodyConfigInfoConfiguration[];
  networkConfig?: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      networkConfig: 'NetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyConfigInfoConfiguration },
      networkConfig: DescribeRenderingInstanceResponseBodyConfigInfoNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyPortMappings extends $dara.Model {
  /**
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @example
   * 49008/49015
   */
  internalPort?: string;
  static names(): { [key: string]: string } {
    return {
      externalPort: 'ExternalPort',
      internalPort: 'InternalPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalPort: 'string',
      internalPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyRenderingStatus extends $dara.Model {
  description?: string;
  /**
   * @example
   * MigrateLocalData
   */
  latestAction?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      latestAction: 'LatestAction',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      latestAction: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodyResourceAttributes extends $dara.Model {
  /**
   * @example
   * ON
   */
  edgeMediaService?: string;
  /**
   * @example
   * ON
   */
  inAccess?: string;
  /**
   * @example
   * ON
   */
  outAccess?: string;
  /**
   * @example
   * Public
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      edgeMediaService: 'EdgeMediaService',
      inAccess: 'InAccess',
      outAccess: 'OutAccess',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMediaService: 'string',
      inAccess: 'string',
      outAccess: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBodySystemInfo extends $dara.Model {
  /**
   * @example
   * 60
   */
  frequency?: number;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'number',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceResponseBody extends $dara.Model {
  additionalIngresses?: DescribeRenderingInstanceResponseBodyAdditionalIngresses[];
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  /**
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  egressIp?: string;
  /**
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  internalIp?: string;
  isp?: string;
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  renderingSpec?: string;
  renderingStatus?: DescribeRenderingInstanceResponseBodyRenderingStatus;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  resourceAttributes?: DescribeRenderingInstanceResponseBodyResourceAttributes;
  storageSize?: number;
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      egressIp: 'EgressIp',
      hostname: 'Hostname',
      internalIp: 'InternalIp',
      isp: 'Isp',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      renderingStatus: 'RenderingStatus',
      requestId: 'RequestId',
      resourceAttributes: 'ResourceAttributes',
      storageSize: 'StorageSize',
      systemInfo: 'SystemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalIngresses: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyAdditionalIngresses },
      configInfo: DescribeRenderingInstanceResponseBodyConfigInfo,
      creationTime: 'string',
      egressIp: 'string',
      hostname: 'string',
      internalIp: 'string',
      isp: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyPortMappings },
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      renderingStatus: DescribeRenderingInstanceResponseBodyRenderingStatus,
      requestId: 'string',
      resourceAttributes: DescribeRenderingInstanceResponseBodyResourceAttributes,
      storageSize: 'number',
      systemInfo: DescribeRenderingInstanceResponseBodySystemInfo,
    };
  }

  validate() {
    if(Array.isArray(this.additionalIngresses)) {
      $dara.Model.validateArray(this.additionalIngresses);
    }
    if(this.configInfo && typeof (this.configInfo as any).validate === 'function') {
      (this.configInfo as any).validate();
    }
    if(Array.isArray(this.portMappings)) {
      $dara.Model.validateArray(this.portMappings);
    }
    if(this.renderingStatus && typeof (this.renderingStatus as any).validate === 'function') {
      (this.renderingStatus as any).validate();
    }
    if(this.resourceAttributes && typeof (this.resourceAttributes as any).validate === 'function') {
      (this.resourceAttributes as any).validate();
    }
    if(this.systemInfo && typeof (this.systemInfo as any).validate === 'function') {
      (this.systemInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

