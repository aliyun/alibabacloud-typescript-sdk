// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers that you purchase in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * @example
   * 0 0 0 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The duration that is retained after the session is disconnected. Unit: milliseconds. Valid values: 180000 to 345600000. That is, the session can be retained for 3 to 5760 minutes (4 days). If you specify the value to 0, the session is permanently retained.
   * 
   * When a session is disconnected, take note of the following situations: If an end user does not resume the session within the specified duration, the session is closed and all unsaved data is cleared. If the end user resumes the session within the specified duration, the end user can still access data of the session.
   * 
   * @example
   * 600000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session many-to-many share.
   * 
   * Valid values:
   * 
   * *   0: depth-first.
   * *   1: breadth-first.
   * 
   * @example
   * 1
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * The minimum number of cloud computers in the cloud computer pool. This parameter is one of the auto scaling parameters. Valid values: 0 to 200.
   * 
   * @example
   * 1
   */
  minResAmount?: number;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions, which triggers automatic scaling of cloud computers within the multi-session many-to-many share. To calculate the ratio of connected sessions, use the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`.
   * 
   * If the session ratio exceeds the threshold, new cloud computers are provisioned. If it falls below the threshold, additional cloud computers are removed.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   drop: decline policy
   * *   normal: normal policy
   * *   peak: peak hour policy
   * *   rise: rise policy
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
   * The status of the cloud computer pool.
   * 
   * Valid values:
   * 
   * *   1: enabled
   * *   2: disabled
   * *   3: deleted
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   1: scheduled reset
   * *   2: scheduled startup
   * *   3: scheduled stop
   * *   4: scheduled restart
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
   * Specifies whether to enable batch-based automatic creation of cloud computers in the subscription cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: enables batch-based automatic creation of cloud computers.
   * *   1: disables batch-based automatic creation of cloud computers.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * This parameter applies to pay-as-you-go cloud computer shares and specifies the number of standby cloud computers that can be reserved per cloud computer share. Valid values:
   * 
   * *   0: does not reserve any cloud computers.
   * *   N: reserves N cloud computers (1≤ N ≤ 100).
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The maximum number of concurrent sessions allowed per cloud computer within the multi-session many-to-many share.
   * 
   * @example
   * 1
   */
  bindAmount?: number;
  /**
   * @remarks
   * *   The number of purchased cloud computers in the subscription share. Valid values: 0 to 200.
   * *   The minimum initial number of cloud computers created in the pay-as-you-go share. Default value: 1. Valid values: 0 to `MaxDesktopsCount`.
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
   * for students
   */
  comments?: string;
  /**
   * @remarks
   * The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session is automatically disconnected. Unit: milliseconds.
   * 
   * @example
   * 60000
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
   * The time when the desktop group was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-11-06T08:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that creates the cloud computer pool.
   * 
   * @example
   * 155177335370****
   */
  creator?: string;
  /**
   * @remarks
   * The category of the user disk.
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
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-3uiojcc0j4kh7****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
   * 
   * @example
   * DesktopGroupDemo
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The ID of the directory or office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * The type of the directory.
   * 
   * @example
   * SIMPLE
   */
  directoryType?: string;
  /**
   * @remarks
   * The expiration date of the subscription cloud computer share.
   * 
   * @example
   * 2021-12-31T15:59Z
   */
  expiredTime?: string;
  expiredTimes?: string[];
  /**
   * @remarks
   * The number of vGPUs.
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
   * After an end user connects to a cloud computer, the session is established. If the system does not detect any inputs from the keyboard or mouse within the specified period of time, the session is closed. Unit: milliseconds.
   * 
   * @example
   * 900000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The amount of time to retain a session after it is disconnected. Unit: milliseconds. Valid values: 180000 to 345600000. That is, the session can be retained for 3 to 5760 minutes (4 days). If you specify the value to 0, the session is permanently retained.
   * 
   * When a session is disconnected, take note of the following situations: If an end user does not resume the session within the specified duration, the session is closed and all unsaved data is cleared. If the end user resumes the session within the specified duration, the end user can still access data of the session.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session many-to-many share.
   * 
   * Valid values:
   * 
   * *   0: depth-first.
   * *   1: breadth-first.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers allowed in the pay-as-you-go cloud computer share.
   * 
   * @example
   * 10
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
   * The number of cloud computers created in the initial batch within the subscription cloud computer share.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the File Storage NAS (NAS) file system for the user data roaming feature.
   * 
   * @example
   * 0783b4****
   */
  nasFileSystemID?: string;
  /**
   * @remarks
   * The name of the NAS file system for the user data roaming feature.
   * 
   * @example
   * abcd
   */
  nasFileSystemName?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-990541****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network in which the cloud computer resides.
   * 
   * @example
   * test
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * Valid values:
   * 
   * *   PERSONAL: individual office network
   * *   SIMPLE: convenience office network
   * *   AD_CONNECTOR: enterprise Active Directory (AD) office network
   * *   RAM: Resource Access Management (RAM)-based office network
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  osType?: string;
  /**
   * @remarks
   * The ID of the cloud computer template.
   * 
   * @example
   * b-1se9fb37r5tfq****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The name of the cloud computer template.
   * 
   * @example
   * BundleDemo
   */
  ownBundleName?: string;
  /**
   * @remarks
   * The type of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: a one-to-many share.
   * *   1: a many-to-many share.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * 
   * *   PrePaid: subscription.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the applied policy.
   * 
   * @example
   * pg-9cktlowtxfl6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The IDs of the applied policies.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * The name of the applied policy.
   * 
   * @example
   * test
   */
  policyGroupName?: string;
  /**
   * @remarks
   * The names of the applied policies.
   */
  policyGroupNames?: string[];
  /**
   * @remarks
   * Indicates whether user data roaming is enabled.
   * 
   * @example
   * true
   */
  profileFollowSwitch?: boolean;
  protocolType?: string;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions, which triggers automatic scaling of cloud computers within the multi-session many-to-many share. To calculate the ratio of connected sessions, use the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`.
   * 
   * If the session ratio exceeds the threshold, new cloud computers are provisioned. If it falls below the threshold, additional cloud computers are removed.
   * 
   * @example
   * 0.6
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The type of the resource. Only Elastic Compute Service (ECS) instances are supported.
   * 
   * Valid value:
   * 
   * *   0: ECS
   * 
   * @example
   * 0
   */
  resType?: number;
  /**
   * @remarks
   * The disk reset type of the cloud computer.
   * 
   * Valid values:
   * 
   * *   0: does not reset disks.
   * *   1: resets only the system disk.
   * *   2: resets only the user disk.
   * *   3: resets the system disk and the user disk.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The scheduled tasks.
   */
  scaleTimerInfos?: GetDesktopGroupDetailResponseBodyDesktopsScaleTimerInfos[];
  /**
   * @remarks
   * The status of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: The cloud computer share is unpaid.
   * *   1: The cloud computer share is normal.
   * *   2: The cloud computer share expired, or your account has an overdue payment.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The period of time before the idle cloud computer enters the Stopped state. If the specified value is reached, the cloud computer is automatically stopped. If an end user connects to the stopped cloud computer, the cloud computer automatically starts. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The category of the system disk.
   * 
   * @example
   * cloud_essd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The system disk capacity. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of scheduled points in time for desktop group tasks.
   */
  timerInfos?: GetDesktopGroupDetailResponseBodyDesktopsTimerInfos[];
  /**
   * @remarks
   * The information about the scheduling policy.
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
   * 1
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
   * The cloud computers within the share.
   */
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  /**
   * @remarks
   * The ID of the request.
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

