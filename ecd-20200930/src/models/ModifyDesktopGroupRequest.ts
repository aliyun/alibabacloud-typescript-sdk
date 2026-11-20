// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow automatic creation of cloud desktops in a subscription shared cloud desktop. This parameter takes effect and is required only when the `ChargeType` parameter is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of reserved cloud desktops allowed in a pay-as-you-go shared cloud desktop. This parameter takes effect and is required only when the `ChargeType` parameter is set to `PostPaid`. Valid values: 
   * - 0: No reserved cloud desktops.
   * - N: N reserved cloud desktops (1 ≤ N ≤ 100).
   * 
   * > If no available cloud desktops are reserved, when an end user initiates a connection request, the system must first create and start a cloud desktop and then assign it to the user, which takes a relatively long time. Reserve a certain number of cloud desktops as needed to ensure the user experience.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud desktop in multi-session and multi-desktop shared cloud desktops.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * - For a subscription shared cloud desktop: the number of cloud desktops to purchase. Valid values: 0 to 200.
   * - For a pay-as-you-go shared cloud desktop: the minimum number of cloud desktops to create in the pool. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The type of the shared cloud desktop.
   * 
   * > This parameter is not available.
   * 
   * @example
   * teacher
   */
  classify?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * The maximum duration for which a session can remain connected. When the session connection duration reaches this value, the session is automatically disconnected. Unit: milliseconds. Valid values: 900000 (15 minutes) to 345600000 (4 days).
   * 
   * @example
   * 900000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The retention period before a cloud desktop in the cloud desktop pool is automatically deleted.
   * 
   * @example
   * 30
   */
  deleteDuration?: number;
  /**
   * @remarks
   * The ID of the shared cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the shared cloud desktop.
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
   * The ID of the NAS file system used for the user data roaming feature.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum idle time before a user session is disconnected. If no keyboard or mouse operations are performed within this maximum duration after a user session is connected, the session is disconnected. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * 30 seconds before this duration is reached, the end user in the session receives a prompt message to save document data. The end user must save the document data promptly to avoid data loss.
   * 
   * > This parameter applies only to cloud desktops with an image version of 1.0.2 or later.
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
   * If a session is disconnected intentionally by the user or unexpectedly due to other factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within this period, the session is logged off and unsaved data is destroyed. If the user successfully reconnects within this period, the user can enter the original session and access the data before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session and multi-desktop shared cloud desktops.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud desktops that can be accommodated in a pay-as-you-go shared cloud desktop. Valid values: 0 to 500.
   * 
   * @example
   * 10
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The upper limit for the automatic creation of cloud desktops in a subscription shared cloud desktop. This parameter takes effect and is required only when the `ChargeType` parameter is set to `PrePaid`. Default value: 1. Valid values: 0 to the value of `MaxDesktopsCount`.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the cloud desktop template.
   * 
   * @example
   * b-7t275tpgjueeu****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The ID of the policy.
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
   * > This parameter is not available.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The session usage threshold, which is used as the trigger for automatic scaling of multi-session and multi-desktop shared cloud desktops. The formula for session usage is:
   * 
   * ```Session usage = Number of attached sessions / (Total number of cloud desktop resources × Maximum number of sessions supported per cloud desktop) × 100%```
   * 
   * When the session usage reaches this threshold, new cloud desktops are created. When the session usage does not reach this threshold, excess cloud desktops are deleted.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The reset type of the cloud desktop.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The ID of the scaling policy group.
   * 
   * > This parameter is not available.
   * 
   * @example
   * s-kakowkdl****
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The idle shutdown time. When the idle time of a cloud desktop reaches this value, the cloud desktop is automatically shut down. If a user connects to the cloud desktop after it is shut down, the cloud desktop is automatically started. Unit: milliseconds.
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

