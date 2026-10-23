// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyDedicatedHostAttribute extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-2ze7qrzz6lvbfhr0****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * ecs-autoui-create-ddh-temp
   */
  dedicatedHostName?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyEipAddress extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-wz9uilio26dfscamm****
   */
  allocationId?: string;
  /**
   * @remarks
   * The public bandwidth limit of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 8
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method for public bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In the **pay-by-traffic** mode, the peak inbound and outbound bandwidth values are the maximum bandwidth values and are not guaranteed. When resource contention occurs, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * ``30.21.**.**``
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'number',
      internetChargeType: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyInnerIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyNetworkOptions extends $dara.Model {
  /**
   * @remarks
   * The bandwidth weight.
   * 
   * The supported values vary based on the instance type. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/2679699.html) operation to query the bandwidth weight values supported by the current instance type.
   * 
   * @example
   * Vpc-L1
   */
  bandwidthWeighting?: string;
  /**
   * @remarks
   * Specifies whether the jumbo frame feature is enabled for the instance. Valid values:
   * 
   * - true: The feature is enabled.
   * 
   * - false: The feature is disabled.
   * 
   * For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Specifies whether VPC network traffic encryption is enabled for the instance. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * False
   */
  enableNetworkEncryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      bandwidthWeighting: 'BandwidthWeighting',
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthWeighting: 'string',
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeInstanceAttributeResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyOperationLocksLockReason },
    };
  }

  validate() {
    if(Array.isArray(this.lockReason)) {
      $dara.Model.validateArray(this.lockReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyPublicIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodySecurityGroupIds extends $dara.Model {
  securityGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodySecurityOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether UEFI Secure Boot is enabled.
   */
  enableSecureBoot?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSecureBoot: 'EnableSecureBoot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSecureBoot: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress extends $dara.Model {
  ipAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipAddress)) {
      $dara.Model.validateArray(this.ipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
  /**
   * @remarks
   * The IP address of the cloud service, which is used for network connectivity between cloud services in the VPC.
   * 
   * @example
   * ``172.17.**.**``
   */
  natIpAddress?: string;
  privateIpAddress?: DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6ixacqz8osrwnqb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-wz9e4e9pmbcnj6ki6****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpAddress: 'NatIpAddress',
      privateIpAddress: 'PrivateIpAddress',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpAddress: 'string',
      privateIpAddress: DescribeInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.privateIpAddress && typeof (this.privateIpAddress as any).validate === 'function') {
      (this.privateIpAddress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * > **[Deprecated]** This parameter is about to be deprecated. To ensure compatibility, use other parameters instead.
   * 
   * @example
   * cls-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 8
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The running mode of the burstable instance. Valid values:
   * 
   * - Standard: standard mode. For more information about instance performance, see [Performance modes](~~59977#section-svb-w9d-dju~~). 
   * - Unlimited: unlimited mode. For more information about instance performance, see [Performance modes](~~59977#section-svb-w9d-dju~~).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The dedicated host attributes, which include the dedicated host cluster ID (DedicatedHostClusterId), dedicated host ID (DedicatedHostId), and dedicated host name (DedicatedHostName).
   */
  dedicatedHostAttribute?: DescribeInstanceAttributeResponseBodyDedicatedHostAttribute;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The binding information of the elastic IP address (EIP).
   */
  eipAddress?: DescribeInstanceAttributeResponseBodyEipAddress;
  /**
   * @remarks
   * Specifies whether the jumbo frame feature is enabled for the ECS instance. Valid values:
   * 
   * - true: The feature is enabled.
   * 
   * - false: The feature is disabled.
   * 
   * For more information, see [ECS instance MTU](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * Specifies whether VPC network traffic encryption is enabled for the instance. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * True
   */
  enableNetworkEncryption?: boolean;
  /**
   * @remarks
   * The expiration time. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image that the instance is running.
   * 
   * @example
   * m-bp1h46wfpjsjastc****
   */
  imageId?: string;
  innerIpAddress?: DescribeInstanceAttributeResponseBodyInnerIpAddress;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-uf6f5trc95ug8t33****
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values: 
   *          
   * - vpc: VPC.
   * - classic: classic network. The classic network is retired. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for public bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In the **pay-by-traffic** mode, the peak inbound and outbound bandwidth values are the maximum bandwidth values and are not guaranteed. When resource contention occurs, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - optimized: The instance is I/O optimized.
   * 
   * - none: The instance is not I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The memory size of the instance. Unit: MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * The network-related attributes.
   * > This parameter is in invitational preview and is not publicly available.
   */
  networkOptions?: DescribeInstanceAttributeResponseBodyNetworkOptions;
  operationLocks?: DescribeInstanceAttributeResponseBodyOperationLocks;
  publicIpAddress?: DescribeInstanceAttributeResponseBodyPublicIpAddress;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  securityGroupIds?: DescribeInstanceAttributeResponseBodySecurityGroupIds;
  securityOptions?: DescribeInstanceAttributeResponseBodySecurityOptions;
  /**
   * @remarks
   * The serial number of the instance.
   * 
   * @example
   * 51d1353b-22bf-4567-a176-8b3e12e4****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - Pending: The instance is being created.
   * - Running: The instance is running.
   * - Starting: The instance is starting.
   * - Stopping: The instance is stopping.
   * - Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the instance continues to be billed after it is stopped. Valid values:
   * 
   * - KeepCharging: The instance continues to be billed after it is stopped, and inventory resources are reserved.
   * - StopCharging: The instance is not billed after it is stopped. After the instance is stopped, resources such as vCPUs, memory, and public IP addresses are released. Whether the instance can be restarted depends on the resource inventory in the current region.
   * - Not-applicable: The instance does not support the economical mode.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  /**
   * @remarks
   * The VLAN ID of the instance.
   * > **[Deprecated]** This parameter is about to be deprecated. To ensure compatibility, use other parameters instead.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The VPC attributes.
   */
  vpcAttributes?: DescribeInstanceAttributeResponseBodyVpcAttributes;
  /**
   * @remarks
   * The zone of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      description: 'Description',
      eipAddress: 'EipAddress',
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      memory: 'Memory',
      networkOptions: 'NetworkOptions',
      operationLocks: 'OperationLocks',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupIds: 'SecurityGroupIds',
      securityOptions: 'SecurityOptions',
      serialNumber: 'SerialNumber',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpu: 'number',
      creationTime: 'string',
      creditSpecification: 'string',
      dedicatedHostAttribute: DescribeInstanceAttributeResponseBodyDedicatedHostAttribute,
      description: 'string',
      eipAddress: DescribeInstanceAttributeResponseBodyEipAddress,
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      innerIpAddress: DescribeInstanceAttributeResponseBodyInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      memory: 'number',
      networkOptions: DescribeInstanceAttributeResponseBodyNetworkOptions,
      operationLocks: DescribeInstanceAttributeResponseBodyOperationLocks,
      publicIpAddress: DescribeInstanceAttributeResponseBodyPublicIpAddress,
      regionId: 'string',
      requestId: 'string',
      securityGroupIds: DescribeInstanceAttributeResponseBodySecurityGroupIds,
      securityOptions: DescribeInstanceAttributeResponseBodySecurityOptions,
      serialNumber: 'string',
      status: 'string',
      stoppedMode: 'string',
      vlanId: 'string',
      vpcAttributes: DescribeInstanceAttributeResponseBodyVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.networkOptions && typeof (this.networkOptions as any).validate === 'function') {
      (this.networkOptions as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

