// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs extends $dara.Model {
  /**
   * @example
   * ENTERPRISE_JVS
   */
  agentPlatform?: string;
  /**
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @example
   * https://xxx.png
   */
  avatarNoResourceUrl?: string;
  /**
   * @example
   * https://abc.com/efg.png
   */
  avatarUrl?: string;
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * JVS Claw
   */
  displayName?: string;
  /**
   * @example
   * Intelligent Evolution, Happy Shrimp Farming.
   */
  subTitle?: string;
  /**
   * @example
   * https://test.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      avatarNoResourceUrl: 'AvatarNoResourceUrl',
      avatarUrl: 'AvatarUrl',
      count: 'Count',
      displayName: 'DisplayName',
      subTitle: 'SubTitle',
      url: 'Url',
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
      subTitle: 'string',
      url: 'string',
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
  agentBriefs?: DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs[];
  /**
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
   * The client type.
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
   * The creation time.
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  packageCreationTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-02-17T15:59Z
   */
  packageExpiredTime?: string;
  /**
   * @remarks
   * The package ID.
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
   * The duration package type.
   * 
   * @example
   * NORMAL_PACKAGE
   */
  packageType?: string;
  /**
   * @remarks
   * The cloud desktop status policy after the monthly quota of the plan is used up.
   * 
   * @example
   * Postpaid
   */
  packageUsedUpStrategy?: string;
  /**
   * @remarks
   * The end time of the current monthly package.
   * 
   * @example
   * 2025-02-17T15:59Z
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The start time of the current monthly package.
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The cap amount for the second-phase package.
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
   * Indicates whether the client is allowed to configure this setting.
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
   * Indicates whether the task is forcibly executed.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The execution time.
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
   * The task type.
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
   * The version number of the current image on the cloud desktop.
   * 
   * @example
   * 2.7.0-R-20250122.154826
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Indicates whether the upgrade is mandatory.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The version number available for upgrade on the cloud desktop.
   * 
   * @example
   * 2.7.0-R-20250125.154826
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The component disk version number available for upgrade.
   * 
   * @example
   * 2.6.9-R-20250123.153415
   */
  newDcdVersion?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * wuying-asp_single_session_desktop_win_x64
   */
  project?: string;
  /**
   * @remarks
   * The release note for the available upgrade version.
   * 
   * @example
   * New version.
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English release note for the available upgrade version.
   * 
   * @example
   * new version
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese release note for the available upgrade version.
   * 
   * @example
   * 新バージョン.
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The installation package size of the available upgrade version. Unit: KB.
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
   * The patch description.
   * 
   * @example
   * Install this update to modify the files that are used to detect viruses, spyware, and other potentially unwanted software. Once installed, this item cannot be removed.
   */
  description?: string;
  /**
   * @remarks
   * The patch number.
   * 
   * @example
   * KB2267***
   */
  kb?: string;
  /**
   * @remarks
   * The patch title.
   * 
   * @example
   * Patch for ****.
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
   * The patch number list information.
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
   * The update catalog URL.
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
   * The time when the resource session was connected.
   * 
   * @example
   * 2025-01-22T11:03:36Z
   */
  resourceSessionStartTime?: string;
  /**
   * @remarks
   * The username logged on to the resource.
   * 
   * @example
   * user001
   */
  userId?: string;
  /**
   * @remarks
   * The User Principal Name (UPN) of the user bound to the resource, if available. This value is populated only for the session of the currently queried user.
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
   * @example
   * https://wuying.aliyun.com/OpenIM/chat?desktopId=ecd-xxxxx
   */
  agentImUrl?: string;
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
   * The application ID. This parameter is specific to resources of the App type.
   * 
   * @example
   * app-0001
   */
  appId?: string;
  /**
   * @remarks
   * The cloud application authorization mode.
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The secondary category of the resource. This parameter is specific to resources of the App type.
   * 
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @remarks
   * The primary category of the resource. This parameter is specific to resources of the App type.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The cloud drive name. This parameter is specific to resources of the CloudDrive type.
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
   * The connection properties in JSON string format. The client does not need to parse the content. The value is passed directly to the central resource management service when the application resource establishes a connection.
   * 
   * @example
   * {"authMode":"App"}
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2024-12-11T07:12:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of cloud desktop package information.
   */
  desktopDurationList?: DescribeUserResourcesResponseBodyResourcesDesktopDurationList[];
  /**
   * @remarks
   * The list of Cloud Desktop scheduled task settings.
   */
  desktopTimers?: DescribeUserResourcesResponseBodyResourcesDesktopTimers[];
  /**
   * @remarks
   * The expiration time of subscription resources.
   * 
   * @example
   * 2025-02-22T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The external domain ID. This parameter is specific to resources of the CloudDrive type.
   * 
   * @example
   * stg114510
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The external user ID. This parameter is specific to resources of the CloudDrive type.
   * 
   * @example
   * test001
   */
  externalUserId?: string;
  /**
   * @remarks
   * The cloud desktop upgrade information.
   */
  fotaUpdate?: DescribeUserResourcesResponseBodyResourcesFotaUpdate;
  /**
   * @remarks
   * Indicates whether cross-region access is supported. This parameter is specific to resources of the CloudDrive type.
   * 
   * @example
   * true
   */
  globalStatus?: boolean;
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
   * Indicates whether the resource is a hibernation beta version.
   * 
   * @example
   * false
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * The resource icon URL. This parameter is specific to resources of the App type.
   * 
   * @example
   * http://example.com/icon.png
   */
  icon?: string;
  /**
   * @remarks
   * The last time the resource was started.
   * 
   * @example
   * 2025-01-24T03:12:04Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * Singapore.
   */
  localName?: string;
  /**
   * @remarks
   * The list of management statuses.
   */
  managementStatuses?: string[];
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
   * The order status.
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
   * Windows Genuine License.
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
   * The real cloud desktop ID of the shared cloud desktop. This value exists only when the shared cloud desktop has an active session.
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
   * The resource status.
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
   * The list of resource user session information.
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
   * The list of supported action types. Currently supported only for cloud phones and cloud desktops (including shared cloud desktops).
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The resource theme color. This parameter is specific to resources of the App type.
   * 
   * @example
   * #FFFFFF
   */
  themeColor?: string;
  /**
   * @remarks
   * The user-defined name.
   * 
   * @example
   * My cloud desktop
   */
  userCustomName?: string;
  /**
   * @remarks
   * The resource version. This parameter is specific to resources of the App type.
   * 
   * @example
   * Resource version.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      agentImUrl: 'AgentImUrl',
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
      createTime: 'CreateTime',
      desktopDurationList: 'DesktopDurationList',
      desktopTimers: 'DesktopTimers',
      expiredTime: 'ExpiredTime',
      externalDomainId: 'ExternalDomainId',
      externalUserId: 'ExternalUserId',
      fotaUpdate: 'FotaUpdate',
      globalStatus: 'GlobalStatus',
      hasUpgrade: 'HasUpgrade',
      hibernationBeta: 'HibernationBeta',
      icon: 'Icon',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      managementStatuses: 'ManagementStatuses',
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
      createTime: 'string',
      desktopDurationList: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopDurationList },
      desktopTimers: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopTimers },
      expiredTime: 'string',
      externalDomainId: 'string',
      externalUserId: 'string',
      fotaUpdate: DescribeUserResourcesResponseBodyResourcesFotaUpdate,
      globalStatus: 'boolean',
      hasUpgrade: 'boolean',
      hibernationBeta: 'boolean',
      icon: 'string',
      lastStartTime: 'string',
      localName: 'string',
      managementStatuses: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.desktopDurationList)) {
      $dara.Model.validateArray(this.desktopDurationList);
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
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
  agentBriefSummary?: DescribeUserResourcesResponseBodyAgentBriefSummary;
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. An empty NextToken indicates that there is no next page.
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
   * The ranking data version number.
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

