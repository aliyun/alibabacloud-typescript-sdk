// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You cannot specify an empty string as a tag key. A tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify an empty string as a tag key. A tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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
   * The types of the users.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * Alice
   */
  allClassifyUsers?: boolean;
  /**
   * @remarks
   * Specifies whether to enable batch-based automatic creation of subscription cloud computers for the shared group. This parameter is required if you set `ChargeType` to `PrePaid`.
   * 
   * Valid values:
   * 
   * *   0: enables batch-based automatic creation of subscription cloud computers.
   * *   1: disables batch-based automatic creation of subscription cloud computers.
   * 
   * @example
   * 1
   */
  allowAutoSetup?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go cloud computers that can be reserved in the shared group. This parameter is required if you set `ChargeType` to `PostPaid`. Valid values:
   * 
   * *   0: does not reserve any cloud computers.
   * *   N: reserves N cloud computers (1≤ N ≤ 100).
   * 
   * >  Setting this parameter to 0 means no cloud computers will be reserved in the shared group. In this case, the system must create, start, and assign cloud computers to end users upon request, which can be time-consuming. To improve user experience, we recommend that you reserve a specific number of cloud computers.
   * 
   * @example
   * 1
   */
  allowBufferCount?: number;
  /**
   * @remarks
   * Specifies whether to automatically complete the payment for subscription orders.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the shared subscription group.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The number of concurrent sessions of the multi-session shared group.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bindAmount?: number;
  /**
   * @remarks
   * The ID of the cloud computer template.
   * 
   * @example
   * b-je9hani001wfn****
   */
  bundleId?: string;
  /**
   * @remarks
   * *   For shared subscription groups, this parameter defines the initial number of cloud computers to be created. Valid values: 0 to 200.
   * *   For shared pay-as-you-go groups, this parameter defines the minimum initial number of cloud computers to be created. Valid values: 0 to `MaxDesktopsCount`. Default value: 1.
   * 
   * @example
   * 3
   */
  buyDesktopsCount?: number;
  /**
   * @remarks
   * The billing method of the shared group.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The type of the cloud computers in the shared group.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   teacher: cloud computers designed for teachers.
   * *   student: cloud computers designed for students.
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
   * The remarks of the shared group.
   * 
   * @example
   * test
   */
  comments?: string;
  /**
   * @remarks
   * The maximum duration for which each session remains connected. The session is automatically disconnected once the specified maximum time limit is reached. Unit: milliseconds. Valid values: 900000 to 345600000. That is, the session can be connected for 15 to 5,760 minutes (4 days).
   * 
   * @example
   * 300000
   */
  connectDuration?: number;
  /**
   * @remarks
   * The category of the data disk.
   * 
   * Valid values:
   * 
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the ESSD.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The PL of the data disk of the ESSD category. Default value: PL0.
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * 
   * @example
   * PL0
   */
  dataDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
   * 
   * *   A value of 0 means no data disk is attached.
   * *   If the selected plan includes a standard SSD, the data disk size must be at least 20 GB.
   * 
   * Default value: 0.
   * 
   * @example
   * 80
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The default number of cloud computers that you want to create at the same time in the shared group. Default value: 1.
   * 
   * @example
   * 1
   */
  defaultInitDesktopCount?: number;
  /**
   * @remarks
   * The language of the OS.
   * 
   * Valid values:
   * 
   * *   en-US: English.
   * *   zh-HK: Traditional Chinese.
   * *   zh-CN: Simplified Chinese
   * *   ja-JP: Japanese.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  deleteDuration?: number;
  /**
   * @remarks
   * The name of the shared group. The name can be up to 30 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * desktopGroupName1
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The specifications of the cloud computer. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) operation to query all the supported specifications.
   * 
   * @example
   * eds.enterprise_office.16c64g
   */
  desktopType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  directoryId?: string;
  /**
   * @remarks
   * The IDs of the end users.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * Specifies whether the shared group is exclusive. You must set this parameter to `Exclusive` when `SessionType` is set to `MultipleSession`.
   * 
   * @example
   * Exclusive
   */
  exclusiveType?: string;
  /**
   * @remarks
   * The ID of the File Storage NAS (NAS) file system for the user data roaming feature.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 04f314****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of shared groups for the single-cloud computer type. You must specify this parameter if you set `MultiResource` to `false`. Valid values: 1 to 5. Default value: 1.
   * 
   * @example
   * 1
   */
  groupAmount?: number;
  /**
   * @remarks
   * The version of the shared group.
   * 
   * @example
   * 2
   */
  groupVersion?: number;
  /**
   * @remarks
   * The hostname series of the cloud computer. This parameter is supported exclusively when the office network operates on Active Directory (AD) and the cloud computer runs on a Windows operating system.
   * 
   * Naming conventions:
   * 
   * *   A hostname must be 2 to 15 characters in length
   * *   and can contain only letters, digits, and hyphens (-). It cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
   * 
   * If you want to create multiple cloud computers, specify their hostnames in the `name_prefix[begin_number,bits]name_suffix` format. For example, if you set Hostname to ecd-[1,4]-test, the hostnames of the cloud computers will be assigned sequentially as ecd-0001-test, ecd-0002-test, and so on.
   * 
   * *   `name_prefix`: the prefix of the hostname.
   * *   `[begin_number,bits]`: the sequential number in the hostname. The `begin_number` value is the starting number. Valid values of begin_number: 0 to 999999. Default value: 0. The `bits` value is the number of digits. Valid values: 1 to 6. Default value: 6.
   * *   `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostname?: string;
  /**
   * @remarks
   * The duration after which a session is terminated if no keyboard or mouse activity is detected. When an end user connects to a cloud computer, a session is initiated. If no input from the keyboard or mouse is detected within this specified timeframe, the session is automatically closed. Unit: milliseconds. Valid values: 360000 to 3600000 (6 minutes to 60 minutes)
   * 
   * The system prompts end users to save their data 30 seconds before a session is disconnected. To avoid data loss, end users must save their session data upon receiving the prompt.
   * 
   * >  This parameter is suitable only for cloud computers whose image version is v1.0.2 or later.
   * 
   * @example
   * 300000
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
   * The duration for which each session remains active after disconnection. Valid values: 180000 (3 minutes) to 345600000 (4 days). Unit: milliseconds. If you set this parameter to 0, the session is permanently retained after disconnection.
   * 
   * When a session is disconnected, take note of the following items: 1. If the end user does not resume the session within the specified duration, the session will close, and all unsaved data will be cleared. 2. If the end user resumes the session within the specified duration, the session data will remain accessible for continued use.
   * 
   * @example
   * 6000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy of the multi-session shared group.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   0: depth-first
   * *   1: breadth first
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go cloud computers that can be automatically provisioned at the same time in the shared group. Valid values: 0 to 500.
   * 
   * @example
   * 50
   */
  maxDesktopsCount?: number;
  /**
   * @remarks
   * The minimum number of subscription cloud computers that can be automatically provisioned at the same time in the shared group. This parameter is required if you set `ChargeType` to `PrePaid`. Default value: 1. Valid values: 0 to `MaxDesktopsCount`.
   * 
   * @example
   * 1
   */
  minDesktopsCount?: number;
  /**
   * @remarks
   * Specifies whether the shared group is a multi-cloud computer type.
   * 
   * Valid values:
   * 
   * *   true: a multi-cloud computer type.
   * *   false: a single-cloud computer type.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The session type of the shared group.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   0: single-session.
   * *   1: multi-session.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription duration of the shared group. This parameter is required if you set `ChargeType` to `PrePaid`. You must specify the subscription duration unit by using `PeriodUnit`.
   * 
   * *   If you set `PeriodUnit` to `Month`, valid values of this parameter:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   6
   * 
   * *   If you set `PeriodUnit` to `Year`, valid values of this parameter:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   4
   *     *   5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy.
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
   * >  This parameter is not publicly available.
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
   * The threshold for the ratio of connected sessions. This parameter defines the condition that activates automatic scaling of cloud computers in a multi-session shared group. The ratio of connected sessions is calculated by using the following formula:
   * 
   * `Ratio of connected sessions = Number of connected sessions/(Total number of cloud computers × Maximum number of sessions allowed for each cloud computer) × 100%`.
   * 
   * If the connected session ratio exceeds the specified threshold, new cloud computers are provisioned. If the ratio falls below the threshold, idle cloud computers are deleted.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 0.5
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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
   * The reset option of the shared group.
   * 
   * Valid values:
   * 
   * *   0: Reset is not required.
   * *   1: Only the system disk is reset.
   * *   2: Only the data disk is reset.
   * *   3: Both the system disk and the data disk are reset.
   * 
   * @example
   * 0
   */
  resetType?: number;
  /**
   * @remarks
   * The ID of the scaling policy.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  scaleStrategyId?: string;
  /**
   * @remarks
   * The type of the session.
   * 
   * Valid values:
   * 
   * *   SingleSession
   * *   MultipleSession
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
   * The maximum period of inactivity allowed before a cloud computer is automatically stopped. If the idle duration reaches the specified limit, the system stops the cloud computer. When an end user reconnects to the stopped cloud computer, it automatically restarts. Unit: milliseconds.
   * 
   * @example
   * 300000
   */
  stopDuration?: number;
  /**
   * @remarks
   * The category of the system disk.
   * 
   * Valid values:
   * 
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the Enterprise SSD (ESSD).
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk of the ESSD category. Default value: PL0.
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * 
   * @example
   * PL0
   */
  systemDiskPerLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * >  The system disk must be at least as large as the image.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: CreateDesktopGroupRequestTag[];
  /**
   * @remarks
   * The ID of the timer group.
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
   * The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain a list of KMS keys.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  volumeEncryptionKey?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * hide
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

