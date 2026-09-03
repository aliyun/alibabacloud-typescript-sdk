// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic creation of cloud computers in the subscription shared cloud computer. This parameter takes effect only when the `ChargeType` parameter is set to `PrePaid`, and is required in this case.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of cloud computers that can be reserved in a pay-as-you-go shared cloud computer. This parameter takes effect only when the `ChargeType` parameter is set to `PostPaid`, and is required in this case. Valid values: 
   * - 0: no reservation
   * - N: reserve N cloud computers (1 ≤ N ≤ 100)
   * 
   * > If no available cloud computers are reserved, the system must create and start a cloud computer before assigning it to the user when an end user initiates a connection request. This process takes a relatively long time. Reserve a certain number of cloud computers as needed to ensure a good experience for end users.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions allowed on each cloud computer in a multi-session shared cloud computer with multiple cloud computers.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * - For subscription shared cloud computers: the number of cloud computers to purchase. Valid values: 0 to 200.
   * - For pay-as-you-go shared cloud computers: the minimum number of cloud computers to create in the pool. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The type of the shared cloud computer.
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
   * The maximum duration that a session can remain in the connected state. The session is automatically disconnected when this duration is reached. Unit: milliseconds. Valid values: 900000 (15 minutes) to 345600000 (4 days).
   * 
   * @example
   * 900000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The retention period before cloud computers in the cloud computer pool are automatically deleted.
   * 
   * @example
   * 30
   */
  deleteDuration?: number;
  /**
   * @remarks
   * The shared cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The shared cloud computer name.
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
   * The NAS file system ID used by the user data roaming feature.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum idle duration after a user session is connected. If no keyboard or mouse activity occurs within this duration, the session is disconnected. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * 30 seconds before this duration is reached, the end user in the session receives a prompt to save document data. The end user must save document data promptly to avoid data loss.
   * 
   * > This parameter applies only to cloud computers with an image version of 1.0.2 or later.
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
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session is disconnected because the user actively disconnects or because of other unexpected factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within the retention period, the session is logged off and all unsaved data is destroyed. If the user successfully reconnects within the retention period, the user can access the original session and the data that existed before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud computers with multiple cloud computers.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers that a pay-as-you-go shared cloud computer can contain. Valid values: 0 to 500.
   * 
   * @example
   * 10
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The maximum number of cloud computers that can be subject to automatic creation in a subscription shared cloud computer. This parameter takes effect only when the `ChargeType` parameter is set to `PrePaid`, and is required in this case. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
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
   * The session occupancy threshold, which is used as the auto scaling trigger condition for multi-session shared cloud computers with multiple cloud computers. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of attached sessions / (Total number of cloud computer resources × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy is below this threshold, excess cloud computers are deleted.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cloud computer reset type.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The scaling policy group ID.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * s-kakowkdl****
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The idle shutdown duration. When the idle duration of a cloud computer reaches this value, the cloud computer is automatically shut down. If a user connects after the shutdown, the cloud computer is automatically started. Unit: milliseconds.
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

