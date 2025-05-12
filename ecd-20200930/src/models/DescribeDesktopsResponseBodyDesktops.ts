// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopsResponseBodyDesktopsDesktopDurationList } from "./DescribeDesktopsResponseBodyDesktopsDesktopDurationList";
import { DescribeDesktopsResponseBodyDesktopsDisks } from "./DescribeDesktopsResponseBodyDesktopsDisks";
import { DescribeDesktopsResponseBodyDesktopsFotaUpdate } from "./DescribeDesktopsResponseBodyDesktopsFotaUpdate";
import { DescribeDesktopsResponseBodyDesktopsOsUpdate } from "./DescribeDesktopsResponseBodyDesktopsOsUpdate";
import { DescribeDesktopsResponseBodyDesktopsResourceGroups } from "./DescribeDesktopsResponseBodyDesktopsResourceGroups";
import { DescribeDesktopsResponseBodyDesktopsSessions } from "./DescribeDesktopsResponseBodyDesktopsSessions";
import { DescribeDesktopsResponseBodyDesktopsTags } from "./DescribeDesktopsResponseBodyDesktopsTags";


export class DescribeDesktopsResponseBodyDesktops extends $dara.Model {
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
      downgradeQuota: 'DowngradeQuota',
      downgradedTimes: 'DowngradedTimes',
      endUserIds: 'EndUserIds',
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
      downgradeQuota: 'number',
      downgradedTimes: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
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

