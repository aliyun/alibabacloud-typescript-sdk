// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The status.
   * 
   * Valid values:
   * 
   * *   OFF
   * *   ON
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
   * The ID of the instance order.
   * 
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The time when the package was created.
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  packageCreationTime?: string;
  /**
   * @remarks
   * The expiration time of the package.
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
   * The package status.
   * 
   * @example
   * Available
   */
  packageStatus?: string;
  /**
   * @remarks
   * The package type.
   * 
   * Valid values:
   * 
   * *   FREE_PACKAGE: a free package.
   * *   NORMAL_PACKAGE: a paid package (120-hour computing plan).
   * *   POSTPAID_PACKAGE: a pay-as-you-go package (200-hour computing plan).
   * *   Duration: an hourly package.
   * 
   * @example
   * NORMAL_PACKAGE
   */
  packageType?: string;
  /**
   * @remarks
   * The policy for the cloud computer status once the monthly package quota is exhausted.
   * 
   * Valid values:
   * 
   * *   Shutdown: The cloud computer enters the Stopped or Hibernated state.
   * *   PostPaid: The cloud computer continues providing services that are billed on the pay-as-you-go basis.
   * 
   * @example
   * Postpaid
   */
  packageUsedUpStrategy?: string;
  /**
   * @remarks
   * The package\\"s effective end time for the current month.
   * 
   * @example
   * 2025-02-17T15:59Z
   */
  periodEndTime?: string;
  /**
   * @remarks
   * The package\\"s effective start time for the current month.
   * 
   * @example
   * 2025-01-17T07:01Z
   */
  periodStartTime?: string;
  /**
   * @remarks
   * The maximum fee for the package in the second phase.
   * 
   * >  This parameter is returned if you set ResourceType to `POSTPAID_PACKAG` or `FREE_PACKAGE`.
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
   * The subscription duration consumed.
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
   * Indicates whether to allow end users to configure scheduled tasks on clients.
   * 
   * @example
   * false
   */
  allowClientSetting?: string;
  /**
   * @remarks
   * The cron expression specified in the scheduled task.
   * 
   * @example
   * 0 30 13 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * Indicates whether to forcibly execute the scheduled task.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The time when the scheduled task is executed.
   * 
   * @example
   * 2025-01-21T11:37Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The interval at which the scheduled task is executed.
   * 
   * @example
   * 15
   */
  interval?: number;
  /**
   * @remarks
   * The type of the scheduled action.
   * 
   * @example
   * Hibernate
   */
  operationType?: string;
  /**
   * @remarks
   * The reset option.
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
   * The current version number of the cloud computer\\"s image.
   * 
   * @example
   * 2.7.0-R-20250122.154826
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Specifies whether to implement a forced update.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The target version number of the cloud computer\\"s image.
   * 
   * @example
   * 2.7.0-R-20250125.154826
   */
  newAppVersion?: string;
  /**
   * @remarks
   * The latest version available for updating the component disk.
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
   * The version description of the cloud computer\\"s image.
   * 
   * @example
   * up
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English release note for the new image version.
   * 
   * @example
   * up
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese release note for the new image version.
   * 
   * @example
   * up
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the update package for the cloud computer image. Unit: KB.
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
   * The ID of the check task.
   * 
   * @example
   * wua-1740652957251743***
   */
  checkId?: string;
  /**
   * @remarks
   * The patch numbers.
   * 
   * @example
   * KB2267***
   */
  kbListString?: string;
  /**
   * @remarks
   * The number of packets.
   * 
   * @example
   * 1
   */
  packageCount?: number;
  /**
   * @remarks
   * The patch packages.
   */
  packages?: DescribeUserResourcesResponseBodyResourcesOsUpdatePackages[];
  /**
   * @remarks
   * The update categorization URL.
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
   * 用户的昵称。
   * 
   * @example
   * user-001
   */
  nickName?: string;
  /**
   * @remarks
   * The timestamp when the resource session was established.
   * 
   * @example
   * 2025-01-22T11:03:36Z
   */
  resourceSessionStartTime?: string;
  /**
   * @remarks
   * The username used to log on to the resource.
   * 
   * @example
   * user001
   */
  userId?: string;
  /**
   * @remarks
   * The User Principal Name (UPN) of the resource-bound user (if applicable). This parameter is returned only when you query the current user\\"s sessions.
   * 
   * @example
   * benchmark_test@test.shenzhen
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      resourceSessionStartTime: 'ResourceSessionStartTime',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * Valid values:
   * 
   * *   INTERNET: access over the Internet.
   * *   VPC: access over an enterprise VPC.
   * *   ANY: access over the Internet or an enterprise VPC.
   * 
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 194101959****
   */
  aliUid?: number;
  /**
   * @remarks
   * The app ID. This parameter is for apps only.
   * 
   * @example
   * app-0001
   */
  appId?: string;
  /**
   * @remarks
   * The authorization mode of the cloud app.
   * 
   * Valid values:
   * 
   * *   App: authorizes access to apps.
   * *   AppInstanceGroup: authorizes access to delivery groups.
   * *   Session: authorizes access to sessions.
   * 
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The level-2 resource category. This parameter is for apps only.
   * 
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @remarks
   * The level-1 resource category. This parameter is for apps only.
   * 
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @remarks
   * The drive name. This parameter is for enterprise drives only.
   * 
   * @example
   * cn-shanghai+cds-695277****
   */
  cdsName?: string;
  /**
   * @remarks
   * The ID of the centralized resource.
   * 
   * @example
   * ecds-0****
   */
  centerResourceId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   Postpaid (default): pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client types supported by resources.
   */
  clients?: DescribeUserResourcesResponseBodyResourcesClients[];
  /**
   * @remarks
   * The connection attributes in JSON format. The client does not need to process the attributes; they are directly passed to the resource management center when the app resource is created.
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
   * The cloud computer plans.
   */
  desktopDurationList?: DescribeUserResourcesResponseBodyResourcesDesktopDurationList[];
  /**
   * @remarks
   * The scheduled tasks for cloud computers.
   */
  desktopTimers?: DescribeUserResourcesResponseBodyResourcesDesktopTimers[];
  /**
   * @remarks
   * The expiration time of the subscription resource.
   * 
   * @example
   * 2025-02-22T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the external domain. This parameter is for enterprise drives only.
   * 
   * @example
   * stg114510
   */
  externalDomainId?: string;
  /**
   * @remarks
   * The ID of the external user. This parameter is for enterprise drives only.
   * 
   * @example
   * test001
   */
  externalUserId?: string;
  /**
   * @remarks
   * The update info of the cloud computer.
   */
  fotaUpdate?: DescribeUserResourcesResponseBodyResourcesFotaUpdate;
  /**
   * @remarks
   * Indicates whether cross-region access is supported. This parameter is for enterprise drives only.
   * 
   * @example
   * true
   */
  globalStatus?: boolean;
  /**
   * @remarks
   * Indicates whether an update exists.
   * 
   * @example
   * true
   */
  hasUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether this is a beta version of the hibernation feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  hibernationBeta?: boolean;
  /**
   * @remarks
   * The resource icon. This parameter is for apps only.
   * 
   * @example
   * http://example.com/icon.png
   */
  icon?: string;
  /**
   * @remarks
   * The time when the resource was last started.
   * 
   * @example
   * 2025-01-24T03:12:04Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The region name.
   */
  localName?: string;
  /**
   * @remarks
   * The management status.
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
   * Valid values:
   * 
   * *   Ceased: Your account has an overdue payment.
   * *   Released: The order is closed.
   * *   Expired: The subscription resource has expired.
   * *   Normal: The order is normal.
   * 
   * @example
   * Normal
   */
  orderStatus?: string;
  /**
   * @remarks
   * The OS platform.
   * 
   * @example
   * Windows Server 2022
   */
  os?: string;
  /**
   * @remarks
   * The description of the OS platform.
   */
  osDescription?: string;
  /**
   * @remarks
   * The OS type.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Windows
   * *   Android
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The update info of the OS.
   */
  osUpdate?: DescribeUserResourcesResponseBodyResourcesOsUpdate;
  /**
   * @remarks
   * The service type.
   * 
   * Valid values:
   * 
   * *   CloudDesktop: regular cloud computers or cloud computer shares.
   * *   CloudApp: App Streaming
   * *   CloudBrowser: Cloud Browser.
   * *   AndroidCloud: Cloud Phone.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * The protocol type.
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
   * The real ID of the cloud computer (from a share). This parameter is returned only when the cloud computer share has ongoing sessions.
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
   * The geographical location.
   * 
   * Valid values:
   * 
   * *   Mainland: regions in the Chinese mainland.
   * *   Overseas: regions outside the Chinese mainland, including China (Hong Kong).
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
   * Valid values:
   * 
   * *   Center: a centralized resource.
   * *   Region: a unit resource.
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
   * Valid values:
   * 
   * *   Unknown
   * *   Connected
   * *   Disconnected
   * 
   * @example
   * Connected
   */
  resourceSessionStatus?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * Valid values:
   * 
   * *   Unknown: The resource status is unknown.
   * *   Stopped: The resource is stopped.
   * *   Failed: The resource failed to be created.
   * *   Starting: The resource is being started.
   * *   Rebuilding: The resource is changing.
   * *   Running: The resource is running.
   * *   Stopping: The resource is being stopped.
   * *   FotaUpdating: The image is being updated.
   * *   Pending: The resource is still being prepared.
   * *   Deleting: The resource is being deleted.
   * *   Unavailable: The resource is unavailable.
   * 
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   App: cloud apps including App Streaming, Cloud Phone, and Cloud Browser.
   * *   Desktop: cloud computers.
   * *   DesktopGroup: cloud computer shares.
   * *   CloudDrive: enterprise drives.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The session type.
   * 
   * Valid values:
   * 
   * *   SINGLE_SESSION
   * *   MULTIPLE_SESSION
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  /**
   * @remarks
   * The sessions established between users and resources.
   */
  sessions?: DescribeUserResourcesResponseBodyResourcesSessions[];
  /**
   * @remarks
   * The sub-billing method.
   * 
   * Valid values:
   * 
   * *   monthPackage: monthly subscription.
   * *   PrePaid: hourly plans.
   * 
   * @example
   * PrePaid
   */
  subPayType?: string;
  /**
   * @remarks
   * Indicates whether hibernation is supported.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * The supported actions. This parameter is returned only for cloud computers or phones.
   */
  supportedActions?: string[];
  /**
   * @remarks
   * The theme color of the resource. This parameter is for apps only.
   * 
   * @example
   * #FFFFFF
   */
  themeColor?: string;
  /**
   * @remarks
   * The custom name of the resource.
   */
  userCustomName?: string;
  /**
   * @remarks
   * The resource version. This parameter is for apps only.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
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
  /**
   * @remarks
   * 返回最大数量。
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource types that failed to be queried.
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
   * The resources.
   */
  resources?: DescribeUserResourcesResponseBodyResources[];
  /**
   * @remarks
   * 总数。
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
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

