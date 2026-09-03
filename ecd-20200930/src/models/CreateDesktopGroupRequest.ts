// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify this parameter, the value cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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
   * The users of all shared cloud computer categories.
   * 
   * @example
   * true
   */
  allClassifyUsers?: boolean;
  /**
   * @remarks
   * Specifies whether to allow automatic creation of cloud computers within subscription shared cloud computers. This parameter takes effect and is required only when ChargeType is set to PrePaid.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The number of reserved cloud computers allowed in pay-as-you-go shared cloud computers. This parameter takes effect and is required only when ChargeType is set to PostPaid. Valid values:
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the subscription order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription shared cloud computer.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The number of concurrent sessions allowed per cloud computer in multi-session shared cloud computers.
   * 
   * @example
   * 2
   */
  bindAmount?: number;
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * - For subscription shared cloud computers: the initial number of cloud computers to create. Valid values: 0 to 200.
   * 
   * @example
   * 3
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The type of the shared cloud computer.
   * 
   * @example
   * teacher
   */
  classify?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The data cloud disk type.
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
   * The size of the attached data cloud disk. Unit: GB. Valid values: 0 to 16380. The value must be a multiple of 20.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The default number of cloud computers to create when you create multiple shared cloud computers. Default value: 1.
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
   * The retention period before cloud computers in the cloud computer pool are automatically deleted.
   * 
   * @example
   * 30
   */
  deleteDuration?: number;
  /**
   * @remarks
   * The name of the shared cloud computer. The name can be up to 30 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * SharedComputers01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer specification. You can call [DescribeDesktopTypes](~~DescribeDesktopTypes~~) to query the specification IDs supported by cloud computers.
   * 
   * @example
   * eds.enterprise_office.16c64g
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * dri-uf62w3qzt4aigvlcb****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of user IDs for the shared cloud computer.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * Creates a static pool. This parameter is required when the `SessionType` parameter is set to `MultipleSession`. Set the value to `Exclusive`.
   * 
   * @example
   * Exclusive
   */
  exclusiveType?: string;
  /**
   * @remarks
   * The ID of the NAS file system used for user data roaming.
   * 
   * @example
   * kegd-nas-****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of single shared cloud computers to create. This parameter is required only when the `MultiResource` parameter is set to `false`. Valid values: 1 to 5. Default value: 1.
   * 
   * @example
   * 1
   */
  groupAmount?: number;
  /**
   * @remarks
   * The version of the shared cloud computer.
   * 
   * @example
   * 2
   */
  groupVersion?: number;
  /**
   * @remarks
   * The custom hostname of the cloud computer. Only Settings for cloud computers that run the Windows operating system in AD office networks are supported.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The maximum idle duration after a user session is established. If no keyboard or mouse activity occurs within this duration, the session is disconnected. Unit: milliseconds. Valid values: 360000 (6 minutes) to 3600000 (60 minutes).
   * 
   * 30 seconds before this duration is reached, the end user in the session receives a prompt to save document data. The end user must save document data promptly to avoid data loss.
   * 
   * > Applicable only to cloud computers with an image version of 1.0.2 or later.
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
   * The retention period after a session is disconnected. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for multi-session shared cloud computers.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go shared cloud computers. Valid values: 0 to 500.
   * 
   * @example
   * 50
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The maximum number of cloud computers that can be used for automatic creation for subscription shared cloud computers. This parameter takes effect and is required only when ChargeType is set to PrePaid. Default value: 1. Valid values: 0 to the value of MaxDesktopsCount.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * Specifies whether the cloud computers are multi-resource shared cloud computers.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud computer belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
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
   * The subscription duration of the shared cloud computer. This parameter takes effect and is required only when ChargeType is set to PrePaid. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billable methods duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud computer.
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
   * @example
   * false
   */
  profileFollowSwitch?: boolean;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_*****
   */
  promotionId?: string;
  /**
   * @remarks
   * The session occupancy threshold used as the automatic scaling trigger condition for multi-session shared cloud computers. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of bound sessions / (Total number of cloud computer resources × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy is below this threshold, excess cloud computers are deleted.
   * 
   * > This parameter is not yet available for use.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource ownership in reseller pattern. You do not need to specify this parameter in non-reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
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
   * The scaling policy ID.
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
   * The idle shutdown duration. When the cloud computer has been idle for this duration, it is automatically shut down. If a user connects after shutdown, the cloud computer automatically starts. Unit: milliseconds.
   * 
   * @example
   * 300000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The system cloud disk type.
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
   * The system cloud disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of tags. A maximum of 20 tags can be specified.
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
   * R&D Group
   */
  userGroupName?: string;
  /**
   * @remarks
   * The organizational unit (OU) path of the user.
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
   * The ID of the KMS key used for disk encryption. You can call [ListKeys](https://help.aliyun.com/document_detail/28951.html) to obtain the key ID.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The VPC ID of the office network to which the shared cloud computer belongs.
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

