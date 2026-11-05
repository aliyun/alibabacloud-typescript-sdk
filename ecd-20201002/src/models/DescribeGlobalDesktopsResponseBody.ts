// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $dara.Model {
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
   * The client status.
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
  /**
   * @remarks
   * Specifies whether to allow clients to configure policies.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The cron expression for the scheduled task. For example, `0 0 4 1/1 * ?` indicates that the operation is executed daily starting from 4:00 AM on the first day of each month.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to enforce the execution. A value of `true` indicates that the scheduled task is forcibly executed, ignoring the cloud computer and connection status checks.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The task execution time. The time is in ISO 8601 format and in the UTC time zone (indicated by Z).
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The time interval, in seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The scheduled task type.
   * 
   * @example
   * SHUTDOWN
   */
  operationType?: string;
  /**
   * @remarks
   * The reset type. This parameter is required if the task is a reset task.
   * 
   * @example
   * RESET_TYPE_BOTH
   */
  resetType?: string;
  /**
   * @remarks
   * The scheduled task type.
   * 
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
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * d-jedbpr4sl9l37****
   */
  diskId?: string;
  /**
   * @remarks
   * The cloud disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  diskSize?: number;
  /**
   * @remarks
   * The cloud disk type.
   * 
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
   * @remarks
   * The subscription channel.
   * 
   * @example
   * Enterprise
   */
  channel?: string;
  /**
   * @remarks
   * The current version number of the cloud desktop.
   * 
   * @example
   * 0.0.0-D-20220102.xxxx
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Specifies whether the upgrade is forced.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The updated application version number.
   * 
   * @example
   * 0.0.0-R-20220307.xxxx
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
   * The project name.
   * 
   * @example
   * testProject
   */
  project?: string;
  /**
   * @remarks
   * The description of the upgradable version.
   * 
   * @example
   * Test upgrade package 03-07
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English description of the upgradable version.
   * 
   * @example
   * Release note
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese description of the upgradable version.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the installation package for the upgradable version. Unit: MiB.
   * 
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
   * @remarks
   * The end user information.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The session creation time. The time is in the ISO 8601 format and the UTC time zone (indicated by Z).
   * 
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
   * @remarks
   * The billing method.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The supported client information.
   */
  clients?: DescribeGlobalDesktopsResponseBodyDesktopsClients[];
  /**
   * @remarks
   * The endpoint connection status.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time of the cloud desktop. The time is in the ISO 8601 format and the UTC time zone (indicated by Z).
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the shared cloud desktop.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
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
   * The cloud desktop timer object.
   */
  desktopTimers?: DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers[];
  /**
   * @remarks
   * The instance type of the cloud desktop.
   * 
   * @example
   * ecd.basic.large
   */
  desktopType?: string;
  /**
   * @remarks
   * The ID of the office network, which is the same as `OfficeSiteId`.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The cloud disk information.
   */
  disks?: DescribeGlobalDesktopsResponseBodyDesktopsDisks[];
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of end users.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The expiration time of the cloud desktop. The time is in the ISO 8601 format and the UTC time zone (indicated by Z).    
   * 
   * - For subscription cloud desktops, this value is meaningful.
   * - For pay-as-you-go cloud desktops, `2099-12-31T15:59Z` is returned.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The update information of the image.
   */
  fotaUpdate?: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @remarks
   * The GPU memory size.
   * This value is meaningful only for GPU-accelerated cloud desktops. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * Specifies whether the hibernation feature is in beta.
   * 
   * @example
   * true
   */
  hibernationBeta?: boolean;
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
   * The last start time, which is the most recent time the cloud desktop was started. The time is in the ISO 8601 format and the UTC time zone (indicated by Z).
   * 
   * @example
   * 2021-07-13T15:59Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Shanghai)
   */
  localName?: string;
  /**
   * @remarks
   * The list of cloud desktop management statuses.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The memory size of the cloud desktop. Unit: MiB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The IP address of the network interface.
   * 
   * @example
   * 192.168.XX.XX
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  os?: string;
  /**
   * @remarks
   * The operating system platform description.
   * 
   * @example
   * Genuine Windows license
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
   * The operating system platform information.
   * 
   * @example
   * Ubuntu
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the cloud desktop policy.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
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
   * The ID of the actual cloud desktop. This value is returned only if the cloud desktop is a shared cloud desktop and an actual cloud desktop has been assigned.
   * 
   * @example
   * ecd-gx2x1dhsm****
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
   * The session type.
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  /**
   * @remarks
   * The list of session information.
   */
  sessions?: DescribeGlobalDesktopsResponseBodyDesktopsSessions[];
  /**
   * @remarks
   * Specifies whether hibernation is supported.
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * The custom name of the cloud desktop.
   * 
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

export class DescribeGlobalDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the cloud desktops.
   */
  desktops?: DescribeGlobalDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The token that is used to start the next query. If NextToken is empty, no more results are available.
   * 
   * @example
   * eyJkZWZhdWx0IjpbIjIwMjItMDgtMTdUM****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

