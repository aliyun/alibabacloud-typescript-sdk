// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers to purchase, which is one of the scaling policy parameters. Valid values: 0 to 200.
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
   * The duration for which a session is retained after disconnection. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session is disconnected because the user actively disconnects or because of other unexpected factors, the retention period starts from the moment of disconnection. If the user does not reconnect to the session within the retention period, the session is logged off and all unsaved data is destroyed. If the user successfully reconnects within the retention period, the user can still access the original session and the data that existed before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud computers with multiple instances.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers, which is one of the scaling policy parameters. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * The minimum number of cloud computers, which is one of the scaling policy parameters. Valid values: 0 to 200.
   * 
   * @example
   * 1
   */
  minResAmount?: number;
  /**
   * @remarks
   * The session occupancy threshold used as the trigger condition for auto scaling of multi-session shared cloud computers. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of bound sessions / (Total number of cloud computer resources × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy is below this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The type of the scheduled task.
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
   * Indicates whether the scheduled task is forcibly executed.
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
   * The type of the scheduled task.
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
   * Indicates whether automatic creation of cloud computers is allowed for subscription shared cloud computers.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * This parameter applies only to pay-as-you-go shared cloud computers. It specifies the number of cloud computers that are always reserved in the powered-on and idle state, ready for connections. Valid values:
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud computer in multi-session shared cloud computers with multiple instances.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The initial number of cloud computers purchased. This parameter applies only to subscription shared cloud computers. Valid values: 0 to 200.
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
   * The maximum duration that a session can remain in the connected state. The session is automatically disconnected when this duration is reached. Unit: milliseconds.
   * 
   * @example
   * 3600000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time. The time is in the ISO 8601 standard in UTC.
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
   * The user disk capacity. Unit: GiB.
   * 
   * @example
   * 80
   */
  dataDiskSize?: string;
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud computer to query.
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
   * The expiration time of the subscription shared cloud computers. The time follows the ISO 8601 standard in UTC.
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
   * The maximum idle duration after a user session is connected. If no keyboard or mouse operation is performed within this duration, the session is disconnected. Unit: milliseconds.
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
   * The duration for which a session is retained after disconnection. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is retained indefinitely.
   * 
   * When a session is disconnected because the user actively disconnects or because of unexpected factors, the retention period starts from the moment of disconnection. If the user does not reconnect to the session within the retention period, the session is logged off and all unsaved data is destroyed. If the user successfully reconnects within the retention period, the user can still access the original session and the data that existed before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud computers with multiple instances.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * - For pay-as-you-go shared cloud computers, this parameter specifies the maximum number of cloud computers that can be created.
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
   * - For pay-as-you-go shared cloud computers, this parameter indicates the minimum number of cloud computers to create.
   * - For subscription shared cloud computers, this parameter is equivalent to BuyDesktopsCount, indicating the number of cloud computers initially purchased.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the NAS file system used for user data roaming.
   * 
   * @example
   * 0783b4****
   */
  nasFileSystemID?: string;
  /**
   * @remarks
   * The name of the NAS file system used for user data roaming.
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
   * The name of the office network to which the shared cloud computer belongs.
   * 
   * @example
   * R&D Office Network
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
   * The operating system type of the cloud computers.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * @example
   * b-1se9fb37r5tfq****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The cloud computer template name.
   * 
   * @example
   * BundleDemo
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The type of the shared cloud computer.
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
   * The ID of the policy associated with the shared cloud computer.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The list of policy IDs associated with the shared cloud computers.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The Policy Name associated with the shared cloud computer.
   * 
   * @example
   * All enabled policy
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The list of policy names associated with the shared cloud computers.
   */
  policyGroupNames?: string[];
  /**
   * @remarks
   * Indicates whether user data roaming is enabled.
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
   * The session occupancy threshold, used as the auto scaling trigger condition for multi-session shared cloud computers. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of bound sessions / (Total number of cloud computer resources × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy is below this threshold, excess cloud computers are deleted.
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
   * The reset type of the cloud computer.
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
   * @remarks
   * The status of the shared cloud computer.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The idle shutdown duration. When the cloud computer has been idle for this duration, it is automatically shut down. If a user connects after shutdown, the cloud computer is automatically started. Unit: milliseconds.
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
   * The system cloud disk capacity. Unit: GiB.
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
   * The version number of the shared cloud computer.
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
   * The information about shared cloud computers.
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

