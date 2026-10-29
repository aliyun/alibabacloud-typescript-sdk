// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodyAdditionalIngressesPortMappings extends $dara.Model {
  /**
   * @remarks
   * The external port or port range, such as 22. If a port range is specified, separate the start and end ports with a forward slash (/), such as 10/20.
   * 
   * @example
   * 12500/12519
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The internal ports correspond to the external ports one by one. If a port range is specified, separate the start and end ports with a forward slash (/), such as 10/20.
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
   * The domain name or IP address of the cloud application service instance.
   * 
   * @example
   * 101.66.165.213
   */
  hostname?: string;
  /**
   * @remarks
   * The ISP code. Valid values:
   * - cmcc
   * - unicom
   * - telecom
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The port mappings.
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
   * The attribute name.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The attribute value.
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
   * The attributes.
   */
  attributes?: DescribeRenderingInstanceResponseBodyConfigInfoConfigurationAttributes[];
  /**
   * @remarks
   * The name of the physical device simulation module. Valid values:
   * - ctl: control module
   * - prop: property module
   * - location: location module
   * - battery: battery module
   * - network: network module
   * - bluetooth: Bluetooth module
   * - sim: SIM card module
   * - display: display module
   * - system: basic module
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
   * The bandwidth application status. Valid values:
   * - waiting: taking effect
   * - success: taken effect
   * - failed: failed to take effect
   * 
   * @example
   * success
   */
  bandwidthStatus?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth limit. Unit: Mbit/s. A value of 0 indicates that no bandwidth limit is configured.
   * 
   * @example
   * 100
   */
  maxEgressBandwidth?: number;
  /**
   * @remarks
   * The maximum inbound bandwidth limit. Unit: Mbit/s. A value of 0 indicates that no bandwidth limit is configured.
   * 
   * @example
   * 100
   */
  maxIngressBandwidth?: number;
  /**
   * @remarks
   * The update time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The list of configured physical device simulation modules.
   */
  configuration?: DescribeRenderingInstanceResponseBodyConfigInfoConfiguration[];
  /**
   * @remarks
   * The outbound and inbound bandwidth throttling. Unit: Mbit/s.
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
   * The external port or port range, such as 22. If a port range is specified, separate the start and end ports with a forward slash (/), such as 10/20.
   * 
   * @example
   * 10013/10020
   */
  externalPort?: string;
  /**
   * @remarks
   * The internal port or port range. The internal ports correspond to the external ports one by one. If a port range is specified, separate the start and end ports with a forward slash (/), such as 10/20.
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
   * The status description.
   * 
   * @example
   * Working
   */
  description?: string;
  /**
   * @remarks
   * The name of the latest instance operation.
   * 
   * @example
   * MigrateLocalData
   */
  latestAction?: string;
  /**
   * @remarks
   * The instance operation status. Valid values:
   * - Preparing: initializing
   * - Rebooting: restarting
   * - Resetting: resetting
   * - Working: working. This is a final state.
   * - Failure: operation failed. This is a final state.
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
   * The streaming service. Valid values:
   * - ON: enabled
   * - OFF: disabled
   * 
   * @example
   * ON
   */
  edgeMediaService?: string;
  /**
   * @remarks
   * The inbound access configuration. Valid values:
   * - ON: enabled. The resource can be accessed from external networks.
   * - OFF: disabled.
   * 
   * @example
   * ON
   */
  inAccess?: string;
  /**
   * @remarks
   * The outbound access configuration. Valid values:
   * - ON: enabled. The resource can access the Internet.
   * - OFF: disabled.
   * 
   * @example
   * ON
   */
  outAccess?: string;
  /**
   * @remarks
   * The resource zone. Valid values:
   * - Private
   * - Public
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
   * The running state of the compute resource. Valid values:
   * 1. running: The edge instance status is normal.
   * 2. operating: The edge instance is under maintenance.
   * 3. error: An edge anomaly is detected.
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
   * - 1920*864
   * 
   * - 1080*1920
   * 
   * - 1920*1080
   * 
   * - 720*1280
   * 
   * - 2400*1080
   * 
   * - 1080*2400
   * 
   * - 1280*720
   * 
   * - 864*1920
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
   * The additional optional ingress network information.
   */
  additionalIngresses?: DescribeRenderingInstanceResponseBodyAdditionalIngresses[];
  /**
   * @remarks
   * The instance configuration.
   */
  configInfo?: DescribeRenderingInstanceResponseBodyConfigInfo;
  /**
   * @remarks
   * The instance creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The expiration time.
   * 
   * @example
   * 2029-03-28T16:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The domain name or access IP address of the cloud application service instance.
   * 
   * @example
   * cn-xxx.ecr.aliyuncs.com
   */
  hostname?: string;
  /**
   * @remarks
   * The instance billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * TestInstance
   */
  instanceName?: string;
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
   * - cmcc
   * - unicom
   * - telecom
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The port mappings.
   */
  portMappings?: DescribeRenderingInstanceResponseBodyPortMappings[];
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The instance type of the cloud application service instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The instance operation status.
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
   * The resource attributes of the cloud application service instance.
   */
  resourceAttributes?: DescribeRenderingInstanceResponseBodyResourceAttributes;
  /**
   * @remarks
   * The compute resource status information.
   */
  resourceStatus?: DescribeRenderingInstanceResponseBodyResourceStatus;
  /**
   * @remarks
   * The storage capacity of the cloud application service instance.
   * 
   * @example
   * 20
   */
  storageSize?: number;
  /**
   * @remarks
   * The system information, including the resolution.
   */
  systemInfo?: DescribeRenderingInstanceResponseBodySystemInfo;
  static names(): { [key: string]: string } {
    return {
      additionalIngresses: 'AdditionalIngresses',
      configInfo: 'ConfigInfo',
      creationTime: 'CreationTime',
      egressIp: 'EgressIp',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
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
      expiredTime: 'string',
      hostname: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
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

