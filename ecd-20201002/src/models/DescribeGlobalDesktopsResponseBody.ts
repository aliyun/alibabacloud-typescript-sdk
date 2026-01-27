// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $dara.Model {
  /**
   * @remarks
   * The client type.
   * 
   * Valid values:
   * 
   * *   html5: the web client.
   * *   android: the Android client.
   * *   linux: Linux client.
   * *   ios: the iOS client.
   * *   windows: the Windows client.
   * *   macos: the macOS client.
   * 
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @remarks
   * The status of the client.
   * 
   * Valid values:
   * 
   * *   OFF: does not allow logon.
   * *   ON: allows logon.
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
   * Whether to allow clients to set policies.
   * 
   * @example
   * true
   */
  allowClientSetting?: boolean;
  /**
   * @remarks
   * The CRON expression for the scheduled task.
   * 
   * For example, a `0 0 4 1/1 * ?` indicates that the operation is executed every day from 4:00 a.m. on the first day of each month.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * Indicates whether to forcibly execute the scheduled task. To `true` indicates that cloud computer and connection status detection are ignored, and scheduled tasks are forcibly executed.
   * 
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @remarks
   * The task duration.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The interval at which the monitoring data was queried. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   HIBERNATE
   * *   SHUTDOWN
   * 
   * @example
   * SHUTDOWN
   */
  operationType?: string;
  /**
   * @remarks
   * For a reset task, you must set the reset type.
   * 
   * Valid values:
   * 
   * *   RESET_TYPE_SYSTEM: resets the system disk.
   * *   RESET_TYPE_USER_DISK: resets the data disk.
   * *   RESET_TYPE_BOTH: resets the system disk and data disk.
   * 
   * @example
   * RESET_TYPE_BOTH
   */
  resetType?: string;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   NoOperationDisconnect: scheduled disconnection upon inactivity.
   * *   NoConnectShutdown: connectionless shutdown.
   * *   TimerBoot: scheduled start.
   * *   TimerReset: scheduled reset.
   * *   NoOperationShutdown: scheduled shutdown upon inactivity.
   * *   TimerShutdown: Stops the cloud computers on schedule.
   * *   NoOperationReboot: scheduled restart upon inactivity.
   * *   TimerReboot: scheduled restart.
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
   * Valid value:
   * 
   * *   SYSTEM: a system disk.
   * *   DATA: a data disk.
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
   * Subscription Channel
   * 
   * @example
   * Enterprise
   */
  channel?: string;
  /**
   * @remarks
   * The current version number of the cloud computer.
   * 
   * @example
   * 0.0.0-D-20220102.xxxx
   */
  currentAppVersion?: string;
  /**
   * @remarks
   * Whether to force upgrade.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The version number of the application after the update.
   * 
   * @example
   * 0.0.0-R-20220307.xxxx
   */
  newAppVersion?: string;
  newDcdVersion?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * testProject
   */
  project?: string;
  /**
   * @remarks
   * The description of the version that can be upgraded.
   */
  releaseNote?: string;
  /**
   * @remarks
   * The English release note for the new image version.
   * 
   * @example
   * Release note
   */
  releaseNoteEn?: string;
  /**
   * @remarks
   * The Japanese release note for the new image version.
   * 
   * @example
   * リリースノート
   */
  releaseNoteJp?: string;
  /**
   * @remarks
   * The size of the update package for the cloud computer image. Unit: MiB.
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
   * End user information.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the session was created.
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
   * The billing method of the cloud computer pool.
   * 
   * Valid value:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The information about the supported clients.
   */
  clients?: DescribeGlobalDesktopsResponseBodyDesktopsClients[];
  /**
   * @remarks
   * The state of the endpoint connection.
   * 
   * Valid values:
   * 
   * *   Connected
   * *   Disconnecting
   * *   Pending.
   * *   Connecting.
   * *   Disconnected.
   * *   Deleting
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
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud compute ID.
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
   * The cloud computer timer object.
   */
  desktopTimers?: DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers[];
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
   * The network ID of the office. Same as `OfficeSiteId`.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The disks.
   */
  disks?: DescribeGlobalDesktopsResponseBodyDesktopsDisks[];
  /**
   * @remarks
   * The names of end users.
   * 
   * @example
   * User1
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of end user.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The expiration time of the cloud computer.
   * 
   * *   For a cloud computer that is a package year or month, the return value is meaningful.
   * *   For pay-as-you-go cloud computers, the `2099-12-31T15:59Z` is returned.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The information about image update.
   */
  fotaUpdate?: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
  /**
   * @remarks
   * The GPU memory size. For GPU-accelerated cloud computers, this return value is significant. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * Indicates whether this is a beta version of the hibernation feature.
   * 
   * @example
   * true
   */
  hibernationBeta?: boolean;
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
  /**
   * @remarks
   * The time when the cloud desktop was last started.
   * 
   * @example
   * 2021-07-13T15:59Z
   */
  lastStartTime?: string;
  /**
   * @remarks
   * The region name.
   */
  localName?: string;
  /**
   * @remarks
   * The list of cloud computer status.
   */
  managementFlags?: string[];
  /**
   * @remarks
   * The memory of the cloud computer. Unit: MiB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The IP address of the ENI.
   * 
   * @example
   * 192.168.xx.xx
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The IDs of the office networks.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * OS Type
   * 
   * @example
   * Windows
   */
  os?: string;
  osDescription?: string;
  /**
   * @remarks
   * The operating system.
   * 
   * Valid value:
   * 
   * *   Linux
   * *   Windows
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The OS platform.
   * 
   * Valid value:
   * 
   * *   Ubuntu
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
   * The cloud computer policy ID.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The type of the protocol.
   * 
   * Valid value:
   * 
   * *   High-definition Experience (HDX)
   * *   ASP
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * If a shared cloud computer is assigned a real cloud computer, the ID of the cloud computer is displayed.
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
  regionLocation?: string;
  /**
   * @remarks
   * The type of the session.
   * 
   * Valid value:
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
   * The list of session information.
   */
  sessions?: DescribeGlobalDesktopsResponseBodyDesktopsSessions[];
  /**
   * @remarks
   * Indicates whether hibernation is supported.
   * 
   * Valid values:
   * 
   * *   true: supported
   * *   false: not supported
   * 
   * @example
   * true
   */
  supportHibernation?: boolean;
  /**
   * @remarks
   * The custom cloud computer name.
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
   * The details about the cloud computer.
   */
  desktops?: DescribeGlobalDesktopsResponseBodyDesktops[];
  /**
   * @remarks
   * The token used to start the next query. If NextToken is empty, it indicates that there is no next query.
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

