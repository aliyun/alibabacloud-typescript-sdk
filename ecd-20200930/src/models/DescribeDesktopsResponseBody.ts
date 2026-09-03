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
   * The disk category.
   * - cloud_efficiency (ultra cloud disk)
   *    - cloud_auto (ultra-fast cloud disk)
   *    - cloud_essd (enhanced standard SSD cloud disk. Only specific types are supported.)
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
   * The performance level (PL) of the ESSD when the disk is an ESSD.
   * 
   * For more information about the differences between performance levels, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
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
   * The version number of the current image on the cloud computer.
   * 
   * @example
   * 0.0.0-D-20220102.000000
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The image version number to which the cloud computer can be upgraded.
   * 
   * @example
   * 0.0.0-R-20220307.190736
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The release notes of the image version available for upgrade.
   * 
   * @example
   * Test upgrade package 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English release notes of the image version available for upgrade.
   * 
   * @example
   * What\\"s new
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese release notes of the image version available for upgrade.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the upgrade package. Unit: KB.
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
  /**
   * @remarks
   * The NAS file system description.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The KB number of the system patch.
   * 
   * @example
   * KB5032190
   */
  kb?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * 2021-05 Servicing Stack Update for Windows Server 2019 for x64-based Systems (KB5003243)
   */
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
  /**
   * @remarks
   * The ID of the health check task.
   * 
   * @example
   * ck-8f2a1b****
   */
  checkId?: string;
  /**
   * @remarks
   * The number of pending update patches.
   * 
   * @example
   * 3
   */
  packageCount?: number;
  /**
   * @remarks
   * The list of system patches.
   */
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
   * The resource group ID.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  id?: string;
  /**
   * @remarks
   * The name of the enterprise resource group.
   * 
   * @example
   * ResourceGroup01
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
   * The ID of the user connected to the cloud desktop.
   * 
   * @example
   * 29615820929547****
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the cloud desktop session was established. The time is in the ISO 8601 standard in UTC.
   * 
   * @example
   * 2021-03-07T08:23Z
   */
  establishmentTime?: string;
  /**
   * @remarks
   * The external username.
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
  /**
   * @remarks
   * The account type.
   * 
   * @example
   * SIMPLE
   */
  accountType?: string;
  /**
   * @remarks
   * The list of agents supported by the cloud computer.
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud computer in a multi-session cloud computer pool.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The ID of the cloud desktop template used by the cloud desktop.
   * 
   * @example
   * b-2g65ljy4291vl****
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the cloud desktop template used by the cloud desktop.
   * 
   * @example
   * TemplateName
   */
  bundleName?: string;
  /**
   * @remarks
   * The billing method of the cloud desktop.
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
   * The time when the cloud desktop was created. The time is in the ISO 8601 standard in UTC.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 80
   */
  dataDiskSize?: string;
  desktopDurationList?: DescribeDesktopsResponseBodyDesktopsDesktopDurationList[];
  /**
   * @remarks
   * The ID of the cloud desktop pool to which the cloud desktop belongs. Default value: `null`.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud computer status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The cloud desktop type.
   * 
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID, which is the same as the office network ID (OfficeSiteId).
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The disk information.
   */
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  /**
   * @remarks
   * The domain type of the directory to which the cloud computer belongs.
   * 
   * @example
   * AD
   */
  domainType?: string;
  /**
   * @remarks
   * The number of times the cloud desktop can be downgraded.
   * 
   * @example
   * 3
   */
  downgradeQuota?: number;
  /**
   * @remarks
   * The number of times the cloud desktop has been downgraded.
   * 
   * @example
   * 0
   */
  downgradedTimes?: number;
  /**
   * @remarks
   * The IDs of the authorized users of the cloud desktop.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The domain name of Microsoft Entra ID.
   * 
   * @example
   * contoso.onmicrosoft.com
   */
  entraDomainName?: string;
  /**
   * @remarks
   * The environment ID. This parameter is not publicly available.
   * 
   * @example
   * adifa****
   */
  envId?: string;
  /**
   * @remarks
   * The environment type. This parameter is not publicly available.
   * 
   * @example
   * Private
   */
  envType?: string;
  /**
   * @remarks
   * The expiration time of the subscription cloud desktop. The time is in the ISO 8601 standard in UTC.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The image version information of the cloud computer.
   */
  fotaUpdate?: DescribeDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @remarks
   * Indicates whether the cloud desktop is a GPU-accelerated cloud desktop.
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
   * The GPU driver version of the cloud desktop.
   * 
   * @example
   * 471.68
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The GPU specifications.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The hostname.
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
  /**
   * @remarks
   * The image name before the change.
   * 
   * @example
   * Windows server 2019 Mainland
   */
  imageName?: string;
  /**
   * @remarks
   * Indicates whether the directory is an LDAP directory.
   */
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
   * The management flag.
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
   * The ID of the secondary ENI created by the cloud desktop service for the RAM or AD user. This value cannot be modified.
   * 
   * @example
   * 123456
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The IP address of the secondary ENI created by the cloud desktop service for the RAM or AD user.
   * 
   * @example
   * 192.168.XX.XX
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * default
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The VPC type of the office network.
   * 
   * @example
   * basic
   */
  officeSiteVpcType?: string;
  /**
   * @remarks
   * The operating system types.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The operating system update information of the cloud computer.
   */
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
   * The cloud computer policy ID.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The list of cloud computer policy IDs.
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
   * The list of cloud computer policy names.
   */
  policyGroupNameList?: string[];
  /**
   * @remarks
   * The creation progress of the cloud computer.
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
  /**
   * @remarks
   * The serial number of the terminal.
   * 
   * @example
   * 96c530bc-6095-4014-8bbc-d461b8ac****
   */
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
   * The user session information of the cloud desktop.
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
   * The start time of the query. The time is in the ISO 8601 standard and in UTC+0, in the format of `yyyy-mm-ddthh:mm:ssz`.
   * 
   * @example
   * 2025-01-27T02:20:10Z
   */
  standardStartTime?: string;
  /**
   * @remarks
   * The time when the cloud desktop was first started. The time is in the ISO 8601 standard in UTC.
   * 
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-dgea1*****
   */
  subnetId?: string;
  /**
   * @remarks
   * Indicates whether hibernation is supported.
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used for disk encryption. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain the key ID.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The type of the zone. Default value: `AvailabilityZone`, which indicates a regular cloud zone.
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
      imageName: 'ImageName',
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
      subnetId: 'SubnetId',
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
      imageName: 'string',
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
      subnetId: 'string',
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
   * The details of the cloud desktops.
   */
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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
   * The maximum number of entries per page in a paged query.
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
   * The total number of cloud desktops.
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

