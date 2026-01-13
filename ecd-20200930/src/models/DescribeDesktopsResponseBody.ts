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
   * The type of the disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_auto: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
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
   * The type of the disk.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DATA: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The performance level (PL) of the disk when an enterprise SSD (ESSD) is used.
   * 
   * For more information about the differences among enterprise SSDs (ESSDs) at different PLs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * *   PL3
   * *   PL2
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
   * The current image version of the cloud computer.
   * 
   * @example
   * 0.0.0-D-20220102.000000
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * The version number to which the image of the cloud computer can be updated.
   * 
   * @example
   * 0.0.0-R-20220307.190736
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The description of the version to which the image of the cloud computer can be updated.
   * 
   * @example
   * Upgrade package for testing 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English description of the version to which the image of the cloud computer can be updated.
   * 
   * @example
   * Release note
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese description of the image version to which the cloud desktop can be updated.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the installation package for the image to which the cloud desktop can be updated. Unit: KB.
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
   * The ID of the enterprise resource group.
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
   * The ID of the end user that connects to the cloud computer.
   * 
   * @example
   * 29615820929547****
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the cloud computer session was established.
   * 
   * @example
   * 2021-03-07T08:23Z
   */
  establishmentTime?: string;
  /**
   * @remarks
   * The name of the external user.
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
  /**
   * @remarks
   * The number of concurrent sessions of each cloud computer in a multi-session cloud computer pool.
   * 
   * @example
   * 10
   */
  bindAmount?: number;
  /**
   * @remarks
   * The ID of the template used to create the cloud computer.
   * 
   * @example
   * b-2g65ljy4291vl****
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the template used to create the cloud computer.
   * 
   * @example
   * Name
   */
  bundleName?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Postpaid (default): pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The connection status of the end user.
   * 
   * Valid values:
   * 
   * *   Unknown
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Connected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Disconnected
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * The time when the cloud computer was created.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  dataDiskSize?: string;
  desktopDurationList?: DescribeDesktopsResponseBodyDesktopsDesktopDurationList[];
  /**
   * @remarks
   * The ID of the cloud computer pool to which cloud computers belong. Default value: null.``
   * 
   * @example
   * null
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
   * testDesktopName
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
   * The cloud computer type.
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
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The information about the disks.
   */
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  domainType?: string;
  /**
   * @remarks
   * The number of times for which the cloud desktop can be downgraded.
   * 
   * @example
   * 3
   */
  downgradeQuota?: number;
  /**
   * @remarks
   * The number of times for which the cloud desktop has been downgraded.
   * 
   * @example
   * 0
   */
  downgradedTimes?: number;
  /**
   * @remarks
   * The end user IDs.
   */
  endUserIds?: string[];
  entraDomainName?: string;
  envId?: string;
  envType?: string;
  /**
   * @remarks
   * The time when a subscription cloud computer expired.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The information about the image version of the cloud computer.
   */
  fotaUpdate?: DescribeDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @remarks
   * Indicates whether the cloud computer uses GPUs.
   * 
   * @example
   * 0
   */
  gpuCategory?: number;
  /**
   * @remarks
   * The number of GPU cores.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver version used by the cloud computer.
   * 
   * @example
   * null
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The GPU Specifications.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  hibernationOptionsConfigured?: boolean;
  /**
   * @remarks
   * The hostname of the cloud desktop.
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
   * The flag that is used to manage the cloud computer.
   * 
   * Valid values:
   * 
   * *   Migrating: The cloud computer is being migrated.
   * *   Updating: The configurations of the cloud computer are being updated.
   * *   NoFlag: No flags are available.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The flags that are used to manage the cloud computers.
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
   * The ID of the supplementary network interface controller (NIC) created by EDS within an RAM user or Active Directory (AD) user. You cannot modify the ID.
   * 
   * @example
   * 123456
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The IP address of the supplementary NIC created by EDS within an RAM or AD user.
   * 
   * @example
   * 192.168.74.165
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
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account type of the office network.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience account
   * *   AD_CONNECTOR: enterprise AD account
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The VPC type of the office network.
   * 
   * Valid values:
   * 
   * *   standard
   * *   customized
   * *   basic
   * 
   * @example
   * basic
   */
  officeSiteVpcType?: string;
  /**
   * @remarks
   * The OS that is defined in the desktop template.
   * 
   * @example
   * Windows
   */
  osType?: string;
  osUpdate?: DescribeDesktopsResponseBodyDesktopsOsUpdate;
  /**
   * @remarks
   * The information about the OS platform.
   * 
   * Valid values:
   * 
   * *   Ubuntu
   * *   Windows Server 2022
   * *   UOS
   * *   CentOS
   * *   Windows Server 2019
   * *   Windows Server 2016
   * 
   * @example
   * Ubuntu
   */
  platform?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud computer policies.
   */
  policyGroupIdList?: string[];
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The names of the cloud computer policies.
   */
  policyGroupNameList?: string[];
  /**
   * @remarks
   * The progress of creating the cloud computer.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * Valid values:
   * 
   * *   HDX
   * *   ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The information about the enterprise resource groups.
   */
  resourceGroups?: DescribeDesktopsResponseBodyDesktopsResourceGroups[];
  serialNumber?: string;
  /**
   * @remarks
   * The type of the session.
   * 
   * Valid values:
   * 
   * *   SINGLE_SESSION
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MULTIPLE_SESSION
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  /**
   * @remarks
   * The session information about cloud computers connected by end users.
   */
  sessions?: DescribeDesktopsResponseBodyDesktopsSessions[];
  /**
   * @remarks
   * The snapshot policy ID.
   * 
   * @example
   * sp-gi007jgyc3kcey2bb
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The name of the snapshot policy.
   * 
   * @example
   * testSnapshotName
   */
  snapshotPolicyName?: string;
  /**
   * @remarks
   * The standard start time.
   * 
   * @example
   * 2025-02-24T06:38:02Z
   */
  standardStartTime?: string;
  /**
   * @remarks
   * The time when the cloud computer was first started.
   * 
   * @example
   * 2020-11-06T08:31Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the cloud desktop supports hibernation.
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * 0
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Details about the tags.
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
   * The ID of the Key Management Service (KMS) key that is used when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to query the list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The zone type. Default value: `AvailabilityZone`. This value indicates Alibaba Cloud zones.
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
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
   * The cloud computers.
   */
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The token that is used for the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5BA78C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud computers.
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

