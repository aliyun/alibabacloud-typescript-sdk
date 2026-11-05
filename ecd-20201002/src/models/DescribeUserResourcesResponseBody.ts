// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE_JVS
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The generic avatar download URL for this agent type when no cloud resources are available.
   * The backend automatically returns different avatars based on ClientType. If no match is found, a generic avatar is returned.
   * 
   * @example
   * https://xxx.png
   */
  avatarNoResourceUrl?: string;
  /**
   * @remarks
   * The generic avatar download URL for this agent type.
   * The backend automatically returns different avatars based on ClientType. If no match is found, a generic avatar is returned.
   * 
   * @example
   * https://abc.com/efg.png
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The count.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The display name, such as JVS Claw.
   * The backend automatically returns different display names based on Language.
   * 
   * @example
   * JVS Claw
   */
  displayName?: string;
  /**
   * @remarks
   * The generic PC avatar download URL for this agent type.
   * 
   * @example
   * https://xxx.png
   */
  pcAvatarUrl?: string;
  /**
   * @remarks
   * The subtitle, such as: Intelligent evolution, happy shrimp farming.
   * The backend automatically returns different subtitles based on Language.
   * 
   * @example
   * Intelligent evolution, happy shrimp farming
   */
  subTitle?: string;
  /**
   * @remarks
   * The URL of the agent management page.
   * 
   * @example
   * https://test.png
   */
  url?: string;
  /**
   * @remarks
   * The URL of the avatar watermark selected for this type of agent based on the client type.
   * 
   * @example
   * https://xxxx.png
   */
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      avatarNoResourceUrl: 'AvatarNoResourceUrl',
      avatarUrl: 'AvatarUrl',
      count: 'Count',
      displayName: 'DisplayName',
      pcAvatarUrl: 'PcAvatarUrl',
      subTitle: 'SubTitle',
      url: 'Url',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      avatarNoResourceUrl: 'string',
      avatarUrl: 'string',
      count: 'number',
      displayName: 'string',
      pcAvatarUrl: 'string',
      subTitle: 'string',
      url: 'string',
      watermark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBodyAgentBriefSummary extends $dara.Model {
  /**
   * @remarks
   * The list of brief information for the included agent instance types.
   */
  agentBriefs?: DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs[];
  /**
   * @remarks
   * The total number of agent instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentBriefs: 'AgentBriefs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentBriefs: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentBriefs)) {
      $dara.Model.validateArray(this.agentBriefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBodyResourcesClients extends $dara.Model {
  /**
   * @remarks
   * The type of the client.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The support status.
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
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

export class DescribeUserResourcesResponseBodyResourcesDesktopDurationList extends $dara.Model {
  /**
   * @remarks
   * The order instance ID.
   * 
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and in UTC (indicated by Z).
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  packageCreationTime?: string;
  /**
   * @remarks
   * The expiration time. The time is in ISO 8601 format and in UTC (indicated by Z).
   * 
   * @example
   * 2025-02-17T15:59Z
   */
  packageExpiredTime?: string;
  /**
   * @remarks
   * The ID of the package.
   * 
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  packageId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Available
   */
  packageStatus?: string;
  /**
   * @remarks
   * The type of the duration package.
   * 
   * @example
   * NORMAL_PACKAGE
   */
  packageType?: string;
  /**
   * @remarks
   * The status policy for the cloud computer after the monthly package quota is exhausted.
   * 
   * @example
   * Postpaid
   */
  packageUsedUpStrategy?: string;
  /**
   * @remarks
   * The end time of the monthly package. The time is in ISO 8601 format and in UTC (indicated by Z).
   * 
   * @example
   * 2025-02-17T15:59Z
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The start time of the monthly package. The time is in ISO 8601 format and in UTC (indicated by Z).
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The maximum amount for the second-stage package.
   * 
   * > This parameter is returned only when ResourceType is `POSTPAID_PACKAG` or `FREE_PACKAGE`.
   * 
   * @example
   * 199
   */
  postPaidLimitFee?: number;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 432000
   */
  totalDuration?: number;
  /**
   * @remarks
   * The used duration.
   * 
   * @example
   * 16850
   */
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

export class DescribeUserResourcesResponseBodyResourcesDesktopTimers extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow client settings.
   * 
   * @example
   * false
   */
  allowClientSetting?: string;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * @example
   * 0 30 13 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the task.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The execution time. The time is formatted in ISO 8601 and uses the UTC time zone (indicated by Z).
   * 
   * @example
   * 2025-01-21T11:37Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The interval of the scheduled task.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * Hibernate
   */
  operationType?: string;
  /**
   * @remarks
   * The reset type.
   * 
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * TimerBoot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      executionTime: 'ExecutionTime',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'string',
      cronExpression: 'string',
      enforce: 'boolean',
      executionTime: 'string',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBodyResourcesDisks extends $dara.Model {
  /**
   * @remarks
   * The disk size in GB.
   * 
   * @example
   * 300
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

export class DescribeUserResourcesResponseBodyResourcesFotaUpdate extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * aliyun
   */
  channel?: string;
  /**
   * @remarks
   * The version number of the current image of the cloud computer.
   * 
   * @example
   * 2.7.0-R-20250122.154826
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Specifies whether the upgrade is mandatory.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The version number to which the cloud computer can be upgraded.
   * 
   * @example
   * 2.7.0-R-20250125.154826
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The version number of the upgradable component disk.
   * 
   * @example
   * 2.6.9-R-20250123.153415
   */
  newDcdVersion?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * wuying-asp_single_session_desktop_win_x64
   */
  project?: string;
  /**
   * @remarks
   * The description of the upgradable version.
   * 
   * @example
   * New version
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English description of the upgradable version.
   * 
   * @example
   * new version
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese description of the upgradable version.
   * 
   * @example
   * 新バージョン
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the installation package for the upgradable version. Unit: KB.
   * 
   * @example
   * 474981930
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      currentAppVersion: 'CurrentAppVersion',
      force: 'Force',
      newAppVersion: 'NewAppVersion',
      newDcdVersion: 'NewDcdVersion',
      project: 'Project',
      releaseNote: 'ReleaseNote',
      releaseNoteEn: 'ReleaseNoteEn',
      releaseNoteJp: 'ReleaseNoteJp',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      currentAppVersion: 'string',
      force: 'boolean',
      newAppVersion: 'string',
      newDcdVersion: 'string',
      project: 'string',
      releaseNote: 'string',
      releaseNoteEn: 'string',
      releaseNoteJp: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBodyResourcesOsUpdatePackages extends $dara.Model {
  /**
   * @remarks
   * The description of the patch.
   * 
   * @example
   * Installing this update modifies the files used to detect viruses, spyware, and other potentially unwanted software. Once installed, this item cannot be removed
   */
  description?: string;
  /**
   * @remarks
   * The KB number.
   * 
   * @example
   * KB2267***
   */
  kb?: string;
  /**
   * @remarks
   * The title of the patch.
   * 
   * @example
   * Patch for ****
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

export class DescribeUserResourcesResponseBodyResourcesOsUpdate extends $dara.Model {
  /**
   * @remarks
   * The check ID.
   * 
   * @example
   * wua-1740652957251743***
   */
  checkId?: string;
  /**
   * @remarks
   * The list of KB numbers.
   * 
   * @example
   * KB2267***
   */
  kbListString?: string;
  /**
   * @remarks
   * The number of packages.
   * 
   * @example
   * 1
   */
  packageCount?: number;
  /**
   * @remarks
   * The list of patch package information.
   */
  packages?: DescribeUserResourcesResponseBodyResourcesOsUpdatePackages[];
  /**
   * @remarks
   * The URL of the update catalog.
   * 
   * @example
   * https://catalog.update.microsoft.com/home.aspx
   */
  updateCatalogUrl?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      kbListString: 'KbListString',
      packageCount: 'PackageCount',
      packages: 'Packages',
      updateCatalogUrl: 'UpdateCatalogUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      kbListString: 'string',
      packageCount: 'number',
      packages: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesOsUpdatePackages },
      updateCatalogUrl: 'string',
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

