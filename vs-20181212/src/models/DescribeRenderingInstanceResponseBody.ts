// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  /**
   * @remarks
   * The external port or port range, such as `22`. For a port range, use a forward slash (`/`) to separate the start and end ports, for example, `10/20`.
   * 
   * @example
   * 12500/12519
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The ports correspond one-to-one with the external ports. For a port range, use a forward slash (`/`) to separate the start and end ports, for example, `10/20`.
   * 
   * @example
   * 11120/11139
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

export class DescribeRenderingInstanceResponseBodyAdditionalIngresses extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the rendering instance.
   * 
   * @example
   * 101.66.165.213
   */
  hostname?: string;
  /**
   * @remarks
   * The ISP code. Valid values:
   * 
   * 1. `cmcc`
   * 
   * 2. `unicom`
   * 
   * 3. `telecom`
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * A list of port mappings.
   */
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
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
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
  /**
   * @remarks
   * A list of attributes.
   */
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
  /**
   * @remarks
   * The name of the physical device simulation module. Valid values:
   * 
   * 1. `ctl`: Control module
   * 
   * 2. `prop`: Property module
   * 
   * 3. `location`: Location module
   * 
   * 4. `battery`: Battery module
   * 
   * 5. `network`: Network module
   * 
   * 6. `bluetooth`: Bluetooth module
   * 
   * 7. `sim`: SIM card module
   * 
   * 8. `display`: Display module
   * 
   * 9. `system`: System module
   * 
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
   * @remarks
   * The status of the bandwidth configuration. Valid values:
   * 
   * 1. `waiting`: The configuration is being applied.
   * 
   * 2. `success`: The configuration change is complete.
   * 
   * 3. `failed`: The configuration change failed.
   * 
   * @example
   * success
   */
  bandwidthStatus?: string;
  /**
   * @remarks
   * The maximum egress bandwidth, in Mbps. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @remarks
   * The maximum ingress bandwidth, in Mbps. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
   * The time the configuration was last updated.
   * 
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
  /**
   * @remarks
   * A list of configured physical device simulation modules.
   */
  configuration?: DescribeRenderingInstanceResponseBodyConfigInfoConfiguration[];
  /**
   * @remarks
   * Ingress and egress bandwidth limits, in Mbps.
   */
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
   * @remarks
   * The external port or port range, such as `22`. For a port range, use a forward slash (`/`) to separate the start and end ports, for example, `10/20`.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The ports correspond one-to-one with the external ports. For a port range, use a forward slash (`/`) to separate the start and end ports, for example, `10/20`.
   * 
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
  /**
   * @remarks
   * Additional details about the current status.
   * 
   * @example
   * 工作中
   */
  description?: string;
  /**
   * @remarks
   * The name of the last action performed on the instance.
   * 
   * @example
   * MigrateLocalData
   */
  latestAction?: string;
  /**
   * @remarks
   * The operational status of the instance. Valid values:
   * 
   * 1. `Preparing`: The instance is being initialized.
   * 
   * 2. `Rebooting`: The instance is rebooting.
   * 
   * 3. `Resetting`: The instance is being reset.
   * 
   * 4. `Working`: The instance is running normally. This is a terminal state.
   * 
   * 5. `Failure`: The instance has failed to start or operate. This is a terminal state.
   * 
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
   * @remarks
   * The configuration of the edge media service. Valid values:
   * 
   * 1. `ON`: Enabled.
   * 
   * 2. `OFF`: Disabled.
   * 
   * @example
   * ON
   */
  edgeMediaService?: string;
  /**
   * @remarks
   * The ingress network access configuration. Valid values:
   * 
   * 1. `ON`: Enabled. The rendering instance can be accessed from the public internet.
   * 
   * 2. `OFF`: Disabled.
   * 
   * @example
   * ON
   */
  inAccess?: string;
  /**
   * @remarks
   * The egress network access configuration. Valid values:
   * 
   * 1. `ON`: Enabled. The rendering instance can access the public internet.
   * 
   * 2. `OFF`: Disabled.
   * 
   * @example
   * ON
   */
  outAccess?: string;
  /**
   * @remarks
   * The resource zone. Valid values: `Private` and `Public`.
   * 
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

export class DescribeRenderingInstanceResponseBodyResourceStatus extends $dara.Model {
  /**
   * @remarks
   * The running status of the computing resource. Valid values:
   * 
   * 1. `running`: The edge instance is running normally.
   * 
   * 2. `operating`: The edge instance is under maintenance.
   * 
   * 3. `error`: An exception is detected on the edge instance.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeRenderingInstanceResponseBodySystemInfo extends $dara.Model {
  /**
   * @remarks
   * The refresh rate of the instance, in Hz.
   * 
   * @example
   * 60
   */
  frequency?: number;
  /**
   * @remarks
   * The resolution. Valid values:
   * 
   * - `1920*864`
   * 
   * - `1080*1920`
   * 
   * - `1920*1080`
   * 
   * - `720*1280`
   * 
   * - `2400*1080`
   * 
   * - `1080*2400`
   * 
   * - `1280*720`
   * 
   * - `864*1920`
   * 
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
  /**
   * @remarks
   * A list of optional ingress network information.
   */
  additionalIngresses?: DescribeRenderingInstanceResponseBodyAdditionalIngresses[];
  /**
   * @remarks
   * The configuration information of the rendering instance.
   */
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  /**
   * @remarks
   * The instance creation time, in UTC (ISO 8601).
   * 
   * @example
   * 2024-05-07T02:27:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The egress IP address.
   * 
   * @example
   * 1.1.8.8
   */
  egressIp?: string;
  /**
   * @remarks
   * The domain name or access IP address of the rendering instance.
   * 
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.1.17.32
   */
  internalIp?: string;
  /**
   * @remarks
   * The ISP code. Valid values:
   * 
   * 1. `cmcc`
   * 
   * 2. `unicom`
   * 
   * 3. `telecom`
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * A list of port mappings.
   */
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  /**
   * @remarks
   * The ID of the rendering instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The specification of the rendering instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The operational status of the rendering instance.
   */
  renderingStatus?: DescribeRenderingInstanceResponseBodyRenderingStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The attributes of the rendering instance.
   */
  resourceAttributes?: DescribeRenderingInstanceResponseBodyResourceAttributes;
  /**
   * @remarks
   * The status of the underlying computing resource.
   */
  resourceStatus?: DescribeRenderingInstanceResponseBodyResourceStatus;
  /**
   * @remarks
   * The storage capacity of the rendering instance.
   * 
   * @example
   * 20
   */
  storageSize?: number;
  /**
   * @remarks
   * The system information of the rendering instance, such as its resolution.
   */
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      egressIp: 'EgressIp',
      hostname: 'Hostname',
      instanceChargeType: 'InstanceChargeType',
      internalIp: 'InternalIp',
      isp: 'Isp',
      portMappings: 'PortMappings',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      renderingStatus: 'RenderingStatus',
      requestId: 'RequestId',
      resourceAttributes: 'ResourceAttributes',
      resourceStatus: 'ResourceStatus',
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
      instanceChargeType: 'string',
      internalIp: 'string',
      isp: 'string',
      portMappings: { 'type': 'array', 'itemType': DescribeRenderingInstanceResponseBodyPortMappings },
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      renderingStatus: DescribeRenderingInstanceResponseBodyRenderingStatus,
      requestId: 'string',
      resourceAttributes: DescribeRenderingInstanceResponseBodyResourceAttributes,
      resourceStatus: DescribeRenderingInstanceResponseBodyResourceStatus,
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
    if(this.resourceStatus && typeof (this.resourceStatus as any).validate === 'function') {
      (this.resourceStatus as any).validate();
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

