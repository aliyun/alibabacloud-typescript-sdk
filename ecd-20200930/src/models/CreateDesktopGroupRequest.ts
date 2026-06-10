// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key cannot be an empty string, can be up to 128 characters long, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be an empty string. The value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to authorize all users in the desktop group\\"s categories.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * Alice
   */
  allClassifyUsers?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic creation of desktops in the subscription desktop group. This parameter is required and applies only when `ChargeType` is set to `PrePaid`.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of desktops to reserve in the pay-as-you-go desktop group. This parameter is required and applies only when `ChargeType` is set to `PostPaid`. Valid values:
   * 
   * - 0: Does not reserve desktops.
   * 
   * - N: Reserves N desktops, where N is an integer from 1 to 100.
   * 
   * > If no desktops are reserved, a user must wait for a new desktop to be created and started, which can cause connection delays. We recommend reserving an appropriate number of desktops to improve connection times.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * Specifies whether to automatically pay for subscription orders.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription desktop group.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The number of concurrent sessions allowed per desktop in a multi-session desktop group.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The bundle ID.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * - For `subscription` desktop groups: The number of desktops to purchase. Valid values: 0 to 200.
   * 
   * - For `pay-as-you-go` desktop groups: The minimum number of desktops in the group. Valid values: 0 to `MaxDesktopsCount`. The default value is 1.
   * 
   * @example
   * 3
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The billing method of the desktops.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The type of the desktop group.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * teacher
   */
  classify?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. You can use your client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * A description or comments for the desktop group.
   * 
   * @example
   * comment
   */
  comments?: string;
  /**
   * @remarks
   * The maximum duration of a connected session. When the session duration reaches this value, the session is automatically disconnected. Unit: milliseconds. Valid values: 900000 (15 minutes) to 345600000 (4 days).
   * 
   * @example
   * 900000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The type of the data disk.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD. Default value: PL0.
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. The value must be a multiple of 20 and in the range of 0 to 16,380.
   * 
   * <props="china">
   * 
   * - A value of 0 indicates that no data disk is attached.
   * 
   * - If the selected bundle uses an Enhanced SSD (ESSD) at PL0, the minimum data disk size is 40 GiB.
   * 
   * - If the selected bundle uses an SSD, the minimum data disk size is 20 GiB.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - A value of 0 indicates that no data disk is attached.
   * 
   * - If the selected bundle uses an SSD, the minimum data disk size is 20 GiB.
   * 
   * 
   * 
   * Default value: 0
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The default number of desktops to create in the desktop group. The default value is 1.
   * 
   * @example
   * 1
   */
  defaultInitDesktopCount?: number;
  /**
   * @remarks
   * The system language.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  deleteDuration?: number;
  /**
   * @remarks
   * The name of the desktop group. The name must be 1 to 30 characters long, start with a letter or a Chinese character, and must not begin with `http://` or `https://`. The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * SharedComputers01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The desktop type. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) operation to query supported desktop types.
   * 
   * @example
   * eds.enterprise_office.16c64g
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * dri-uf62w3qzt4aigvlcb****
   */
  directoryId?: string;
  /**
   * @remarks
   * An array of user IDs to authorize for the desktop group.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * Specifies the pool type. To create a static pool, set this parameter to `Exclusive`. This is required if `SessionType` is `MultipleSession`.
   * 
   * @example
   * Exclusive
   */
  exclusiveType?: string;
  /**
   * @remarks
   * The ID of the Apsara File Storage NAS file system used for user data roaming.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * kegd-nas-****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of individual desktops to create. This parameter is required only if `MultiResource` is set to `false`. Valid values: 1 to 5. Default value: 1.
   * 
   * @example
   * 1
   */
  groupAmount?: number;
  /**
   * @remarks
   * The version of the desktop group.
   * 
   * @example
   * 2
   */
  groupVersion?: number;
  /**
   * @remarks
   * The custom hostname for the desktops. This parameter is applicable only to Windows desktops in an AD office network.
   * 
   * The hostname must meet the following naming conventions:
   * 
   * - Must be 2 to 15 characters in length.
   * 
   * - Can contain letters, digits, and hyphens (-). It cannot start or end with a hyphen, contain consecutive hyphens, or consist only of digits.
   * 
   * To generate sequential hostnames when creating multiple desktops, use the format `name_prefix[begin_number,bits]name_suffix`. For example, if you set the Hostname parameter to `ecd-[1,4]-test`, the first desktop is named ecd-0001-test, the second is named ecd-0002-test, and so on.
   * 
   * - `name_prefix`: The prefix of the hostname.
   * 
   * - `[begin_number,bits]`: The sequential number in the hostname. `begin_number` is the starting number, which can be an integer from 0 to 999999. The default value is 0. `bits` is the number of digits, which can be an integer from 1 to 6. The default value is 6.
   * 
   * - `name_suffix`: The suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The maximum duration that a session can be idle before it is automatically disconnected. A session is considered idle if there is no keyboard or mouse input. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * Thirty seconds before disconnection, the user is prompted to save their work to prevent data loss.
   * 
   * > This parameter applies only to desktops created from image version 1.0.2 or later.
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
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The duration for which a session is kept active after a user disconnects. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is retained indefinitely.
   * 
   * If a user reconnects within this period, they can resume their session. If they fail to reconnect, the session is terminated, and any unsaved data is lost.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session desktop group.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of desktops in the pay-as-you-go desktop group. Valid values: 0 to 500.
   * 
   * @example
   * 50
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The minimum number of desktops in the subscription desktop group. This parameter is required only if `ChargeType` is `PrePaid`. Valid values: 0 to `MaxDesktopsCount`. Default value: 1.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * Specifies whether to create a desktop group.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The ID of the office network for the desktops.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the desktop.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription duration for the desktops. This parameter is required only if `ChargeType` is set to `PrePaid`. The `PeriodUnit` parameter specifies the time unit for this duration.
   * 
   * - If `PeriodUnit` is `Month`, the valid values are:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 6
   * 
   * - If `PeriodUnit` is `Year`, the valid values are:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 4
   * 
   *   - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit of the subscription period.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy to apply to the desktops.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-9c2d6t2dwflqr****
   */
  policyGroupId?: string;
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
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_*****
   */
  promotionId?: string;
  /**
   * @remarks
   * The session usage threshold that triggers auto scaling for multi-session desktop groups. Session usage is calculated by using the following formula:
   * 
   * `Session usage = (Number of connected sessions / (Total number of desktops × Maximum number of sessions per desktop)) × 100%`
   * 
   * When session usage reaches this threshold, new desktops are created. When session usage falls below this threshold, the group scales in by deleting surplus desktops.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The ID of the region. To find the regions supported by Elastic Desktop Service (EDS), call the [DescribeRegions](~~DescribeRegions~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The desktop reset type.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The ID of the scaling policy.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * ss-f9dkjz6vw3aaw****
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SingleSession
   */
  sessionType?: string;
  simpleUserGroupId?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-28mp6my0l6zow****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The amount of time a desktop can be idle before it is automatically stopped. Connecting to a stopped desktop automatically starts it. Unit: milliseconds.
   * 
   * @example
   * 300000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The type of the system disk.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD. Default value: PL0.
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * > The system disk size must be at least the size of the image.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: CreateDesktopGroupRequestTag[];
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
  userGroupName?: string;
  userOuPath?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the key from Key Management Service (KMS) used for disk encryption. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain the key ID.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC) that contains the office network for the desktops.
   * 
   * > This parameter is not yet available.
   * 
   * @example
   * vpc-uf6w8u60n8xbkg5el****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allClassifyUsers: 'AllClassifyUsers',
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bindAmount: 'BindAmount',
      bundleId: 'BundleId',
      buyDesktopsCount: 'BuyDesktopsCount',
      chargeType: 'ChargeType',
      classify: 'Classify',
      clientToken: 'ClientToken',
      comments: 'Comments',
      connectDuration: 'ConnectDuration',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskPerLevel: 'DataDiskPerLevel',
      dataDiskSize: 'DataDiskSize',
      defaultInitDesktopCount: 'DefaultInitDesktopCount',
      defaultLanguage: 'DefaultLanguage',
      deleteDuration: 'DeleteDuration',
      desktopGroupName: 'DesktopGroupName',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      endUserIds: 'EndUserIds',
      exclusiveType: 'ExclusiveType',
      fileSystemId: 'FileSystemId',
      groupAmount: 'GroupAmount',
      groupVersion: 'GroupVersion',
      hostname: 'Hostname',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      multiResource: 'MultiResource',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      profileFollowSwitch: 'ProfileFollowSwitch',
      promotionId: 'PromotionId',
      ratioThreshold: 'RatioThreshold',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
      sessionType: 'SessionType',
      simpleUserGroupId: 'SimpleUserGroupId',
      snapshotPolicyId: 'SnapshotPolicyId',
      stopDuration: 'StopDuration',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerLevel: 'SystemDiskPerLevel',
      systemDiskSize: 'SystemDiskSize',
      tag: 'Tag',
      timerGroupId: 'TimerGroupId',
      userGroupName: 'UserGroupName',
      userOuPath: 'UserOuPath',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allClassifyUsers: 'boolean',
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bindAmount: 'number',
      bundleId: 'string',
      buyDesktopsCount: 'number',
      chargeType: 'string',
      classify: 'string',
      clientToken: 'string',
      comments: 'string',
      connectDuration: 'number',
      dataDiskCategory: 'string',
      dataDiskPerLevel: 'string',
      dataDiskSize: 'number',
      defaultInitDesktopCount: 'number',
      defaultLanguage: 'string',
      deleteDuration: 'number',
      desktopGroupName: 'string',
      desktopType: 'string',
      directoryId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      exclusiveType: 'string',
      fileSystemId: 'string',
      groupAmount: 'number',
      groupVersion: 'number',
      hostname: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      multiResource: 'boolean',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      profileFollowSwitch: 'boolean',
      promotionId: 'string',
      ratioThreshold: 'number',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resetType: 'number',
      scaleStrategyId: 'string',
      sessionType: 'string',
      simpleUserGroupId: 'string',
      snapshotPolicyId: 'string',
      stopDuration: 'number',
      systemDiskCategory: 'string',
      systemDiskPerLevel: 'string',
      systemDiskSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateDesktopGroupRequestTag },
      timerGroupId: 'string',
      userGroupName: 'string',
      userOuPath: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

