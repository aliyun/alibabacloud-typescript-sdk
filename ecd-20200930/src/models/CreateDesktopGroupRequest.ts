// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. It cannot be an empty string. It can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be an empty string. It can be up to 128 characters in length, and cannot start with acs:, or contain http:// or https://.
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
   * The users of all shared cloud desktop categories.
   * 
   * > This parameter is not available.
   * 
   * @example
   * true
   */
  allClassifyUsers?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic creation of cloud desktops in subscription shared cloud desktops. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of reserved cloud desktops allowed in pay-as-you-go shared cloud desktops. This parameter takes effect and is required only when the ChargeType parameter is set to PostPaid. Valid values: 
   * - 0: No cloud desktops are reserved.
   * - N: N cloud desktops are reserved (1 ≤ N ≤ 100).
   * 
   * > If no available cloud desktops are reserved, when an end user initiates a connection request, the system must create and start a cloud desktop before assigning it to the user, which takes a relatively long time. Reserve a certain number of cloud desktops as needed to ensure the user experience of end users.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for subscription orders.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription shared cloud desktop.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud desktop in multi-session shared cloud desktops.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The ID of the cloud desktop template.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * - For subscription shared cloud desktops: the initial number of cloud desktops created. Valid values: 0 to 200.
   * - For pay-as-you-go shared cloud desktops: the minimum initial number of cloud desktops created. Default value: 1. Valid values: 0 to the value of MaxDesktopsCount.
   * 
   * @example
   * 3
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The billing method of the cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The category of the data cloud disk.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Default value: PL0.
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The capacity of the mounted data cloud disk. Unit: GB. Valid values: 0 to 16380. The value must be a multiple of 20.
   * 
   * <props="china">
   * - A value of 0 indicates that no data cloud disk is mounted.
   * 
   * - If the selected plan uses an ESSD cloud disk (performance level (PL) PL0), the minimum capacity of the mounted data cloud disk is 40 GB.
   * 
   * - If the selected plan uses a standard SSD, the minimum capacity of the mounted data cloud disk is 20 GB.
   * 
   * 
   * 
   * <props="intl">
   * - A value of 0 indicates that no data cloud disk is mounted.
   * 
   * - If the selected plan uses a standard SSD, the minimum capacity of the mounted data cloud disk is 20 GB.
   * 
   * 
   * 
   * Default value: 0.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The default number of cloud desktops created when you create multiple shared cloud desktops. Default value: 1.
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
   * The name of the shared cloud desktop. The name can be up to 30 characters in length. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. It can contain Chinese characters, English letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * SharedComputers01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud desktop type. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) operation to query the IDs of supported cloud desktop types.
   * 
   * @example
   * eds.enterprise_office.16c64g
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * > This parameter is not available.
   * 
   * @example
   * dri-uf62w3qzt4aigvlcb****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of user IDs for the shared cloud desktop.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The static pool type. If you set the `SessionType` parameter to `MultipleSession`, you must specify this parameter and set the value to `Exclusive`.
   * 
   * @example
   * Exclusive
   */
  exclusiveType?: string;
  /**
   * @remarks
   * The ID of the NAS file system used for the user data roaming feature.
   * 
   * > This parameter is not available.
   * 
   * @example
   * kegd-nas-****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of single-instance shared cloud desktops to create. You need to specify this parameter only when the `MultiResource` parameter is set to `false`. Valid values: 1 to 5. Default value: 1.
   * 
   * @example
   * 1
   */
  groupAmount?: number;
  /**
   * @remarks
   * The version of the shared cloud desktop.
   * 
   * @example
   * 2
   */
  groupVersion?: number;
  /**
   * @remarks
   * Custom Settings for the hostname of the cloud desktop. This is supported only for cloud desktops that run the Windows operating system and reside in an Active Directory (AD) office network.
   * 
   * Naming rules for hostnames:
   * 
   * - The hostname must be 2 to 15 characters in length.
   * - The hostname can contain letters, digits, and hyphens (-). It cannot start or end with a hyphen, contain consecutive hyphens, or contain only digits.
   * 
   * When you create multiple cloud desktops, you can use the `name_prefix[begin_number,bits]name_suffix` format to name them in a unified manner. For example, if you set Hostname to ecd-[1,4]-test, the hostname of the first cloud desktop is ecd-0001-test, the hostname of the second cloud desktop is ecd-0002-test, and so on.
   * 
   * - ` name_prefix`: the prefix of the hostname.
   * - ` [begin_number,bits]`: the sequential number in the hostname. `begin_number` is the starting number. Valid values: 0 to 999999. Default value: 0. `bits` is the number of digits. Valid values: 1 to 6. Default value: 6.
   * -  `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The maximum idle time before a user session is disconnected. If no keyboard or mouse operations are performed within this maximum duration after a user session is established, the session is disconnected. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * 30 seconds before this duration is reached, the end user in the session receives a prompt message to save document data. The end user must save the document data promptly to avoid data loss.
   * 
   * > This parameter applies only to cloud desktops whose image version is 1.0.2 or later.
   * 
   * @example
   * 360000
   */
  idleDisconnectDuration?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * If a session is actively disconnected by the user or unexpectedly disconnected due to other factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within the retention period, the session is logged off and unsaved data is destroyed. If the user successfully reconnects within the retention period, the user can enter the original session and access the data before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud desktops.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go shared cloud desktops. Valid values: 0 to 500.
   * 
   * @example
   * 50
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The maximum number of cloud desktops for automatic creation in subscription shared cloud desktops. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid. Default value: 1. Valid values: 0 to the value of MaxDesktopsCount.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * Specifies whether the cloud desktop is a multi-instance shared cloud desktop.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud desktop belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the shared cloud desktop.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription period of the shared cloud desktop. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid. The unit is specified by the PeriodUnit parameter.
   * - If PeriodUnit is set to Month, valid values:
   *     - 1
   *     - 2
   *     - 3
   *     - 6
   * - If PeriodUnit is set to Year, valid values:
   *     - 1
   *     - 2
   *     - 3
   *     - 4
   *     - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The duration unit of the subscription billing method.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud desktop.
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
   * > This parameter is not available.
   * 
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * youhuiquan_promotion_option_id_*****
   */
  promotionId?: string;
  /**
   * @remarks
   * The session usage threshold, which is used as the trigger for automatic scaling of multi-session shared cloud desktops. The formula for session usage is:
   * 
   * ```Session usage = Number of attached sessions / (Total number of cloud desktop resources × Maximum number of sessions supported per cloud desktop) × 100%```
   * 
   * When the session usage reaches this threshold, new cloud desktops are created. When the session usage does not reach this threshold, excess cloud desktops are deleted.
   * 
   * > This parameter is not available.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID for resource ownership in the reseller pattern. You do not need to specify this parameter for the non-reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
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
   * The ID of the scaling policy.
   * 
   * > This parameter is not available.
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
  /**
   * @remarks
   * The ID of the convenience user group.
   * 
   * @example
   * ug-3f6c8a2b****
   */
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
   * The idle shutdown time. When the idle time of the cloud desktop reaches this value, the cloud desktop is automatically shut down. If a user connects to the cloud desktop after it is shut down, the cloud desktop is automatically started. Unit: milliseconds.
   * 
   * @example
   * 300000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The category of the system cloud disk.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Default value: PL0.
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * > The size of the system cloud disk cannot be smaller than the image file.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags. The list can contain up to 20 tags.
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
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * R&D group
   */
  userGroupName?: string;
  /**
   * @remarks
   * The path of the user organizational unit.
   * 
   * @example
   * example.com
   */
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
   * The ID of the KMS key used when disk encryption is enabled. You can obtain it by calling the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The ID of the VPC where the office network of the shared cloud desktop resides.
   * 
   * > This parameter is not available.
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

