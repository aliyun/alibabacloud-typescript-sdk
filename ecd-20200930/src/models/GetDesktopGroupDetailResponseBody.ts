// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * One of the scaling policy parameters: the number of cloud computers to purchase. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * @example
   * 0 0 0 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session is disconnected intentionally by the user or unexpectedly due to other factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within this retention period, the session is logged off and unsaved data is destroyed. If the user successfully reconnects within this retention period, the user can enter the original session and access the data before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud desktops.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * One of the scaling policy parameters: the maximum number of cloud computers. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * One of the scaling policy parameters: the minimum number of cloud computers. Valid values: 0 to 200.
   * 
   * @example
   * 1
   */
  minResAmount?: number;
  /**
   * @remarks
   * The session usage threshold, which is used as the trigger for automatic scaling of multi-session shared cloud computers. The session usage is calculated by using the following formula:
   * 
   * ```Session usage = Number of attached sessions / (Total number of cloud computers × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session usage reaches this threshold, new cloud computers are created. If the session usage does not reach this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The scheduled task type.
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
   * The cron expression.
   * 
   * @example
   * 0 58 11 ? * 2
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether to forcibly execute the scheduled task.
   * 
   * @example
   * false
   */
  forced?: boolean;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The scheduled task type.
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
   * Specifies whether automatic creation is allowed for subscription shared cloud desktops.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * This parameter applies only to pay-as-you-go shared cloud desktops and indicates the number of cloud desktops that are always reserved in the started and idle state for connection. Valid values:
   * - 0: no reservation
   * - N: reserve N cloud desktops (1 ≤ N ≤ 100)
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud desktop in multi-session shared cloud desktops.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * This parameter applies only to subscription shared cloud computers and indicates the initial number of cloud computers purchased. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * The maximum duration for a session to remain connected. When the session connection duration reaches this value, the session is automatically disconnected. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 155177335370****
   */
  creator?: string;
  /**
   * @remarks
   * The user disk type.
   * 
   * @example
   * cloud_essd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The user disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  dataDiskSize?: string;
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
   * The name of the shared cloud desktop to query.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The directory ID (office network ID).
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * The directory type.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The environment ID. This parameter is not publicly available.
   * 
   * @example
   * adifa****
   */
  envId?: string;
  /**
   * @remarks
   * The environment type. This parameter is not publicly available.
   * 
   * @example
   * Private
   */
  envType?: string;
  /**
   * @remarks
   * The expiration time of the subscription shared cloud computer. The time is in the ISO 8601 standard (UTC time).
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The list of expiration times.
   */
  expiredTimes?: string[];
  /**
   * @remarks
   * The number of GPU cores.
   * 
   * @example
   * 4
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU specifications.
   * 
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The maximum idle time before a user session is disconnected. If no keyboard or mouse operations are performed within this maximum duration after a user session is connected, the session is disconnected. Unit: milliseconds.
   * 
   * @example
   * 900000
   */
  idleDisconnectDuration?: number;
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
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session is disconnected intentionally by the user or unexpectedly due to other factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within this retention period, the session is logged off and unsaved data is destroyed. If the user successfully reconnects within this retention period, the user can enter the original session and access the data before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud desktops.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * - For pay-as-you-go shared cloud desktops, this parameter indicates the maximum number of cloud desktops that can be created.
   * - For subscription shared cloud desktops, this parameter indicates the sum of the initially purchased cloud desktops (`BuyDesktopsCount`) and the number of cloud desktops allowed for automatic creation.
   * 
   * @example
   * 3
   */
  maxDesktopsCount?: number;
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
   * - For pay-as-you-go shared cloud desktops, this parameter indicates the minimum number of cloud desktops to create.
   * - For subscription shared cloud desktops, this parameter is equivalent to `BuyDesktopsCount` and indicates the number of initially purchased cloud desktops.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the NAS file system used for the user data roaming feature.
   * 
   * @example
   * 0783b4****
   */
  nasFileSystemID?: string;
  /**
   * @remarks
   * The name of the NAS file system used for the user data roaming feature.
   * 
   * @example
   * abcd
   */
  nasFileSystemName?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-990541****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network to which the shared cloud desktop belongs.
   * 
   * @example
   * R&D Department Office Network
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The account system type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The operating system type of the cloud computer.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The ID of the cloud desktop template.
   * 
   * @example
   * b-1se9fb37r5tfq****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The name of the cloud desktop template.
   * 
   * @example
   * BundleDemo
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The shared cloud desktop type.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud desktop.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The list of policy IDs associated with the shared cloud computer.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The policy name associated with the shared cloud desktop.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The list of policy names associated with the shared cloud computer.
   */
  policyGroupNames?: string[];
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
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
   * The session usage threshold, which is used as the trigger condition for auto scaling of multi-session shared cloud desktops. The session usage is calculated by using the following formula:
   * 
   * ```Session usage = Number of attached sessions / (Total number of cloud desktop resources × Maximum number of sessions supported per cloud desktop) × 100%```
   * 
   * When the session usage reaches this threshold, new cloud desktops are created. When the session usage does not reach this threshold, excess cloud desktops are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The resource type. Currently, only ECS is supported.
   * 
   * @example
   * 0
   */
  resType?: number;
  /**
   * @remarks
   * The cloud desktop reset type.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The scheduled task information.
   */
  scaleTimerInfos?: GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos[];
  /**
   * @example
   * 0
   */
  sessionType?: number;
  /**
   * @remarks
   * The status of the shared cloud desktop.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The idle shutdown time. When the idle time of the cloud desktop reaches this value, the cloud desktop is automatically shut down. If a user connects after the shutdown, the cloud desktop is automatically started. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The system cloud disk type.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of scheduled times.
   */
  timerInfos?: GetDesktopGroupDetailResponseBodyDesktopsTimerInfos[];
  /**
   * @remarks
   * The scheduled application information.
   * 
   * @example
   * abcd
   */
  timingStrategyInfo?: string;
  /**
   * @remarks
   * The version number of the shared cloud desktop.
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
      sessionType: 'SessionType',
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
      sessionType: 'number',
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
   * The shared cloud desktop information.
   */
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  /**
   * @remarks
   * The request ID.
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

