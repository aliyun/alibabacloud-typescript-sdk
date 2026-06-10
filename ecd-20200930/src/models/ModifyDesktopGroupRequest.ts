// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic creation of cloud computers in a subscription shared cloud computer group. This parameter is required and takes effect only when `ChargeType` is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of cloud computers to reserve in a pay-as-you-go shared cloud computer group. This parameter is required and takes effect only when `ChargeType` is set to `PostPaid`. Valid values:
   * 
   * - 0: No cloud computers are reserved.
   * 
   * - N: N cloud computers are reserved (1 ≤ N ≤ 100).
   * 
   * > If you do not reserve any cloud computers, the system must create and start one when an end user requests a connection. This process takes longer. Reserve a specific number of cloud computers to ensure a good user experience.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions that each cloud computer in a multi-session shared cloud computer group can support.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * - For a subscription shared cloud computer group: the number of cloud computers to purchase. Valid values: 0 to 200.
   * 
   * - For a pay-as-you-go shared cloud computer group: the minimum number of cloud computers to create in the pool. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The type of the shared cloud computer group.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * teacher
   */
  classify?: string;
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
   * The maximum duration of a session. When the session duration reaches this value, the session is automatically disconnected. Unit: milliseconds. Valid values: 900000 (15 minutes) to 345600000 (4 days).
   * 
   * @example
   * 900000
   */
  connectDuration?: number;
  deleteDuration?: number;
  /**
   * @remarks
   * The ID of the shared cloud computer group.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Shared cloud desktop name.
   * 
   * @example
   * desktopGroupName1
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * Specifies whether to disable session management.
   * 
   * @example
   * true
   */
  disableSessionConfig?: boolean;
  /**
   * @remarks
   * The ID of the NAS file system used for user data roaming.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum idle time for a session. If there is no keyboard or mouse input within this time, the session disconnects. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * Thirty seconds before the session disconnects, the end user receives a message to save their data. The end user must save their data to prevent data loss.
   * 
   * > This parameter is applicable only to cloud computers with an image version of 1.0.2 or later.
   * 
   * @example
   * 360000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * desktopimage-windows-server-2016-64-ch
   */
  imageId?: string;
  /**
   * @remarks
   * The duration to keep a session active after it disconnects. Unit: milliseconds. Valid values range from 180000 (3 minutes) to 345600000 (4 days). A value of 0 means the session is always kept active.
   * 
   * When a session disconnects, either intentionally or unexpectedly, a timer begins. If the user fails to reconnect within this duration, the session is logged off, and any unsaved data is destroyed. If the user reconnects within this duration, they can resume the original session and access the data from before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for a multi-session shared cloud computer group that contains multiple cloud computers.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers that a pay-as-you-go shared cloud computer group can contain. Valid values: 0 to 500.
   * 
   * @example
   * 10
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The maximum number of cloud computers that are automatically created in a subscription shared cloud computer group. This parameter is required and takes effect only when `ChargeType` is set to `PrePaid`. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * @example
   * b-7t275tpgjueeu****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The list of policy group IDs.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The session usage threshold. This threshold is a condition for triggering auto scaling in a multi-session shared cloud computer group. The session usage is calculated using the following formula:
   * 
   * `Session usage = Number of active sessions / (Total number of cloud computers × Maximum number of sessions per cloud computer) × 100%`
   * 
   * When the session usage reaches this threshold, new cloud computers are created. If the session usage is below this threshold, idle cloud computers are deleted.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to get a list of regions that WUYING Workspace supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reset type for the cloud computers.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The ID of the auto scaling policy group.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * s-kakowkdl****
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The idle shutdown time. The cloud computer automatically shuts down when it is idle for this amount of time. If a user connects to a shutdown cloud computer, it automatically starts. Unit: milliseconds.
   * 
   * @example
   * 300000
   */
  stopDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      buyDesktopsCount: 'BuyDesktopsCount',
      classify: 'Classify',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      deleteDuration: 'DeleteDuration',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      disableSessionConfig: 'DisableSessionConfig',
      fileSystemId: 'FileSystemId',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      ownBundleId: 'OwnBundleId',
      policyGroupId: 'PolicyGroupId',
      policyGroupIds: 'PolicyGroupIds',
      profileFollowSwitch: 'ProfileFollowSwitch',
      ratioThreshold: 'RatioThreshold',
      regionId: 'RegionId',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
      stopDuration: 'StopDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      buyDesktopsCount: 'number',
      classify: 'string',
      comments: 'string',
      connectDuration: 'number',
      deleteDuration: 'number',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      disableSessionConfig: 'boolean',
      fileSystemId: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      ownBundleId: 'string',
      policyGroupId: 'string',
      policyGroupIds: { 'type': 'array', 'itemType': 'string' },
      profileFollowSwitch: 'boolean',
      ratioThreshold: 'number',
      regionId: 'string',
      resetType: 'number',
      scaleStrategyId: 'string',
      stopDuration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupIds)) {
      $dara.Model.validateArray(this.policyGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

