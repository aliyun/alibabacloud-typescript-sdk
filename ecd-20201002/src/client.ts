// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @remarks
   * The connection method.
   * 
   * Valid values:
   * 
   * *   VPC: End users connect to cloud computers over an enterprise virtual private cloud (VPC).
   * *   INTERNET: End users connect to cloud computers over the Internet.
   * *   ANY: End users connect to cloud computers over the Internet or an enterprise VPC.
   * 
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * AD_CONNECTOR
   */
  directoryType?: string;
  /**
   * @remarks
   * The provider ID.
   * 
   * @example
   * 26842
   */
  providerId?: string;
  /**
   * @remarks
   * The URL of the SSO service.
   * 
   * @example
   * https://eds-cn-shanghai-67726****
   */
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * @example
   * 2258a3d5-b8f8-4d79-a221-eaecf211****
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2022-03-13T13:26:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Finger 1
   */
  description?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The index.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The logon time.
   * 
   * @example
   * 2022-03-13T13:26:29Z
   */
  loginTime?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-074949****
   */
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      creationTime: 'CreationTime',
      description: 'Description',
      endUserId: 'EndUserId',
      index: 'Index',
      loginTime: 'LoginTime',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      creationTime: 'string',
      description: 'string',
      endUserId: 'string',
      index: 'number',
      loginTime: 'string',
      officeSiteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $dara.Model {
  /**
   * @remarks
   * 客户端类型，取值：
   * 
   * - macos：Mac客户端
   * - ios：IOS客户端
   * - android：Android客户端
   * - html5：Web客户端
   * - windows：Windows客户端
   * - linux：Linux客户端
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * 客户端状态，取值：
   * 
   * - ON：允许登录
   * - OFF：不允许登录
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

export class DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers extends $dara.Model {
  allowClientSetting?: boolean;
  /**
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @example
   * false
   */
  enforce?: boolean;
  executionTime?: string;
  /**
   * @example
   * 60
   */
  interval?: number;
  operationType?: string;
  /**
   * @example
   * RESET_TYPE_BOTH
   */
  resetType?: string;
  /**
   * @example
   * NoConnectShutdown
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
      allowClientSetting: 'boolean',
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

export class DescribeGlobalDesktopsResponseBodyDesktopsDisks extends $dara.Model {
  /**
   * @example
   * d-jedbpr4sl9l37****
   */
  diskId?: string;
  /**
   * @example
   * 80
   */
  diskSize?: number;
  /**
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
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

export class DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate extends $dara.Model {
  /**
   * @example
   * Enterprise
   */
  channel?: string;
  /**
   * @example
   * 0.0.0-D-20220102.xxxx
   */
  currentAppVersion?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * 0.0.0-R-20220307.xxxx
   */
  newAppVersion?: string;
  newDcdVersion?: string;
  /**
   * @example
   * testProject
   */
  project?: string;
  releaseNote?: string;
  releaseNoteEn?: string;
  releaseNoteJp?: string;
  /**
   * @example
   * 100
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

export class DescribeGlobalDesktopsResponseBodyDesktopsSessions extends $dara.Model {
  /**
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @example
   * 2021-03-07T08:23Z
   */
  establishmentTime?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBodyDesktops extends $dara.Model {
  /**
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * 支持的客户端信息
   */
  clients?: DescribeGlobalDesktopsResponseBodyDesktopsClients[];
  /**
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  desktopTimers?: DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers[];
  /**
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  disks?: DescribeGlobalDesktopsResponseBodyDesktopsDisks[];
  /**
   * @example
   * User1
   */
  endUserId?: string;
  endUserIds?: string[];
  /**
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  fotaUpdate?: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @example
   * 2048
   */
  gpuMemory?: number;
  hibernationBeta?: boolean;
  /**
   * @example
   * testName
   */
  hostName?: string;
  /**
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @example
   * 2021-07-13T15:59Z
   */
  lastStartTime?: string;
  localName?: string;
  managementFlags?: string[];
  /**
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @example
   * 192.168.xx.xx
   */
  networkInterfaceIp?: string;
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  os?: string;
  osDescription?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  platform?: string;
  /**
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * ecd-gx2x1dhsm****
   */
  realDesktopId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  regionLocation?: string;
  sessionType?: string;
  sessions?: DescribeGlobalDesktopsResponseBodyDesktopsSessions[];
  /**
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @example
   * testDesktop
   */
  userCustomName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clients: 'Clients',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopTimers: 'DesktopTimers',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      disks: 'Disks',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuMemory: 'GpuMemory',
      hibernationBeta: 'HibernationBeta',
      hostName: 'HostName',
      imageId: 'ImageId',
      lastStartTime: 'LastStartTime',
      localName: 'LocalName',
      managementFlags: 'ManagementFlags',
      memory: 'Memory',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      os: 'Os',
      osDescription: 'OsDescription',
      osType: 'OsType',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      realDesktopId: 'RealDesktopId',
      regionId: 'RegionId',
      regionLocation: 'RegionLocation',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      supportHibernation: 'SupportHibernation',
      userCustomName: 'UserCustomName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clients: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsClients },
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopTimers: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers },
      desktopType: 'string',
      directoryId: 'string',
      disks: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDisks },
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fotaUpdate: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate,
      gpuMemory: 'number',
      hibernationBeta: 'boolean',
      hostName: 'string',
      imageId: 'string',
      lastStartTime: 'string',
      localName: 'string',
      managementFlags: { 'type': 'array', 'itemType': 'string' },
      memory: 'number',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      os: 'string',
      osDescription: 'string',
      osType: 'string',
      platform: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      realDesktopId: 'string',
      regionId: 'string',
      regionLocation: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsSessions },
      supportHibernation: 'boolean',
      userCustomName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
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
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $dara.Model {
  /**
   * @example
   * VPC
   */
  desktopAccessType?: string;
  /**
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @example
   * 268****
   */
  providerId?: string;
  /**
   * @example
   * https://eds-cn-shanghai-67****
   */
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The region endpoint.
   * 
   * @example
   * ecd.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @example
   * 2020-12-20T14:52:28Z
   */
  creationTime?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * ecd-g03l3tlm8djoj****
   */
  desktopId?: string;
  /**
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @example
   * 30
   */
  remainTime?: number;
  restorePointId?: string;
  restorePointName?: string;
  /**
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @example
   * USER
   */
  snapshotType?: string;
  /**
   * @example
   * 150
   */
  sourceDiskSize?: string;
  /**
   * @example
   * SYSTEM
   */
  sourceDiskType?: string;
  /**
   * @example
   * ACCOMPLISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      desktopId: 'DesktopId',
      progress: 'Progress',
      remainTime: 'RemainTime',
      restorePointId: 'RestorePointId',
      restorePointName: 'RestorePointName',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      desktopId: 'string',
      progress: 'string',
      remainTime: 'number',
      restorePointId: 'string',
      restorePointName: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
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
      resourceSessionStartTime: 'ResourceSessionStartTime',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetCloudDriveServiceMountTokenResponseBodyToken extends $dara.Model {
  /**
   * @example
   * h****
   */
  domainId?: string;
  /**
   * @example
   * 2022-10-10T04:41:35Z
   */
  expiredAfter?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 7836fa6eced7dc8d54c775k34iu3h4i2kh534f****
   */
  token?: string;
  /**
   * @example
   * 6050416754750
   */
  totalSize?: number;
  /**
   * @example
   * 605089
   */
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      expiredAfter: 'ExpiredAfter',
      status: 'Status',
      token: 'Token',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      expiredAfter: 'string',
      status: 'string',
      token: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequestTag extends $dara.Model {
  key?: string;
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

export class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  tenantAlternativeChars?: string[];
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * null
   */
  tenantPasswordLength?: string;
  static names(): { [key: string]: string } {
    return {
      tenantAlternativeChars: 'TenantAlternativeChars',
      tenantPasswordLength: 'TenantPasswordLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantAlternativeChars: { 'type': 'array', 'itemType': 'string' },
      tenantPasswordLength: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tenantAlternativeChars)) {
      $dara.Model.validateArray(this.tenantAlternativeChars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyRiskVerifyInfo extends $dara.Model {
  /**
   * @remarks
   * The email used for authentication.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The duration of the lock.
   * 
   * @example
   * 1713749778
   */
  lastLockDuration?: number;
  /**
   * @remarks
   * Whether the account is locked or not.
   * 
   * @example
   * true
   */
  locked?: string;
  /**
   * @remarks
   * The mobile number used for authentication.
   * 
   * @example
   * 1388888****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lastLockDuration: 'LastLockDuration',
      locked: 'Locked',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lastLockDuration: 'number',
      locked: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponseBodyData extends $dara.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OssUploadCredential extends $dara.Model {
  accessKeyId?: string;
  endpoint?: string;
  filePath?: string;
  ossPolicy?: string;
  ossSignature?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endpoint: 'Endpoint',
      filePath: 'FilePath',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endpoint: 'string',
      filePath: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.0.1-D-20220513.14****
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d4452bd7-88df-4b90-a409-806da674****
   */
  clientId?: string;
  /**
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18390c954ce59e2915ef16663205371721e0db9a46179ac89249a203320459523cb54ad08efe324784dd0eba25950****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 4771b873-c757-4893-973c-7f5beejh****
   */
  sessionId?: string;
  targetStatus?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      targetStatus: 'TargetStatus',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      targetStatus: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponseBody extends $dara.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveFotaUpdateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveFotaUpdateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 42f6645a-9c3c-4772-be2a-cc5f5732****
   */
  clientId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The new password.
   * 
   * This parameter is required.
   * 
   * @example
   * 67436290
   */
  newPassword?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-227468****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The current password.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  oldPassword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      endUserId: 'string',
      loginToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangePasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangePasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFingerPrintTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 59e86b39-ccac-4dfa-93d7-1f724052****
   */
  clientId?: string;
  /**
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1c0436c721786529914f16516396228454fa6284c9b80f9917f25ebbec2aa30c10343e3f6f9aff64500ce13808aef****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6df06330-3b75-4768-b334-41a73a64****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      index: 'Index',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      index: 'number',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFingerPrintTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 134BD0B2-B848-5743-9CE2-C1FD3D5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFingerPrintTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFingerPrintTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFingerPrintTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 54c17e1d-2d72-4b87-aa33-25f3b3f2****
   */
  clientId?: string;
  /**
   * @remarks
   * The directory IDs.
   */
  directoryId?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directoryId)) {
      $dara.Model.validateArray(this.directoryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directories.
   */
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F369A091-002F-49C8-AD55-02A77629****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDirectoriesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 61e39dc6-0450-45f6-a372-2a09e938****
   */
  clientId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v189646d6f329e4dfcbf51653542202890570fec26e4f9ee26427c5920fcd93871f017d2190199c4c7d0c0bf00f573****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a5062d68-e550-4d09-8288-67c8ba9e****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint templates.
   */
  fingerPrintTemplates?: DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C1D3FBE-84E1-5ABB-AD98-2003AC71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrintTemplates: 'FingerPrintTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrintTemplates: { 'type': 'array', 'itemType': DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintTemplates)) {
      $dara.Model.validateArray(this.fingerPrintTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFingerPrintTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFingerPrintTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFingerPrintTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c213150d-7ac3-432c-b749-6e1e090b****
   */
  clientId?: string;
  /**
   * @example
   * INTERNET
   */
  desktopAccessType?: string;
  desktopId?: string[];
  /**
   * @example
   * DesktopTest
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * cn-hangzhou+dir-880841****
   */
  directoryId?: string;
  /**
   * @remarks
   * 关键字。支持模糊搜索桌面ID、云桌面名称和终端用户自定义的桌面名称。
   * 
   * @example
   * ecd
   */
  keyword?: string;
  language?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v147c9114a180489f89691663893169****
   */
  loginToken?: string;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * eyJkZWZhdWx0IjpbIjk2MjEy****
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou+dir-880841****
   */
  officeSiteId?: string;
  /**
   * @example
   * AssignTime
   */
  orderBy?: string;
  /**
   * @example
   * true
   */
  queryFotaUpdate?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  /**
   * @example
   * 5c456a41-1e65-4e72-ab4d-5dcfff52****
   */
  sessionId?: string;
  /**
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @example
   * true
   */
  withoutLatency?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopAccessType: 'DesktopAccessType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      directoryId: 'DirectoryId',
      keyword: 'Keyword',
      language: 'Language',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      orderBy: 'OrderBy',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      sessionId: 'SessionId',
      sortType: 'SortType',
      withoutLatency: 'WithoutLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopAccessType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      directoryId: 'string',
      keyword: 'string',
      language: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      orderBy: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      searchRegionId: 'string',
      sessionId: 'string',
      sortType: 'string',
      withoutLatency: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDesktopsResponseBody extends $dara.Model {
  desktops?: DescribeGlobalDesktopsResponseBodyDesktops[];
  /**
   * @example
   * eyJkZWZhdWx0IjpbIjIwMjItMDgtMTdUM****
   */
  nextToken?: string;
  /**
   * @example
   * 4686A731-D601-548C-83E2-4CB6371E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
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

export class DescribeGlobalDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGlobalDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGlobalDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 42f6645a-9c3c-4772-be2a-cc5f5732****
   */
  clientId?: string;
  officeSiteId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteId)) {
      $dara.Model.validateArray(this.officeSiteId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $dara.Model {
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOfficeSitesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * ac4a73ad-789a-449a-a88f-d18571d6****
   */
  clientId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16dad2b6-3c6d-4e4c-b057-78ecb13c****
   */
  clientId?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v16abfb945208fc5745061668654680853da4a25202d1a394fcad57bba484e9827ad43ea7d10fb6bf13d44a4adc0e9****
   */
  loginToken?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * a99b9aca-bac5-4da2-819e-400ce98f****
   */
  sessionId?: string;
  /**
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserResourcesRequest extends $dara.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * false
   */
  autoRefresh?: boolean;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 54c17e1d-2d72-4b87-aa33-25f3b3f2****
   */
  clientId?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 7.6.0-R-20241112.222305
   */
  clientVersion?: string;
  /**
   * @example
   * false
   */
  dualCenterForward?: boolean;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  officeSiteIds?: string[];
  /**
   * @example
   * AssignTime
   */
  orderBy?: string;
  productTypes?: string[];
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @example
   * false
   */
  refreshFotaUpdate?: boolean;
  resourceIds?: string[];
  /**
   * @example
   * testName
   */
  resourceName?: string;
  resourceTypes?: string[];
  /**
   * @example
   * desktop
   */
  scene?: string;
  /**
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @example
   * ASC
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      autoRefresh: 'AutoRefresh',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      clientId: 'ClientId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      dualCenterForward: 'DualCenterForward',
      language: 'Language',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteIds: 'OfficeSiteIds',
      orderBy: 'OrderBy',
      productTypes: 'ProductTypes',
      protocolType: 'ProtocolType',
      queryFotaUpdate: 'QueryFotaUpdate',
      refreshFotaUpdate: 'RefreshFotaUpdate',
      resourceIds: 'ResourceIds',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      scene: 'Scene',
      searchRegionId: 'SearchRegionId',
      sessionId: 'SessionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      autoRefresh: 'boolean',
      categoryId: 'number',
      categoryType: 'number',
      clientId: 'string',
      clientType: 'string',
      clientVersion: 'string',
      dualCenterForward: 'boolean',
      language: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteIds: { 'type': 'array', 'itemType': 'string' },
      orderBy: 'string',
      productTypes: { 'type': 'array', 'itemType': 'string' },
      protocolType: 'string',
      queryFotaUpdate: 'boolean',
      refreshFotaUpdate: 'boolean',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      scene: 'string',
      searchRegionId: 'string',
      sessionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteIds)) {
      $dara.Model.validateArray(this.officeSiteIds);
    }
    if(Array.isArray(this.productTypes)) {
      $dara.Model.validateArray(this.productTypes);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
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

export class DescribeUserResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d40776f-e9cb-4e2b-a8da-308d10e8****
   */
  clientId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * cn-beijing+dir-131196****
   */
  directoryId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1b16dcff3ab21a6c5ec01652238375511cff5a1db59fd4dc49afb37e2ea7a626af6f38109fd0498b6abd9de1af7743****
   */
  loginToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-beijing+dir-131196****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The password that you want to encrypt.
   * 
   * This parameter is required.
   * 
   * @example
   * Ab123456
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c78e2e52-23d9-4401-a648-e67ac6ff****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The encrypted password.
   * 
   * @example
   * d34601bc-e6b1-4433-b0cc-8f6c5e52;n4apvGub3OBoj4Grwg==;thhO4UEomJfdvwnwlA==
   */
  encryptedPassword?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF538DA8-FFC6-52DA-8FF8-7B92579F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenRequest extends $dara.Model {
  /**
   * @example
   * 00e122c3-13fb-4fc3-bc7a-5d9acb89****
   */
  clientId?: string;
  /**
   * @example
   * v1972cd3446f0e523598916520951742474e6624fcdea6652994d47bc6157d27f7cc900c339db67882j3no4nh5bk3b4****
   */
  loginToken?: string;
  /**
   * @example
   * cn-hangzhou+dir-7186763****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 14e1fe41-ce9b-491d-aa8c-345jk2n4bk****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponseBody extends $dara.Model {
  /**
   * @example
   * DC27288A-F9E1-5092-9B5B-71C27D15****
   */
  requestId?: string;
  token?: GetCloudDriveServiceMountTokenResponseBodyToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: GetCloudDriveServiceMountTokenResponseBodyToken,
    };
  }

  validate() {
    if(this.token && typeof (this.token as any).validate === 'function') {
      (this.token as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudDriveServiceMountTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudDriveServiceMountTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCloudDriveServiceMountTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  commandContent?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  tag?: GetConnectionTicketRequestTag[];
  /**
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      commandContent: 'CommandContent',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      tag: 'Tag',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      commandContent: 'string',
      desktopId: 'string',
      loginToken: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      tag: { 'type': 'array', 'itemType': GetConnectionTicketRequestTag },
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  taskCode?: string;
  /**
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c63862da
   */
  taskId?: string;
  taskMessage?: string;
  /**
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskCode: 'string',
      taskId: 'string',
      taskMessage: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConnectionTicketResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The verification code that is generated by the virtual MFA device. This parameter is required if you set `CurrentStage` to `MFAVerify`.
   * 
   * @example
   * 47****
   */
  authenticationCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Workspace client. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that runs an Alibaba Cloud Workspace client.
   * 
   * @example
   * Windows_NT 10.0.1**** x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The type of Alibaba Cloud Workspace clients.
   * 
   * Valid values:
   * 
   * *   HTML5: web client.
   * 
   * *   WINDOWS: Windows client.
   * 
   * *   MACOS: macOS client.
   * 
   * *   IOS: iOS client.
   * 
   * *   ANDROID: Android client.
   * 
   * @example
   * Windows
   */
  clientType?: string;
  /**
   * @remarks
   * The version of the client. When you use an Alibaba Cloud Workspace client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.1****
   */
  clientVersion?: string;
  /**
   * @remarks
   * The logon authentication stage. Valid values:
   * 
   * *   `ADPassword`: the stage to verify the identity of the Active Directory (AD) user. You must specify the value when the system verifies the identity of a convenience account or an AD account.
   * *   `MFABind: the stage to bind a virtual multi-factor authentication (MFA) device.`
   * *   `MFAVerify: the stage to verify the verification code that is generated by the virtual MFA device.`
   * *   `TokenVerify`: the stage to perform two-factor authentication on an Alibaba Cloud Workspace client (hereinafter referred to as the client).
   * *   `ChangePassword`: the stage to change the password of the user.
   * *   `KeepAliveVerify`: the stage to obtain LoginToken if KeepAliveToken is valid.
   * 
   * @example
   * ADPassword
   */
  currentStage?: string;
  /**
   * @remarks
   * The office network ID. This parameter has the same meaning as `OfficeSiteId`. We recommend that you replace `DirectoryId` with `OfficeSiteId`. You can specify a value for `DirectoryId` or `OfficeSiteId`.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the convenience user or the AD user. This parameter is required if you set `CurrentStage` to `ADPassword`.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * Specifies whether to keep the user logged on to the client. 
   * Valid values:
   * * null: Default value. Do not keep the user logged on to the client.
   * * true: Keep the user logged on to the client.
   * * false:  Do not keep the user logged on to the client.
   * 
   * @example
   * false
   */
  keepAlive?: boolean;
  /**
   * @remarks
   * The token to keep logging on to an Alibaba Cloud Workspace client. When an end user logs on to the Alibaba Cloud Workspace client and select Auto Sign-in, `KeepAliveToken` is returned after you call this operation. Within the valid period of the returned token``, you can call the `GetLoginToken` operation and set `CurrentStage` to `KeepAliveVerify`. Then, you can obtain LoginToken. If you set `CurrentStage` to `KeepAliveVerify`, `KeepAliveToken` is required.
   * 
   * @example
   * hide
   */
  keepAliveToken?: string;
  /**
   * @remarks
   * The new password. This parameter is required if you set `CurrentStage` to `ChangePassword`.
   * 
   * @example
   * NewPassword
   */
  newPassword?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The current password. This parameter is required if you set `CurrentStage` to `ChangePassword`.
   * 
   * @example
   * OldPassword
   */
  oldPassword?: string;
  /**
   * @remarks
   * The password of the convenience user or the AD user. This parameter is required if you set `CurrentStage` to `ADPassword`.
   * 
   * @example
   * Password1234
   */
  password?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * *   If the virtual multi-factor authentication (MFA) device is not bound or two-factor authentication is not enabled for the client, you do not need to specify a value for `SessionId`.
   * *   If the virtual MFA device is not bound or two-factor authentication is enabled for the client, you must specify a value for `SessionId` to verify the user identity after you specify a value for `ADPassword`. The value of the `SessionId` parameter is returned only if the CurrentStage parameter is set to `ADPassword` when you call the `GetLoginToken` operation.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * If two-factor authentication is enabled for Alibaba Cloud Workspace terminals in the EDS console and the system detects that the current logon user is exposed to risks, the system sends a verification code to the email address of the user. This parameter is required if you set `CurrentStage` to `TokenVerify`.
   * 
   * @example
   * 63****
   */
  tokenCode?: string;
  /**
   * @remarks
   * The unique identifier of the client. When you use an Alibaba Cloud Workspace client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * C78CA9E99315687575DD2844C1F3****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode: 'AuthenticationCode',
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentStage: 'CurrentStage',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      keepAlive: 'KeepAlive',
      keepAliveToken: 'KeepAliveToken',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode: 'string',
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      currentStage: 'string',
      directoryId: 'string',
      endUserId: 'string',
      keepAlive: 'boolean',
      keepAliveToken: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The email address of the user. The system returns the email address in the return value of the LoginToken parameter after the user logs on to the client.
   * 
   * *   For a convenience user, the return value is the email address specified when the administrator creates the convenience user.
   * *   For an AD user, the return value is in the following format: `Username@Name of the AD domain`.
   * 
   * @example
   * alice
   */
  email?: string;
  /**
   * @remarks
   * The account of the convenience user or the AD user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * edu
   */
  industry?: string;
  /**
   * @remarks
   * The token used to keep the user logged on. After the user logs on to the client and select the Keep Logon option, `KeepAliveToken` is returned when you call the operation. If the user does not select the Keep Logon option, null is returned.
   * 
   * @example
   * 006YwvYMsesWWsDBZnVB+Wq9AvJDVIqOY3YCktvtb7+KxMb3ClnNlV8+l/knhZYrXUmeP06IzkjF+IgcZ3vZKOyMprDyFHjCy1r27FRE/U7+geWCl8iQ+yF8GaCRHfJEkC2+ROs93HkT4tfHxyY1J8W7O7ZQGUC/cdCvm+cCP6FIy73IUuPuVR6PcKYXIpEZPW
   */
  keepAliveToken?: string;
  /**
   * @remarks
   * The attribute of the convenience user. For an AD user, null is returned.
   * 
   * @example
   * test:sample
   */
  label?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The next stage that is expected to enter. For example, an administrator enables MFA in the EDS console. When an end user enters the password, that is, the end user completes the `ADPassword` stage, this parameter returns `MFAVerify`. This indicates that MFA is required.
   * 
   * >  For more information about the authentication stages, see the `CurrentStage` parameter.
   * 
   * @example
   * MFAVerify
   */
  nextStage?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  passwordStrategy?: GetLoginTokenResponseBodyPasswordStrategy;
  /**
   * @remarks
   * Enter the mobile number of the convenience user. For an AD user, null is returned.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   */
  props?: { [key: string]: string };
  /**
   * @remarks
   * The QR code that is generated when the virtual MFA device is bound. The value is encoded in Base64. This parameter can be empty. This parameter is required only when the CurrentStage parameter is set to `MFABind`.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWY******
   */
  qrCodePng?: string;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * null
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Risk identification information regarding the signin process.
   */
  riskVerifyInfo?: GetLoginTokenResponseBodyRiskVerifyInfo;
  /**
   * @remarks
   * The key that is generated when you bind the virtual MFA device. This parameter is required when the CurrentStage parameter is set to `MFABind`.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWYI7MH****
   */
  secret?: string;
  /**
   * @remarks
   * The ID of the session. The ID is returned the first time you call the `GetLoginToken` operation in the session. If MFA is required, you must specify this parameter in subsequent stages.
   * 
   * > For more information about each authentication stage, see the parameter description of the request parameter `CurrentStage`.
   * 
   * @example
   * d6ec166d-ab93-4286-bf7f-a18bb929****
   */
  sessionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. The ID is used for hardware client authentication.
   * 
   * @example
   * 166353906220****
   */
  tenantId?: number;
  /**
   * @remarks
   * > This is a parameter only for internal use.
   * 
   * @example
   * mode
   */
  windowDisplayMode?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      industry: 'Industry',
      keepAliveToken: 'KeepAliveToken',
      label: 'Label',
      loginToken: 'LoginToken',
      nextStage: 'NextStage',
      passwordStrategy: 'PasswordStrategy',
      phone: 'Phone',
      props: 'Props',
      qrCodePng: 'QrCodePng',
      reason: 'Reason',
      requestId: 'RequestId',
      riskVerifyInfo: 'RiskVerifyInfo',
      secret: 'Secret',
      sessionId: 'SessionId',
      tenantId: 'TenantId',
      windowDisplayMode: 'WindowDisplayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      industry: 'string',
      keepAliveToken: 'string',
      label: 'string',
      loginToken: 'string',
      nextStage: 'string',
      passwordStrategy: GetLoginTokenResponseBodyPasswordStrategy,
      phone: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qrCodePng: 'string',
      reason: 'string',
      requestId: 'string',
      riskVerifyInfo: GetLoginTokenResponseBodyRiskVerifyInfo,
      secret: 'string',
      sessionId: 'string',
      tenantId: 'number',
      windowDisplayMode: 'string',
    };
  }

  validate() {
    if(this.passwordStrategy && typeof (this.passwordStrategy as any).validate === 'function') {
      (this.passwordStrategy as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
    }
    if(this.riskVerifyInfo && typeof (this.riskVerifyInfo as any).validate === 'function') {
      (this.riskVerifyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  isKeepAlive?: boolean;
  /**
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 141631846826****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      isKeepAlive: 'IsKeepAlive',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isKeepAlive: 'boolean',
      officeSiteId: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IsKeepAliveResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IsKeepAliveResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IsKeepAliveResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigRequest extends $dara.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponseBody extends $dara.Model {
  data?: QueryEdsAgentReportConfigResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryEdsAgentReportConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdsAgentReportConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEdsAgentReportConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryEdsAgentReportConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that runs the Alibaba Cloud Workspace client (hereinafter referred to as WUYING client).
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use a WUYING client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 20 cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * 04b7b80a0b020715c5c1b4175fc4771698****9e2a759557a4624665fd53ae40
   */
  sessionToken?: string;
  /**
   * @remarks
   * The UUID of the client.
   * 
   * @example
   * 91761ED27169E2FC564F29388E2D****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      osUpdate: 'OsUpdate',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      osUpdate: 'boolean',
      regionId: 'string',
      sessionId: 'string',
      sessionToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @example
   * cn-shanghai+dir-238191****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponseBody extends $dara.Model {
  /**
   * @example
   * v1c27bab6c205b2fdfac916434306375722776d6aa89e30b7836d18c95ade9137f0f5ac4325260782184e96ee2b3f0****
   */
  loginToken?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshLoginTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportEdsAgentInfoRequest extends $dara.Model {
  aliUid?: number;
  desktopId?: string;
  ecsInstanceId?: string;
  edsAgentInfo?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      ecsInstanceId: 'EcsInstanceId',
      edsAgentInfo: 'EdsAgentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      desktopId: 'string',
      ecsInstanceId: 'string',
      edsAgentInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportEdsAgentInfoResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportEdsAgentInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportEdsAgentInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportEdsAgentInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportSessionStatusRequest extends $dara.Model {
  /**
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp167fcodoa90ixn****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1642909143781
   */
  sessionChangeTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SessionLogOn
   */
  sessionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      sessionChangeTime: 'SessionChangeTime',
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceId: 'string',
      regionId: 'string',
      sessionChangeTime: 'number',
      sessionId: 'string',
      sessionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportSessionStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 0EE5DE20-25F4-5870-9D56-C259A45B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportSessionStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReportSessionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReportSessionStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 95e41934-383e-4c9f-824f-3b93b19b****
   */
  clientId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 2f00ab32-a473-4c90-9aae-dd8842ae****
   */
  clientToken?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * a***@example.edu
   */
  email?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * liming
   */
  endUserId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-899235****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The phone number of the user.
   * 
   * @example
   * 1827912****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      email: 'Email',
      endUserId: 'EndUserId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      email: 'string',
      endUserId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A00477A5-167F-56D2-A315-EA77E4BD****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * b9d8ddfd-65d4-4857-9e97-56477d1f****
   */
  clientId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-e964cr92klwqb****
   */
  desktopId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1fdef51b727aa91d6c881658978508114d3f5680fa99a66b2a631d17d5bb4860cccf1173be24d77d5ef1423c83aea****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 05182b8c-bb0d-49d3-963c-ee63a507****
   */
  sessionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-2zeipxmnhej803x7****
   */
  snapshotId?: string;
  /**
   * @remarks
   * Specifies whether to stop the cloud computer.
   * 
   * @example
   * true
   */
  stopDesktop?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
      stopDesktop: 'StopDesktop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
      stopDesktop: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTokenCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system on which the client runs.
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client version. If you use an Alibaba Cloud Workspace client, you can view the client version in the "About" dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v28101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-2925105532
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * If two-factor authentication is enabled for clients in the Elastic Desktop Service (EDS) Enterprise console, the system will send a verification code to the user\\"s email address if it detects that the current logged-on user is at risk. This parameter is required if you set `CurrentStage` to `TokenVerify`.
   * 
   * @example
   * 63****
   */
  tokenCode?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      sessionId: 'SessionId',
      tokenCode: 'TokenCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      sessionId: 'string',
      tokenCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTokenCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 134BD0B2-B848-5743-9CE2-C1FD3D5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendTokenCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendTokenCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendTokenCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 347431a9-90f6-448e-82c4-42bc84a9****
   */
  clientId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * AAAAAAAAAAAAAA
   */
  encryptedFingerPrintTemplate?: string;
  /**
   * @example
   * drjfspchj
   */
  encryptedKey?: string;
  /**
   * @example
   * goG3gG8AAABhujtscn
   */
  fingerPrintTemplate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v11c73e7af0cb43ff39301651142485099ffb447085d76c4147519dbaa21c3bd90d53045e327c1f525ee6331c52556****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * As53328794
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8b42538a-246e-45a1-95ea-e5c65b09****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
      encryptedFingerPrintTemplate: 'EncryptedFingerPrintTemplate',
      encryptedKey: 'EncryptedKey',
      fingerPrintTemplate: 'FingerPrintTemplate',
      loginToken: 'LoginToken',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      description: 'string',
      encryptedFingerPrintTemplate: 'string',
      encryptedKey: 'string',
      fingerPrintTemplate: 'string',
      loginToken: 'string',
      password: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 0711abb9-4cf8-41b2-9d0e-b51209468631;da4VFPNxwY3CZegFjOrCNw==;iHp2l9/qGcfD4tWx7jZIZQ==
   */
  encryptedPassword?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * CDE666EA-4FCD-5024-895C-8698E3D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedPassword: 'EncryptedPassword',
      index: 'Index',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedPassword: 'string',
      index: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFingerPrintTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFingerPrintTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0764064c-1609-4d3c-8cb7-ab8d3feg****
   */
  clientId?: string;
  /**
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Finger 1
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v14e5a2404c495249f7541646535779667ea0b5d87754b5d2d2a3099bda774f3832e24756ef3e66eb574b1f3e99078****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d28520d4-da0b-4a97-981d-683db865****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
      index: 'Index',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      description: 'string',
      index: 'number',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateDescriptionResponseBody extends $dara.Model {
  /**
   * @example
   * BBD7DFD1-A5DE-51D9-8FD6-3BF54EF4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFingerPrintTemplateDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFingerPrintTemplateDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFingerPrintTemplateDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud Workspace client (hereinafter referred to as WUYING client). The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that run the client.
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 21e7be12-aa4f-4389-b3e1-82f4a1b5****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use a WUYING client, you can click **About** on the client logon page to view the version of the client.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 20 cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-cg27ufmapab08****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The UUID of the client.
   * 
   * @example
   * 71F6A700735E74A61161A53F0C47****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string;
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      filePath: 'FilePath',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      filePath: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordContentResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRecordContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRecordContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRecordContentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @remarks
   * The operating system (OS) of the device that runs the Alibaba Cloud Workspace client (hereinafter referred to as WUYING client).
   * 
   * @example
   * Windows_NT 10.0.18363 x64
   */
  clientOS?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 6ce412a8-399f-49f9-9518-66ee028a****
   */
  clientToken?: string;
  /**
   * @remarks
   * The client version. If you use a WUYING client, you can view the client version in the **About** dialog box on the client logon page.
   * 
   * @example
   * 2.1.0-R-20210731.151756
   */
  clientVersion?: string;
  /**
   * @remarks
   * The IDs of the cloud computers. You can specify the IDs of 1 to 20 cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * v18101ac6a9e69c66b04a163031680463660b4b216cd758f34b60b9ad6a7c7f7334b83dd8f75eef4209c68f9f1080b****
   */
  loginToken?: string;
  osUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * cd45e873-650d-4d70-acb9-f996187a****
   */
  sessionId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * @example
   * 04b7b80a0b020715c5c1b4175fc4771698****9e2a759557a4624665fd53ae40
   */
  sessionToken?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      osUpdate: 'OsUpdate',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      sessionToken: 'SessionToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientToken: 'string',
      clientVersion: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      loginToken: 'string',
      osUpdate: 'boolean',
      regionId: 'string',
      sessionId: 'string',
      sessionToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDesktopsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clientId?: string;
  clientOS?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopId: 'string',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordContentResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRecordContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopRecordContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopRecordContentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 58f96f67-7944-4f97-9342-****
   */
  clientId?: string;
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
   * Specifies whether to enable forced unbinding.
   * 
   * Valid values:
   * 
   * *   true: Even when end users connect to cloud computers, the forced unbinding is still enforced.
   * *   false: Forced unbinding is only enforced when end users are disconnected from cloud computers.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v12307f5e0****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3b053331-dc98-43d8-b247-****
   */
  sessionId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ud-sdfs****
   */
  userDesktopId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      force: 'Force',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      userDesktopId: 'UserDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      force: 'boolean',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      userDesktopId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5B7CF35-E078-5EBF-A010-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserDesktopResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindUserDesktopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindUserDesktopResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d0b95762-0541-4b53-a0e4-7ed09f39****
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789cyG
   */
  credential?: string;
  /**
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @example
   * drjfs****
   */
  encryptedKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1f5772a1c60dbea9fd8e1648567079018086448d234b5bc8e30bec0ba6e80c41c767c4dd0db51e9e5c4e0f111431a****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-227468****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * eb17af2e-1dd6-4cc4-a3ee-3a14d0d7****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      credential: 'Credential',
      credentialType: 'CredentialType',
      encryptedKey: 'EncryptedKey',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      credential: 'string',
      credentialType: 'string',
      encryptedKey: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * D5F0BDFB-A229-5F1D-B790-33709D43****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyCredentialResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 允许桌面FOTA升级
   * 
   * @param request - ApproveFotaUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdateWithOptions(request: ApproveFotaUpdateRequest, runtime: $dara.RuntimeOptions): Promise<ApproveFotaUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.targetStatus)) {
      query["TargetStatus"] = request.targetStatus;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveFotaUpdate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ApproveFotaUpdateResponse>(await this.callApi(params, req, runtime), new ApproveFotaUpdateResponse({}));
  }

  /**
   * 允许桌面FOTA升级
   * 
   * @param request - ApproveFotaUpdateRequest
   * @returns ApproveFotaUpdateResponse
   */
  async approveFotaUpdate(request: ApproveFotaUpdateRequest): Promise<ApproveFotaUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  /**
   * Changes the password of a user account.
   * 
   * @param request - ChangePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangePasswordResponse
   */
  async changePasswordWithOptions(request: ChangePasswordRequest, runtime: $dara.RuntimeOptions): Promise<ChangePasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangePassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ChangePasswordResponse>(await this.callApi(params, req, runtime), new ChangePasswordResponse({}));
  }

  /**
   * Changes the password of a user account.
   * 
   * @param request - ChangePasswordRequest
   * @returns ChangePasswordResponse
   */
  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFingerPrintTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFingerPrintTemplateResponse
   */
  async deleteFingerPrintTemplateWithOptions(request: DeleteFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFingerPrintTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteFingerPrintTemplateResponse>(await this.callApi(params, req, runtime), new DeleteFingerPrintTemplateResponse({}));
  }

  /**
   * @param request - DeleteFingerPrintTemplateRequest
   * @returns DeleteFingerPrintTemplateResponse
   */
  async deleteFingerPrintTemplate(request: DeleteFingerPrintTemplateRequest): Promise<DeleteFingerPrintTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFingerPrintTemplateWithOptions(request, runtime);
  }

  /**
   * Queries directory details.
   * 
   * @param request - DescribeDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDirectories",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
  }

  /**
   * Queries directory details.
   * 
   * @param request - DescribeDirectoriesRequest
   * @returns DescribeDirectoriesResponse
   */
  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  /**
   * Queries fingerprint templates.
   * 
   * @param request - DescribeFingerPrintTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFingerPrintTemplatesResponse
   */
  async describeFingerPrintTemplatesWithOptions(request: DescribeFingerPrintTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFingerPrintTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFingerPrintTemplates",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeFingerPrintTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeFingerPrintTemplatesResponse({}));
  }

  /**
   * Queries fingerprint templates.
   * 
   * @param request - DescribeFingerPrintTemplatesRequest
   * @returns DescribeFingerPrintTemplatesResponse
   */
  async describeFingerPrintTemplates(request: DescribeFingerPrintTemplatesRequest): Promise<DescribeFingerPrintTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFingerPrintTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeGlobalDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDesktopsResponse
   */
  async describeGlobalDesktopsWithOptions(request: DescribeGlobalDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeGlobalDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!$dara.isNull(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.withoutLatency)) {
      query["WithoutLatency"] = request.withoutLatency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeGlobalDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeGlobalDesktopsResponse({}));
  }

  /**
   * @param request - DescribeGlobalDesktopsRequest
   * @returns DescribeGlobalDesktopsResponse
   */
  async describeGlobalDesktops(request: DescribeGlobalDesktopsRequest): Promise<DescribeGlobalDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOfficeSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSitesWithOptions(request: DescribeOfficeSitesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOfficeSitesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOfficeSites",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOfficeSitesResponse>(await this.callApi(params, req, runtime), new DescribeOfficeSitesResponse({}));
  }

  /**
   * @param request - DescribeOfficeSitesRequest
   * @returns DescribeOfficeSitesResponse
   */
  async describeOfficeSites(request: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 列举快照
   * 
   * @param request - DescribeSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshots",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeSnapshotsResponse({}));
  }

  /**
   * 列举快照
   * 
   * @param request - DescribeSnapshotsRequest
   * @returns DescribeSnapshotsResponse
   */
  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  /**
   * 查询用户资源列表
   * 
   * @param request - DescribeUserResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserResourcesResponse
   */
  async describeUserResourcesWithOptions(request: DescribeUserResourcesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeUserResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.autoRefresh)) {
      query["AutoRefresh"] = request.autoRefresh;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      query["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.dualCenterForward)) {
      query["DualCenterForward"] = request.dualCenterForward;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      query["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.officeSiteIds)) {
      query["OfficeSiteIds"] = request.officeSiteIds;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.productTypes)) {
      query["ProductTypes"] = request.productTypes;
    }

    if (!$dara.isNull(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!$dara.isNull(request.refreshFotaUpdate)) {
      query["RefreshFotaUpdate"] = request.refreshFotaUpdate;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserResources",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeUserResourcesResponse>(await this.callApi(params, req, runtime), new DescribeUserResourcesResponse({}));
  }

  /**
   * 查询用户资源列表
   * 
   * @param request - DescribeUserResourcesRequest
   * @returns DescribeUserResourcesResponse
   */
  async describeUserResources(request: DescribeUserResourcesRequest): Promise<DescribeUserResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserResourcesWithOptions(request, runtime);
  }

  /**
   * Encrypts a password.
   * 
   * @param request - EncryptPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptPasswordResponse
   */
  async encryptPasswordWithOptions(request: EncryptPasswordRequest, runtime: $dara.RuntimeOptions): Promise<EncryptPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncryptPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EncryptPasswordResponse>(await this.callApi(params, req, runtime), new EncryptPasswordResponse({}));
  }

  /**
   * Encrypts a password.
   * 
   * @param request - EncryptPasswordRequest
   * @returns EncryptPasswordResponse
   */
  async encryptPassword(request: EncryptPasswordRequest): Promise<EncryptPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptPasswordWithOptions(request, runtime);
  }

  /**
   * 获取无影云盘的免密token
   * 
   * @param request - GetCloudDriveServiceMountTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudDriveServiceMountTokenResponse
   */
  async getCloudDriveServiceMountTokenWithOptions(request: GetCloudDriveServiceMountTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetCloudDriveServiceMountTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCloudDriveServiceMountToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetCloudDriveServiceMountTokenResponse>(await this.callApi(params, req, runtime), new GetCloudDriveServiceMountTokenResponse({}));
  }

  /**
   * 获取无影云盘的免密token
   * 
   * @param request - GetCloudDriveServiceMountTokenRequest
   * @returns GetCloudDriveServiceMountTokenResponse
   */
  async getCloudDriveServiceMountToken(request: GetCloudDriveServiceMountTokenRequest): Promise<GetCloudDriveServiceMountTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudDriveServiceMountTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  /**
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Obtains logon credentials.
   * 
   * @param request - GetLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginTokenResponse
   */
  async getLoginTokenWithOptions(request: GetLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetLoginTokenResponse>(await this.callApi(params, req, runtime), new GetLoginTokenResponse({}));
  }

  /**
   * Obtains logon credentials.
   * 
   * @param request - GetLoginTokenRequest
   * @returns GetLoginTokenResponse
   */
  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * 是否保持登录判断接口
   * 
   * @param request - IsKeepAliveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsKeepAliveResponse
   */
  async isKeepAliveWithOptions(request: IsKeepAliveRequest, runtime: $dara.RuntimeOptions): Promise<IsKeepAliveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsKeepAlive",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<IsKeepAliveResponse>(await this.callApi(params, req, runtime), new IsKeepAliveResponse({}));
  }

  /**
   * 是否保持登录判断接口
   * 
   * @param request - IsKeepAliveRequest
   * @returns IsKeepAliveResponse
   */
  async isKeepAlive(request: IsKeepAliveRequest): Promise<IsKeepAliveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.isKeepAliveWithOptions(request, runtime);
  }

  /**
   * 查询Agent需要上报的配置信息
   * 
   * @param request - QueryEdsAgentReportConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEdsAgentReportConfigResponse
   */
  async queryEdsAgentReportConfigWithOptions(request: QueryEdsAgentReportConfigRequest, runtime: $dara.RuntimeOptions): Promise<QueryEdsAgentReportConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEdsAgentReportConfig",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QueryEdsAgentReportConfigResponse>(await this.callApi(params, req, runtime), new QueryEdsAgentReportConfigResponse({}));
  }

  /**
   * 查询Agent需要上报的配置信息
   * 
   * @param request - QueryEdsAgentReportConfigRequest
   * @returns QueryEdsAgentReportConfigResponse
   */
  async queryEdsAgentReportConfig(request: QueryEdsAgentReportConfigRequest): Promise<QueryEdsAgentReportConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryEdsAgentReportConfigWithOptions(request, runtime);
  }

  /**
   * Restart cloud computers.
   * 
   * @param request - RebootDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootDesktopsResponse
   */
  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<RebootDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RebootDesktopsResponse>(await this.callApi(params, req, runtime), new RebootDesktopsResponse({}));
  }

  /**
   * Restart cloud computers.
   * 
   * @param request - RebootDesktopsRequest
   * @returns RebootDesktopsResponse
   */
  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginTokenWithOptions(request: RefreshLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<RefreshLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshLoginToken",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RefreshLoginTokenResponse>(await this.callApi(params, req, runtime), new RefreshLoginTokenResponse({}));
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

  /**
   * 上报edsAgent的信息
   * 
   * @param request - ReportEdsAgentInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportEdsAgentInfoResponse
   */
  async reportEdsAgentInfoWithOptions(request: ReportEdsAgentInfoRequest, runtime: $dara.RuntimeOptions): Promise<ReportEdsAgentInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    if (!$dara.isNull(request.edsAgentInfo)) {
      query["EdsAgentInfo"] = request.edsAgentInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportEdsAgentInfo",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ReportEdsAgentInfoResponse>(await this.callApi(params, req, runtime), new ReportEdsAgentInfoResponse({}));
  }

  /**
   * 上报edsAgent的信息
   * 
   * @param request - ReportEdsAgentInfoRequest
   * @returns ReportEdsAgentInfoResponse
   */
  async reportEdsAgentInfo(request: ReportEdsAgentInfoRequest): Promise<ReportEdsAgentInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportEdsAgentInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ReportSessionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportSessionStatusResponse
   */
  async reportSessionStatusWithOptions(request: ReportSessionStatusRequest, runtime: $dara.RuntimeOptions): Promise<ReportSessionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionChangeTime)) {
      query["SessionChangeTime"] = request.sessionChangeTime;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionStatus)) {
      query["SessionStatus"] = request.sessionStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportSessionStatus",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ReportSessionStatusResponse>(await this.callApi(params, req, runtime), new ReportSessionStatusResponse({}));
  }

  /**
   * @param request - ReportSessionStatusRequest
   * @returns ReportSessionStatusResponse
   */
  async reportSessionStatus(request: ReportSessionStatusRequest): Promise<ReportSessionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportSessionStatusWithOptions(request, runtime);
  }

  /**
   * Resets a password.
   * 
   * @param request - ResetPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetPasswordResponse
   */
  async resetPasswordWithOptions(request: ResetPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ResetPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.phone)) {
      query["phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetPassword",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ResetPasswordResponse>(await this.callApi(params, req, runtime), new ResetPasswordResponse({}));
  }

  /**
   * Resets a password.
   * 
   * @param request - ResetPasswordRequest
   * @returns ResetPasswordResponse
   */
  async resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetPasswordWithOptions(request, runtime);
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @param request - ResetSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSnapshotResponse
   */
  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<ResetSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.stopDesktop)) {
      query["StopDesktop"] = request.stopDesktop;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSnapshot",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ResetSnapshotResponse>(await this.callApi(params, req, runtime), new ResetSnapshotResponse({}));
  }

  /**
   * Restores the data of a disk from a snapshot.
   * 
   * @param request - ResetSnapshotRequest
   * @returns ResetSnapshotResponse
   */
  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  /**
   * Sends a logon verification code.
   * 
   * @param request - SendTokenCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTokenCodeResponse
   */
  async sendTokenCodeWithOptions(request: SendTokenCodeRequest, runtime: $dara.RuntimeOptions): Promise<SendTokenCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTokenCode",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SendTokenCodeResponse>(await this.callApi(params, req, runtime), new SendTokenCodeResponse({}));
  }

  /**
   * Sends a logon verification code.
   * 
   * @param request - SendTokenCodeRequest
   * @returns SendTokenCodeResponse
   */
  async sendTokenCode(request: SendTokenCodeRequest): Promise<SendTokenCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendTokenCodeWithOptions(request, runtime);
  }

  /**
   * @param request - SetFingerPrintTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFingerPrintTemplateResponse
   */
  async setFingerPrintTemplateWithOptions(request: SetFingerPrintTemplateRequest, runtime: $dara.RuntimeOptions): Promise<SetFingerPrintTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.encryptedFingerPrintTemplate)) {
      query["EncryptedFingerPrintTemplate"] = request.encryptedFingerPrintTemplate;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.fingerPrintTemplate)) {
      query["FingerPrintTemplate"] = request.fingerPrintTemplate;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFingerPrintTemplate",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetFingerPrintTemplateResponse>(await this.callApi(params, req, runtime), new SetFingerPrintTemplateResponse({}));
  }

  /**
   * @param request - SetFingerPrintTemplateRequest
   * @returns SetFingerPrintTemplateResponse
   */
  async setFingerPrintTemplate(request: SetFingerPrintTemplateRequest): Promise<SetFingerPrintTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFingerPrintTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - SetFingerPrintTemplateDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFingerPrintTemplateDescriptionResponse
   */
  async setFingerPrintTemplateDescriptionWithOptions(request: SetFingerPrintTemplateDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<SetFingerPrintTemplateDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.index)) {
      query["Index"] = request.index;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFingerPrintTemplateDescription",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetFingerPrintTemplateDescriptionResponse>(await this.callApi(params, req, runtime), new SetFingerPrintTemplateDescriptionResponse({}));
  }

  /**
   * @param request - SetFingerPrintTemplateDescriptionRequest
   * @returns SetFingerPrintTemplateDescriptionResponse
   */
  async setFingerPrintTemplateDescription(request: SetFingerPrintTemplateDescriptionRequest): Promise<SetFingerPrintTemplateDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFingerPrintTemplateDescriptionWithOptions(request, runtime);
  }

  /**
   * Start cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
   * 
   * @param request - StartDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDesktopsResponse
   */
  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<StartDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartDesktopsResponse>(await this.callApi(params, req, runtime), new StartDesktopsResponse({}));
  }

  /**
   * Start cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to start must be in the Stopped state. After you call this operation, the cloud computers enter the Running state.
   * 
   * @param request - StartDesktopsRequest
   * @returns StartDesktopsResponse
   */
  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StartRecordContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRecordContentResponse
   */
  async startRecordContentWithOptions(request: StartRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<StartRecordContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StartRecordContentResponse>(await this.callApi(params, req, runtime), new StartRecordContentResponse({}));
  }

  /**
   * @param request - StartRecordContentRequest
   * @returns StartRecordContentResponse
   */
  async startRecordContent(request: StartRecordContentRequest): Promise<StartRecordContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRecordContentWithOptions(request, runtime);
  }

  /**
   * Stops cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state. After you call this operation, the cloud computers enter the Stopped state.
   * 
   * @param request - StopDesktopsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDesktopsResponse
   */
  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $dara.RuntimeOptions): Promise<StopDesktopsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.osUpdate)) {
      query["OsUpdate"] = request.osUpdate;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      query["SessionToken"] = request.sessionToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDesktops",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopDesktopsResponse>(await this.callApi(params, req, runtime), new StopDesktopsResponse({}));
  }

  /**
   * Stops cloud computers.
   * 
   * @remarks
   * The cloud computers that you want to stop must be in the Running state. After you call this operation, the cloud computers enter the Stopped state.
   * 
   * @param request - StopDesktopsRequest
   * @returns StopDesktopsResponse
   */
  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  /**
   * @param request - StopRecordContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRecordContentResponse
   */
  async stopRecordContentWithOptions(request: StopRecordContentRequest, runtime: $dara.RuntimeOptions): Promise<StopRecordContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRecordContent",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<StopRecordContentResponse>(await this.callApi(params, req, runtime), new StopRecordContentResponse({}));
  }

  /**
   * @param request - StopRecordContentRequest
   * @returns StopRecordContentResponse
   */
  async stopRecordContent(request: StopRecordContentRequest): Promise<StopRecordContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRecordContentWithOptions(request, runtime);
  }

  /**
   * Unbinds end users from cloud computers.
   * 
   * @param request - UnbindUserDesktopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktopWithOptions(request: UnbindUserDesktopRequest, runtime: $dara.RuntimeOptions): Promise<UnbindUserDesktopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.userDesktopId)) {
      query["UserDesktopId"] = request.userDesktopId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindUserDesktop",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnbindUserDesktopResponse>(await this.callApi(params, req, runtime), new UnbindUserDesktopResponse({}));
  }

  /**
   * Unbinds end users from cloud computers.
   * 
   * @param request - UnbindUserDesktopRequest
   * @returns UnbindUserDesktopResponse
   */
  async unbindUserDesktop(request: UnbindUserDesktopRequest): Promise<UnbindUserDesktopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindUserDesktopWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyCredentialResponse
   */
  async verifyCredentialWithOptions(request: VerifyCredentialRequest, runtime: $dara.RuntimeOptions): Promise<VerifyCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.credential)) {
      query["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyCredential",
      version: "2020-10-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VerifyCredentialResponse>(await this.callApi(params, req, runtime), new VerifyCredentialResponse({}));
  }

  /**
   * @param request - VerifyCredentialRequest
   * @returns VerifyCredentialResponse
   */
  async verifyCredential(request: VerifyCredentialRequest): Promise<VerifyCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyCredentialWithOptions(request, runtime);
  }

}
