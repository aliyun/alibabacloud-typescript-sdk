// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesClients extends $dara.Model {
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
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
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  orderInstanceId?: string;
  /**
   * @example
   * 2025-01-17T07:01Z
   */
  packageCreationTime?: string;
  /**
   * @example
   * 2025-02-17T15:59Z
   */
  packageExpiredTime?: string;
  /**
   * @example
   * mdp-0bxls4qpi6bl6****
   */
  packageId?: string;
  /**
   * @example
   * Available
   */
  packageStatus?: string;
  /**
   * @example
   * NORMAL_PACKAGE
   */
  packageType?: string;
  /**
   * @example
   * Postpaid
   */
  packageUsedUpStrategy?: string;
  /**
   * @example
   * 2025-02-17T15:59Z
   */
  periodEndTime?: string;
  /**
   * @example
   * 2025-01-17T07:01Z
   */
  periodStartTime?: string;
  /**
   * @example
   * 199
   */
  postPaidLimitFee?: number;
  /**
   * @example
   * 432000
   */
  totalDuration?: number;
  /**
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
   * @example
   * false
   */
  allowClientSetting?: string;
  /**
   * @example
   * 0 30 13 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @example
   * 2025-01-21T11:37Z
   */
  executionTime?: string;
  /**
   * @example
   * 15
   */
  interval?: number;
  /**
   * @example
   * Hibernate
   */
  operationType?: string;
  /**
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
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
   * @example
   * aliyun
   */
  channel?: string;
  /**
   * @example
   * 2.7.0-R-20250122.154826
   */
  currentAppVersion?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * 2.7.0-R-20250125.154826
   */
  newAppVersion?: string;
  /**
   * @example
   * 2.6.9-R-20250123.153415
   */
  newDcdVersion?: string;
  /**
   * @example
   * wuying-asp_single_session_desktop_win_x64
   */
  project?: string;
  /**
   * @example
   * up
   */
  releaseNote?: string;
  /**
   * @example
   * up
   */
  releaseNoteEn?: string;
  /**
   * @example
   * up
   */
  releaseNoteJp?: string;
  /**
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

export class DescribeUserResourcesResponseBodyResourcesOsUpdate extends $dara.Model {
  checkId?: string;
  kbListString?: string;
  packageCount?: number;
  packages?: DescribeUserResourcesResponseBodyResourcesOsUpdatePackages[];
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
  nickName?: string;
  /**
   * @example
   * 2025-01-22T11:03:36Z
   */
  resourceSessionStartTime?: string;
  /**
   * @example
   * user001
   */
  userId?: string;
  /**
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
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * 194101959****
   */
  aliUid?: number;
  /**
   * @example
   * app-0001
   */
  appId?: string;
  /**
   * @example
   * App
   */
  authMode?: string;
  /**
   * @example
   * 0
   */
  categoryId?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * cn-shanghai+cds-695277****
   */
  cdsName?: string;
  /**
   * @example
   * ecds-0****
   */
  centerResourceId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  clients?: DescribeUserResourcesResponseBodyResourcesClients[];
  /**
   * @example
   * {"authMode":"App"}
   */
  connectionProperties?: string;
  /**
   * @example
   * 2024-12-11T07:12:12Z
   */
  createTime?: string;
  desktopDurationList?: DescribeUserResourcesResponseBodyResourcesDesktopDurationList[];
  desktopTimers?: DescribeUserResourcesResponseBodyResourcesDesktopTimers[];
  /**
   * @example
   * 2025-02-22T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @example
   * stg114510
   */
  externalDomainId?: string;
  /**
   * @example
   * test001
   */
  externalUserId?: string;
  fotaUpdate?: DescribeUserResourcesResponseBodyResourcesFotaUpdate;
  /**
   * @example
   * true
   */
  globalStatus?: boolean;
  hasUpgrade?: boolean;
  /**
   * @example
   * false
   */
  hibernationBeta?: boolean;
  /**
   * @example
   * http://example.com/icon.png
   */
  icon?: string;
  /**
   * @example
   * 2025-01-24T03:12:04Z
   */
  lastStartTime?: string;
  localName?: string;
  managementStatuses?: string[];
  /**
   * @example
   * cn-shanghai+dir-3367****
   */
  officeSiteId?: string;
  /**
   * @example
   * Normal
   */
  orderStatus?: string;
  /**
   * @example
   * Windows Server 2022
   */
  os?: string;
  osDescription?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  osUpdate?: DescribeUserResourcesResponseBodyResourcesOsUpdate;
  /**
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * ecd-0001
   */
  realDesktopId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Mainland
   */
  regionLocation?: string;
  /**
   * @example
   * dg-0****
   */
  resourceGroupId?: string;
  /**
   * @example
   * ecd-d19tya8zi4****
   */
  resourceId?: string;
  /**
   * @example
   * Center
   */
  resourceLevel?: string;
  /**
   * @example
   * testName01
   */
  resourceName?: string;
  /**
   * @example
   * Connected
   */
  resourceSessionStatus?: string;
  /**
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  sessions?: DescribeUserResourcesResponseBodyResourcesSessions[];
  /**
   * @example
   * PrePaid
   */
  subPayType?: string;
  /**
   * @example
   * true
   */
  supportHibernation?: boolean;
  supportedActions?: string[];
  /**
   * @example
   * #FFFFFF
   */
  themeColor?: string;
  userCustomName?: string;
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
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  queryFailedResourceTypes?: string[];
  /**
   * @example
   * 1732869815062
   */
  rankVersion?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  resources?: DescribeUserResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      queryFailedResourceTypes: 'QueryFailedResourceTypes',
      rankVersion: 'RankVersion',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      queryFailedResourceTypes: { 'type': 'array', 'itemType': 'string' },
      rankVersion: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResources },
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

