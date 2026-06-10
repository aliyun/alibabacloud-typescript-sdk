// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsResponseBodyDesktopsDesktopDurationList extends $dara.Model {
  orderInstanceId?: string;
  packageCreationTime?: string;
  packageExpiredTime?: string;
  packageId?: string;
  packageStatus?: string;
  packageType?: string;
  packageUsedUpStrategy?: string;
  periodEndTime?: string;
  periodStartTime?: string;
  postPaidLimitFee?: number;
  totalDuration?: number;
  usedDuration?: number;
  static names(): { [key: string]: string } {
    return {
      orderInstanceId: 'OrderInstanceId',
      packageCreationTime: 'PackageCreationTime',
      packageExpiredTime: 'PackageExpiredTime',
      packageId: 'PackageId',
      packageStatus: 'PackageStatus',
      packageType: 'PackageType',
      packageUsedUpStrategy: 'PackageUsedUpStrategy',
      periodEndTime: 'PeriodEndTime',
      periodStartTime: 'PeriodStartTime',
      postPaidLimitFee: 'PostPaidLimitFee',
      totalDuration: 'TotalDuration',
      usedDuration: 'UsedDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderInstanceId: 'string',
      packageCreationTime: 'string',
      packageExpiredTime: 'string',
      packageId: 'string',
      packageStatus: 'string',
      packageType: 'string',
      packageUsedUpStrategy: 'string',
      periodEndTime: 'string',
      periodStartTime: 'string',
      postPaidLimitFee: 'number',
      totalDuration: 'number',
      usedDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsDisks extends $dara.Model {
  /**
   * @remarks
   * The disk type.
   * 
   * - cloud_efficiency (ultra disk)
   * 
   *   - cloud_auto (extreme disk)
   * 
   *   - cloud_essd (enhanced SSD disk, supported only on select instance types)
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-jedbpr4sl9l37****
   */
  diskId?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 80
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
  /**
   * @remarks
   * The performance level of ESSD disks, if the disk uses ESSD.
   * 
   * For differences between performance levels, see [](t583241.xdita#).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsFotaUpdate extends $dara.Model {
  /**
   * @remarks
   * The current image version number of the desktop.
   * 
   * @example
   * 0.0.0-D-20220102.000000
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The image version number to which the desktop can be upgraded.
   * 
   * @example
   * 0.0.0-R-20220307.190736
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The description of the upgradeable image version.
   * 
   * @example
   * 测试升级包03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English description of the upgradeable version.
   * 
   * @example
   * What\\"s new
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese description of the upgradeable version.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the upgradeable version installation package. Unit: KB.
   * 
   * @example
   * 108815097
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      newAppVersion: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsOsUpdatePackages extends $dara.Model {
  description?: string;
  kb?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      kb: 'Kb',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kb: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsOsUpdate extends $dara.Model {
  checkId?: string;
  packageCount?: number;
  packages?: DescribeDesktopsResponseBodyDesktopsOsUpdatePackages[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      packageCount: 'PackageCount',
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      packageCount: 'number',
      packages: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsOsUpdatePackages },
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsResourceGroups extends $dara.Model {
  /**
   * @remarks
   * The enterprise resource group ID.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  id?: string;
  /**
   * @remarks
   * The enterprise resource group name.
   * 
   * @example
   * Resource group 01
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsSessions extends $dara.Model {
  /**
   * @remarks
   * The user ID connected to the desktop.
   * 
   * @example
   * 29615820929547****
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the desktop session was established.
   * 
   * @example
   * 2021-03-07T08:23Z
   */
  establishmentTime?: string;
  /**
   * @remarks
   * The external user name.
   * 
   * @example
   * Testname
   */
  externalUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
      externalUserName: 'ExternalUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
      externalUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class DescribeDesktopsResponseBodyDesktops extends $dara.Model {
  accountType?: string;
  agentProviderList?: string[];
  /**
   * @remarks
   * The number of concurrent sessions allowed per desktop in a multi-session desktop pool.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The desktop template ID used by the desktop.
   * 
   * @example
   * b-2g65ljy4291vl****
   */
  bundleId?: string;
  /**
   * @remarks
   * The desktop template name used by the desktop.
   * 
   * @example
   * TemplateName
   */
  bundleName?: string;
  /**
   * @remarks
   * The billing method for the desktop.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The connection status of the user.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the desktop was created.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * null
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * null
   */
  dataDiskSize?: string;
  desktopDurationList?: DescribeDesktopsResponseBodyDesktopsDesktopDurationList[];
  /**
   * @remarks
   * The desktop pool ID that the desktop belongs to. Default value: `null`.
   * 
   * @example
   * null
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The desktop ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The desktop name.
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * The desktop status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The desktop instance type.
   * 
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID. This is the same as the office site ID (OfficeSiteId).
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * Disk information.
   */
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  domainType?: string;
  /**
   * @remarks
   * The number of times the desktop can be downgraded.
   * 
   * @example
   * 3
   */
  downgradeQuota?: number;
  /**
   * @remarks
   * The number of times the desktop has been downgraded.
   * 
   * @example
   * 0
   */
  downgradedTimes?: number;
  /**
   * @remarks
   * The authorized user IDs for the desktop.
   */
  endUserIds?: string[];
  entraDomainName?: string;
  envId?: string;
  envType?: string;
  /**
   * @remarks
   * The expiration time for subscription desktops.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image version information for the desktop.
   */
  fotaUpdate?: DescribeDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @remarks
   * Whether the desktop is a GPU desktop.
   * 
   * @example
   * 0
   */
  gpuCategory?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver version for the desktop.
   * 
   * @example
   * null
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The GPU specification.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * true
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * true
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * testName
   */
  hostName?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  isLdap?: boolean;
  /**
   * @remarks
   * The management flag.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The management flags.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the secondary ENI created by the desktop service under a RAM or AD user. This value cannot be modified.
   * 
   * @example
   * 123456
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The IP address of the secondary ENI created by the desktop service under a RAM or AD user.
   * 
   * @example
   * 192.168.XX.XX
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The office site ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office site name.
   * 
   * @example
   * default
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account system type for the office site.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The VPC type of the office site.
   * 
   * @example
   * basic
   */
  officeSiteVpcType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  osUpdate?: DescribeDesktopsResponseBodyDesktopsOsUpdate;
  /**
   * @remarks
   * The operating system platform information.
   * 
   * @example
   * Ubuntu
   */
  platform?: string;
  /**
   * @remarks
   * The desktop policy ID.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The collection of desktop policy IDs.
   */
  policyGroupIdList?: string[];
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The list of desktop policy names.
   * 
   * @example
   * Test policy 01
   */
  policyGroupNameList?: string[];
  /**
   * @remarks
   * The creation progress of the desktop.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The list of enterprise resource group information.
   */
  resourceGroups?: DescribeDesktopsResponseBodyDesktopsResourceGroups[];
  serialNumber?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  /**
   * @remarks
   * Session information for the desktop user.
   */
  sessions?: DescribeDesktopsResponseBodyDesktopsSessions[];
  /**
   * @remarks
   * The snapshot policy ID.
   * 
   * @example
   * sp-gi007jgyc3kce****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The snapshot policy name.
   * 
   * @example
   * testSnapshotName
   */
  snapshotPolicyName?: string;
  /**
   * @remarks
   * The standard start time.
   */
  standardStartTime?: string;
  /**
   * @remarks
   * The first time the desktop started.
   * 
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  /**
   * @remarks
   * Whether hibernation is supported.
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * null
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * 0
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Tag information.
   */
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  /**
   * @remarks
   * Whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used when disk encryption is enabled. You can obtain it through the [](t22712.xdita#)interface.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The type of zone to query. Default value: `AvailabilityZone`, which refers to standard cloud availability zones.
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      agentProviderList: 'AgentProviderList',
      bindAmount: 'BindAmount',
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      chargeType: 'ChargeType',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopDurationList: 'DesktopDurationList',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      disks: 'Disks',
      domainType: 'DomainType',
      downgradeQuota: 'DowngradeQuota',
      downgradedTimes: 'DowngradedTimes',
      endUserIds: 'EndUserIds',
      entraDomainName: 'EntraDomainName',
      envId: 'EnvId',
      envType: 'EnvType',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuCategory: 'GpuCategory',
      gpuCount: 'GpuCount',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuSpec: 'GpuSpec',
      hibernationBeta: 'HibernationBeta',
      hibernationOptionsConfigured: 'HibernationOptionsConfigured',
      hostName: 'HostName',
      imageId: 'ImageId',
      isLdap: 'IsLdap',
      managementFlag: 'ManagementFlag',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      officeSiteVpcType: 'OfficeSiteVpcType',
      osType: 'OsType',
      osUpdate: 'OsUpdate',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      policyGroupIdList: 'PolicyGroupIdList',
      policyGroupName: 'PolicyGroupName',
      policyGroupNameList: 'PolicyGroupNameList',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      resourceGroups: 'ResourceGroups',
      serialNumber: 'SerialNumber',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      snapshotPolicyId: 'SnapshotPolicyId',
      snapshotPolicyName: 'SnapshotPolicyName',
      standardStartTime: 'StandardStartTime',
      startTime: 'StartTime',
      supportHibernation: 'SupportHibernation',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      agentProviderList: { 'type': 'array', 'itemType': 'string' },
      bindAmount: 'number',
      bundleId: 'string',
      bundleName: 'string',
      chargeType: 'string',
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopDurationList: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDesktopDurationList },
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      domainType: 'string',
      downgradeQuota: 'number',
      downgradedTimes: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      entraDomainName: 'string',
      envId: 'string',
      envType: 'string',
      expiredTime: 'string',
      fotaUpdate: DescribeDesktopsResponseBodyDesktopsFotaUpdate,
      gpuCategory: 'number',
      gpuCount: 'number',
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      hibernationBeta: 'boolean',
      hibernationOptionsConfigured: 'boolean',
      hostName: 'string',
      imageId: 'string',
      isLdap: 'boolean',
      managementFlag: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      networkInterfaceId: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      officeSiteVpcType: 'string',
      osType: 'string',
      osUpdate: DescribeDesktopsResponseBodyDesktopsOsUpdate,
      platform: 'string',
      policyGroupId: 'string',
      policyGroupIdList: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyGroupNameList: { 'type': 'array', 'itemType': 'string' },
      progress: 'string',
      protocolType: 'string',
      resourceGroups: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsResourceGroups },
      serialNumber: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsSessions },
      snapshotPolicyId: 'string',
      snapshotPolicyName: 'string',
      standardStartTime: 'string',
      startTime: 'string',
      supportHibernation: 'boolean',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsTags },
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      zoneType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentProviderList)) {
      $dara.Model.validateArray(this.agentProviderList);
    }
    if(Array.isArray(this.desktopDurationList)) {
      $dara.Model.validateArray(this.desktopDurationList);
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(this.fotaUpdate && typeof (this.fotaUpdate as any).validate === 'function') {
      (this.fotaUpdate as any).validate();
    }
    if(Array.isArray(this.managementFlags)) {
      $dara.Model.validateArray(this.managementFlags);
    }
    if(this.osUpdate && typeof (this.osUpdate as any).validate === 'function') {
      (this.osUpdate as any).validate();
    }
    if(Array.isArray(this.policyGroupIdList)) {
      $dara.Model.validateArray(this.policyGroupIdList);
    }
    if(Array.isArray(this.policyGroupNameList)) {
      $dara.Model.validateArray(this.policyGroupNameList);
    }
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
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

export class DescribeDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the desktops.
   */
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The token that starts the next query. An empty NextToken means no more results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5BA78C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of desktops.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.desktops)) {
      $dara.Model.validateArray(this.desktops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

