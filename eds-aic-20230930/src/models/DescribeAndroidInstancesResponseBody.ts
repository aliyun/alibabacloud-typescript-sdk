// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy extends $dara.Model {
  /**
   * @remarks
   * The application management policy ID.
   * 
   * @example
   * amp-dgiavcvibfdds****
   */
  appManagePolicyId?: string;
  /**
   * @remarks
   * The name of the application management policy.
   * 
   * @example
   * Application group 1
   */
  appManagePolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      appManagePolicyId: 'AppManagePolicyId',
      appManagePolicyName: 'AppManagePolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appManagePolicyId: 'string',
      appManagePolicyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelBizTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * releaseFlag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * on
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeAndroidInstancesResponseBodyInstanceModelDisks extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 32
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig extends $dara.Model {
  /**
   * @remarks
   * DPI。
   * 
   * @example
   * 240
   */
  dpi?: number;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 30
   */
  fps?: number;
  /**
   * @remarks
   * Indicates whether the resolution is locked.
   * 
   * @example
   * off
   */
  lockResolution?: string;
  /**
   * @remarks
   * The height of the resolution. Unit: pixels.
   * 
   * @example
   * 1280
   */
  resolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution. Unit: pixels.
   * 
   * @example
   * 720
   */
  resolutionWidth?: number;
  static names(): { [key: string]: string } {
    return {
      dpi: 'Dpi',
      fps: 'Fps',
      lockResolution: 'LockResolution',
      resolutionHeight: 'ResolutionHeight',
      resolutionWidth: 'ResolutionWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpi: 'number',
      fps: 'number',
      lockResolution: 'string',
      resolutionHeight: 'number',
      resolutionWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo extends $dara.Model {
  /**
   * @remarks
   * The independent device storage ID.
   * 
   * @example
   * pd-sbcudgidbhb****
   */
  phoneDataId?: string;
  /**
   * @remarks
   * The capacity of the independent device storage. Unit: GiB.
   * 
   * @example
   * 20
   */
  phoneDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      phoneDataId: 'PhoneDataId',
      phoneDataVolume: 'PhoneDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneDataId: 'string',
      phoneDataVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBodyInstanceModelTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeAndroidInstancesResponseBodyInstanceModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group to which the instance belongs.
   * 
   * @example
   * ag-ayyhomlal7po****
   */
  androidInstanceGroupId?: string;
  /**
   * @remarks
   * The instance group name.
   * 
   * @example
   * AndroidInstanceGroupName
   */
  androidInstanceGroupName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-8at8h6ejkadjh****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  androidInstanceStatus?: string;
  /**
   * @remarks
   * The delivery group ID.
   * 
   * @example
   * aig-i7yv6tkn7kh8dv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The physical instance ID.
   * 
   * @example
   * ai-9ey6io0q58rcd****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The application management policy information. This corresponds to the blacklists and whitelists management of application management policies in the console.
   */
  appManagePolicy?: DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy;
  /**
   * @remarks
   * The assigned user.
   * 
   * @example
   * test
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * The bandwidth package ID.
   * 
   * @example
   * np-0q6ixs7vpxcizp***
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The bandwidth type.
   * 
   * @example
   * cbwp_ecd
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The bound user.
   * 
   * @example
   * test
   */
  bindUserId?: string;
  bizImageType?: string;
  /**
   * @remarks
   * The tag array.
   */
  bizTags?: DescribeAndroidInstancesResponseBodyInstanceModelBizTags[];
  channel?: string;
  /**
   * @remarks
   * The billing type of the instance.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The disk information.
   */
  disks?: DescribeAndroidInstancesResponseBodyInstanceModelDisks[];
  /**
   * @remarks
   * The display settings.
   */
  displayConfig?: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig;
  /**
   * @remarks
   * The downstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 30
   */
  downBandwidthLimit?: number;
  /**
   * @remarks
   * The error reason for instance data backup failure or recovery failure.
   * 
   * @example
   * FilePathNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The expiration time of the subscription instance group.
   * 
   * @example
   * 2024-07-15T02:03:33Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-05-06 10:42:10
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 3.5.3.867
   */
  imageVersion?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * acp.basic.small
   */
  instanceType?: string;
  internetStatus?: string;
  /**
   * @remarks
   * The key pair ID.
   * 
   * @example
   * kp-5hh431emkpucs****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The IP address of the network interface.
   * 
   * @example
   * 192.168.22.48
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  networkInterfaceIpv6Address?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * network_pro_ecd
   */
  networkType?: string;
  /**
   * @remarks
   * The network ID. This corresponds to the network selected during creation in the console (basic shared network or advanced shared network).
   * 
   * @example
   * cn-shenzhen+dir-211620****
   */
  officeSiteId?: string;
  packageId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * @example
   * p-0btrd5zj8epo****
   */
  persistentAppInstanceId?: string;
  /**
   * @remarks
   * <props="china">The independent device storage information of the cloud phone matrix edition instance.
   * <props="intl">This parameter is not publicly available..
   */
  phoneDataInfo?: DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo;
  /**
   * @remarks
   * The policy group ID.
   * 
   * @example
   * pg-0bszojpu0seql****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 10.32.1.41
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  publicIpv6Address?: string;
  /**
   * @remarks
   * The public network rate limiting rule ID (applies only to premium bandwidth).
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The progress of instance data backup or recovery.
   * 
   * @example
   * 100
   */
  rate?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The rendering type.
   * 
   * @example
   * local
   */
  renderingType?: string;
  /**
   * @remarks
   * <props="china">The matrix status.
   * <props="intl">This parameter is not publicly available..
   * 
   * @example
   * RUNNING
   */
  serverStatus?: string;
  /**
   * @remarks
   * <props="china">The cloud phone matrix specification.
   * <props="intl">This parameter is not publicly available..
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The session connection status.
   * 
   * @example
   * connect
   */
  sessionStatus?: string;
  /**
   * @remarks
   * <props="china">The streaming mode of instances in the cloud phone matrix.
   * <props="intl">This parameter is not publicly available..
   * 
   * @example
   * 1
   */
  streamMode?: number;
  /**
   * @remarks
   * The Android system version.
   * 
   * @example
   * Android 11
   */
  systemVersion?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeAndroidInstancesResponseBodyInstanceModelTags[];
  /**
   * @remarks
   * The upstream bandwidth throttling. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  upBandwidthLimit?: number;
  /**
   * @remarks
   * The vSwitch ID in the VPC.
   * 
   * @example
   * vsw-2zepmau2hsbhos42****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupId: 'AndroidInstanceGroupId',
      androidInstanceGroupName: 'AndroidInstanceGroupName',
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      androidInstanceStatus: 'AndroidInstanceStatus',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appManagePolicy: 'AppManagePolicy',
      authorizedUserId: 'AuthorizedUserId',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      bindUserId: 'BindUserId',
      bizImageType: 'BizImageType',
      bizTags: 'BizTags',
      channel: 'Channel',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      disks: 'Disks',
      displayConfig: 'DisplayConfig',
      downBandwidthLimit: 'DownBandwidthLimit',
      errorCode: 'ErrorCode',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageVersion: 'ImageVersion',
      instanceType: 'InstanceType',
      internetStatus: 'InternetStatus',
      keyPairId: 'KeyPairId',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      networkInterfaceIpv6Address: 'NetworkInterfaceIpv6Address',
      networkType: 'NetworkType',
      officeSiteId: 'OfficeSiteId',
      packageId: 'PackageId',
      persistentAppInstanceId: 'PersistentAppInstanceId',
      phoneDataInfo: 'PhoneDataInfo',
      policyGroupId: 'PolicyGroupId',
      publicIpAddress: 'PublicIpAddress',
      publicIpv6Address: 'PublicIpv6Address',
      qosRuleId: 'QosRuleId',
      rate: 'Rate',
      regionId: 'RegionId',
      renderingType: 'RenderingType',
      serverStatus: 'ServerStatus',
      serverType: 'ServerType',
      sessionStatus: 'SessionStatus',
      streamMode: 'StreamMode',
      systemVersion: 'SystemVersion',
      tags: 'Tags',
      upBandwidthLimit: 'UpBandwidthLimit',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupId: 'string',
      androidInstanceGroupName: 'string',
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      androidInstanceStatus: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appManagePolicy: DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy,
      authorizedUserId: 'string',
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bindUserId: 'string',
      bizImageType: 'string',
      bizTags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelBizTags },
      channel: 'string',
      chargeType: 'string',
      cpu: 'string',
      disks: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelDisks },
      displayConfig: DescribeAndroidInstancesResponseBodyInstanceModelDisplayConfig,
      downBandwidthLimit: 'number',
      errorCode: 'string',
      gmtCreate: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageVersion: 'string',
      instanceType: 'string',
      internetStatus: 'string',
      keyPairId: 'string',
      memory: 'number',
      networkInterfaceIp: 'string',
      networkInterfaceIpv6Address: 'string',
      networkType: 'string',
      officeSiteId: 'string',
      packageId: 'string',
      persistentAppInstanceId: 'string',
      phoneDataInfo: DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo,
      policyGroupId: 'string',
      publicIpAddress: 'string',
      publicIpv6Address: 'string',
      qosRuleId: 'string',
      rate: 'number',
      regionId: 'string',
      renderingType: 'string',
      serverStatus: 'string',
      serverType: 'string',
      sessionStatus: 'string',
      streamMode: 'number',
      systemVersion: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModelTags },
      upBandwidthLimit: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.appManagePolicy && typeof (this.appManagePolicy as any).validate === 'function') {
      (this.appManagePolicy as any).validate();
    }
    if(Array.isArray(this.bizTags)) {
      $dara.Model.validateArray(this.bizTags);
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
    }
    if(this.phoneDataInfo && typeof (this.phoneDataInfo as any).validate === 'function') {
      (this.phoneDataInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAndroidInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance information.
   */
  instanceModel?: DescribeAndroidInstancesResponseBodyInstanceModel[];
  /**
   * @remarks
   * The pagination token that indicates the position to which the current call has read. An empty value indicates that all data has been read.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kmma/xxE9WtwL/ADvZ****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceModel: 'InstanceModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModel: { 'type': 'array', 'itemType': DescribeAndroidInstancesResponseBodyInstanceModel },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceModel)) {
      $dara.Model.validateArray(this.instanceModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

