// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * Scaling parameter: Number of cloud computers to buy. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * Cron expression for the scheduled scaling task.
   * 
   * @example
   * 0 0 0 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * Time to keep a disconnected session active. Unit: milliseconds. Valid range: 180000 (3 minutes) to 345600000 (4 days). A value of 0 means keep indefinitely.
   * 
   * If a session disconnects due to user action or other reasons, the timer starts at disconnection. If no reconnection occurs within this duration, the session logs off and unsaved data is destroyed. If the user reconnects successfully within this duration, they resume the original session and access all previously saved data.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * Traffic steering policy for multi-session, multi-cloud computer deployments.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * Scaling parameter: Maximum number of cloud computers. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * Scaling parameter: Minimum number of cloud computers. Valid values: 0 to 200.
   * 
   * @example
   * 1
   */
  minResAmount?: number;
  /**
   * @remarks
   * Session occupancy threshold used to trigger auto scaling for multi-session, multi-cloud computer deployments. Session occupancy is calculated as:
   * 
   * `Session occupancy = (Bound sessions / (Total cloud computers × Max sessions per cloud computer)) × 100%`
   * 
   * When occupancy reaches this threshold, new cloud computers are created. When occupancy falls below this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * Scheduled scaling task type.
   * 
   * @example
   * rise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buyResAmount: 'BuyResAmount',
      cron: 'Cron',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxResAmount: 'MaxResAmount',
      minResAmount: 'MinResAmount',
      ratioThreshold: 'RatioThreshold',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResAmount: 'number',
      cron: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxResAmount: 'number',
      minResAmount: 'number',
      ratioThreshold: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktopsTimerInfos extends $dara.Model {
  /**
   * @remarks
   * Cron expression.
   * 
   * @example
   * 0 58 11 ? * 2
   */
  cronExpression?: string;
  /**
   * @remarks
   * Whether to force execute this scheduled task.
   * 
   * @example
   * false
   */
  forced?: boolean;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Scheduled task type.
   * 
   * @example
   * 1
   */
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      forced: 'Forced',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      forced: 'boolean',
      status: 'number',
      timerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktops extends $dara.Model {
  /**
   * @remarks
   * Whether to allow automatic creation of subscription cloud computers.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * Number of pre-started, idle cloud computers reserved for immediate connection. Applies only to pay-as-you-go cloud computers. Valid values:
   * 
   * - 0: No reservation
   * 
   * - N: Reserve N cloud computer(s) (1 ≤ N ≤ 100)
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * Maximum concurrent sessions per cloud computer in multi-session, multi-cloud computer deployments.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * Initial purchase count for subscription cloud computers. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * Maximum time a session remains connected. The session disconnects automatically when this duration is reached. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  connectDuration?: number;
  /**
   * @remarks
   * vCPU count.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 155177335370****
   */
  creator?: string;
  /**
   * @remarks
   * User disk type.
   * 
   * @example
   * cloud_essd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * User disk capacity in GiB.
   * 
   * @example
   * 80
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * Cloud computer share ID.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share that you want to query.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * Directory ID (office network ID).
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * Directory type.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  envId?: string;
  envType?: string;
  /**
   * @remarks
   * Expiration time for subscription cloud computers.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  expiredTimes?: string[];
  /**
   * @remarks
   * Number of GPU cores.
   * 
   * @example
   * 4
   */
  gpuCount?: number;
  /**
   * @remarks
   * GPU specification.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * Time after which an idle session disconnects. If no keyboard or mouse activity occurs during this period, the session disconnects. Unit: milliseconds.
   * 
   * @example
   * 900000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * Time to keep a disconnected session active. Unit: milliseconds. Valid range: 180000 (3 minutes) to 345600000 (4 days). A value of 0 means keep indefinitely.
   * 
   * If a session disconnects due to user action or other reasons, the timer starts at disconnection. If no reconnection occurs within this duration, the session logs off and unsaved data is destroyed. If the user reconnects successfully within this duration, they resume the original session and access all previously saved data.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * Traffic steering policy for multi-session, multi-cloud computer deployments.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * - For pay-as-you-go cloud computers, this is the maximum number of cloud computers that can be created.
   * 
   * - For subscription cloud computers, this is the sum of the initial purchase count (`BuyDesktopsCount`) and the number of cloud computers allowed for automatic creation.
   * 
   * @example
   * 3
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * Memory size in MiB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * - For pay-as-you-go cloud computers, this is the minimum number of cloud computers to create.
   * 
   * - For subscription cloud computers, this equals `BuyDesktopsCount`, the initial purchase count.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * NAS file system ID used for user profile roaming.
   * 
   * @example
   * 0783b4****
   */
  nasFileSystemID?: string;
  /**
   * @remarks
   * NAS file system name used for user profile roaming.
   * 
   * @example
   * abcd
   */
  nasFileSystemName?: string;
  /**
   * @remarks
   * Office network ID.
   * 
   * @example
   * cn-hangzhou+dir-990541****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * Name of the office network where the cloud computer share resides.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  osType?: string;
  /**
   * @remarks
   * Cloud computer template ID.
   * 
   * @example
   * b-1se9fb37r5tfq****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * Cloud computer template name.
   * 
   * @example
   * BundleDemo
   */
  ownBundleName?: string;
  /**
   * @remarks
   * Cloud computer share type.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * Billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * ID of the policy associated with the cloud computer share.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The IDs of the policies that are associated with the cloud computer share.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The name of the policy that is associated with the cloud computer share.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * A list of policy names associated with cloud computer share.
   */
  policyGroupNames?: string[];
  /**
   * @remarks
   * Whether to enable user profile roaming.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  protocolType?: string;
  /**
   * @remarks
   * Session occupancy threshold used to trigger auto scaling for multi-session, multi-cloud computer deployments. Session occupancy is calculated as:
   * 
   * `Session occupancy = (Bound sessions / (Total cloud computers × Max sessions per cloud computer)) × 100%`
   * 
   * When occupancy reaches this threshold, new cloud computers are created. When occupancy falls below this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * Resource type. Only Elastic Compute Service (ECS) is supported.
   * 
   * @example
   * 0
   */
  resType?: number;
  /**
   * @remarks
   * Cloud computer reset type.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * Scheduled scaling task information.
   */
  scaleTimerInfos?: GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos[];
  /**
   * @remarks
   * Cloud computer share status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Idle shutdown time. The cloud computer shuts down automatically after being idle for this duration. If a user connects after shutdown, the cloud computer starts automatically. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  stopDuration?: number;
  /**
   * @remarks
   * System disk type.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * System disk capacity in GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * List of scheduled tasks.
   */
  timerInfos?: GetDesktopGroupDetailResponseBodyDesktopsTimerInfos[];
  /**
   * @remarks
   * Scheduled application information.
   * 
   * @example
   * abcd
   */
  timingStrategyInfo?: string;
  /**
   * @remarks
   * The version number of the cloud computer share.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      envId: 'EnvId',
      envType: 'EnvType',
      expiredTime: 'ExpiredTime',
      expiredTimes: 'ExpiredTimes',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      nasFileSystemID: 'NasFileSystemID',
      nasFileSystemName: 'NasFileSystemName',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      policyGroupName: 'PolicyGroupName',
      policyGroupNames: 'PolicyGroupNames',
      profileFollowSwitch: 'ProfileFollowSwitch',
      protocolType: 'ProtocolType',
      ratioThreshold: 'RatioThreshold',
      resType: 'ResType',
      resetType: 'ResetType',
      scaleTimerInfos: 'ScaleTimerInfos',
      status: 'Status',
      stopDuration: 'StopDuration',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      timerInfos: 'TimerInfos',
      timingStrategyInfo: 'TimingStrategyInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      comments: 'string',
      connectDuration: 'number',
      cpu: 'number',
      creationTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      envId: 'string',
      envType: 'string',
      expiredTime: 'string',
      expiredTimes: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuSpec: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      nasFileSystemID: 'string',
      nasFileSystemName: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      policyGroupName: 'string',
      policyGroupNames: { 'type': 'array', 'itemType': 'string' },
      profileFollowSwitch: 'boolean',
      protocolType: 'string',
      ratioThreshold: 'number',
      resType: 'number',
      resetType: 'number',
      scaleTimerInfos: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos },
      status: 'number',
      stopDuration: 'number',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktopsTimerInfos },
      timingStrategyInfo: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expiredTimes)) {
      $dara.Model.validateArray(this.expiredTimes);
    }
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    if(Array.isArray(this.policyGroupNames)) {
      $dara.Model.validateArray(this.policyGroupNames);
    }
    if(Array.isArray(this.scaleTimerInfos)) {
      $dara.Model.validateArray(this.scaleTimerInfos);
    }
    if(Array.isArray(this.timerInfos)) {
      $dara.Model.validateArray(this.timerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the cloud computer share.
   */
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1B5268CE-5EB3-545F-9F38-A8BCF710****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: GetDesktopGroupDetailResponseBodyDesktops,
      requestId: 'string',
    };
  }

  validate() {
    if(this.desktops && typeof (this.desktops as any).validate === 'function') {
      (this.desktops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