export class DescribeUserResourcesResponseBodyResourcesSessions extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client from which the user last logged on.
   * 
   * @example
   * 1.2.3.4:22068
   */
  lastClientIp?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user-001
   */
  nickName?: string;
  /**
   * @remarks
   * The start time of the resource session. The time is in ISO 8601 format and in UTC (indicated by Z).
   * 
   * @example
   * 2025-01-22T11:03:36Z
   */
  resourceSessionStartTime?: string;
  /**
   * @remarks
   * The username of the user who logged on to the resource.
   * 
   * @example
   * user001
   */
  userId?: string;
  /**
   * @remarks
   * The user principal name (UPN) of the user bound to the resource, if any. This value is returned only for the session of the currently queried user.
   * 
   * @example
   * benchmark_test@test.shenzhen
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      lastClientIp: 'LastClientIp',
      nickName: 'NickName',
      resourceSessionStartTime: 'ResourceSessionStartTime',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastClientIp: 'string',
      nickName: 'string',
      resourceSessionStartTime: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The URL of the AgentIM page.
   * 
   * @example
   * https://wuying.aliyun.com/OpenIM/chat?desktopId=ecd-xxxxx
   */
  agentImUrl?: string;
  /**
   * @remarks
   * The list of agent providers.
   * 
   * **if can be null:**
   * true
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 194101959****
   */
  aliUid?: number;
  /**
   * @remarks
   * The application ID. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * app-0001
   */
  appId?: string;
  /**
   * @remarks
   * The authorization mode of the cloud application.
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The level-2 category of the resource. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @remarks
   * The level-1 category of the resource. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The name of the cloud drive. This parameter is specific to resources whose resource type is CloudDrive.
   * 
   * @example
   * cn-shanghai+cds-695277****
   */
  cdsName?: string;
  /**
   * @remarks
   * The centralized resource ID.
   * 
   * @example
   * ecds-0****
   */
  centerResourceId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of client types supported by the resource.
   */
  clients?: DescribeUserResourcesResponseBodyResourcesClients[];
  /**
   * @remarks
   * The connection properties in JSON string format. The client does not need to process the content and directly passes it to the central resource management when establishing a connection for application resources.
   * 
   * @example
   * {"authMode":"App"}
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   * 
   * **if can be null:**
   * true
   */
  cpu?: number;
  /**
   * @remarks
   * The resource creation time. The time is in ISO 8601 format and UTC time zone (indicated by Z).
   * 
   * @example
   * 2024-12-11T07:12:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of cloud computer duration package information.
   */
  desktopDurationList?: DescribeUserResourcesResponseBodyResourcesDesktopDurationList[];
  /**
   * @remarks
   * The list of scheduled task settings for the cloud desktop.
   */
  desktopTimers?: DescribeUserResourcesResponseBodyResourcesDesktopTimers[];
  /**
   * @remarks
   * The list of disk information.
   * 
   * **if can be null:**
   * true
   */
  disks?: DescribeUserResourcesResponseBodyResourcesDisks[];
  /**
   * @remarks
   * The expiration time of subscription resources. The time is formatted in ISO 8601 and uses the UTC time zone (indicated by Z).
   * 
   * @example
   * 2025-02-22T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The external domain ID. This parameter is specific to resources whose resource type is CloudDrive.
   * 
   * @example
   * stg114510
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The external user ID. This parameter is specific to resources whose resource type is CloudDrive.
   * 
   * @example
   * test001
   */
  externalUserId?: string;
  /**
   * @remarks
   * The upgrade information of the cloud computer.
   */
  fotaUpdate?: DescribeUserResourcesResponseBodyResourcesFotaUpdate;
  /**
   * @remarks
   * Indicates whether cross-region access is supported. This parameter is specific to resources whose resource type is CloudDrive.
   * 
   * @example
   * true
   */
  globalStatus?: boolean;
  /**
   * @remarks
   * The GPU specifications.
   * 
   * @example
   * 40GiB
   * 
   * **if can be null:**
   * true
   */
  gpuSpec?: string;
  /**
   * @remarks
   * Indicates whether an update is available.
   * 
   * @example
   * true
   */
  hasUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether the hibernation feature is in beta.
   * 
   * @example
   * false
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * The URL of the resource icon. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * http://example.com/icon.png
   */
  icon?: string;
  /**
   * @remarks
   * The last start time of the resource. The time is formatted in ISO 8601 and uses the UTC time zone (indicated by Z).
   * 
   * @example
   * 2025-01-24T03:12:04Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The list of management statuses.
   */
  managementStatuses?: string[];
  /**
   * @remarks
   * The memory size in MB.
   * 
   * @example
   * 4096
   * 
   * **if can be null:**
   * true
   */
  memory?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-shanghai+dir-3367****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The status of the order.
   * 
   * @example
   * Normal
   */
  orderStatus?: string;
  /**
   * @remarks
   * The operating system platform information.
   * 
   * @example
   * Windows Server 2022
   */
  os?: string;
  /**
   * @remarks
   * The operating system platform description.
   * 
   * @example
   * Windows genuine license
   */
  osDescription?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The operating system upgrade information.
   */
  osUpdate?: DescribeUserResourcesResponseBodyResourcesOsUpdate;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
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
   * The ID of the actual cloud computer in a shared cloud computer group. This parameter is returned only when a session exists for the shared cloud computer.
   * 
   * @example
   * ecd-0001
   */
  realDesktopId?: string;
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
   * The region location.
   * 
   * @example
   * Mainland
   */
  regionLocation?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * dg-0****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-d19tya8zi4****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level.
   * 
   * @example
   * Center
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * testName01
   */
  resourceName?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * Connected
   */
  resourceSessionStatus?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
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
   * The list of user session information for the resource.
   */
  sessions?: DescribeUserResourcesResponseBodyResourcesSessions[];
  /**
   * @remarks
   * The sub-billing method.
   * 
   * @example
   * PrePaid
   */
  subPayType?: string;
  /**
   * @remarks
   * Indicates whether AgentIM is supported.
   */
  supportAgentIm?: boolean;
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
   * The list of supported operation types. Currently, only cloud phones and cloud computers (including shared cloud computers) are supported.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The theme color of the resource. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * #FFFFFF
   */
  themeColor?: string;
  /**
   * @remarks
   * The custom name specified by the user.
   * 
   * @example
   * My cloud computer
   */
  userCustomName?: string;
  /**
   * @remarks
   * The resource version. This parameter is specific to resources whose resource type is App.
   * 
   * @example
   * Resource version
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      agentImUrl: 'AgentImUrl',
      agentProviderList: 'AgentProviderList',
      aliUid: 'AliUid',
      appId: 'AppId',
      authMode: 'AuthMode',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      cdsName: 'CdsName',
      centerResourceId: 'CenterResourceId',
      chargeType: 'ChargeType',
      clients: 'Clients',
      connectionProperties: 'ConnectionProperties',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      desktopDurationList: 'DesktopDurationList',
      desktopTimers: 'DesktopTimers',
      disks: 'Disks',
      expiredTime: 'ExpiredTime',
      externalDomainId: 'ExternalDomainId',
      externalUserId: 'ExternalUserId',
      fotaUpdate: 'FotaUpdate',
      globalStatus: 'GlobalStatus',
      gpuSpec: 'GpuSpec',
      hasUpgrade: 'HasUpgrade',
      hibernationBeta: 'HibernationBeta',
      icon: 'Icon',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      managementStatuses: 'ManagementStatuses',
      memory: 'Memory',
      officeSiteId: 'OfficeSiteId',
      orderStatus: 'OrderStatus',
      os: 'Os',
      osDescription: 'OsDescription',
      osType: 'OsType',
      osUpdate: 'OsUpdate',
      productType: 'ProductType',
      protocolType: 'ProtocolType',
      realDesktopId: 'RealDesktopId',
      regionId: 'RegionId',
      regionLocation: 'RegionLocation',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceLevel: 'ResourceLevel',
      resourceName: 'ResourceName',
      resourceSessionStatus: 'ResourceSessionStatus',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      subPayType: 'SubPayType',
      supportAgentIm: 'SupportAgentIm',
      supportHibernation: 'SupportHibernation',
      supportedActions: 'SupportedActions',
      themeColor: 'ThemeColor',
      userCustomName: 'UserCustomName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      agentImUrl: 'string',
      agentProviderList: { 'type': 'array', 'itemType': 'string' },
      aliUid: 'number',
      appId: 'string',
      authMode: 'string',
      categoryId: 'number',
      categoryType: 'number',
      cdsName: 'string',
      centerResourceId: 'string',
      chargeType: 'string',
      clients: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesClients },
      connectionProperties: 'string',
      cpu: 'number',
      createTime: 'string',
      desktopDurationList: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopDurationList },
      desktopTimers: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopTimers },
      disks: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDisks },
      expiredTime: 'string',
      externalDomainId: 'string',
      externalUserId: 'string',
      fotaUpdate: DescribeUserResourcesResponseBodyResourcesFotaUpdate,
      globalStatus: 'boolean',
      gpuSpec: 'string',
      hasUpgrade: 'boolean',
      hibernationBeta: 'boolean',
      icon: 'string',
      lastStartTime: 'string',
      localName: 'string',
      managementStatuses: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      officeSiteId: 'string',
      orderStatus: 'string',
      os: 'string',
      osDescription: 'string',
      osType: 'string',
      osUpdate: DescribeUserResourcesResponseBodyResourcesOsUpdate,
      productType: 'string',
      protocolType: 'string',
      realDesktopId: 'string',
      regionId: 'string',
      regionLocation: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceLevel: 'string',
      resourceName: 'string',
      resourceSessionStatus: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesSessions },
      subPayType: 'string',
      supportAgentIm: 'boolean',
      supportHibernation: 'boolean',
      supportedActions: { 'type': 'array', 'itemType': 'string' },
      themeColor: 'string',
      userCustomName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentProviderList)) {
      $dara.Model.validateArray(this.agentProviderList);
    }
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.desktopDurationList)) {
      $dara.Model.validateArray(this.desktopDurationList);
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
    }
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.fotaUpdate && typeof (this.fotaUpdate as any).validate === 'function') {
      (this.fotaUpdate as any).validate();
    }
    if(Array.isArray(this.managementStatuses)) {
      $dara.Model.validateArray(this.managementStatuses);
    }
    if(this.osUpdate && typeof (this.osUpdate as any).validate === 'function') {
      (this.osUpdate as any).validate();
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    if(Array.isArray(this.supportedActions)) {
      $dara.Model.validateArray(this.supportedActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The brief summary information of the agent.
   */
  agentBriefSummary?: DescribeUserResourcesResponseBodyAgentBriefSummary;
  /**
   * @remarks
   * The maximum number of returned results.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next page of query results. An empty NextToken indicates that no more pages are available.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource types that failed to be queried.
   */
  queryFailedResourceTypes?: string[];
  /**
   * @remarks
   * The version number of the ranking data.
   * 
   * @example
   * 1732869815062
   */
  rankVersion?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource details.
   */
  resources?: DescribeUserResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentBriefSummary: 'AgentBriefSummary',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryFailedResourceTypes: 'QueryFailedResourceTypes',
      rankVersion: 'RankVersion',
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentBriefSummary: DescribeUserResourcesResponseBodyAgentBriefSummary,
      maxResults: 'number',
      nextToken: 'string',
      queryFailedResourceTypes: { 'type': 'array', 'itemType': 'string' },
      rankVersion: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(this.agentBriefSummary && typeof (this.agentBriefSummary as any).validate === 'function') {
      (this.agentBriefSummary as any).validate();
    }
    if(Array.isArray(this.queryFailedResourceTypes)) {
      $dara.Model.validateArray(this.queryFailedResourceTypes);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

