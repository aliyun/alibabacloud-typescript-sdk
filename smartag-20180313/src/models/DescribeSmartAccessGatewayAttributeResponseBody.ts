// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayAttributeResponseBodyAclIds extends $dara.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aclId)) {
      $dara.Model.validateArray(this.aclId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks extends $dara.Model {
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * Message
   */
  lockReason?: string;
  /**
   * @remarks
   * The lock type. Valid value: **FinancialLocked**.
   * 
   * @example
   * FinancialLocked
   */
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice extends $dara.Model {
  distributeSkStatus?: number;
  dpiSignatureDbVersion?: string;
  haState?: string;
  hcState?: string;
  monitorVersion?: string;
  secretKey?: string;
  serialNumber?: string;
  softwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      distributeSkStatus: 'DistributeSkStatus',
      dpiSignatureDbVersion: 'DpiSignatureDbVersion',
      haState: 'HaState',
      hcState: 'HcState',
      monitorVersion: 'MonitorVersion',
      secretKey: 'SecretKey',
      serialNumber: 'SerialNumber',
      softwareVersion: 'SoftwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeSkStatus: 'number',
      dpiSignatureDbVersion: 'string',
      haState: 'string',
      hcState: 'string',
      monitorVersion: 'string',
      secretKey: 'string',
      serialNumber: 'string',
      softwareVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyDevices extends $dara.Model {
  device?: DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice[];
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyDevicesDevice },
    };
  }

  validate() {
    if(Array.isArray(this.device)) {
      $dara.Model.validateArray(this.device);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds extends $dara.Model {
  flowLogId?: string[];
  static names(): { [key: string]: string } {
    return {
      flowLogId: 'FlowLogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flowLogId)) {
      $dara.Model.validateArray(this.flowLogId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyIRIds extends $dara.Model {
  IRId?: string[];
  static names(): { [key: string]: string } {
    return {
      IRId: 'IRId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IRId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IRId)) {
      $dara.Model.validateArray(this.IRId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinksLink extends $dara.Model {
  bandwidth?: string;
  commodityType?: string;
  endTime?: number;
  healthCheckTargetIp?: string;
  instanceId?: string;
  relateInstanceId?: string;
  relateInstanceRegionId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commodityType: 'CommodityType',
      endTime: 'EndTime',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      instanceId: 'InstanceId',
      relateInstanceId: 'RelateInstanceId',
      relateInstanceRegionId: 'RelateInstanceRegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      commodityType: 'string',
      endTime: 'number',
      healthCheckTargetIp: 'string',
      instanceId: 'string',
      relateInstanceId: 'string',
      relateInstanceRegionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyLinks extends $dara.Model {
  link?: DescribeSmartAccessGatewayAttributeResponseBodyLinksLink[];
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayAttributeResponseBodyLinksLink },
    };
  }

  validate() {
    if(Array.isArray(this.link)) {
      $dara.Model.validateArray(this.link);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBodyQosIds extends $dara.Model {
  qosId?: string[];
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.qosId)) {
      $dara.Model.validateArray(this.qosId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth for application acceleration of the Smart Access Gateway instance. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  accelerateBandwidth?: number;
  /**
   * @remarks
   * The ID of the access point for the Smart Access Gateway instance.
   * 
   * @example
   * 238
   */
  accessPointId?: string;
  aclIds?: DescribeSmartAccessGatewayAttributeResponseBodyAclIds;
  /**
   * @remarks
   * The status of the bandwidth plan for application acceleration instance. Valid values:
   * 
   * - **Abnormal**: Abnormal.
   * - **Normal**: Normal.
   * 
   * @example
   * Normal
   */
  applicationBandwidthPackageBussinessStatus?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan for application acceleration associated with the Smart Access Gateway instance.
   * 
   * @example
   * abwp-7963l7iqnquyj3****
   */
  applicationBandwidthPackageId?: string;
  /**
   * @remarks
   * The name of the bandwidth plan for application acceleration associated with the Smart Access Gateway instance.
   * 
   * @example
   * testname
   */
  applicationBandwidthPackageName?: string;
  /**
   * @remarks
   * The lock information of the bandwidth plan for application acceleration instance.
   */
  applicationBandwidthPackageOperationLocks?: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks;
  /**
   * @remarks
   * The ID of the Cloud Connect Network (CCN) instance associated with the Smart Access Gateway instance.
   * 
   * @example
   * ccn-iz26o9zye6lhoo****
   */
  associatedCcnId?: string;
  /**
   * @remarks
   * The name of the Cloud Connect Network (CCN) instance associated with the Smart Access Gateway instance.
   * 
   * @example
   * testname
   */
  associatedCcnName?: string;
  /**
   * @remarks
   * The public IP address of the standby Smart Access Gateway device.
   * 
   * @example
   * 112.XX.XX.27
   */
  backupBoxControllerIp?: string;
  /**
   * @remarks
   * The public IP address of the active Smart Access Gateway device.
   * 
   * @example
   * 112.XX.XX.25
   */
  boxControllerIp?: string;
  /**
   * @remarks
   * The private CIDR block of the on-premises network or client that needs to communicate with Alibaba Cloud.
   * 
   * @example
   * 10.0.9.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The ID of the city where the Smart Access Gateway device is located.
   * 
   * @example
   * cn-shanghai
   */
  city?: string;
  /**
   * @remarks
   * The creation timestamp of the Smart Access Gateway instance.
   * 
   * @example
   * 1622617250000
   */
  createTime?: number;
  /**
   * @remarks
   * The data plan of the Smart Access Gateway instance. Unit: GB.
   * 
   * > Currently, only 5 GB of free data traffic is provided per account each month.
   * 
   * @example
   * 5
   */
  dataPlan?: number;
  /**
   * @remarks
   * The description of the Smart Access Gateway instance.
   * 
   * @example
   * testdesc
   */
  description?: string;
  devices?: DescribeSmartAccessGatewayAttributeResponseBodyDevices;
  /**
   * @remarks
   * Indicates whether the optimized retransmission feature is enabled for the Smart Access Gateway instance. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableOptimization?: boolean;
  /**
   * @remarks
   * Indicates whether connection log auditing is enabled for the Smart Access Gateway app instance. Valid values:
   * 
   * - **true**: Enables connection log auditing for the Smart Access Gateway app instance.
   * 
   * - **false**: Shutdown connection log auditing for the Smart Access Gateway app instance.
   * 
   * @example
   * true
   */
  enableSoftwareConnectionAudit?: boolean;
  /**
   * @remarks
   * The UNIX timestamp when the Smart Access Gateway instance expires.
   * 
   * @example
   * 1628265600000
   */
  endTime?: number;
  flowLogIds?: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds;
  IRIds?: DescribeSmartAccessGatewayAttributeResponseBodyIRIds;
  /**
   * @remarks
   * The type of the Smart Access Gateway instance. Valid values:
   * - **sag-1000**: The instance is a Smart Access Gateway hardware instance and the associated device is a SAG-1000 device.
   * - **sag-10wm**: The instance is a Smart Access Gateway hardware instance and the associated device is a SAG-100WM device.
   * - **sag-software**: The instance is a SAG app instance.
   * - **sag-vcpe**: The instance is a Smart Access Gateway vCPE instance.
   * 
   * @example
   * sag-vcpe
   */
  instanceType?: string;
  /**
   * @remarks
   * The connection status of the IPsec-VPN. Valid values:
   * - **up**: The IPsec-VPN connection is normal.
   * - **down**: The IPsec-VPN connection is abnormal.
   * 
   * @example
   * up
   */
  ipsecStatus?: string;
  links?: DescribeSmartAccessGatewayAttributeResponseBodyLinks;
  /**
   * @remarks
   * The peak bandwidth of the Smart Access Gateway instance. Unit: Mbit/s.
   * 
   * @example
   * 50 M
   */
  maxBandwidth?: string;
  /**
   * @remarks
   * The name of the Smart Access Gateway instance.
   * 
   * @example
   * testname
   */
  name?: string;
  /**
   * @remarks
   * The optimized retransmission type of the Smart Access Gateway instance. After optimized retransmission is enabled, the default value is **fec**.
   * 
   * @example
   * fec
   */
  optimizationType?: boolean;
  /**
   * @remarks
   * The location of the device.
   * 
   * @example
   * shanghai
   */
  position?: string;
  qosIds?: DescribeSmartAccessGatewayAttributeResponseBodyQosIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F02D092B-A0B7-4BA1-BCA7-014B953C5DC7
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the reseller.
   * 
   * @example
   * sag-v0fkpk4akfz5******
   */
  resellerInstanceId?: string;
  /**
   * @remarks
   * The ID of the reseller account.
   * 
   * @example
   * 1210123456123456
   */
  resellerUid?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The on-premises route synchronization method of the Smart Access Gateway instance. Valid values:
   * - **static**: Static routing.
   * - **dynamic**: Dynamic route.
   * 
   * @example
   * static
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The time threshold for locking the Smart Access Gateway device when it goes offline. Unit: seconds.
   * 
   * @example
   * 3600
   */
  securityLockThreshold?: number;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * @example
   * sage6gsdllbidl****,sage6nniq3d****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-6z21oj0vjjrx6s****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The instance status of the Smart Access Gateway. Valid values:
   * - **Ordered**: Pending delivery.
   * - **Delivered**: Delivered. 
   * - **Received**: Activated.
   * - **Unconfirmed**: Pending confirmation.
   * - **Active**: Available. 
   * - **Offline**: Offline.
   * - **Arrearage**: Locked due to overdue payments.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device that is currently primarily responsible for traffic transmission.
   * 
   * @example
   * sage6nniq3d****
   */
  trafficMasterSn?: string;
  /**
   * @remarks
   * The maximum upstream bandwidth over the 4G public network for the Smart Access Gateway device. Unit: Mbit/s.
   * 
   * @example
   * 3
   */
  upBandwidth4G?: number;
  /**
   * @remarks
   * The maximum upstream bandwidth of the WAN port for the Smart Access Gateway device. Unit: Mbit/s.
   * 
   * @example
   * 4
   */
  upBandwidthWan?: number;
  /**
   * @remarks
   * The number of client accounts for the Smart Access Gateway instance.
   * 
   * @example
   * 3
   */
  userCount?: number;
  /**
   * @remarks
   * The connection status of aliVPN. Valid values:
   * - **up**: The aliVPN connection is normal.
   * - **down**: The aliVPN connection is abnormal.
   * 
   * @example
   * down
   */
  vpnStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateBandwidth: 'AccelerateBandwidth',
      accessPointId: 'AccessPointId',
      aclIds: 'AclIds',
      applicationBandwidthPackageBussinessStatus: 'ApplicationBandwidthPackageBussinessStatus',
      applicationBandwidthPackageId: 'ApplicationBandwidthPackageId',
      applicationBandwidthPackageName: 'ApplicationBandwidthPackageName',
      applicationBandwidthPackageOperationLocks: 'ApplicationBandwidthPackageOperationLocks',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      backupBoxControllerIp: 'BackupBoxControllerIp',
      boxControllerIp: 'BoxControllerIp',
      cidrBlock: 'CidrBlock',
      city: 'City',
      createTime: 'CreateTime',
      dataPlan: 'DataPlan',
      description: 'Description',
      devices: 'Devices',
      enableOptimization: 'EnableOptimization',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      endTime: 'EndTime',
      flowLogIds: 'FlowLogIds',
      IRIds: 'IRIds',
      instanceType: 'InstanceType',
      ipsecStatus: 'IpsecStatus',
      links: 'Links',
      maxBandwidth: 'MaxBandwidth',
      name: 'Name',
      optimizationType: 'OptimizationType',
      position: 'Position',
      qosIds: 'QosIds',
      requestId: 'RequestId',
      resellerInstanceId: 'ResellerInstanceId',
      resellerUid: 'ResellerUid',
      resourceGroupId: 'ResourceGroupId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      status: 'Status',
      trafficMasterSn: 'TrafficMasterSn',
      upBandwidth4G: 'UpBandwidth4G',
      upBandwidthWan: 'UpBandwidthWan',
      userCount: 'UserCount',
      vpnStatus: 'VpnStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateBandwidth: 'number',
      accessPointId: 'string',
      aclIds: DescribeSmartAccessGatewayAttributeResponseBodyAclIds,
      applicationBandwidthPackageBussinessStatus: 'string',
      applicationBandwidthPackageId: 'string',
      applicationBandwidthPackageName: 'string',
      applicationBandwidthPackageOperationLocks: DescribeSmartAccessGatewayAttributeResponseBodyApplicationBandwidthPackageOperationLocks,
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      backupBoxControllerIp: 'string',
      boxControllerIp: 'string',
      cidrBlock: 'string',
      city: 'string',
      createTime: 'number',
      dataPlan: 'number',
      description: 'string',
      devices: DescribeSmartAccessGatewayAttributeResponseBodyDevices,
      enableOptimization: 'boolean',
      enableSoftwareConnectionAudit: 'boolean',
      endTime: 'number',
      flowLogIds: DescribeSmartAccessGatewayAttributeResponseBodyFlowLogIds,
      IRIds: DescribeSmartAccessGatewayAttributeResponseBodyIRIds,
      instanceType: 'string',
      ipsecStatus: 'string',
      links: DescribeSmartAccessGatewayAttributeResponseBodyLinks,
      maxBandwidth: 'string',
      name: 'string',
      optimizationType: 'boolean',
      position: 'string',
      qosIds: DescribeSmartAccessGatewayAttributeResponseBodyQosIds,
      requestId: 'string',
      resellerInstanceId: 'string',
      resellerUid: 'string',
      resourceGroupId: 'string',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      status: 'string',
      trafficMasterSn: 'string',
      upBandwidth4G: 'number',
      upBandwidthWan: 'number',
      userCount: 'number',
      vpnStatus: 'string',
    };
  }

  validate() {
    if(this.aclIds && typeof (this.aclIds as any).validate === 'function') {
      (this.aclIds as any).validate();
    }
    if(this.applicationBandwidthPackageOperationLocks && typeof (this.applicationBandwidthPackageOperationLocks as any).validate === 'function') {
      (this.applicationBandwidthPackageOperationLocks as any).validate();
    }
    if(this.devices && typeof (this.devices as any).validate === 'function') {
      (this.devices as any).validate();
    }
    if(this.flowLogIds && typeof (this.flowLogIds as any).validate === 'function') {
      (this.flowLogIds as any).validate();
    }
    if(this.IRIds && typeof (this.IRIds as any).validate === 'function') {
      (this.IRIds as any).validate();
    }
    if(this.links && typeof (this.links as any).validate === 'function') {
      (this.links as any).validate();
    }
    if(this.qosIds && typeof (this.qosIds as any).validate === 'function') {
      (this.qosIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

