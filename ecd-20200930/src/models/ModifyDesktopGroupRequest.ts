// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-creation of cloud computers for the subscription cloud computer share. You must specify this parameter when `ChargeType` is set to `PrePaid`.
   * 
   * Valid values:
   * 
   * *   0: disable auto-creation of cloud computers.
   * *   1: enables auto-creation of cloud computers.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The maximum number of standby cloud computers that can be reserved within the pay-as-you-go cloud computer share. You must specify this property only when `ChargeType` is set to `PostPaid`. Valid values:
   * 
   * *   0: does not reserve any cloud computer.
   * *   N: reserves N cloud computers (1≤ N ≤ 100).
   * 
   * >  Setting this parameter to 0 means no cloud computers will be reserved within the cloud computer share. In this case, the system must create, start, and assign cloud computers to end users upon request, which can be time-consuming. To improve user experience, we recommend that you reserve a specific number of cloud computers.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * The number of concurrent sessions allowed for each cloud computer within the multi-session many-to-many share.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bindAmount?: number;
  /**
   * @remarks
   * *   For subscription cloud computer shares, this parameter specifies the number of purchased cloud computers. Valid values: 0 to 200.
   * *   For pay-as-you-go cloud computer shares, this parameter specifies the minimum number of cloud computers created in the initial batch. Default value: 1. Valid values: 0 to `MaxDesktopsCount`.
   * 
   * @example
   * 5
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The type of the cloud computer share.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   teacher: teacher-oriented.
   * *   student: student-oriented.
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
   * test
   */
  comments?: string;
  /**
   * @remarks
   * The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session is automatically disconnected. Unit: milliseconds. Valid values: 900000 to 345600000. That is, the session can be connected for 15 to 5,760 minutes (4 days).
   * 
   * @example
   * 600000
   */
  connectDuration?: number;
  deleteDuration?: number;
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The name of the cloud computer share.
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
   * The ID of the File Storage NAS (NAS) file system for the user data roaming feature.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * After an end user connects to a cloud computer, the session is established. If the system does not detect inputs from the keyboard or mouse within the specified period of time, the session is closed. Unit: milliseconds. Valid values: 360000 to 3600000 (6 minutes to 60 minutes)
   * 
   * End users can receive a prompt to save data before sessions are disconnected. The system sends the prompt 30 seconds before the specified period of time is reached. To prevent data loss, end users must save the data of the sessions.
   * 
   * >  This parameter is suitable only for cloud computers whose image version is v1.0.2 or later.
   * 
   * @example
   * 120000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The IDs of the images.
   * 
   * @example
   * desktopimage-windows-server-2016-64-ch
   */
  imageId?: string;
  /**
   * @remarks
   * The retention period of a session after it is disconnected. Unit: milliseconds. Valid values: 180000 to 345600000. That is, the session can be retained for 3 to 5,760 minutes (4 days) after it is disconnected. If you set this parameter to 0, the session is permanently retained after it is disconnected.
   * 
   * When a session is disconnected, take note of the following situations: If an end user does not resume the session within the specified duration, the session is closed and all unsaved data is cleared. If the end user resumes the session within the specified duration, the end user can continue to access data of the session.
   * 
   * @example
   * 1000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session many-to-many share.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   0: depth first.
   * *   1: breadth first.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers allowed in the pay-as-you-go cloud computer share. Valid values: 0 to 500.
   * 
   * @example
   * 10
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The maximum number of auto-created cloud computers allowed in the subscription cloud computer share. You must specify this parameter when `ChargeType` is set to `PrePaid`. Default value: 1. Valid values: 0 to `MaxDesktopsCount`.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * The ID of the cloud computer template.
   * 
   * @example
   * b-7t275tpgjueeu****
   */
  ownBundleId?: string;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The IDs of policy groups.
   */
  policyGroupIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable user data roaming.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The threshold for the ratio of connected sessions, which triggers automatic scaling of cloud computers within the multi-session many-to-many share. To calculate the ratio of connected sessions, use the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`
   * 
   * If the session ratio exceeds the threshold, new cloud computers are provisioned. If it falls below the threshold, additional cloud computers are removed.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 0.5
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
   * The disk reset type of cloud computers.
   * 
   * Valid values:
   * 
   * *   0: does not reset disks.
   * 
   * *   1: resets only the system disks.
   * 
   * *   2: resets only the user disks.
   * 
   * *   3: resets the system disks and user disks.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The ID of the scaling policy group.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * s-kakowkdl****
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The period of time before the idle cloud computer enters the Stopped state. When the specified period of time is reached, the cloud computer is automatically stopped. If an end user connects to the stopped cloud computer, the cloud computer automatically starts. Unit: milliseconds.
   * 
   * @example
   * 180000
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

